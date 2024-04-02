import React from 'react'
import { useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'


const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        
    ['blockquote', 'code-block'],
    ['link', 'image', 'video', 'formula'],
    [{ 'header': 1 }, { 'header': 2 }],               
    [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      
    [{ 'indent': '-1'}, { 'indent': '+1' }],          
    [{ 'direction': 'rtl' }],                         
    [{ 'size': ['small', false, 'large', 'huge'] }], 
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'color': [] }, { 'background': [] }],          
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['clean']                                         
  ];
const Editor = () => {
    useEffect( () => {
        const quill = new Quill('#editor', {
            modules: {
              toolbar: toolbarOptions
            },
            theme: 'snow'
          });
    }, [])
  return (
    <div className=' bg-gray-100 '>
        <div id='editor' className='w-3/4 min-h-screen bg-white shadow-custom mt-2 mx-auto mb-2'></div>
    </div>
    
  )
}

export default Editor