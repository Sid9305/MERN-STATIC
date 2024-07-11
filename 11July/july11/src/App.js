import "./App.css";
import { useEffect, useState } from "react";
import PostCard from "./components/PostCard";

const getPosts = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await response.json();
  console.log(data);
  return data;

  // return await response.json();
};

function App() {
  const [data, setData] = useState();
  // whenever my page renders i want it to fetch
  useEffect(() => {
    getPosts().then((d) => {setData(d)});
  }, []);

  return <div className="App"> 
    {/* condition ? true : false */}
    {/* {data ? data.map((obj)=><p>Title : {obj.title}</p>) : <h1>No data found</h1>} */}
    {data ? data.map((obj)=><PostCard title={obj.title} body={obj.body}/>) : <h1>No data found</h1>}
  </div>;
}

export default App;
