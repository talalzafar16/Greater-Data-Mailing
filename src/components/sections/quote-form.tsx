"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
// `CircleAlert`/`LoaderCircle` are the current names; `AlertCircle`/`Loader2`
// still resolve but only as deprecated aliases in lucide-react v1.
import { Check, CircleAlert, LoaderCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { EASE_ENGINEERED } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

/* -------------------------------------------------------------------------- */
/* Shape                                                                      */
/* -------------------------------------------------------------------------- */

interface FormValues {
  projectType: string;
  quantity: string;
  format: string;
  timeline: string;
  message: string;
  name: string;
  company: string;
  email: string;
  phone: string;
}

type FieldName = keyof FormValues;
type Errors = Partial<Record<FieldName, string>>;

const EMPTY: FormValues = {
  projectType: "",
  quantity: "",
  format: "",
  timeline: "",
  message: "",
  name: "",
  company: "",
  email: "",
  phone: "",
};

const PROJECT_TYPES = [
  "Printing",
  "Mailing",
  "Both Printing & Mailing",
  "Data Services Only",
  "Not sure yet",
];

const QUANTITIES = [
  "Under 1,000",
  "1,000–10,000",
  "10,000–50,000",
  "50,000–250,000",
  "250,000+",
];

const TIMELINES = [
  "ASAP",
  "Within 2 weeks",
  "Within a month",
  "Just planning ahead",
];

/** Four question steps; the fifth screen is the review. */
const STEP_COUNT = 4;
const REVIEW_STEP = STEP_COUNT;

/**
 * Deliberately permissive. The goal is to catch typos like a missing `@`, not
 * to adjudicate RFC 5322 — a real address rejected by a clever regex is a lost
 * lead, and the address gets verified when we reply anyway.
 */
function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function validateStep(step: number, values: FormValues): Errors {
  const errors: Errors = {};

  if (step === 0 && !values.projectType) {
    errors.projectType = "Choose the type of project so we can route it.";
  }

  if (step === 1 && !values.quantity) {
    errors.quantity = "Select an estimated quantity.";
  }

  if (step === 2 && !values.timeline) {
    errors.timeline = "Let us know roughly when you need this.";
  }

  if (step === 3) {
    if (!values.name.trim()) errors.name = "Please enter your name.";
    if (!values.email.trim()) {
      errors.email = "Please enter your email address.";
    } else if (!isEmail(values.email)) {
      errors.email = "That email address doesn't look right.";
    }
  }

  return errors;
}

/* -------------------------------------------------------------------------- */
/* Small building blocks                                                      */
/* -------------------------------------------------------------------------- */

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-2 text-sm text-destructive">
      {message}
    </p>
  );
}

function StepProgress({ current }: { current: number }) {
  return (
    <div className="mb-10">
      <ol className="flex items-center">
        {Array.from({ length: STEP_COUNT }, (_, index) => {
          const complete = index < current;
          const active = index === current;

          return (
            <li
              key={index}
              className={cn("flex items-center", index > 0 && "flex-1")}
            >
              {/* Connector, drawn before every dot except the first. */}
              {index > 0 ? (
                <span
                  aria-hidden="true"
                  className={cn(
                    "mx-2 h-px flex-1 transition-colors duration-300",
                    complete || active ? "bg-growth" : "bg-border"
                  )}
                />
              ) : null}

              <span
                className={cn(
                  "flex size-8 shrink-0 items-center justify-center rounded-full border text-sm font-medium transition-colors duration-300",
                  complete && "border-growth bg-growth text-white",
                  active && !complete && "border-growth text-growth",
                  !complete && !active && "border-border text-slate"
                )}
              >
                {complete ? (
                  <Check className="size-4" strokeWidth={3} aria-hidden="true" />
                ) : (
                  index + 1
                )}
              </span>
            </li>
          );
        })}
      </ol>

      <p aria-live="polite" className="mt-4 text-sm text-slate">
        {current >= REVIEW_STEP
          ? "Review your answers"
          : `Step ${current + 1} of ${STEP_COUNT}`}
      </p>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 border-b border-border py-3 last:border-b-0 sm:flex-row sm:gap-4">
      <dt className="text-sm text-slate sm:w-40 sm:shrink-0">{label}</dt>
      <dd className="text-base text-ink">{value || "—"}</dd>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Form                                                                       */
/* -------------------------------------------------------------------------- */

type Status = "idle" | "submitting" | "success" | "error";

function QuoteForm() {
  const reduceMotion = useReducedMotion();

  const [step, setStep] = React.useState(0);
  const [direction, setDirection] = React.useState(1);
  const [values, setValues] = React.useState<FormValues>(EMPTY);
  const [errors, setErrors] = React.useState<Errors>({});
  const [status, setStatus] = React.useState<Status>("idle");
  const [errorMessage, setErrorMessage] = React.useState("");

  const setField = (field: FieldName, value: string) => {
    setValues((previous) => ({ ...previous, [field]: value }));
    // Clear the error as soon as the user acts on it, rather than making them
    // press Continue again to find out whether it is fixed.
    setErrors((previous) =>
      previous[field] ? { ...previous, [field]: undefined } : previous
    );
  };

  const goNext = () => {
    const stepErrors = validateStep(step, values);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    setDirection(1);
    setStep((current) => Math.min(current + 1, REVIEW_STEP));
  };

  const goBack = () => {
    setErrors({});
    setDirection(-1);
    setStep((current) => Math.max(current - 1, 0));
  };

  const submit = async () => {
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (!accessKey) {
      setStatus("error");
      setErrorMessage(
        "The form isn't configured yet. Please call us instead — we'd rather hear from you than have you wait."
      );
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Quote request — ${values.name || "New enquiry"}`,
          from_name: site.name,
          // Web3Forms treats a filled `botcheck` as spam and silently drops it.
          botcheck: "",
          "Project type": values.projectType,
          "Estimated quantity": values.quantity,
          "Format or size": values.format,
          Timeline: values.timeline,
          Message: values.message,
          Name: values.name,
          Company: values.company,
          Email: values.email,
          Phone: values.phone,
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.success) {
        throw new Error(result?.message ?? "Submission failed.");
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong sending your request. Please try again, or call us and we'll take the details over the phone."
      );
    }
  };

  /* ---------------------------------------------------------------------- */
  /* Success — replaces the entire card                                      */
  /* ---------------------------------------------------------------------- */

  if (status === "success") {
    return (
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: reduceMotion ? 0 : 0.4,
          ease: EASE_ENGINEERED,
        }}
        className="on-light flex flex-col items-center rounded-xl border border-border bg-white p-8 text-center sm:p-12"
      >
        <span className="flex size-16 items-center justify-center rounded-full bg-growth text-white">
          <Check className="size-8" strokeWidth={3} aria-hidden="true" />
        </span>

        <h2 className="mt-8 text-2xl">
          Thanks — we&rsquo;ll be in touch within one business day.
        </h2>

        <p className="mt-4 max-w-md">
          If it&rsquo;s urgent, call us directly at{" "}
          <a
            href={site.phone.href}
            className="font-medium text-growth underline underline-offset-4"
          >
            {site.phone.label}
          </a>
          .
        </p>
      </motion.div>
    );
  }

  /* ---------------------------------------------------------------------- */
  /* Steps                                                                   */
  /* ---------------------------------------------------------------------- */

  const stepContent = [
    // 1 — Project type
    <fieldset
      key="project-type"
      className="border-0 p-0"
      // On the fieldset, so the error is announced with the whole group
      // rather than attached to one arbitrary radio.
      aria-describedby={errors.projectType ? "projectType-error" : undefined}
    >
      <legend className="font-heading text-lg font-bold text-ink">
        What kind of project is this?
      </legend>

      <div className="mt-6 grid gap-3">
        {PROJECT_TYPES.map((option) => {
          const selected = values.projectType === option;

          return (
            <label
              key={option}
              className={cn(
                "flex cursor-pointer items-center gap-3 rounded-lg border p-4 text-base transition-colors",
                // Explicit `has-[...]` form — the visually hidden radio keeps
                // real focus, so the card shows the ring on its behalf.
                "has-[:focus-visible]:ring-3 has-[:focus-visible]:ring-ring/50",
                selected
                  ? "border-growth bg-growth/5 text-ink"
                  : "border-border hover:border-growth/40"
              )}
            >
              <input
                type="radio"
                name="projectType"
                value={option}
                checked={selected}
                onChange={() => setField("projectType", option)}
                aria-invalid={errors.projectType ? true : undefined}
                className="sr-only"
              />
              {/* Custom control — the real radio stays in the a11y tree. */}
              <span
                aria-hidden="true"
                className={cn(
                  "flex size-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                  selected ? "border-growth" : "border-border"
                )}
              >
                {selected ? (
                  <span className="size-2.5 rounded-full bg-growth" />
                ) : null}
              </span>
              {option}
            </label>
          );
        })}
      </div>

      <FieldError id="projectType-error" message={errors.projectType} />
    </fieldset>,

    // 2 — Quantity and format
    <div key="quantity" className="flex flex-col gap-6">
      <p className="font-heading text-lg font-bold text-ink">
        How big is the job?
      </p>

      <div>
        <Label htmlFor="quantity">Estimated quantity</Label>
        {/* `undefined` rather than "" — Radix treats the empty string as a
            reserved value and would not show the placeholder. */}
        <Select
          value={values.quantity || undefined}
          onValueChange={(value) => setField("quantity", value)}
        >
          <SelectTrigger
            id="quantity"
            size="default"
            className="mt-2 h-11 w-full text-base"
            aria-invalid={errors.quantity ? true : undefined}
            aria-describedby={errors.quantity ? "quantity-error" : undefined}
          >
            <SelectValue placeholder="Select a range" />
          </SelectTrigger>
          <SelectContent>
            {QUANTITIES.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <FieldError id="quantity-error" message={errors.quantity} />
      </div>

      <div>
        <Label htmlFor="format">
          Format or size{" "}
          <span className="font-normal text-slate">(optional)</span>
        </Label>
        <Input
          id="format"
          value={values.format}
          onChange={(event) => setField("format", event.target.value)}
          placeholder="6x9 postcard"
          className="mt-2 h-11 text-base"
        />
      </div>
    </div>,

    // 3 — Timeline and message
    <div key="timeline" className="flex flex-col gap-6">
      <p className="font-heading text-lg font-bold text-ink">
        When do you need it?
      </p>

      <div>
        <Label htmlFor="timeline">Timeline</Label>
        <Select
          value={values.timeline || undefined}
          onValueChange={(value) => setField("timeline", value)}
        >
          <SelectTrigger
            id="timeline"
            size="default"
            className="mt-2 h-11 w-full text-base"
            aria-invalid={errors.timeline ? true : undefined}
            aria-describedby={errors.timeline ? "timeline-error" : undefined}
          >
            <SelectValue placeholder="Select a timeline" />
          </SelectTrigger>
          <SelectContent>
            {TIMELINES.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <FieldError id="timeline-error" message={errors.timeline} />
      </div>

      <div>
        <Label htmlFor="message">
          Anything else we should know?{" "}
          <span className="font-normal text-slate">(optional)</span>
        </Label>
        <Textarea
          id="message"
          value={values.message}
          onChange={(event) => setField("message", event.target.value)}
          placeholder="Paper stock, mail class, in-home dates, or anything unusual about the job."
          rows={4}
          className="mt-2 text-base"
        />
      </div>
    </div>,

    // 4 — Contact details
    <div key="contact" className="flex flex-col gap-6">
      <p className="font-heading text-lg font-bold text-ink">
        Where should we send the quote?
      </p>

      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={values.name}
          onChange={(event) => setField("name", event.target.value)}
          autoComplete="name"
          required
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="mt-2 h-11 text-base"
        />
        <FieldError id="name-error" message={errors.name} />
      </div>

      <div>
        <Label htmlFor="company">
          Company <span className="font-normal text-slate">(optional)</span>
        </Label>
        <Input
          id="company"
          value={values.company}
          onChange={(event) => setField("company", event.target.value)}
          autoComplete="organization"
          className="mt-2 h-11 text-base"
        />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={values.email}
          onChange={(event) => setField("email", event.target.value)}
          autoComplete="email"
          required
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="mt-2 h-11 text-base"
        />
        <FieldError id="email-error" message={errors.email} />
      </div>

      <div>
        <Label htmlFor="phone">
          Phone <span className="font-normal text-slate">(optional)</span>
        </Label>
        <Input
          id="phone"
          type="tel"
          value={values.phone}
          onChange={(event) => setField("phone", event.target.value)}
          autoComplete="tel"
          className="mt-2 h-11 text-base"
        />
      </div>
    </div>,

    // 5 — Review
    <div key="review">
      <p className="font-heading text-lg font-bold text-ink">
        Does this look right?
      </p>
      <p className="mt-2 text-base">
        Go back and change anything before you send it over.
      </p>

      <dl className="mt-6">
        <SummaryRow label="Project type" value={values.projectType} />
        <SummaryRow label="Quantity" value={values.quantity} />
        <SummaryRow label="Format or size" value={values.format} />
        <SummaryRow label="Timeline" value={values.timeline} />
        <SummaryRow label="Message" value={values.message} />
        <SummaryRow label="Name" value={values.name} />
        <SummaryRow label="Company" value={values.company} />
        <SummaryRow label="Email" value={values.email} />
        <SummaryRow label="Phone" value={values.phone} />
      </dl>
    </div>,
  ];

  const onReview = step === REVIEW_STEP;
  const slide = reduceMotion ? 0 : 32;

  /*
    Variants rather than inline `initial`/`exit` objects: an exiting child in
    `AnimatePresence` keeps the props it was rendered with, so an inline
    `exit` would use whatever `direction` held on the *previous* transition and
    slide the wrong way when going Back. Resolving `exit` through a function
    variant lets `AnimatePresence custom={direction}` feed it the current value.
  */
  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * slide }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir * -slide }),
  };

  return (
    <div className="on-light rounded-xl border border-border bg-white p-6 sm:p-8">
      <StepProgress current={step} />

      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (onReview) {
            void submit();
          } else {
            goNext();
          }
        }}
      >
        {/*
          `mode="wait"` keeps the outgoing step from overlapping the incoming
          one, so the card never shows two question groups at once. The height
          settles naturally because only one child is mounted at a time.
        */}
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: reduceMotion ? 0 : 0.3,
              ease: EASE_ENGINEERED,
            }}
          >
            {stepContent[step]}
          </motion.div>
        </AnimatePresence>

        {status === "error" ? (
          <div
            role="alert"
            className="mt-6 flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-base text-destructive"
          >
            <CircleAlert
              className="mt-1 size-4 shrink-0"
              aria-hidden="true"
            />
            <span>{errorMessage}</span>
          </div>
        ) : null}

        <div className="mt-8 flex items-center justify-between gap-4">
          {step > 0 ? (
            <Button
              type="button"
              variant="secondary"
              onClick={goBack}
              disabled={status === "submitting"}
            >
              Back
            </Button>
          ) : (
            <span />
          )}

          <Button type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? (
              <>
                <LoaderCircle className="animate-spin" aria-hidden="true" />
                Sending…
              </>
            ) : onReview ? (
              status === "error" ? (
                "Try again"
              ) : (
                "Send request"
              )
            ) : (
              "Continue"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}

export { QuoteForm };
