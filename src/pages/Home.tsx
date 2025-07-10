import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CustomDivider } from "../components/CustomDivider";
import { HowTo } from "../components/HowTo";
import { Hero } from "../components/Hero";

// bg-[#fff5ea]
export const Home = () => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col container mx-auto overflow-x-hidden">
        <Header />
        <main className="items-center justify-center flex-1 p-6 text-gray-800 relative">
          <Hero />
          <br />
          <CustomDivider />
          <HowTo />
          <div className="container mx-auto flex flex-col justify-center items-center bg-[#fff5ea] p-3">
            <span>Find the right fit for your free-tier</span>
            
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}