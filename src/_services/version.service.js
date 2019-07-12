import axios from 'axios';

export const VersionService = {
    get,
    getVersions,
    post,
    getVersionbyId,
    put,
    deleteDetail
};
function getVersions(id) {
    console.log("idService",id);
   // return axios.get('https://sayaradz-ee-backend.herokuapp.com/api/version?modeleVersion='+id, { headers: { "Authorization": JSON.parse(localStorage.getItem('user')).key } })
   return axios.get('https://sayaradz-ee-backend.herokuapp.com/api/version/?modeleId='+id)
     
   .then((response) => {
            console.log(response);
            return response;
        }).catch((err) => {
            console.log(err);
        })
}

function get() {
   // return axios.get('https://sayaradz-ee-backend.herokuapp.com/api/version?modeleVersion='+id, { headers: { "Authorization": JSON.parse(localStorage.getItem('user')).key } })
   return axios.get('https://sayaradz-ee-backend.herokuapp.com/api/version')
     
   .then((response) => {
            console.log(response);
            return response;
        }).catch((err) => {
            console.log(err);
        })
}
function post(payload) {
 //   return axios.post(`https://sayaradz-ee-backend.herokuapp.com/api/version/create/`, payload, { headers: { "Authorization": JSON.parse(localStorage.getItem('user')).key } })
 return axios.post(`https://sayaradz-ee-backend.herokuapp.com/api/version/create/`, payload)
   
 .then((response) => {
            return response;
        }).catch((err) => {
            console.log(err);
        })
}

function getVersionbyId(apiEndpoint) {
  //  return axios.get(`https://sayaradz-ee-backend.herokuapp.com/api/version?idVersion=` + apiEndpoint, { headers: { "Authorization": JSON.parse(localStorage.getItem('user')).key } })
  return axios.get(`https://sayaradz-ee-backend.herokuapp.com/api/version?idVersion=` + apiEndpoint)
    
  .then((response) => {
            return response;
        }).catch((err) => {
            console.log(err);

        })
}

function put(id, payload) {

    return axios.put('https://sayaradz-ee-backend.herokuapp.com/api/version/update/'+id, payload, 
    { headers: { "Authorization": JSON.parse(localStorage.getItem('user')).key } })
        .then((response) => {
            return response;
        }).catch((err) => {
            console.log(err);
        })
}

function deleteDetail(id) {
    //  return axios.delete(`https://sayaradz-ee-backend.herokuapp.com/api/modele/delete/` + id, { headers: { "Authorization": JSON.parse(localStorage.getItem('user')).key } })
      return axios.delete(`https://sayaradz-ee-backend.herokuapp.com/api/Version/delete/` + id)
   
      .then((response) => {
              return response;
          }).catch((err) => {
              console.log(err);
          })
  }
  