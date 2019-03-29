const initialState = {
    Options: [],
    nomOption: '',
    codeOption: '',
};
export function Option(state = initialState, action) {
    switch (action.type) {
        case 'FETECHED_ALL_Options':

            return {
                ...state,
                Options: action.Options
            };
        case 'Option_DETAIL':
            return {
                ...state,
                nomOption: action.nomOption,
                codeOption: action.codeOption,
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