import React from "react";
import "../design/buttonandTable.css"

function ButtonandTable ({apiFetcher}) {
    return (
        <div className="buttons">
            <button className="newuser button" onClick={apiFetcher}>NEW USER</button>
            <button className="adduser button">ADD USER</button>
        </div>
    )
}

export default ButtonandTable;