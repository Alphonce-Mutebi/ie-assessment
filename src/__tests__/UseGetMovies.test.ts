import { getMovies } from "../hooks/UseGetMovies";

describe('Makes get requests to the OMDB APi', ()=>{
    it("makes a successful request to the OMDB api with title params", async () => {
        const response = await getMovies('avengers');
        expect(response.status).toBe(200);
        expect(Array.isArray(response?.data?.Search)).toBe(true);

    },10000)
    it("makes a request to the OMDB api with no title params", async () => {
        const response = await getMovies('');
        expect(response.status).toBe(200);
        expect(response?.data?.Response).toBe("False");;

    },10000);

})


