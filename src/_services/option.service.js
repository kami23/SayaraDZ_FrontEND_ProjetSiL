import axios from 'axios';

export const OptionService = {
    getOptions,
    post,
    getOptionbyId,
    put,
    deleteDetail,
    getOptionsbyModeleId
};
function getOptions() {
    //  return axios.get('https://sayaradz-ee-backend.herokuapp.com/api/option', { headers: { "Authorization": JSON.parse(localStorage.getItem('user')).key } })
    return axios.get('https://sayaradz-ee-backend.herokuapp.com/api/option',
    { headers: { "Authorization": 'Token '+JSON.parse(localStorage.getItem('user')).key } })
        .then((response) => {
            console.log(response);
            return response;
        }).catch((err) => {
            console.log(err);
        })
}


function getOptionsbyModeleId(apiEndpoint) {
    //  return axios.get(`https://sayaradz-ee-backend.herokuapp.com/api/Color?codeColor=` + apiEndpoint, { headers: { "Authorization": JSON.parse(localStorage.getItem('user')).key } })
    return axios.get(`https://sayaradz-ee-backend.herokuapp.com/api/option/?modele=` + apiEndpoint,
    { headers: { "Authorization": 'Token '+JSON.parse(localStorage.getItem('user')).key } })
    .then((response) => {
              return response;
          }).catch((err) => {
              console.log(err);
          })
  }

function post(payload) {
    //   return axios.post(`https://sayaradz-ee-backend.herokuapp.com/api/Option/create/`, payload, { headers: { "Authorization": JSON.parse(localStorage.getItem('user')).key } })
    return axios.post(`https://sayaradz-ee-backend.herokuapp.com/api/Option/create/`, payload,
    { headers: { "Authorization": 'Token '+JSON.parse(localStorage.getItem('user')).key } })
        .then((response) => {
            return response;
        }).catch((err) => {
            console.log(err);
        })
}

function getOptionbyId(apiEndpoint) {
    //  return axios.get(`https://sayaradz-ee-backend.herokuapp.com/api/option?codeOption=` + apiEndpoint, { headers: { "Authorization": JSON.parse(localStorage.getItem('user')).key } })
    return axios.get(`https://sayaradz-ee-backend.herokuapp.com/api/option?codeOption=` + apiEndpoint,
    { headers: { "Authorization": 'Token '+JSON.parse(localStorage.getItem('user')).key } })
        .then((response) => {
            return response;
        }).catch((err) => {
            console.log(err);

        })
}

function put(apiEndpoint, payload) {
    // return axios.put(``, payload, { headers: { "Authorization": JSON.parse(localStorage.getItem('user')).key } })
    return axios.put(``, payload)
        .then((response) => {
            return response;
        }).catch((err) => {
            console.log(err);
        })
}

function deleteDetail(id) {
    //  return axios.delete(`https://sayaradz-ee-backend.herokuapp.com/api/modele/delete/` + id, { headers: { "Authorization": JSON.parse(localStorage.getItem('user')).key } })
    return axios.delete(`https://sayaradz-ee-backend.herokuapp.com/api/option/delete/` + id,
    { headers: { "Authorization": 'Token '+JSON.parse(localStorage.getItem('user')).key } })
        .then((response) => {
            return response;
        }).catch((err) => {
            console.log(err);
        })
}
