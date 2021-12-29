import React, {useState} from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifSearcherApp = () => {

    // Array con categorias
    const [categories, setcategories] = useState(['']);

    return (
            <>
                <h2>Gif Searcher</h2>
                <AddCategory setcategories = {setcategories} />
                <br></br>
                <hr></hr>
                

                {/* <button onClick={ handleAdd }>Agregar</button> */}
                <ol>
                    {
                        categories.map( category => (
                            // Cuando ejecuto un elemento en vez de codigo van () en vez de {} en la función flecha
                            <GifGrid 
                                key = {category}
                                category = {category}
                            />
                            // return <li key={category}> { category } </li>
                        ))
                    }
                </ol>   
            </> //Fragment implicito
    )
};

export default GifSearcherApp;

