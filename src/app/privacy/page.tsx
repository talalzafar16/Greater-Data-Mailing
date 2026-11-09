import type { Metadata } from "next";

import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";

import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/sections/page-hero";
import { formattedAddress, site } from "@/data/site";

/*
  General-purpose privacy policy for a small B2B mail house.

  It describes how this site actually behaves (a Web3Forms-backed quote form,
  an embedded Google Map, no advertising or analytics cookies) and the
  standard service-provider role a mail house plays with client lists. Claims
  about internal practices are kept to industry-standard commitments rather
  than specific operational detail.

  It has not been reviewed by an attorney. That is a reasonable starting point
  for a site that collects only quote requests, but get one if the business
  starts handling regulated data on the site itself (e.g. health records
  under a HIPAA business associate agreement) or adds analytics/ad pixels.

  When changing it: bump EFFECTIVE_DATE, and revisit Section 6 (cookies) if
  analytics or advertising pixels are ever added.
*/

const EFFECTIVE_DATE = "November 9, 2026";

export const metadata: Metadata = buildMetadata("/privacy");

interface PolicySection {
  heading: string;
  body?: string[];
  bullets?: string[];
  afterBullets?: string[];
}

const SECTIONS: PolicySection[] = [
  {
    heading: "1. Overview",
    body: [
      `${site.name} ("we," "us," or "our") is a full-service direct mail, printing, and mailing company located at ${formattedAddress}. This policy explains what information we collect through this website, how we use and share it, and how we handle the mailing data our clients provide to us.`,
      "We handle personal information in two distinct roles, and different commitments apply to each. First, as a business, we collect information about visitors to this site and about prospective and current clients. Second, as a service provider, we process mailing lists on behalf of our clients, under their instructions and for their campaigns. Sections 2 through 4 cover the first role. Section 5 covers the second.",
    ],
  },
  {
    heading: "2. Information we collect",
    body: [
      "Information you give us. When you submit the quote request form on this site, we collect the project details you enter — project type, estimated quantity, format or size, timeline, and any message — along with your name, company, email address, and phone number. If you contact us by phone or email instead, we collect whatever you choose to share.",
      "Information collected automatically. Our hosting provider records standard server logs, which may include your IP address, browser type, referring page, and the pages you view. We use these for security and to keep the site working.",
      "Embedded content. This site embeds a Google Map showing our Deer Park location. Loading that map sends a request to Google, which may set cookies or collect data under Google's own privacy policy. We do not control and are not responsible for Google's practices.",
    ],
  },
  {
    heading: "3. How we use information",
    body: ["We use the information described above to:"],
    bullets: [
      "Respond to quote requests and prepare estimates",
      "Communicate with you about a project, proof, or schedule",
      "Provide printing, mailing, and data services you have engaged us for",
      "Maintain business records, including invoices and job history",
      "Protect the security and integrity of our systems",
      "Comply with legal, tax, and postal regulatory obligations",
    ],
    afterBullets: [
      "We do not sell the personal information of website visitors, and we do not use quote request details to build marketing lists we rent or trade to anyone.",
    ],
  },
  {
    heading: "4. How we share information",
    body: [
      "We share personal information only as described here. We do not sell it.",
    ],
    bullets: [
      "Service providers. Our quote form is delivered through Web3Forms, a third-party form processor, which transmits your submission to our email. We also use hosting and email providers. These vendors may process your information only to provide services to us.",
      "The United States Postal Service. Mailing a job requires submitting postal documentation, which may include address and volume data.",
      "Professional advisors. Accountants, auditors, and attorneys, under confidentiality obligations.",
      "Legal requirements. When required by law, subpoena, or other legal process, or to protect our rights, safety, or property.",
      "Business transfers. If our business is sold or merged, information may transfer as part of that transaction, subject to this policy.",
    ],
  },
  {
    heading: "5. Client mailing lists and data we process for clients",
    body: [
      "When a client provides us with a mailing list, we act as a service provider to that client. The client — not us — determines whose information is on the list and why it is being mailed. We process that data solely to complete the client's job, following the client's instructions.",
      "Our commitments regarding client data:",
    ],
    bullets: [
      "We do not sell, rent, trade, or share client mailing lists with other clients or third parties.",
      "We do not use one client's list to market our own services or anyone else's.",
      "Processing is limited to what the job requires, such as address standardization, change-of-address updates, deduplication, suppression processing, and postal presorting.",
      "We limit access to client data to the people who need it to complete the job.",
      "We keep client data only as long as reasonably needed to complete the work and handle any reprints, then return or dispose of it as the client directs.",
    ],
    afterBullets: [
      "Clients are responsible for ensuring they have the right to mail to the individuals on their lists and for complying with the laws that apply to their communications.",
      "If you received a mail piece we produced and want to know why, or want to be removed, please contact the organization that sent it — they control the list. If you contact us instead, we will forward your request to that client, but we cannot add, change, or remove records on their behalf without their instruction.",
    ],
  },
  {
    heading: "6. Cookies and tracking",
    body: [
      "This site does not set advertising cookies and does not use cross-site tracking or advertising pixels. Fonts are served from our own domain rather than a third-party font service.",
      "The embedded Google Map described in Section 2 may set its own cookies. Most browsers let you block or delete cookies through their settings; doing so may affect how the map behaves but will not prevent you from using the rest of the site.",
    ],
  },
  {
    heading: "7. Data security",
    body: [
      "We use reasonable administrative, technical, and physical safeguards designed to protect information against unauthorized access, disclosure, alteration, and destruction.",
      "No method of transmission or storage is completely secure, and we cannot guarantee absolute security. If you need to send us particularly sensitive data, contact us first and we will arrange an appropriate transfer method rather than having you email it.",
    ],
  },
  {
    heading: "8. Data retention",
    body: [
      "We keep quote requests and client correspondence for as long as needed to respond, provide services, and maintain business and tax records, then delete or archive them. Client mailing data is retained as described in Section 5.",
    ],
  },
  {
    heading: "9. Your choices and rights",
    body: ["Depending on where you live, you may have the right to:"],
    bullets: [
      "Request access to the personal information we hold about you",
      "Request correction of inaccurate information",
      "Request deletion of information, subject to our record-keeping obligations",
      "Opt out of marketing communications from us at any time",
      "Not be discriminated against for exercising these rights",
    ],
    afterBullets: [
      "California residents have these rights under the California Consumer Privacy Act as amended by the CPRA, including the right to know what personal information we collect and to opt out of its sale or sharing. We do not sell or share personal information as those terms are defined by that law. Residents of other states with comprehensive privacy laws have comparable rights.",
      "To exercise any of these rights, contact us using the details in Section 13. We may need to verify your identity before acting on a request. As explained in Section 5, requests about a mail piece sent by one of our clients must be directed to that client.",
      "Separately, if you want to reduce the amount of advertising mail you receive generally, the Association of National Advertisers operates DMAchoice, a consumer mail preference service, at dmachoice.thedma.org.",
    ],
  },
  {
    heading: "10. Children's privacy",
    body: [
      "This site is directed to businesses and organizations, not to children. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with information, contact us and we will delete it.",
    ],
  },
  {
    heading: "11. Third-party links",
    body: [
      "This site may link to other websites. We are not responsible for the privacy practices or content of sites we do not operate. Review their policies before providing information.",
    ],
  },
  {
    heading: "12. Changes to this policy",
    body: [
      "We may update this policy to reflect changes in our practices or in the law. When we do, we will revise the effective date above. Material changes will be noted on this page.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
        title="Privacy Policy"
        subtitle="How we handle information submitted through this site and the mailing data our clients entrust to us."
        showCta={false}
      />

      <Section variant="white">
        <div className="max-w-[70ch]">
          <p className="text-sm text-slate">
            Effective {EFFECTIVE_DATE}
          </p>

          <div className="mt-12 flex flex-col gap-12">
            {SECTIONS.map((section) => (
              <FadeIn key={section.heading}>
                <section>
                  <h2 className="text-2xl">{section.heading}</h2>

                  {section.body?.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)} className="mt-4">
                      {paragraph}
                    </p>
                  ))}

                  {section.bullets ? (
                    <ul className="mt-4 flex flex-col gap-3">
                      {section.bullets.map((bullet) => (
                        <li key={bullet.slice(0, 40)} className="flex gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-3 size-1.5 shrink-0 rounded-full bg-growth"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {section.afterBullets?.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)} className="mt-4">
                      {paragraph}
                    </p>
                  ))}
                </section>
              </FadeIn>
            ))}

            <FadeIn>
              <section>
                <h2 className="text-2xl">13. Contact us</h2>
                <p className="mt-4">
                  Questions about this policy, or want to exercise a privacy
                  right? Reach us at:
                </p>
                <address className="mt-4 not-italic">
                  {site.name}
                  <br />
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                  <br />
                  <a
                    href={site.phone.href}
                    className="text-growth-text underline underline-offset-4"
                  >
                    {site.phone.label}
                  </a>
                  <br />
                  <a
                    href={site.emailHref}
                    className="text-growth-text underline underline-offset-4"
                  >
                    {site.email}
                  </a>
                </address>
              </section>
            </FadeIn>
          </div>

          <p className="mt-16 border-t border-border pt-8 text-sm text-slate">
            Looking for something else?{" "}
            <Link
              href="/contact"
              className="text-growth-text underline underline-offset-4"
            >
              Get in touch
            </Link>
            .
          </p>
        </div>
      </Section>
    </main>
  );
}
