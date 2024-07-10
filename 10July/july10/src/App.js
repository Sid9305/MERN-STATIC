import "./App.css";

function handleClick(a, b) {
  console.log("button was clicked");
  console.log(a + b);
}

function handleMouseOver(event) {
  alert("mouse over");
}

function copyHandler() {
  alert("copy karna band kar");
}

let name = 'Siddhi'
function handlerChange(event){
  console.log(event.target.value);
  name = event.target.value;
}
function App() {
  // let name;
  return (
    <div className="App">
      {/* a = prompt('Enter number: ')
      b = prompt('Enter number: ') */}
      <div
        style={{ margin: "2em", backgroundColor: "blue", padding: "2em" }}
        // onMouseOver={handleMouseOver}
      >
        <p onCopy={copyHandler}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          dolore tempore odio!
        </p>
      </div>
      {/* <button onClick={()=>{console.log('button1 was clicked')}}>Button1</button> */}
      <button onClick={()=>{handleClick(2,6)}}>Button1</button>
      <input
        type="text"
        onChange={handlerChange}
        // value={'Siddhi'}
        style={{ margin: "2em", padding: "2em" }}
      />
      <p>{name}</p>
    </div>
  );
}

export default App;
