import "./App.css";
import Accordion from "./components/Accordion";
import faqsFile from "../src/faqs.json";
import { IFaqs } from "../src/interfaces/IFaqs";
import BgMobile from "./components/BgMobile";
import BgDesktop from "./components/BgDesktop";
import { useEffect, useState } from "react";

function App() {
  const faqs = faqsFile.data;
  const [allToggle, setAllToggle] = useState<IFaqs[]>([]);

  useEffect(() => {
    const newFaqs = faqs.map((faq) => ({ ...faq, toggle: false }));
    setAllToggle(newFaqs);
    // console.log(newFaqs);
  }, [faqs]);

  return (
    <div className="w-full min-h-screen md:flex justify-center items-center bg-gradient-to-b from-[var(--Soft-violet)] to-[var(--Soft-blue)] p-6 pt-[9.25rem] md:p-0">
      <div className="main md:w-[900px] md:flex bg-[white] rounded-[1rem] p-6 md:p-0">
        <div className="md:w-1/2 relative">
          <div className="md:hidden relative">
            <BgMobile />
          </div>
          <div className="hidden md:block h-full relative">
            <BgDesktop />
          </div>
        </div>
        <div className="md:w-1/2 mt-[6.75rem] md:mt-0 md:py-14 md:pr-20">
          <h1 className="font-bold text-3xl text-center md:text-left my-8 md:mt-0">
            FAQ
          </h1>
          <Accordion allToggle={allToggle} setAllToggle={setAllToggle} />
        </div>
      </div>
    </div>
  );
}

export default App;
