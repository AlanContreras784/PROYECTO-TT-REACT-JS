import React, {useState} from "react";


function CambiarColorBoton({texto, funcionBoton}){

    const [color, setColor]=useState({backgroundColor: 'orange'})
    
   /* function seleccionColor(){
        (color.backgroundColor==="orange")  ? setColor({backgroundColor: 'white'}) 
        : setColor({backgroundColor: 'orange'})
    }  */

    return(
        <button
        style={color}
        onClick={funcionBoton}
        onMouseOver={()=>setColor({backgroundColor: 'white'})}
        onMouseOut={()=>setColor({backgroundColor: 'orange'})}
        >{texto}
        </button>
    )
}

export default CambiarColorBoton;