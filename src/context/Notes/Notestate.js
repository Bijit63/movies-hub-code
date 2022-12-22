import React from "react";
import Item from "../../components/Item";
import NoteContext from "./NoteContext";

const Notestate = (props)=>{

    const movies = (type)=>
        {
            return(
            <Item item={type} limit={"yes"} />
                    )
        }

    const state = {"name":"bijit sinha"}
    
    return(
        <NoteContext.Provider value={{movies ,state} }>
            {props.children}
        </NoteContext.Provider>
    )
}


export default Notestate;