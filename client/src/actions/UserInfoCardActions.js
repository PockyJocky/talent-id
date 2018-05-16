import callApi from '../apiCaller'

export const addUser = (user) => {
        return (dispatch) => {
            const newUser = {
                firstName: user.firstName || ' ',
                lastName: user.lastName || ' ',
                edipi: user.edipi || ' ',
                rank: user.rank || ' ',
                squadron: user.squadron || ' ',
            };
            return callApi('user/add', 'POST', JSON.stringify(newUser))
                .then(res => dispatch(addUser(res.user)));
        };
};