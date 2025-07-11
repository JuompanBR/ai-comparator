import { Header, Footer, CompareForm } from "../components";

const Compare = () => {
  return (
    <div className="w-full min-h-screen flex flex-col container mx-auto overflow-x-hidden fadeIn">
      <Header />
      <main className="w-full">
        <br />
        <h1 className="text-3xl font-bold text-center text-slate-800 mt-8">
          Comparison Form
        </h1>
        <br />
        <div className="w-full relative block flex-1">
          <CompareForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Compare;
