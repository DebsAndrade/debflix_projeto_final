import axios from "axios";

const _config = Object.freeze({
    baseURL: "https://api.themoviedb.org/3",
    apiKey: "0b0bbc3688c9c42667abad3079d5508b",
    language: "pt-BR"
})

const axiosInstance = axios.create({
    baseURL: _config.baseURL
})

export const getPopularMovies = async (withImage = false) => {
    const { data: { results } } = await axiosInstance
        .get("/movie/popular", {
            params: {
                api_key: _config.apiKey,
                language: _config.language,
                page: 1
            }
        })
    return results.map((item) => {
        let movie = {...item}
        if (withImage) {
            movie["image"] = `https://image.tmdb.org/t/p/w300${item.poster_path}`
        }
        return movie
    })
}
