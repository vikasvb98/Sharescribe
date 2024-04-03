import { useEffect, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { Socket, io } from 'socket.io-client';


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
  const [ socket, setSocket] = useState();
  const [quill, setQuill] = useState();


  useEffect( () => {
        const quillServer = new Quill('#editor', {
            modules: {
              toolbar: toolbarOptions
            },
            theme: 'snow'
          });
          setQuill(quillServer)
    }, [])

    useEffect( () => {
      const socketServer = io('http://localhost:9000');
      setSocket(socketServer)
      return () => {
        socketServer.disconnect();
      }
    },[])

    useEffect( () => {
      if( socket === null || quill === null) return;
      const handelChange = (delta, oldDelta, source) => {
        if( source !== 'user') return;

       socket && socket.emit('send-changes', delta);
      };
      quill &&quill.on('text-change', handelChange);

      return () => {
        quill && quill.off('text-change', handelChange);
      }
    },[quill, socket])

    useEffect( () => {
      if( socket === null || quill === null) return;
      const handelChange = (delta) => {
        quill && quill.updateContents(delta);
      };
      socket && socket.on('receive-changes', handelChange);

      return () => {
        socket && socket.off('receive-changes', handelChange);
      }
    },[quill, socket])

  return (
    <div className=' bg-gray-100 '>
        <div id='editor' className='w-3/4 min-h-screen bg-white shadow-custom mt-2 mx-auto mb-2'></div>
    </div>
    
  )
}

export default Editor