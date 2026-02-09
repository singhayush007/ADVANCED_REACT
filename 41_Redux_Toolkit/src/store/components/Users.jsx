import React , {useEffect} from 'react'

import {useDispatch} from 'react-redux';

const Users = ()=>{
    const users = useSelector(state=> state.user.users)
    console.log(users)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser());
    }, [])

    return (
        <div>Users</div>
    )
}

export default Users;