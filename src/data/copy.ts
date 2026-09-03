/**
 * Section and page copy.
 *
 * Everything a non-developer might want to reword lives here rather than
 * inside a component, so editing text never means opening a `.tsx` file.
 * Structured content with its own shape — services, industries, stats,
 * testimonials, navigation — stays in its own dedicated file.
 */

export const heroCopy = {
  eyebrow: "Long Island Direct Mail Experts",
  titleLine1: "Greater Data.",
  titleLine2: "Better Mail.",
  subline:
    "Full-service printing and mailing under one roof in Deer Park, NY. We clean your data, print your piece, and get it into mailboxes at the lowest postal rate you qualify for.",
  primaryCta: { label: "Get a Free Quote", href: "/contact" },
  secondaryCta: { label: "See Our Services", href: "/services" },
  trustItems: [
    "In-house production",
    "USPS automation certified",
    "Family-run since day one",
  ],
  image: "/photos/hero-press-running.jpg",
  imageAlt: "High-speed press running a printed sheet through its rollers",
  stat: { value: "38+", label: "Years of Direct Mail Expertise" },
};

export const trustBarCopy = {
  points: [
    "38+ Years Experience",
    "USPS Automation Certified",
    "In-House Printing & Mailing",
    "Long Island Based",
  ],
};

export const servicesTrioCopy = {
  eyebrow: "What We Do",
  title: "Everything your mailing needs, in one building.",
  subtitle:
    "No brokers, no handoffs, no surprises. The same team that cleans your list runs the press and drops the mail.",
  cardLinkLabel: "Learn more",
};

export const processRailCopy = {
  title: "From Your Data to Their Mailbox",
};

export const whyUsCopy = {
  eyebrow: "Why Greater Data",
  title: "A first-class mailing every single time.",
  image: "/photos/production-line-check.jpg",
  imageAlt: "Press operator checking a job running on the production line",
  reasons: [
    {
      title: "Lower postal rates.",
      body: "We make sure your list is clean and accurate so your mail qualifies for the deepest postal discounts available.",
    },
    {
      title: "One team, start to finish.",
      body: "Your job never leaves our building or gets passed to a third party.",
    },
    {
      title: "38 years of hands-on experience.",
      body: "Our president has mastered every process on the floor personally.",
    },
    {
      title: "No job too small or too large.",
      body: "From a 500-piece local drop to a multi-million-piece campaign.",
    },
  ],
};

export const industriesCopy = {
  eyebrow: "Who We Work With",
  title: "Built for the industries that live on the mail.",
  heroSubtitle:
    "Different rules, different deadlines, different data — handled by one team that has produced all of it before.",
  piecesHeading: "Typical pieces",
};

export const servicesHubCopy = {
  title: "Printing, mailing, and data services under one roof.",
  subtitle:
    "One team cleans your list, prints your piece, and gets it into mailboxes at the lowest postal rate you qualify for.",
  /*
    The grid heading is not decoration: without an h2 between the page h1 and
    the h3 on each service card, the document outline skips a level.
  */
  gridEyebrow: "What We Do",
  gridTitle: "Four services, one building.",
};

export const serviceDetailCopy = {
  whatItIsHeading: "What it is",
  includedHeading: "What's included",
  capabilitiesHeading: "Capabilities",
  relatedEyebrow: "Who We Work With",
};

export const aboutCopy = {
  heroTitle: "Growth through marketing, since day one.",
  heroSubtitle:
    "A full-service direct marketing company in Deer Park, New York — printing, mailing, and data under one roof.",
  storyEyebrow: "Who We Are",
  storyTitle: "A direct marketing company, not a print broker.",
  storyImage: "/photos/plant-interior.jpg",
  storyImageAlt: "Production floor of a modern printing plant",
  story: [
    "Greater Data & Mailing is a full-service direct marketing company in Deer Park, New York. Walk into our plant and you'll see today's technology at work, run by people who have been doing this for decades. Our customer service and attention to detail are the reasons we've kept growing in a crowded marketplace.",
    "We give our team an environment that rewards good ideas, and many of those ideas have saved our customers real money in production costs. Your mailing is never just another job here. Every one is a chance to show you our best.",
  ],
  missionEyebrow: "Our Mission",
  mission: "To create growth through marketing.",
  presidentName: "Steven Loehr",
  presidentRole: "President",
  presidentImage: "/photos/president_pic.jpeg",
  presidentImageAlt: "Steven Loehr, President of Greater Data & Mailing",
  presidentBio:
    "Steven is a direct mail professional with more than 38 years of experience, having worked hands-on through every process along the way. He understands what efficient, quality-driven production takes: keeping costs under control while delivering a strong return. He works closely with employees, vendors, suppliers, and clients to keep communication accurate and expectations met, and stays current on the latest USPS technologies and innovations. No project is too small or too large.",
  valuesEyebrow: "What We Stand For",
  valuesTitle: "Four things we hold ourselves to.",
  galleryEyebrow: "Inside the Plant",
  galleryTitle: "Everything happens in Deer Park.",
  galleryShots: [
    {
      src: "/photos/gallery-press-floor.jpg",
      alt: "Wide-format press running a printed sheet",
    },
    {
      src: "/photos/gallery-inserting.jpg",
      alt: "Printed sheets feeding through a finishing machine",
    },
    {
      src: "/photos/gallery-finished-mail.jpg",
      alt: "Envelopes stacked and staged for mailing",
    },
  ],
};

export const contactCopy = {
  title: "Get a quote on your next mailing.",
  subtitle:
    "Tell us a little about the project. We'll respond within one business day with pricing and recommendations.",
  infoHeading: "Reach us directly",
  // Confirmed by the client.
  hours: "Monday – Friday, 8:30am – 5:00pm",
  calloutPrefix: "Prefer to talk it through? Call",
};

export const ctaBandCopy = {
  title: "Let's talk about your next mailing.",
  subtitle:
    "Tell us what you're sending and we'll come back with pricing and a plan.",
  buttonText: "Request a Quote",
  buttonHref: "/contact",
  callPrefix: "or call",
};

export const notFoundCopy = {
  eyebrow: "404",
  title: "That page didn't make it to the mailbox.",
  body: "The link may be out of date, or the page may have moved. Here is everything else, or call and we'll point you at it.",
  homeCta: "Back to home",
  servicesCta: "See our services",
  linksHeading: "Every page on the site",
  callPrefix: "Or call",
};
