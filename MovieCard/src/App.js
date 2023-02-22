import {useState, useEffect} from "react";

import MovieCard  from "./MovieCard";
import './App.css'
import SearchIcon from './search.svg'
//db5757e6

// creating a static variable for getting info from the site
const API_URL = 'http://www.omdbapi.com?apikey=db5757e6'


//useEffect hook will be used to get the data from the URL 
const App =()=> {
    const [movies, setMovies]= useState([]);
    const [searchTerm, setSearchTerm]= useState([]);


    //function to fetch movies 
    //async -> asynchronous data .i.e it takes some time to fetch this data
    const searchMovies = async (title)=> {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        setMovies(data.Search);
    }
    //useEffect accepts a callback function and an empty dependency array
    useEffect(()=> {
        searchMovies('Spiderman');
    }, []);
    return (
        <div className="app">
            <h1> MovieLand</h1>
            <div className="search">
                <input
                    placeholder="Search for movies"
                    value = {searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt= "search"
                    onClick={()=> searchMovies(searchTerm)}
                />
            </div>
            {
                movies?.length >0?(
                    <div className="container">
                         {movies.map((movie)=>(<MovieCard movie ={movie}/>) )}
                    </div>
                ):(
                    <div className="empty">
                        <h2>No Movies found</h2>
                    </div>
                )
            }
            
        </div>
    );
}

export default App;