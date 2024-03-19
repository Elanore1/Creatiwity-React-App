import React, { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { PageProps } from '../types/PageProps';

// Popup to update a page
function EditPageModal({ index, page, updatePageContent }: { index: number, page: PageProps, updatePageContent: (index: number, updatedContent: string, updatedType: string) => void }) {
    // Boolean for modal page
    let [isOpen, setIsOpen] = useState(false);// Pages of the book
    const [pages, setPages] = useState<PageProps[]>(() => {
        // Get pages from local storage 
        const storedPages = localStorage.getItem('bookPages');
        return storedPages ? JSON.parse(storedPages) : [];
    });
    // Text to update 
    const [text, setText] = useState(pages[index]?.content || '');
    // Type of the page (image = url, text = text)
    const [type, setType] =  useState(pages[index]?.type || 'text');

    //Submit form
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Update the page in the book
        updatePageContent(index, text, type);
        // Close modal
        setIsOpen(false);
    };

    useEffect(() => {
        setText(pages[index]?.content);
        setType(pages[index]?.type);
    }, [index]);

    return (
        <div style={{justifyContent: 'center', textAlign: 'center' }}>
            <button className='centerDiv' onClick={() => setIsOpen(true)}>
                Edit Page
            </button>
            <div className='centerDiv'>
                <Dialog open={isOpen} onClose={() => setIsOpen(false)} style={{ backgroundColor: 'lightblue', color: 'black', maxWidth: '60%', borderRadius: '10px', margin: '0 auto'}}>
                    <Dialog.Panel style={{  paddingBottom: '20px', marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Dialog.Title>Edit the page of the Book</Dialog.Title>
                        <form className="formContainer" onSubmit={handleSubmit}>
                            <div>
                                <textarea
                                    className="textarea"
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                />
                            </div>
                            <div>
                            <select value={type} onChange={(e) => setType(e.target.value as "image" | "text")}  style={{ marginBottom: '10px', marginRight: '10px'}}>
                                    <option value="text">Text</option>
                                    <option value="image">Image</option>
                                </select>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                        <button onClick={() => setIsOpen(false)}>Cancel</button>
                    </Dialog.Panel>
                </Dialog>
            </div>
        </div>
    );
}

export default EditPageModal;