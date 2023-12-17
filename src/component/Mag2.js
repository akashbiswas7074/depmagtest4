import React, { useRef, useState, useEffect } from 'react';
import HTMLFlipBook from "react-pageflip";
import Hammer from 'hammerjs';

//import 'react-pageflip/lib/pageflip.css'; // Import pageflip styles
//import './FlipBook.css'; // Import your custom CSS file

const FlipBook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const flipbookRef = useRef(null);

  useEffect(() => {
    if (flipbookRef.current) {
      const hammer = new Hammer(flipbookRef.current);
      hammer.get('doubletap').set({ enable: true });

      hammer.on('doubletap', handleDoubleTap);
    }

    return () => {
      if (flipbookRef.current) {
        const hammer = new Hammer(flipbookRef.current);
        hammer.off('doubletap', handleDoubleTap);
      }
    };
  }, []);

  const handleDoubleTap = () => {
    // Handle double-tap zoom logic here
    // Example: zoomIn();
  };

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex + 1);
  };

  const handleNextPage = () => {
    if (flipbookRef.current) {
      flipbookRef.current.flipNext();
    }
  };

  const handlePrevPage = () => {
    if (flipbookRef.current) {
      flipbookRef.current.flipPrev();
    }
  };

  return (
    <div>
      <h2>React Pageflip Example</h2>
      <p>Current Page: {currentPage}</p>

      <div className="controls">
        <button onClick={handlePrevPage}>Previous Page</button>
        <button onClick={handleNextPage}>Next Page</button>
      </div>

      <HTMLFlipBook
        ref={flipbookRef}
        onFlip={handlePageChange}
        responsive={true}
        maxWidth={800}
        maxHeight={600}
        className="flipbook"
      >
        {[...Array(6)].map((_, index) => (
          <div className="page" key={index + 1}>
            <img
              src={`path/to/your/images/page${index + 1}.jpg`} // Replace with your image paths
              alt={`Page ${index + 1}`}
            />
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
};

export default FlipBook;
