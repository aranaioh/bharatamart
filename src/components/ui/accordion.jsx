import React, { createContext, useContext, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";


const AccordionContext = createContext();
const AccordionItemContext = createContext();

export function Accordion({ children, type = "single", collapsible = false, className }) {
  const [openItem, setOpenItem] = useState(null);
  return (
    <AccordionContext.Provider value={{ openItem, setOpenItem, type, collapsible }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({ value, children }) {
  const { openItem } = useContext(AccordionContext);
  const isOpen = openItem === value;
  return (
    <AccordionItemContext.Provider value={{ value, isOpen }}>
      <div>{children}</div>
    </AccordionItemContext.Provider>
  );
}

export function AccordionTrigger({ children, className = "", openClassName = "" }) {
  const { value, isOpen } = useContext(AccordionItemContext);
  const { openItem, setOpenItem, type, collapsible } = useContext(AccordionContext);

  const handleClick = () => {
    if (type === "single") {
      if (isOpen && collapsible) {
        setOpenItem(null);
      } else {
        setOpenItem(value);
      }
    }
  };

  return (
    <div
      onClick={handleClick}
      className={
        (isOpen ? openClassName : className) +
        " flex items-center justify-between pl-4 border-2 w-full cursor-pointer  border-b border-gray-200 "
      }
    >
      <div className="py-3">{children}</div>
      <div className="h-full flex items-center">
        {isOpen ? (
          <div className="p-4 bg-primary-bg text-white"><FaAngleDown className="text-lg text-primary" /></div>
        ) : (
          <div className="p-4 border-l border-gray-200"><FaAngleRight className="text-lg text-primary" /></div>
        )}
      </div>
    </div>
  );
}

export function AccordionContent({ children }) {
  const { isOpen } = useContext(AccordionItemContext);
  if (!isOpen) return null;
  return <div className="px-0">{children}</div>;
} 