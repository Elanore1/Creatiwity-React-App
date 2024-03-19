import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { PageProps } from '../types/PageProps';

// Popup to add page
function AddPageModal({ addPage }: { addPage: (page: PageProps) => void }) {
  // Boolean for modal page
  let [isOpen, setIsOpen] = useState(false);
  // Text to add 
  const [text, setText] = useState('');
  // Type of the page (image = url, text = text)
  const [type, setType] = useState('text');

  //Submit form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add the page in the book 
    if (type === 'image' || type === 'text') {
      addPage({ content: text, type });
  }
    // Reset element
    setText('');
    setType('text');
  };

  return (
    <div style={{justifyContent: 'center', textAlign: 'center' }}>
      <button className='centerDiv' onClick={() => setIsOpen(true)}>
        Add Page
      </button>
      <div className='centerDiv'>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} style={{ backgroundColor: 'lightblue', color: 'black', maxWidth: '60%', borderRadius: '10px', margin: '0 auto'}}>
          <Dialog.Panel style={{  paddingBottom: '20px', marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Dialog.Title>New Page for the Book</Dialog.Title>
            <Dialog.Description>
              You can choose to add a new text page or an image by giving its URL.
            </Dialog.Description>
            <form className="formContainer" onSubmit={handleSubmit}>
              <div>
                <textarea
                  className="textarea"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Enter some TEXT or an image URL"
                />
              </div>
              <div>
                <select value={type} onChange={(e) => setType(e.target.value)}  style={{ marginBottom: '10px', marginRight: '10px'}}>
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

export default AddPageModal;