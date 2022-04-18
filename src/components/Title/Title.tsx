import React from "react";
import './Title.css'


const Title = (props: any) =>{
    return(
        <h1 className={props.className}>{props.titleContent}</h1>
    )
}

export default Title