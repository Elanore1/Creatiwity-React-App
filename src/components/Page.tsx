import React from 'react';
import { PageProps } from '../types/PageProps';

// Page that display plain text or an image 
function Page({ content, type }: PageProps) {
  return (
    <div className="page">
      {type === 'text' ? <p>{content}</p> : <img src={content} alt="Page" />}
    </div>
  );
}

export default Page;