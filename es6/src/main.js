import axios from 'axios';

class Api{
    static async getUserInfo(username){
        try{
            const response = await axios.get(`http://api.github.com/users/${username}`);

            console.log(response);
        } catch (err){
            console.warn('Erro na API');
        }
       
    }
}

Api.getUserInfo('matheusrodacki');
Api.getUserInfo('diego3g');