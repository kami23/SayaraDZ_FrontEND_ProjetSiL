import axios from 'axios';

export const CommandeService = {
    get,
    post,
    put,
    deleteDetail,
    getCommandebyId
};
function get(apiEndpoint) {
    return axios.get('https://sayaradz-ee-backend.herokuapp.com/api/commande')
        .then((response) => {
            return response;
        }).catch((err) => {
            console.log(err);
        })
}

function post(payload) {
    return axios.post(`https://sayaradz-ee-backend.herokuapp.com/api/commande/create`, payload)
        .then((response) => {
            return response;
        }).catch((err) => {
            console.log(err);
        })
}

function getCommandebyId(apiEndpoint) {
  //  return axios.get(`https://sayaradz-ee-backend.herokuapp.com/api/Commande?idCommande=` + apiEndpoint, { headers: { "Authorization": JSON.parse(localStorage.getItem('user')).key } })
    return axios.get(`https://sayaradz-ee-backend.herokuapp.com/api/commande/detail/` + apiEndpoint +`/`)
  
    .then((response) => {
            return response;
        }).catch((err) => {
            console.log(err);

        })

}

function put(id, payload) {
    
    return axios.put('https://sayaradz-ee-backend.herokuapp.com/api/commande/update/'+id, payload)
        .then((response) => {
            return response;
        }).catch((err) => {
            console.log(err);
        })
}

function deleteDetail(id) {
  //  return axios.delete(`https://sayaradz-ee-backend.herokuapp.com/api/Commande/delete/` + id, { headers: { "Authorization": JSON.parse(localStorage.getItem('user')).key } })
    return axios.delete(`https://sayaradz-ee-backend.herokuapp.com/api/commande/delete/` + id)
 
    .then((response) => {
            return response;
        }).catch((err) => {
            console.log(err);
        })
}

/*function getOptions() {
    let options = {};
    if (localStorage.getItem('token')) {
        options.headers = { 'x-access-token': localStorage.getItem('token') };
    }
    return options;
}*/