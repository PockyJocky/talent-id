const initialState = {
    user: {
        firstName: '',
        lastName: '',
        edipi: '',
        rank: 'AB',
        squadron: '13 IS'
    }
};

export function userCard(state = initialState , action){
    switch(action.type){
        case 'UPDATE_USER':
            return{
                ...state = ( Object.assign({}, action.user))
            };
        case 'ADD_USER':
            return{
                ...state = ( Object.assign({}, action.user))
            };
        default:
            return state
        }
}