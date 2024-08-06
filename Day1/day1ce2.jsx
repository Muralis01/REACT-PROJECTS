import React from 'react';

function Ref_datatypes()
{
  let myobject= {name:"madras"};
  let newobject= myobject;
  newobject.name="Coimbatore";

  let myarray=["a","e","i","o"];
   let newarray= myarray;
   myarray.push("u");
   console.log("myobject : ",myobject.name);
   console.log("newobject : ",newobject.name);
   console.log("myarray : ",myarray);
   console.log("newarray : ",newarray);
   alert("Check the console output!!");
}
function App()
{
    return(
        <div className ="App">
            <h1>Reference data types use same memory</h1>
            <button onClick={Ref_datatypes}>Reference Data Types</button>
        </div>
         );
}
export default App;