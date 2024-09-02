import { Home, Navbar, Experience, Projects, Footer, Resume } from "./components";
import About from "./components/about/About";
import { useState } from "react";


function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleResumeClick = () => {
    setIsResumeOpen(true);
  };

  const handleResumeClose = () => {
    setIsResumeOpen(false);
  };
  return (
   <>
   <div className='bg-[#171d32] h-auto pt-6 w-full overflow-visible'>
    <Navbar onResumeClick={handleResumeClick}/>
    <Resume isOpen={isResumeOpen} onClose={handleResumeClose}/>
    <Home/>
    <About/>
    <Experience/>
    <Projects/>
    <Footer/>
   </div>
   </>
  );
}

export default App;
