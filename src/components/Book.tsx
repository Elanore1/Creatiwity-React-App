import React, { useState } from 'react';
import Page from './Page';
import { PageProps } from '../types/PageProps';
import EditPageModal from './EditPageModal';

// Dynamic Book
function Book({ pages, updatePageContent }: { pages: PageProps[], updatePageContent: (index: number, updatedContent: string, updatedType: string) => void }) {
  //Page to display 
  const [currentPage, setCurrentPage] = useState(0);
  // Function to change the index to the next page
  const nextPage = () => {
    // set current page +1
    setCurrentPage(prevIndex => Math.min(prevIndex + 1, pages.length - 1)) 
  };
  // Function to change the index to the previous page
  const prevPage = () => {
    // set current page -1
    setCurrentPage(prevIndex => Math.max(prevIndex - 1, 0)) 
  };

  return (
    <div>
      <EditPageModal index={currentPage} page={pages[currentPage]} updatePageContent={updatePageContent}/>
      <p>Page: {currentPage + 1}/{pages.length}</p>
      <button style={{ margin: '0 10px' }} onClick={prevPage} disabled={currentPage === 0}>Previous</button>
      <button onClick={nextPage} disabled={currentPage === pages.length - 1} >Next</button>
      <Page content={pages[currentPage].content} type={pages[currentPage].type} />
    </div>
  );
}

export default Book;