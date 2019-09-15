import { OptionService } from '../_services';
import { history } from '../_helpers';
export const OptionAction = {
    getOptions,
    createOption,
    deleteOptionById,
    getOptionById,
    editOptionInfo,
    onChangeProps,
    getOptionsbyModeleId,
    changeOptionsistModele
};
function getOptions(){
    return dispatch => {
        OptionService.getOptions()
        .then((response)=>{
            dispatch(changeOptionsList(response.data));
        }).catch((err)=>{
            console.log(err);
        })
    };
}
export function changeOptionsList(Option){
    return{
        type: "FETECHED_ALL_Options",
        Option: Option
    }
}


function createOption(payload){
    return dispatch => {
       
        OptionService.post(`https://sayaradz-ee-backend.herokuapp.com/api/option/create/`, payload)
        .then((response)=>{
            dispatch(createOptionInfo());
            history.push('/options');
        })
    }
}


function getOptionById(id){
    return dispatch => {
        OptionService.getOptionbyId(id)
        .then((response)=>{
          dispatch(editOptionDetails(response.data));
        })
    };
}
export function editOptionDetails(Option){
    return{
        type: "Option_DETAIL",
        codeOption:Option[0].codeOption,
        nomOption:Option[0].nomOption
    }
}
function onChangeProps(props, event){
    return dispatch =>{
        dispatch(handleOnChangeProps(props, event.target.value));
    }
}
function editOptionInfo(id, payload){
    return dispatch => {
        OptionService.put(`https://sayaradz-ee-backend.herokuapp.com/api/option?codeOption=`+id, payload)
        .then((response)=>{
            dispatch(updatedOptionInfo());
            history.push('/options');
        })
    }
}
function deleteOptionById(id){
    return dispatch => {
        let apiEndpoint =id;
        OptionService.deleteDetail(apiEndpoint)
        .then((response)=>{
            dispatch(deleteOptionDetails());
            dispatch(OptionAction.getOption());
        })
    };
}

export function handleOnChangeProps(props, value){
    return{
        type: "HANDLE_ON_CHANGE_Option",
        props: props,
        value: value
    }
}

export function getOptionsbyModeleId(id){
    return dispatch => {
        OptionService.getOptionsbyModeleId(id)
        .then((response)=>{
          dispatch(changeOptionsistModele(response.data));
        })
    };
}

export function changeOptionsistModele(Options){
    return{
        type: "FETECHED_Options_per_Modele",
        Option: Option
    }
}

export function updatedOptionInfo(){
    return{
        type: "Option_UPDATED"
    }
}
export function createOptionInfo(){
    return{
        type: "Option_CREATED_SUCCESSFULLY"
    }
}
export function deleteOptionDetails(){
    return{
        type: "DELETED_Option_DETAILS"
    }
}