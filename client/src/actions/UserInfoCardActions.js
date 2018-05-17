import callApi from '../apiCaller'

export const addUser = (user) => {
        return (dispatch) => {
            const newUser =
                'firstName='+((null != user.firstName)?user.firstName:'')
                                              +'&lastName='+((null != user.lastName)?user.lastName:'')
                                              +'&edipi='+((null != user.edipi)?user.edipi:'')
                                              +'&rank='+((null != user.rank)?user.rank:'')
                                              +'&squadron='+((null != user.squadron)?user.squadron:'');
            return callApi('user/add', 'POST', newUser)
        };
};