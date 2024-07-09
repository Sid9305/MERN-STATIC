// external css : not in same file
import "./App.css";
import Hello from "./components/Hello";
//  div , heading (h1 to h6) , img , a , button , p
export default function App() {
  // return only returns one thing
  // return focus div
  // div support multiple
  return (
    // <div>
    //   <h1>Hello World this is siddhi</h1>
    //   <p>This is paragraph</p>
    // </div>
    // unnecessary components nhi banata : <> </> (fragment)
    // js
    <>
      {/* jsx */}
      <h1>Hello World this is siddhi</h1>
      <p className="class1">This is paragraph part 1</p>
      {/* inline css */}
      <p style={{color: 'white' , backgroundColor : 'black'}}>This is paragraph part 2</p>

      <h2>This is now hello component</h2>
      <Hello />
    </>
  );
}

// ctrl + s : auto save
// export default App;


