
const SearchList = (props:any)=>{
    return (
        <>
            {props?.movies.map((movie:any)=>
                <div className='d-flex justify-content-center col mt-4'>
                    <div className="card-container">
                        <img src={movie?.Poster}
                         alt='movie-poster'
                         className="img-style"
                         ></img>
                         <div className="overlay">
                            <h6 className="title-style">{movie?.Title} • {movie?.Year}</h6>
                         </div>
                    </div>
                </div>
            
            )}
        </>
    )
}

export default SearchList;