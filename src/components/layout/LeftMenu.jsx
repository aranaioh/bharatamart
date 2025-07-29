import React, { useState, useRef } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

const categories = [
  { name: 'Electronics', sub: [] },
  { name: 'Fashion', sub: [] },
  { name: 'Home Decor', sub: [] },
  { name: 'Televisions', sub: [] },
];

export default function LeftMenu() {
  const [expanded, setExpanded] = useState(false);
  const timeoutRef = useRef(null);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setExpanded(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setExpanded(false), 150);
  };

  return (
    <div
      className="relative z-10"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Base sidebar space (always reserved) */}
      <div className="bg-white border-r border-[#eee] h-screen w-16 flex flex-col items-center justify-start py-4 shadow-md">
        <div className='bg-primary-bg p-3 text-xl text-white rounded-full'><GiHamburgerMenu /></div>
      </div>

      {/* Expanded Sidebar (hover) */}
      {expanded && (
        <div className="absolute top-0 left-0 w-screen h-screen flex z-50">
          {/* Sidebar Overlay */}
          <div onMouseLeave={handleLeave} className="w-64 bg-white h-full border-r shadow-lg transition-all duration-300 flex flex-col">
            <div className="flex items-center h-20 px-4 border-b">
              <div className='bg-primary-bg p-3 text-xl text-white rounded-full'><GiHamburgerMenu /></div>
              <span className="ml-3 text-lg font-bold text-primary-bg">All Categories</span>
            </div>

            <nav className="flex flex-col gap-2 flex-1 px-3 py-2">
              {categories.map((cat) => (
                <div
                  key={cat.name}
                  className="cursor-pointer px-3 py-3 rounded hover:bg-primary-bg/10 flex items-center justify-between"
                >
                  <span className="font-medium text-base text-primary-bg">{cat.name}</span>
                  {cat.sub.length > 0 && <span>▶</span>}
                </div>
              ))}
            </nav>
          </div>

          {/* Dimmed Background */}
          <div className="flex-1 bg-black/40 backdrop-blur-sm" />
        </div>
      )}
    </div>
  );
};
