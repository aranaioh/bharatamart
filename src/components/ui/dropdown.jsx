// src/components/ui/dropdown.jsx
import * as React from "react";

export function DropdownMenu({ children }) {
  return <div className="relative inline-block text-left">{children}</div>;
}

export const DropdownMenuTrigger = React.forwardRef(({ asChild, children, ...props }, ref) => {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, { ref, ...props });
  }
  return (
    <button ref={ref} {...props}>
      {children}
    </button>
  );
});
DropdownMenuTrigger.displayName = "DropdownMenuTrigger";

export function DropdownMenuContent({ children, align = "start", className = "", ...props }) {
  // Simple positioning logic for demo; in real use, use a popper library
  return (
    <div
      className={`absolute z-50 mt-2 bg-white border border-gray-200 rounded shadow-lg min-w-[10rem] ${align === "end" ? "right-0" : "left-0"} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function DropdownMenuItem({ asChild, children, ...props }) {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, { ...props });
  }
  return (
    <div
      className="cursor-pointer select-none px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
      {...props}
    >
      {children}
    </div>
  );
}

export function DropdownMenuSeparator() {
  return <div className="my-1 border-t border-gray-200" />;
}
