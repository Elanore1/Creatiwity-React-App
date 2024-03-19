import './styles/App.css';
import Book from './components/Book';
import AddPageModal from './components/AddPageModal';
import React, { useState, useEffect} from 'react';
import { PageProps } from './types/PageProps';
import EditPageModal from './components/EditPageModal';

function App() {
  // Pages of the book
  const [pages, setPages] = useState<PageProps[]>(() => {
    // Get pages from local storage 
    const storedPages = localStorage.getItem('bookPages');
    return storedPages ? JSON.parse(storedPages) : [];
  });

  // Function to add a new page
  const addPage = (page: PageProps) => {
    const updatedPages = [...pages, page];
    setPages(updatedPages);
    // Set pages in local storage
    localStorage.setItem('bookPages', JSON.stringify(updatedPages));
  };

  // Function to update a page
  const updatePageContent = (index: number, updatedContent: string, updatedType: string) => {
    const updatedPages = [...pages];
    const type: 'image' | 'text' = (updatedType === 'image' || updatedType === 'text') ? updatedType : updatedPages[index].type;
    updatedPages[index] = { ...updatedPages[index], content: updatedContent, type};
    setPages(updatedPages);
    localStorage.setItem('bookPages', JSON.stringify(updatedPages));
  };

  useEffect(() => {
    // Get pages from local storage 
    localStorage.setItem('bookPages', JSON.stringify(pages));
  }, [pages]);// When pages value change

  // If we have a page, we display it
  return (
    <div className="App">
      <AddPageModal addPage={addPage}/>
      {pages.length > 0 && <Book pages={pages} updatePageContent={updatePageContent}/>}
    </div>
  );
}

export default App;
