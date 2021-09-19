import React from 'react'

 function Buttons(props) {
     return (
        <>
        <div>
                 <button class={props.class}>{props.name }</button>
             </div>
             </>
    )
}

export default Buttons

    