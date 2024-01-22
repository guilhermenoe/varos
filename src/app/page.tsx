import CardsHero from "./components/hero/CardsHero";
import Header from "./components/header/Header";
import TitleHero from "./components/hero/TitleHero";
import ShelfProduct from "./components/hero/VistoSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TitleInvestment from "./components/investments/TitleInvestment";
import Investments from "./components/investments/Investments";
import TestimonialTitle from "./components/testimonial/TestimonialTitle";
import TestimonialImage from "./components/testimonial/TestimonialImage";
import NewsletterTitle from "./components/newsletter/NewsletterTitle";
import FormNewsletter from "./components/newsletter/FormNewsletter";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <main className="">

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="container mx-auto mt-16 md:mt-40 md:flex"> {/* Use md:flex to maintain the current desktop layout */}
        <div className="md:w-1/2">
          <TitleHero />
          <ShelfProduct />
        </div>
        <div className="hidden md:w-1/2 md:flex justify-center items-center">
          <CardsHero />
        </div>
      </div>

      {/* Investment Section */}
      <div className="container mx-auto mt-40 md:mt-64 mb-7">
        <TitleInvestment />
        <Investments />
      </div>

      {/* Testimonial Section */}
      <div className="container mx-auto flex flex-col md:flex-row mt-20 md:mt-52 mb-7 gap-20">
        <div className="md:w-1/2">
          <TestimonialTitle />
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <TestimonialImage />
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="container mx-auto flex flex-col md:flex-row mt-32 mb-32 md:mt-48 md:mb-32 gap-20">
        <div className="md:w-1/2">
          <NewsletterTitle />
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <FormNewsletter />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
