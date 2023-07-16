import Movie from "../Movie/Movie";

function MovieList({data}) {
    return (
<div style={{display :'flex' , flexWrap:'wrap' , justifyContent : 'space-between'}}>
    {
        data.map((obj, i) => (
        <Movie data = {obj} key={i} />    
        ))
    }
</div>
    );
        
    
}

export default MovieList;