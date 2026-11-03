import ThanksContent from "../components/ThanksContent";

// Where the booking tool (?type=call) and Stripe (?type=audit) send people back to.
export const metadata = {
  title: "Thanks | Softles",
  robots: { index: false, follow: false },
};

export default function AuThanksPage({ searchParams }) {
  const type = ["call", "audit"].includes(searchParams?.type) ? searchParams.type : "other";

  return (
    <main className="min-h-screen">
      <header className="border-b border-[#2A2E3A]">
        <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center px-4 sm:px-6 lg:px-8">
          <a href="/au" aria-label="Back to Softles for Australian brands">
            <img src="/SoftLes.png" alt="Softles" width={101} height={40} className="h-8 w-auto" />
          </a>
        </div>
      </header>
      <section className="mx-auto w-full max-w-[1200px] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <ThanksContent type={type} />
      </section>
    </main>
  );
}
