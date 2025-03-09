import TextAnimation from "./components/textanimation/TextAnimaton";
import ExitEnterAnimation from "./components/exit_enter_animation/ExitEnterAnimation";
import DragAnimation from "./components/drag_animation/DragAnimation";
import HoverAndTapAnimations from "./components/hover and tap animation/HoverAndTapAnimations";
import ScrollAnimation from "./components/scroll_animations/ScrollAnimations"
import TriggerScroll from "./components/trigger_scroll_animation/TriggerScroll";
import PageTransition from "./components/page_transition/PageTransition";

function App() {
  return (
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
      <PageTransition/>
    </div>
  );
}

export default App;
