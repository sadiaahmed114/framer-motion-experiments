import TextAnimation from "./components/TextAnimation/TextAnimaton";
import Exit_Enter_Animation from "./components/Exit_Enter_Animation/Exit_Enter_Animation";
import Drag_Animation from "./components/Drag_Animation/Drag_Animation"; 
function App() {
  return (
    <div className="App">
      {/* <h1>Framer Motion Experiments</h1> */}
      <TextAnimation />
      <Exit_Enter_Animation/>
      <Drag_Animation/>
    </div>
  );
}

export default App;
