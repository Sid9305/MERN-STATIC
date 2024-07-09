// new file : components/Hello.jsx
// jsx : react
// rafce
// filename = component name
// arrow function

import Sample from "./Sample";
const Hello = () => {
  return (
    <>
      <div>Hello</div>
      {/* name('title') */}
      <Sample name = 'Siddhi' roll='213'/>
      <Sample name = 'Manas' roll='211'/>
      <Sample title = 'Prachi' roll='210'/>
      {/* props parameter name and import name should be same */}
    </>
  );
};

// Sample component
// use karungi in Hello Component
// component : function
// if need to use the component in different files then do export

// i want sample to return the greeting

// props : object 
// props = {
//     titlevar: ' title',
//   };

// function Sample(pro) {
//   return <div>Welcome to {pro.titlevar} with roll number {pro.roll}</div>;
// }

// destructing 

// we r trying to use specific named variables
// function Sample({name , rollno , titlevar}) {
//     // make a new file as sample.jsx
//     // in that use props and show content as follows 
//     // name is 
//     // roll no is 
//     // title is 
//     return <div>Welcome to {name} with roll number {rollno} and {titlevar}</div>;
//   }

// // parameterised function
// function name(title){
//     return `Hello ${title}`
//     // string interpolation
// }
// parameterised function : props 

// name('this is title')
export default Hello;
