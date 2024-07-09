import React from "react";

const Propsprac = () => {
  return (
    <>
      <div>Propsprac</div>
      <Kuber roll='214' name={['siddhi\t','stuti']}/>
    </>
  );
};

function Kuber({roll , name}) {
    // const roll = 201
  return (
    <>
      <h1>Hello from Kuber</h1>
      {/* <p>Roll number is {props.roll}</p> */}
      <p>Roll number is {roll}</p>
      <p>name is {name}</p>
    </>
  );
}

// paramterised
// Kuber('214')

// // props : object
// variablename = 'value'

// props = {
//     variablename: 'value',
//   };

// prop.variablename // react (jsx)
// prop[variablename]
export default Propsprac;
