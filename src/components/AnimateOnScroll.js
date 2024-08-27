import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function AnimateOnScroll({children, type , initial, duration=1000}) {
    useEffect(() => {
        AOS.init({ duration: duration });
      }, [duration]);
  return (
    <div  data-aos={type} className={`opacity-0 ${initial} transition-transform duration-${duration}`}>
        {children}
    </div>
  )
}

export default AnimateOnScroll