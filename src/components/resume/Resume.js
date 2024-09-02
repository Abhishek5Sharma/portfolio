import React, {useState, useEffect, useRef, useCallback} from 'react'
import { MdOutlineClose, MdFileDownload, MdFileDownloadDone } from "react-icons/md";
import Resume1 from './Resume.pdf'

function Resume({isOpen, onClose}) {
    const popupRef = useRef();
    const [isDownload, setIsDownload] = useState(false)

    const handleClickOutside = useCallback((event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsDownload(false);
        onClose();
      }
    }, [onClose]);

    useEffect(() => {  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [handleClickOutside]);

    if (!isOpen) return null;

    const handleDownload = () => {
        const link = document.createElement('a')
        link.href = '/Resume.pdf'
        link.download = 'abhishek_resume.pdf'
        link.click()
        setIsDownload((download)=>!download)
    }

    return (
      <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
        <div ref={popupRef} className='bg-white p-2 rounded-lg shadow-lg md:h-3/4 w-3/4 md:w-1/2'>
            <div className='flex justify-between items-center'>
                <h2 className='text-xl font-semibold'>Resume</h2>
                <div className='flex gap-4'>
                    <button onClick={handleDownload}>
                        {isDownload?<MdFileDownloadDone size={25}/>:<MdFileDownload size={25}/>}
                    </button>
                    <button onClick={()=>{setIsDownload(false);onClose()}}><MdOutlineClose size={25}/></button>
                </div>
            </div>  
            <div className="hidden md:block m-1 h-[94%]">
              <iframe
                src={Resume1}
                title="Resume"
                className="w-full h-full border"
              ></iframe>
            </div>      
        </div>
      </div>
    )
  }

export default Resume