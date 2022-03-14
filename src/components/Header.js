import React from "react";

function Header(prop) {
    return (
        <header key={prop.name}>
            <h1>{prop.name}</h1>
        </header>
    )
}

export default Header