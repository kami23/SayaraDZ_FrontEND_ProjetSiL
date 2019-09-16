import { ColorService } from '../_services';
import { history } from '../_helpers';
export const ColorAction = {
    getColors,
    createColor,
    deleteColorById,
    getColorById,
    editColorInfo,
    getColorbyModeleId,
    onChangeProps
};
function getColors(){
    return dispatch => {
        ColorService.getColors()
        .then((response)=>{
            dispatch(changeColorsList(response.data));
        }).catch((err)=>{
            console.log(err);
        })
    };
}
export function changeColorsList(Color){
    return{
        type: "FETECHED_ALL_Colors",
        Color: Color
    }
}


function createColor(payload){
    return dispatch => {
       
        ColorService.post(`https://sayaradz-ee-backend.herokuapp.com/api/Color/create/`, payload)
        .then((response)=>{
            dispatch(createColorInfo());
            history.push('/Colors');
        })
    }
}


function getColorById(id){
    return dispatch => {
        ColorService.getColorbyId(id)
        .then((response)=>{
          dispatch(editColorDetails(response.data));
        })
    };
}
export function editColorDetails(Color){
    return{
        type: "Color_DETAIL",
        code:Color.code,
        nom:Color.nom,
        modele:Color.modele,
        prix:Color.prix
    }
}

export function getColorbyModeleId(id){
    return dispatch => {
        ColorService.getColorbyModeleId(id)
        .then((response)=>{
          dispatch(changeColorsListModele(response.data));
        })
    };
}
export function changeColorsListModele(Colors){
    return{
        type: "FETECHED_Colors_per_Modele",
        Color: Colors
    }
}
function onChangeProps(props, event){
    return dispatch =>{
        dispatch(handleOnChangeProps(props, event.target.value));
    }
}
function editColorInfo(id, payload){
    return dispatch => {
        ColorService.put(id,payload).then((response)=>{
            dispatch(updatedColorInfo());
            history.push('/Colors');
        })
    }
}
function deleteColorById(id){
    return dispatch => {
        let apiEndpoint =id;
        ColorService.deleteDetail(apiEndpoint)
        .then((response)=>{
            dispatch(deleteColorDetails());
            dispatch(ColorAction.getColor());
        })
    };
}

export function handleOnChangeProps(props, value){
    return{
        type: "HANDLE_ON_CHANGE_Color",
        props: props,
        value: value
    }
}

export function updatedColorInfo(){
    return{
        type: "Color_UPDATED"
    }
}
export function createColorInfo(){
    return{
        type: "Color_CREATED_SUCCESSFULLY"
    }
}
export function deleteColorDetails(){
    return{
        type: "DELETED_Color_DETAILS"
    }
}