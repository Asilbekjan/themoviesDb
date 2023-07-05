import repozitory , { baseUrl, barerToken } from "./repozitory";
class Movie {
    async getMoviesByName(name) {
        const endPoint = `movie/${name}`
        const movies = await repozitory.get(baseUrl +endPoint,{
            headers:{
                accept: 'application/json',
                Authorization: barerToken
            }
        })
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
    return movies
    }
}
export default new Movie()





