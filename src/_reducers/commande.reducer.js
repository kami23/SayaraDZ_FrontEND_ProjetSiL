const initialState = { 
    Commande: [],
    id:'',
    date:'',
    client:'',
    voiture:'',
    options:[],
};
export function Commande(state = initialState, action) {
    switch (action.type) {
        case 'FETECHED_ALL_Commande':

            return {
                ...state,
                Commande: action.Commande
            };

            case 'Commande_DETAIL':
                        return {
                            ...state,
                            id: action.id,
                            date: action.date,
                            client: action.client,
                            voiture: action.idVersion,
                            options: action.options,
                       
                        };
                    case "Commande_UPDATED":
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