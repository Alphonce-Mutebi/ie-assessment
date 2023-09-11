import axios from "axios"
import { environment } from "../environment/environment.staging"
import { useQuery } from "react-query"

export const getMovies= async(searchQuery:string)=>{
    return axios.get(
        `${environment.BASE_URL}/?s=${searchQuery}&apikey=${process.env.REACT_APP_API_KEY}`
    );
}

export const useGetMoviesByTitle = (searchQuery:string) =>{
    return useQuery(["MovieResponse",searchQuery],() => getMovies(searchQuery));
}