import { VersionService } from '../_services';
import { history } from '../_helpers';

export const VersionAction = {
    get,
    getVersions,
    deleteVersionById,
    createVersion,
    getVersionById,
    onChangeProps,
    editModeleInfo

};


function get(){
    return dispatch => {
        VersionService.get()
        .then((response)=>{
            dispatch(changeVersionsList(response.data));
        }).catch((err)=>{
            console.log(err);
        })
    };
}
export function changeVersionsList(Versions){
    return{
        type: "FETECHED_ALL_Versions",
        Versions: Versions
    }
}


function getVersions(id){
    return dispatch => {
        VersionService.getVersions(id)
        .then((response)=>{
            dispatch(changeVersionsListModele(response.data));
        }).catch((err)=>{
            console.log(err);
        })
    };
}

export function changeVersionsListModele(Versions){
    return{
        type: "FETECHED_Versions_per_Modele",
        Versions: Versions
    }
}


function deleteVersionById(id){
    return dispatch => {
        let apiEndpoint =id;
        VersionService.deleteDetailById(apiEndpoint)
        .then((response)=>{
            dispatch(deleteVersionDetails());
            dispatch(VersionAction.getVersions());
        })
    };
}

export function deleteVersionDetails(){
    return{
        type: "DELETED_Version_DETAILS"
    }
}


function createVersion(payload){
    return dispatch => {
       VersionService.post(payload)
        .then((response)=>{
            dispatch(createVersionInfo());
            history.push('/versions');
        })
    }
}

export function createVersionInfo(){
    return{
        type: "Version_CREATED_SUCCESSFULLY"
    }
}


function getVersionById(id){
    return dispatch => {
        VersionService.getVersionbyId(id)
        .then((response)=>{
          dispatch(editVersionDetails(response.data));
        })
    };
}

export function editVersionDetails(Version){
    console.log("im here at version action editvers ",Version);
    return{
        type: "Version_DETAIL",
        pk:Version[0].pk,
        nom:Version[0].nom,
        code: Version[0].code,
        options:Version[0].options,
    }
}

function editModeleInfo(id, payload){
    return dispatch => {
        VersionService.put(id, payload)
        .then((response)=>{
            dispatch(updatedVersionInfo());
            history.push('/versions');
        })
    }
}

function onChangeProps(props, event){
    return dispatch =>{
        dispatch(handleOnChangeProps(props, event.target.value));
    }
}
export function handleOnChangeProps(props, value){
    return{
        type: "HANDLE_ON_CHANGE",
        props: props,
        value: value
    }
}

export function updatedVersionInfo(){
    return{
        type: "Version_UPDATED"
    }
}