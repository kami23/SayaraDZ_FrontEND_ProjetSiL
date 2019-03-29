const initialState = { 
    Colors: [],
    idColor:'',
    nomColor:'',
    codeColor:'',
    modeleColor:''
};
export function Color(state = initialState, action) {
    switch (action.type) {
        case 'FETECHED_ALL_Colors':

            return {
                ...state,
                Colors: action.Colors
            };
            case 'Color_DETAIL':
                        return {
                            ...state,
                            nomColor: action.nomColor,
                            codeColor: action.codeColor,
                            modeleColor: action.modeleColor,
                            idColor: action.idColor,
                       
                        };
                    case "USER_UPDATED":
                        return state;
                    case "HANDLE_ON_CHANGE":
                        return {
                            ...state,
                            [action.props]: action.value
                        };
               
            default:
            return state
        }
    }    