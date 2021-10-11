import { MoviesCard } from "./MovieCard";
import movies from "./movies.json";
import styles from "./MoviesGrid.module.css";
import React, { useEffect, useState } from "react";

export function MoviesGrid() {
    //console.log(movies);
    return ( 
        <ul className={styles.moviesGrid}> 
            {movies.map((movie) => ( 
                <MoviesCard key={movie.id} movie={movie}/>
            ))} 
        </ul>
    );
}