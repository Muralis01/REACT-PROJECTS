import React from "react";
 function Team()
 {
    return(
        <div>
            <p>This is Team Functional Component</p>
        </div>
    );
 }
 function World()
 {
    return(
        <div>
            <Team />
        </div>
    );
 }
 export default World;