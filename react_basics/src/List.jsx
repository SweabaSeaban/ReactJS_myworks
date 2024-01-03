import { useState } from "react";

const List = () => {
    const [fname,setFname]=useState('Sweaba');
    const [lname,setLname]=useState('Seaban');
    function handleFname(e)
    {
        setFname(e.target.value);
    }
    function handleLname(e)
    {
        setLname(e.target.value);
    }
    return ( 

            <>
              <label>
                First name:
                <input value={fname} onChange={handleFname} />
              </label>
              <br />
              <label>
                Last name:
                <input value={lname} onChange={handleLname} />
              </label>
              <p><b>Good morning, {fname} {lname}.</b></p>
            </>
         
    );
}
 
export default List;