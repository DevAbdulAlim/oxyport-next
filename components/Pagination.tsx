"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

interface PaginationProps {
  totalPages: number;
}

export default function Pagination({ totalPages }: PaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams.toString());
  const currentPage = parseInt(params.get("page") || "1");

  const pagesToShow = 5;

  const handleFirst = () => {
    const queryParams = new URLSearchParams(searchParams.toString());
    queryParams.set("page", "1");
    router.push(`${pathname}?${queryParams.toString()}`);
  };

  const handleLast = () => {
    const queryParams = new URLSearchParams(searchParams.toString());
    queryParams.set("page", totalPages.toString());
    router.push(`${pathname}?${queryParams.toString()}`);
  };

  const handlePrev = () => {
    const queryParams = new URLSearchParams(searchParams.toString());
    const prevPage = currentPage - 1;
    queryParams.set("page", prevPage.toString());
    router.push(`${pathname}?${queryParams.toString()}`);
  };

  const handleNext = () => {
    const queryParams = new URLSearchParams(searchParams.toString());
    const nextPage = currentPage + 1;
    queryParams.set("page", nextPage.toString());
    router.push(`${pathname}?${queryParams.toString()}`);
  };

  const hasFirst = currentPage > 3;
  const hasLast = currentPage < totalPages - 2;

  // Calculate the range of page numbers to display
  let startPage = currentPage - 2;
  let endPage = currentPage + 2;

  if (startPage < 1) {
    startPage = 1;
    endPage = Math.min(totalPages, startPage + pagesToShow - 1);
  } else if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - pagesToShow + 1);
  }

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex flex-wrap justify-center my-8">
      {hasFirst && (
        <button
          type="button"
          className="py-2 px-4 border rounded-md mr-2 transition-colors duration-300 hover:bg-blue-900 hover:text-white"
          onClick={handleFirst}
        >
          First
        </button>
      )}
      {currentPage > 1 && (
        <button
          type="button"
          className="py-2 px-4 border rounded-md mr-2 transition-colors duration-300 hover:bg-blue-900 hover:text-white"
          onClick={handlePrev}
        >
          Prev
        </button>
      )}

      {startPage > 2 && (
        <button
          type="button"
          className="py-2 px-4 border rounded-md mr-2 transition-colors duration-300 hover:bg-blue-900 hover:text-white"
          onClick={() => router.push(`${pathname}?page=1`)}
        >
          1
        </button>
      )}

      {startPage > 3 && <span className="py-2 px-4">...</span>}

      {pageNumbers.map((pageNumber) => (
        <button
          type="button"
          className={`py-2 px-4 border rounded-md mr-2 transition-colors duration-300 ${
            pageNumber === currentPage
              ? "bg-blue-900 text-white"
              : "hover:bg-blue-900 hover:text-white"
          }`}
          key={pageNumber}
          onClick={() => {
            const queryParams = new URLSearchParams(searchParams.toString());
            queryParams.set("page", pageNumber.toString());
            router.push(`${pathname}?${queryParams.toString()}`);
          }}
        >
          {pageNumber}
        </button>
      ))}

      {endPage < totalPages - 2 && <span className="py-2 px-4">...</span>}
      {endPage < totalPages - 1 && (
        <button
          type="button"
          className="py-2 px-4 border rounded-md mr-2 transition-colors duration-300 hover:bg-blue-900 hover:text-white"
          onClick={() => router.push(`${pathname}?page=${totalPages}`)}
        >
          {totalPages}
        </button>
      )}

      {currentPage < totalPages && (
        <button
          type="button"
          className="py-2 px-4 border rounded-md mr-2 transition-colors duration-300 hover:bg-blue-900 hover:text-white"
          onClick={handleNext}
        >
          Next
        </button>
      )}
      {hasLast && (
        <button
          type="button"
          className="py-2 px-4 border rounded-md transition-colors duration-300 hover:bg-blue-900 hover:text-white"
          onClick={handleLast}
        >
          Last
        </button>
      )}
    </nav>
  );
}
