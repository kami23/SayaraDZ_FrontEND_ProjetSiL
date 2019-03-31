import axios from 'axios';

export const ColorService = {
    getColors,
    post,
    getColorbyId,
    put,
};
function getColors() {
  //  return axios.get('https://sayaradz-ee-backend.herokuapp.com/api/Color', { headers: { "Authorization": JSON.parse(localStorage.getItem('user')).key } })
  return axios.get('https://sayaradz-ee-backend.herokuapp.com/api/couleur/')
    .then((response) => {
            console.log(response);
            return response;
        }).catch((err) => {
            console.log(err);
        })
}

function post(payload) {
 //   return axios.post(`https://sayaradz-ee-backend.herokuapp.com/api/Color/create/`, payload, { headers: { "Authorization": JSON.parse(localStorage.getItem('user')).key } })
 return axios.post(`https://sayaradz-ee-backend.herokuapp.com/api/couleur/create/`,payload)
   
 .then((response) => {
            return response;
        }).catch((err) => {
            console.log(err);
        })
}

function getColorbyId(apiEndpoint) {
  //  return axios.get(`https://sayaradz-ee-backend.herokuapp.com/api/Color?codeColor=` + apiEndpoint, { headers: { "Authorization": JSON.parse(localStorage.getItem('user')).key } })
  return axios.get(`https://sayaradz-ee-backend.herokuapp.com/api/couleur/?codeColor=` + apiEndpoint)
    
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
