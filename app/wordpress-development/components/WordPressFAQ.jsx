"use client";

import FaqSection from "../../components/_components/FaqSection";

const faqs = [
  {
    q: "Why should I choose WordPress for my business website?",
    a: "WordPress powers over 40% of the web for good reason: you own your platform and your content, there's no vendor lock-in, and the ecosystem covers nearly every business need. With a custom theme built properly — instead of a bloated template — you get a fast, secure, SEO-friendly site that your team can update without touching code.",
  },
  {
    q: "Do you use page builders like Elementor, or build custom themes?",
    a: "We build custom themes from scratch — clean, purposeful code without page-builder bloat. That means faster load times, better Core Web Vitals, and a site that looks exactly like your brand instead of a template. Where it helps your team, we set up the native block editor so content stays easy to manage.",
  },
  {
    q: "Can you redesign my existing WordPress site without losing SEO?",
    a: "Yes. We develop the new theme in a staging environment while your live site keeps running. Your URL structure is preserved, redirects are mapped for anything that changes, and metadata carries over — followed by a zero-downtime switchover with a rollback plan ready as a precaution.",
  },
  {
    q: "Do you build WooCommerce stores?",
    a: "Yes — full WooCommerce builds and extensions: custom product types, checkout flows, payment and shipping integrations, subscriptions, and custom plugins for business logic that off-the-shelf extensions can't handle.",
  },
  {
    q: "Can you build headless WordPress with Next.js?",
    a: "Yes. We decouple the WordPress backend from a React/Next.js frontend using the REST API or WPGraphQL. Your team keeps the familiar WordPress admin for content, while visitors get app-like speed, better Core Web Vitals, and a hardened security surface.",
  },
  {
    q: "Do you provide maintenance and support after launch?",
    a: "Yes. Monthly retainers cover updates, backups, security monitoring, performance checks, and development hours for ongoing improvements. Many clients treat SoftLes as their long-term WordPress team rather than a one-off project agency.",
  },
];

export default function WordPressFAQ() {
  return (
    <FaqSection
      title="Frequently asked questions"
      copy="Everything you need to know before starting your WordPress project with us."
      faqs={faqs}
    />
  );
}
