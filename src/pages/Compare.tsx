import { Header, Footer, CompareForm } from "../components";

const Compare = () => {
  return (
    <div className="w-full min-h-screen relative fadeIn flex flex-col items-center bg-white">
      <Header />
      <br />
      <h1 className="text-3xl font-bold text-center text-slate-800 mt-8">
        Comparison Form
      </h1>
      <br />
      <div className="w-full relative block flex-1">
        <CompareForm />
      </div>
      <Footer />
    </div>
  );
};

export default Compare;
