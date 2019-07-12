const initialState = { 
    Versions: [],
    idVersion:'',
    nomVersion:'',
    codeVersion:'',
    modeleVersion:''
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
                            nomVersion: action.nomversion,
                            codeVersion: action.codeVersion,
                            modeleVersion: action.modeleVersion,
                            idVersion: action.idVersion,
                       
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