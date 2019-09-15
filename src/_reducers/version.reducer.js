const initialState = { 
    Versions: [],
    pk:'',
    nom:'',
    code:'',
    modele:'',
    prix:0,
    options:[]
};
export function Version(state = initialState, action) {
    switch (action.type) {
        case 'FETECHED_ALL_Versions':

            return {
                ...state,
                Versions: action.Versions
            };

            case 'FETECHED_Versions_per_Modele':

            return {
                ...state,
                Versions: action.Versions
            };
            case 'Version_DETAIL':
                        return {
                            ...state,
                            nom: action.nom,
                            code: action.code,
                            modele: action.modele,
                            pk: action.pk,
                            prix:action.prix,
                            options: action.options
                       
                        };
                    case "Version_UPDATED":
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