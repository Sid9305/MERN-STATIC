import "./App.css";
import useMousePointer from "./utils/useMousePointer";
function App() {
  // const location = useMousePointer();
  // console.log(location.x, location.y);
  const {x , y} = useMousePointer();
  console.log(x, y);
  return (
    <div className="App">
      <h1>This is App</h1>
      <p>x: {x} and y: {y}</p>
    </div>
  );
}

export default App;
