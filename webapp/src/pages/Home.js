import React from "react";

export const Home = (props) => {
    fetch('https://localhost:8080/api/User/Discovery')
    .then(response => {console.log(response.json())})
    .then(data => {console.log(data)})

    return (
        <div>
            <h1>This is the Home page</h1>
        </div>
    );
}