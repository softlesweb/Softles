import ThanksContent from "../components/ThanksContent";
import { AuFooter, AuHeader } from "../components/AuChrome";

// Where the booking tool (?type=call) and Stripe (?type=audit) send people back to.
export const metadata = {
  title: "Thanks | Softles",
  robots: { index: false, follow: false },
};

export default function AuThanksPage({ searchParams }) {
  const type = ["call", "audit"].includes(searchParams?.type) ? searchParams.type : "other";

  return (
    <main className="flex min-h-screen flex-col">
      <AuHeader homeHref="/au" bookHref="/au#book" showCta={type !== "call"} />
      <section className="flex-1 bg-page py-16 md:py-24">
        <div className="service-page-container">
          <ThanksContent type={type} />
        </div>
      </section>
      <AuFooter onPage={false} />
    </main>
  );
}
