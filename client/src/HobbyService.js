import axios from 'axios';

const url = 'api/hobbies'

class HobbyService {
    // Get
    static getHobbies() {
        return new Promise( (resolve, reject) => {
            axios.get(`${url}/get`).then((res) => {
                const data = res.data;
                resolve (
                    data
                )
            }).catch((err) => {
                reject(err);
            })
        })
    }

    // Add
    static addHobby(hobby) {
        return axios.post(`${url}/add`, {
            hobby
        })
    }

    // Delete
    static delHobby(hobby) {
        return axios.delete(`${url}/delete/${hobby}`)
    }
}

export default HobbyService;