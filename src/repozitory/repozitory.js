import Axios from 'axios'
export const baseUrl='https://api.themoviedb.org/3/'
export const cantentUrl ='https://image.tmdb.org/t/p/w500'
export const barerToken ='Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzE4OWQ0NmFlOGMxNzJhNGU4NTRiZTczYTAxMjM3MCIsInN1YiI6IjY0OWVlMjhhMDkxZTYyMDBhZDU1MGZjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LP9rKphMlbpDodR9VuNf0p0gA2PDi3HsBafnazcMFU8'

const client = Axios.create({
    baseURL : baseUrl,
})
export default client