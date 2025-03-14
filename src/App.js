import TextAnimation from "./components/textanimation/TextAnimaton";
import ExitEnterAnimation from "./components/exit_enter_animation/ExitEnterAnimation";
import DragAnimation from "./components/drag_animation/DragAnimation";
import HoverAndTapAnimations from "./components/hover and tap animation/HoverAndTapAnimations";
import ScrollAnimation from "./components/scroll_animations/ScrollAnimations"
import TriggerScroll from "./components/trigger_scroll_animation/TriggerScroll";
import RevealScrollAnimation from "./components/scroll_reveal_animation/ScrollRevealAnimation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/page_transition/Home'
import About from './components/page_transition/About'
import Nav from './components/page_transition/Nav'

function App() {
  return (
    <BrowserRouter>
    <div>
      {/* <h1>Framer Motion Experiments</h1> */}
      <TextAnimation />
      <ExitEnterAnimation/>
      <DragAnimation/>
      <HoverAndTapAnimations/>
      <div>
      <ScrollAnimation/>
      </div>
      <div>
      <TriggerScroll/>
      </div>
      {/* <PageTransition/> */}
      <div> 
        <Nav/>
        <Routes>
            <Route path = '/' element= {<Home/>}></Route>
            <Route path = '/about' element= {<About/>}></Route>
            </Routes>  
        {/* </BrowserRouter> */}
      </div> 
      <div> 
      <RevealScrollAnimation/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
