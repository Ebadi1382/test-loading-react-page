import React from "react";

const Comment=({com})=> {
    return(
        <div>
            <ul className="list-group">
                {com.map((Comment)=> (
                     <li className="list-group-item d-flex justify-content-between align-items-center">
                        {Comment.postId}
                     </li>
                ))}
            </ul>
        </div>
    )
}
export default Comment