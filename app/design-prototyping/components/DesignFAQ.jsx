"use client";

import FaqSection from "../../components/_components/FaqSection";

// Each answer opens with a self-contained factual sentence — that opening line
// is what search and AI answer engines quote.
const faqs = [
  {
    q: "What's the difference between a wireframe, a mockup and a prototype?",
    a: "A wireframe is structure with no styling, a mockup is a single styled screen, and a prototype is those screens linked together so you can click through the actual journey. We produce all three, in that order — wireframes settle the layout argument cheaply, mockups settle the look, and the prototype proves the flow works before anyone writes code.",
  },
  {
    q: "Do I need a prototype, or can we design straight into WordPress or Shopify?",
    a: "A simple brochure site can usually go straight to build. Anything with a booking flow, checkout variation, filtering, or a multi-step form is far cheaper to get wrong in a prototype than in code — a change that takes ten minutes in Figma can take a day once it's built.",
  },
  {
    q: "How long does design and prototyping take?",
    a: "Typically two to four weeks for a marketing site, and four to eight weeks for a semi-custom or e-commerce build. What extends it is the number of unique templates, how much research the project needs, and how quickly feedback comes back — we give you a stage-by-stage timeline before starting, not a single vague estimate.",
  },
  {
    q: "How many revision rounds are included?",
    a: "Two rounds per stage are included, and we define the line up front: a revision is a change within the agreed scope, while a new page or a new feature is a scope change that gets quoted separately. We don't offer 'unlimited revisions' because it isn't something anyone can honestly deliver on a fixed budget.",
  },
  {
    q: "Who owns the design files?",
    a: "You do. On final payment the Figma file, source assets and full edit access transfer to your ownership. There are no view-only links and no locked source, so you're never dependent on us to make a small change later.",
  },
  {
    q: "Can you work from our existing brand guidelines?",
    a: "Yes — if you have brand guidelines, we design inside them. If you don't, we define a minimal working set as part of the project (type scale, colour, spacing and component rules) rather than sending you to a separate brand agency first.",
  },
  {
    q: "Do you do design only, or do you build it too?",
    a: "Both. Most clients have us design and build, which means nothing is lost in a handoff to a vendor who wasn't in the discovery call. Design-only engagements are available too, and include a walkthrough call with whoever is developing it.",
  },
  {
    q: "Will the design actually be buildable on our budget?",
    a: "We design against your platform and your build budget from day one, and flag anything expensive during the wireframe stage while changes still cost nothing. Because we also build on WordPress and Shopify, we know what a given layout costs to implement rather than guessing.",
  },
];

export default function DesignFAQ() {
  return (
    <FaqSection
      title="Frequently asked questions"
      copy="The things worth settling before a design project starts — including the ones most agencies leave vague."
      faqs={faqs}
    />
  );
}
