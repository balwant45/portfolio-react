/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import useMediaQuery from './hooks/useMediaQuery.jsx'
import Navbar from "./scenes/Navbar.jsx";
import DotGroup from './scenes/DotGroup';
import Landing from "./scenes/Landing.jsx";
import LineGradient from "./component/LineGradient.jsx";
import MySkills from "./scenes/MySkills.jsx";
import Projects from "./scenes/Projects.jsx";
function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens=useMediaQuery("(min-width:1060px)");

  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY===0) {setIsTopOfPage(true)};
      if(window.scrollY !==0) setIsTopOfPage(false);
    }
  window.addEventListener('scroll',handleScroll);

  return ()=>window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
  <div className="app bg-deep-blue">
    <Navbar
     isTopOfPage={isTopOfPage}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
    />
    <div className="w-5/6 mx-auto md:h-full">
    {isAboveMediumScreens && (
      <DotGroup
     selectedPage={selectedPage}
     setSelectedPage={setSelectedPage}
    />)}
    <Landing/>
    </div>
<LineGradient/>
<div className="w-5/6 mx-auto md:h-full mb-5">
  <MySkills/>
</div>

<LineGradient/>
<div className="w-5/6 mx-auto ">
  <Projects/>
</div>
  </div>)
}

export default App;
