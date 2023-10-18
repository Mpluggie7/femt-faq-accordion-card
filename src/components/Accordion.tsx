import React from "react";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { IFaqs } from "../interfaces/IFaqs";

interface IAccordion {
  allToggle: IFaqs[];
  setAllToggle: (value: IFaqs[]) => void;
}

const Accordion: React.FC<IAccordion> = ({ allToggle, setAllToggle }) => {
  const setNewToggle = (index: number) => {
    const setNew = allToggle.map((faq, idx) => {
      return idx === index
        ? { ...faq, toggle: true }
        : { ...faq, toggle: false };
    });
    setAllToggle(setNew);
  };

  return (
    <>
      {allToggle &&
        allToggle?.map((faq: IFaqs, idx: number) => (
          <div key={idx}>
            <div className="w-full">
              <div
                className="grid grid-cols-12 cursor-pointer"
                onClick={() => setNewToggle(idx)}
              >
                <p
                  className={`${
                    faq.toggle
                      ? "font-bold hover:text-[var(--Very-dark-grayish-blue)]"
                      : ""
                  } col-span-11 text-[var(--Very-dark-grayish-blue)] hover:text-[var(--Soft-red)]`}
                >
                  {faq.question}
                </p>
                <div className="w-full text-right">
                  {faq.toggle ? (
                    <MdOutlineKeyboardArrowUp
                      size={18}
                      className="text-[var(--Soft-red)]"
                    />
                  ) : (
                    <MdOutlineKeyboardArrowDown
                      size={18}
                      className="text-[var(--Soft-red)]"
                    />
                  )}
                </div>
              </div>
              <div
                className={`${
                  faq.toggle ? "block" : "hidden"
                } grid grid-cols-12 mt-2`}
              >
                <p className=" col-span-11 text-[var(--Dark-grayish-blue)]">
                  {faq.answer}
                </p>
              </div>
            </div>
            <div className="border border-b-1 border-[var(--Light-grayish-blue)] my-4"></div>
          </div>
        ))}
    </>
  );
};

export default Accordion;
