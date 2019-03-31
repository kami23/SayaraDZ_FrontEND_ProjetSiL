            const initialState = { 
                Modele: [],
                idModele:'',
                nomModele:'',
                codeModele:'',
                couleurCompatible:[]
            };
            export function Modele(state = initialState, action) {
                switch (action.type) {
                    case 'FETECHED_ALL_Modele':

                        return {
                            ...state,
                            Modele: action.Modele
                        
                        };
                    case 'Modele_DETAIL':
                    console.log("reducer"+action.nom)
                        return {
                            ...state,
                            idModele: action.idModele,
                            nomModele: action.nomModele,
                            codeModele: action.codeModele,
                            couleurCompatible:action.couleurCompatible
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