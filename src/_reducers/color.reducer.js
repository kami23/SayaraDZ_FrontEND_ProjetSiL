const initialState = { 
    Color: [],
    prix:'',
    nom:'',
    code:'',
    modele:''
};
export function Color(state = initialState, action) {
    switch (action.type) {
        case 'FETECHED_ALL_Colors':

            return {
                ...state,
                Color: action.Color
            };
            case 'Color_DETAIL':
                        return {
                            ...state,
                            nom: action.nom,
                            code: action.code,
                            modele: action.modele,
                            prix: action.prix,
                       
                        };
                    case "USER_UPDATED":
                        return state;
                    case "HANDLE_ON_CHANGE_Color":
                        return {
                            ...state,
                            [action.props]: action.value
                        };
                        case "FETECHED_Colors_per_Modele":
                        return {
                            ...state,
                            Color: action.Color
                        };
               
            default:
            return state
        }
    }    