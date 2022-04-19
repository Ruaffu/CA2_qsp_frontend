import React from 'react'
import { useState } from 'react';
import apiFacade from "../apiFacade.js";
const Cat = () => {
    const [cat, setCat] = useState("");

    function getCat() {
        apiFacade.fetchCat().then(data => setCat(data));
    }

    return (
        <main style={{ padding: "1rem" }}>
          <h3>{cat.fact}</h3>
          <img src={cat.url}/>
           <button onClick={getCat}>get cat</button>
        </main>
    )
}

export default Cat