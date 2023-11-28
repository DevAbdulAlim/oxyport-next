export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  const pagesToShow = 5; // Number of pages to show (including current page)

  const handleFirst = () => {
    onPageChange(1);
  };

  const handleLast = () => {
    onPageChange(totalPages);
  };

  const handlePrev = () => {
    onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    onPageChange(currentPage + 1);
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
      onClick={() => onPageChange(1)}
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
      onClick={() => onPageChange(pageNumber)}
    >
      {pageNumber}
    </button>
  ))}

  {endPage < totalPages - 2 && <span className="py-2 px-4">...</span>}
  {endPage < totalPages - 1 && (
    <button
      type="button"
      className="py-2 px-4 border rounded-md mr-2 transition-colors duration-300 hover:bg-blue-900 hover:text-white"
      onClick={() => onPageChange(totalPages)}
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
