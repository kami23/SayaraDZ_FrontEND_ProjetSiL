import axios from 'axios';

export const ModeleService = {
    get,
    post,
    put,
    deleteDetail,
    getModelebyId
};
function get(apiEndpoint) {
    return axios.get('https://sayaradz-ee-backend.herokuapp.com/api/modele')
        .then((response) => {
            console.log(response);
            return response;
        }).catch((err) => {
            console.log(err);
        })
}

function post(payload) {
    return axios.post(`https://sayaradz-ee-backend.herokuapp.com/api/modele/create/`, payload)
        .then((response) => {
            return response;
        }).catch((err) => {
            console.log(err);
        })
}

function getModelebyId(apiEndpoint) {
  //  return axios.get(`https://sayaradz-ee-backend.herokuapp.com/api/modele?idModele=` + apiEndpoint, { headers: { "Authorization": JSON.parse(localStorage.getItem('user')).key } })
    return axios.get(`https://sayaradz-ee-backend.herokuapp.com/api/modele?idModele=` + apiEndpoint)
  
    .then((response) => {
            return response;
        }).catch((err) => {
            console.log(err);

        })

}

function put(apiEndpoint, payload) {
    return axios.put(apiEndpoint, payload, getOptions())
        .then((response) => {
            return response;
        }).catch((err) => {
            console.log(err);
        })
}

function deleteDetail(id) {
  //  return axios.delete(`https://sayaradz-ee-backend.herokuapp.com/api/modele/delete/` + id, { headers: { "Authorization": JSON.parse(localStorage.getItem('user')).key } })
    return axios.delete(`https://sayaradz-ee-backend.herokuapp.com/api/modele/delete/` + id)
 
    .then((response) => {
            return response;
        }).catch((err) => {
            console.log(err);
        })
}

function getOptions() {
    let options = {};
    if (localStorage.getItem('token')) {
        options.headers = { 'x-access-token': localStorage.getItem('token') };
    }
    return options;
}