import { useState , useEffect } from "react";

// let name = 'Siddhi'
// setname , setroll , setbatch 
const EventHandling = () => {

  const [name, setName] = useState("This is name");
  const [RName, setRName] = useState("")
  const [batch, setBatch] = useState("")
  function handlerChange(event) {
    console.log(event.target.value);
    //   name = event.target.value; // this wont work with useState
    setName(event.target.value);
    console.log(name);
  }


// UseEffect hook
 
// // when page renders, it works
// useEffect(() => {
//     alert('Useffect is running...')
// }, []);

// // when page renders, it works
// useEffect(() => {
//     alert('Useffect is running...')
// });

// when page renders, it works
useEffect(() => {
    alert('Useffect is running...')
},[name]);


  return (
    <div>
      <input
        type="text"
        onChange={handlerChange}
        // value={'Siddhi'}
        style={{ margin: "1em", padding: "2em" }}
      />
      
      <p>{name}</p>
      <input
        type="text"
        onChange={(event)=>setRName(event.target.value)}
        // value={'Siddhi'}
        style={{ margin: "1em", padding: "2em" }}
      />
      
      <p>{RName}</p>
      <input
        type="text"
        onChange={(event)=>setBatch(event.target.value)}
        // value={'Siddhi'}s
        style={{ margin: "1em", padding: "2em" }}
      />
      
      <p>{batch}</p>
    </div>
  );
};

export default EventHandling;
