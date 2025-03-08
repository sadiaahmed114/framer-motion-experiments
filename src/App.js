import TextAnimation from "./components/textanimation/TextAnimaton";
import ExitEnterAnimation from "./components/exit_enter_animation/ExitEnterAnimation";
import DragAnimation from "./components/drag_animation/DragAnimation";
import HoverAndTapAnimations from "./components/hover and tap animation/HoverAndTapAnimations";
import ScrollAnimation from "./components/react_scroll_animations/ReactScrollAnimations"

function App() {
  return (
    <div>
      {/* <h1>Framer Motion Experiments</h1> */}
      <TextAnimation />
      <ExitEnterAnimation/>
      <DragAnimation/>
      <HoverAndTapAnimations/>
      <ScrollAnimation/>
    </div>
  );
}

export default App;
