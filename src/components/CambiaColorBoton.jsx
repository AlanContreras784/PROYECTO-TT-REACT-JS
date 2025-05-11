import React, {useState} from "react";


function CambiarColorBoton({texto, funcionBoton}){

    const [color, setColor]=useState({backgroundColor: 'orange'})
    
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