import React, { useEffect, useState } from 'react'

function TextChanger({text, isArray, interval}) {
    const [currentText,setCurrentText] = useState('');
    const [endValue, setEndValue] = useState(true);
    const [isForward, setIsForward] = useState(true);
    const [index, setIndex] = useState(0);

    useEffect(()=>{
        let texts = [text];
        if (isArray) {
            texts = text;
        }
        const intervalID = setInterval(() => {
            setCurrentText(texts[index].substring(0,endValue));
            if(isForward){
                setEndValue((prev)=>prev+1);
            } else {
                setEndValue((prev)=>prev-1);
            }
            if (endValue >texts[index].length+10){
                setIsForward(false)
            }
            if (endValue < 1) {
                setIsForward(true);
                setIndex((prev) => (prev + 1) % texts.length);
            }
        }, interval);
        return ()=>clearInterval(intervalID,1)
    },[endValue,isForward,index,text,isArray,interval])
  return (
    <div className='transition ease duration-300'>
        {currentText}
    </div>
  )
}

export default TextChanger