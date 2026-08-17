import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata = {
  title: "FAQ & Help — MedMoods",
};

export default function FaqPage() {
  return (
    <>
      <NavBar />
      <main className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold text-ink">FAQ & Help</h1>
          <FaqAccordion />
        </div>
      </main>
      <Footer />
    </>
  );
}
