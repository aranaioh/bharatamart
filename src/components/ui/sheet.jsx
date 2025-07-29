import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

const Sheet = DialogPrimitive.Root;
const SheetTrigger = DialogPrimitive.Trigger;

const SheetPortal = DialogPrimitive.Portal;

const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-all",
      className
    )}
    {...props}
  />
));
SheetOverlay.displayName = DialogPrimitive.Overlay.displayName;

const SheetContent = React.forwardRef(
  ({ side = "left", className, children, ...props }, ref) => (
    <SheetPortal>
      <SheetOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          "fixed z-50 bg-white p-6 shadow-lg transition-all duration-300",
          side === "left" && "inset-y-0 left-0 w-80 max-w-full animate-in slide-in-from-left",
          side === "right" && "inset-y-0 right-0 w-80 max-w-full animate-in slide-in-from-right",
          side === "top" && "inset-x-0 top-0 h-1/3 max-h-full animate-in slide-in-from-top",
          side === "bottom" && "inset-x-0 bottom-0 h-1/3 max-h-full animate-in slide-in-from-bottom",
          className
        )}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </SheetPortal>
  )
);
SheetContent.displayName = "SheetContent";

const SheetClose = DialogPrimitive.Close;
const SheetHeader = ({ className, ...props }) => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
);
SheetHeader.displayName = "SheetHeader";

export { Sheet, SheetTrigger, SheetContent, SheetClose, SheetHeader }; 