import './MovieList.css'
import MovieCard from '../MovieCard/MovieCard'

const MovieList = ({searchResult}) => {
    
    return (
        <ul className="movieList">
            {searchResult.map(post => (
                <MovieCard key={post.id} cardPost={post}/>
            ))}
            {/* {console.log(searchResult)} */}
        </ul>
    )
}

export default MovieList;


