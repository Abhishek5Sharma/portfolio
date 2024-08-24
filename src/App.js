import { Home, Navbar, Experience, Projects, Footer } from "./components";
import About from "./components/about/About";


function App() {
  return (
   <>
   <div className='bg-[#171d32] h-auto pt-6 w-full overflow-visible'>
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <Experience></Experience>
    <Projects></Projects>
    <Footer></Footer>
   </div>
   </>
  );
}

export default App;
