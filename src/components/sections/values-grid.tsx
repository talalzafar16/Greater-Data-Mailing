import { HandCoins, ShieldCheck, Target, Zap } from "lucide-react";

import { FadeIn, FadeInStagger } from "@/components/ui/fade-in";
import { IconBox } from "@/components/ui/icon-box";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const VALUES = [
  {
    name: "Accountability",
    line: "You always know who is running your job and exactly where it stands.",
    icon: ShieldCheck,
  },
  {
    name: "Accuracy",
    line: "Clean data and matched mailings, verified before anything goes on press.",
    icon: Target,
  },
  {
    name: "Speed",
    line: "Every step happens in one building, so nothing waits on an outside schedule.",
    icon: Zap,
  },
  {
    name: "Value",
    line: "The most cost-effective production method, at the lowest postal rate you qualify for.",
    icon: HandCoins,
  },
];

function ValuesGrid() {
  return (
    <Section variant="paper">
      <SectionHeading
        eyebrow="What We Stand For"
        title="Four things we hold ourselves to."
      />

      <FadeInStagger
        role="list"
        className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
      >
        {VALUES.map((value) => (
          <FadeIn key={value.name} role="listitem">
            <IconBox icon={value.icon} />
            <h3 className="mt-6 text-lg">{value.name}</h3>
            <p className="mt-2 text-base">{value.line}</p>
          </FadeIn>
        ))}
      </FadeInStagger>
    </Section>
  );
}

export { ValuesGrid };
