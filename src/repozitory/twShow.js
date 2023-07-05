import repozitory,{barerToken, baseUrl} from '../repozitory/repozitory'


class TwShow {
    async getTwshowByName (name) {
        const endPoint = `tv/${name}`
        const movies = await repozitory.get(baseUrl + endPoint,{
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
export default new TwShow()