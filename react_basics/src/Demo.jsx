import { useState } from "react";
const Demo = () => {

    const [open,setOpen]=useState(false);
    function toggle(){
        setOpen(!open);
    }
    
            
    return ( 
        <div className="demo">
            <h1>Design</h1>
            <div>Fueled by the innate brilliance of the world around us, we channel this insight as our creative inspiration to sculpt the future.</div>
            
            {open && <div>Graphic Design / Web Design / User Interface (UI) Design / User Experience (UX) Design / Logo Design / Branding / Print Design / Digital Illustration / Motion Graphics / 3D Modelling / Animation / Icon Design / Social Media Graphics / Infographic Design / Wire-framing / Prototyping / Design Consultation.</div>}
            <button onClick={toggle}>+</button>
            
        </div>
        
     );
}
 
export default Demo;