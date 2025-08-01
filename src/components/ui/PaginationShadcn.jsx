import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FcNext, FcPrevious } from "react-icons/fc";

export function PaginationShadcn({
  page,
  pageCount,
  onPageChange,
}) {
  if (pageCount <= 1) return null;

  const renderPageNumbers = () => {
    const pages = [];

    // Always show first page
    pages.push(1);

    // Add ellipsis if there's a gap between first page and current range
    if (page > 4) {
      pages.push("ellipsis-start");
    }

    // Show pages around current page
    const start = Math.max(2, page - 1);
    const end = Math.min(pageCount - 1, page + 1);

    for (let i = start; i <= end; i++) {
      if (i !== 1 && i !== pageCount) {
        pages.push(i);
      }
    }

    // Add ellipsis if there's a gap between current range and last page
    if (page < pageCount - 3) {
      pages.push("ellipsis-end");
    }

    // Always show last page (if not already included)
    if (pageCount > 1) {
      pages.push(pageCount);
    }

    return pages;
  };

  const pageNumbers = renderPageNumbers();

  return (
    <div className="flex items-center justify-between w-full">
      <button
        className="flex items-center justify-centergap-1 px-2 h-8 rounded-md bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50"
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
      >
        <FcPrevious /> <span className="text-sm font-semibold">Previous</span>
      </button>

      <div className="flex items-center space-x-2">
        {pageNumbers.map((item, index) => {
          if (item === "ellipsis-start" || item === "ellipsis-end") {
            return (
              <span key={`ellipsis-${index}`} className="px-2 text-gray-400 select-none">
                ...
              </span>
            );
          }

          return (
            <button
              key={item}
              onClick={() => onPageChange(item)}
              className={cn(
                "flex items-center justify-center w-8 h-8 rounded-full text-lg",
                item === page ? "bg-primary-bg text-white" : "bg-white text-gray-700 hover:bg-gray-100"
              )}
            >
              <span className="text-sm font-semibold">{item}</span>
            </button>
          );
        })}
      </div>

      <button
        className="flex items-center gap-1 px-2 justify-center h-8 rounded-md bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50"
        disabled={page === pageCount}
        onClick={() => onPageChange(page + 1)}
      >
        <span className="text-sm font-semibold">Next</span>
        <FcNext className="text-black"/>
      </button>
    </div>
  );
}