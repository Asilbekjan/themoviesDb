import repozitory,{barerToken,baseUrl} from '../repozitory/repozitory'

class Person {
    async getPopilerPersonByName(name){
            const endPoint = `person/popular`
            const movies = await repozitory.get(baseUrl+endPoint,{
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
export default new Person()