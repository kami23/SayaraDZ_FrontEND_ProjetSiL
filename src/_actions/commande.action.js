import { CommandeService } from '../_services';
import { history } from '../_helpers';
export const CommandeAction = {
    getCommande,
    createCommande,
    deleteCommandeById,
    getCommandeById,
    editCommandeInfo,
    onChangeProps
};
function getCommande(){
    return dispatch => {
        CommandeService.get()
        .then((response)=>{
            dispatch(changeCommandesList(response.data));
        }).catch((err)=>{
            console.log(err);
        })
    };
}
export function changeCommandesList(Commande){
    return{
        type: "FETECHED_ALL_Commande",
        Commande: Commande
    }
}


function createCommande(payload){
    return dispatch => {
       
        CommandeService.post(payload)
        .then((response)=>{
            dispatch(createUserInfo());
            history.push('/Commandes');
        })
    }
}


function getCommandeById(id){
    return dispatch => {
        CommandeService.getCommandebyId(id)
        .then((response)=>{
            console.log("ress"+JSON.stringify(response.data));
          dispatch(editCommandeDetails(response.data));
        })
    };
}
export function editCommandeDetails(Commande){
    return{
        type: "Commande_DETAIL",
        pk:Commande.pk,
        ref:Commande.ref,
        code:Commande.code,
    }
}
function onChangeProps(props, event){
    return dispatch =>{
        dispatch(handleOnChangeProps(props, event.target.value));
    }
}
function editCommandeInfo(id, payload){
    return dispatch => {
        CommandeService.put(id, payload)
        .then((response)=>{
            dispatch(updatedUserInfo());
            history.push('/Commandes');
        })
    }
}
function deleteCommandeById(id){
    return dispatch => {
        let apiEndpoint =id;
        CommandeService.deleteDetail(apiEndpoint)
        .then((response)=>{
            dispatch(deleteCommandeDetails());
            dispatch(CommandeAction.getCommande());
        })
    };
}

export function handleOnChangeProps(props, value){
    return{
        type: "HANDLE_ON_CHANGE",
        props: props,
        value: value
    }
}

export function updatedUserInfo(){
    return{
        type: "USER_UPDATED"
    }
}
export function createUserInfo(){
    return{
        type: "Commande_CREATED_SUCCESSFULLY"
    }
}
export function deleteCommandeDetails(){
    return{
        type: "DELETED_Commande_DETAILS"
    }
}