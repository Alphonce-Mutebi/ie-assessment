import { useGetMoviesByTitle } from "../hooks/UseGetMovies";

const SearchList = (props:any)=>{
    const { data, isLoading } = useGetMoviesByTitle(props?.search);
    const apiResponse = data?.data?.Search
      return (
        <>
        {
            isLoading?(
                <h1 className="text-light text-center mt-4">Loading...</h1>
            ):(
                <>
                    {apiResponse?.map((movie:any)=>
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

        </>
    )

}

export default SearchList;