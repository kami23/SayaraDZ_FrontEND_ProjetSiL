    import { ModeleService } from '../_services';
    import { history } from '../_helpers';
    export const ModeleAction = {
        getModele,
        createModele,
        deleteModeleById,
        getModeleById,
        editModeleInfo,
        onChangeProps
    };
    function getModele(){
        return dispatch => {
            ModeleService.get()
            .then((response)=>{
                dispatch(changeModelesList(response.data));
            }).catch((err)=>{
                console.log(err);
            })
        };
    }
    export function changeModelesList(Modele){
        return{
            type: "FETECHED_ALL_Modele",
            Modele: Modele
        }
    }
    
    
    function createModele(payload){
        return dispatch => {
           
            ModeleService.post(payload)
            .then((response)=>{
                dispatch(createUserInfo());
                history.push('/modeles');
            })
        }
    }

    
    function getModeleById(id){
        return dispatch => {
            ModeleService.getModelebyId(id)
            .then((response)=>{
                console.log("ress"+JSON.stringify(response.data));
              dispatch(editModeleDetails(response.data));
            })
        };
    }
    export function editModeleDetails(Modele){
        return{
            type: "Modele_DETAIL",
            idModele:Modele[0].idModele,
            nomModele:Modele[0].nomModele,
            codeModele:Modele[0].codeModele,
            couleur_set:Modele[0].couleur_set
        }
    }
    function onChangeProps(props, event){
        return dispatch =>{
            dispatch(handleOnChangeProps(props, event.target.value));
        }
    }
    function editModeleInfo(id, payload){
        return dispatch => {
            ModeleService.put(id, payload)
            .then((response)=>{
                dispatch(updatedUserInfo());
                history.push('/modeles');
            })
        }
    }
    function deleteModeleById(id){
        return dispatch => {
            let apiEndpoint =id;
            ModeleService.deleteDetail(apiEndpoint)
            .then((response)=>{
                dispatch(deleteModeleDetails());
                dispatch(ModeleAction.getModele());
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
            type: "USER_CREATED_SUCCESSFULLY"
        }
    }
    export function deleteModeleDetails(){
        return{
            type: "DELETED_MODELE_DETAILS"
        }
    }