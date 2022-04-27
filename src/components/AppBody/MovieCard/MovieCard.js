import './MovieCard.css'

const MovieCard = ({cardPost}) => {
    function existTitle() {
        if('title' in cardPost){
            return cardPost.original_title
        } else {
            return cardPost.original_name
        }
    }   

    function existDate() {
        if('release_date' in cardPost){
            return cardPost.release_date
        } else {
            return cardPost.first_air_date
        }
    }

    return (
    <li className='movieCard'>
        <div>
            <img className='moviePoster' src={'https://image.tmdb.org/t/p/w500' + cardPost.poster_path} alt={existTitle()}/>
            <h4 className="movieTitle">{existTitle()}</h4>
            <div className='movieCardInfo'>
                <span>{existDate().slice(0, 4)}</span>|
                <span>{cardPost.vote_average}</span>|
                <span>{cardPost.media_type}</span>|
                <span>{cardPost.original_language}</span>
            </div>
          
        </div>
    </li>
    )
}

export default MovieCard;
