import React from "react";
import "./Listitems.css"

function ListItems(props){
    const items = props.items
    const ListItems = items.map(item=>{
        return <div className="list" key="item.key">
            <p>{item.text}</p>
        </div>
    })
    return(
       <div>{ListItems}</div>
    )
}
export default ListItems;