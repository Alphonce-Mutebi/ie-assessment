
const SearchList = (props:any)=>{
    return (
        <>
            {props?.movies.map((movie:any)=>
                <div className='d-flex justify-content-center col mt-4'>
                    <div className="card-container">
                        <img src={movie.Poster}
                         alt='movie-poster'
                         className="img-style"
                         ></img>
                         <div className="overlay">this is a test</div>
                    </div>
                </div>
            
            )}
        </>
    )
}

export default SearchList;