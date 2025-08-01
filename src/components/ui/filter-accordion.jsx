import React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FilterAccordion = ({
  children,
  type = "multiple",
  className,
  openItems = [],
  onOpenChange
}) => {
  return (
    <div className={cn("w-full", className)}>
      {React.Children.map(children, child => {
        return React.cloneElement(child, {
          isOpen: openItems.includes(child.props.value),
          onToggle: () => {
            if (type === "single") {
              onOpenChange?.(openItems.includes(child.props.value) ? [] : [child.props.value]);
            } else {
              onOpenChange?.(
                openItems.includes(child.props.value)
                  ? openItems.filter(item => item !== child.props.value)
                  : [...openItems, child.props.value]
              );
            }
          }
        });
      })}
    </div>
  );
};

const FilterAccordionItem = ({
  value,
  children,
  className,
  isOpen,
  onToggle
}) => {
  return (
    <div className={cn("", className)}>
      {React.Children.map(children, child => {
        if (child.type === FilterAccordionTrigger) {
          return React.cloneElement(child, { isOpen, onToggle });
        }
        if (child.type === FilterAccordionContent) {
          return React.cloneElement(child, { isOpen });
        }
        return child;
      })}
    </div>
  );
};

const FilterAccordionTrigger = ({
  children,
  className,
  isOpen,
  onToggle,
  ...props
}) => {
  return (
    <button
      type="button"
      className={cn(
        "flex flex-1 items-center justify-between w-full rounded-md py-4 font-medium transition-all",
        className
      )}
      onClick={onToggle}
      {...props}
    >
      {children}
      <ChevronDown className={cn(
        "h-4 w-4 shrink-0 transition-transform duration-200",
        isOpen && "rotate-180"
      )} />
    </button>
  );
};

const FilterAccordionContent = ({
  children,
  className,
  isOpen
}) => {
  return (
    <div className={cn(
      "overflow-hidden text-sm transition-all",
      !isOpen ? "h-0 opacity-0" : "h-auto opacity-100",
      className
    )}>
      <div className="pb-4 pt-0">{children}</div>
    </div>
  );
};

export {
  FilterAccordion as FilterAccordion,
  FilterAccordionItem,
  FilterAccordionTrigger as FilterAccordionTrigger,
  FilterAccordionContent as FilterAccordionContent
};