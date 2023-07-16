import { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";

function Home() {

    const [data, setData] = useState([]);
    
    async function getTrending() {
        const url = process.env.REACT_APP_SERVER_URL
        const response = await fetch(`${url}/trending`);
        const trendingMovies = await response.json();
        setData(trendingMovies);
    }
        // getTrending();

    useEffect(() => {
        getTrending();
    }, []);

    return (
      <MovieList data = {data}/>
    );
}

export default Home;