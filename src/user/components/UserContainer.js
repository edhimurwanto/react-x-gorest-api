import React, {useEffect, useState} from 'react';
import UserService from "../UserService";
import ListUserComponent from "./ListUserComponent";
import {useHistory} from "react-router-dom";

const UserContainer = () => {

    const history =  useHistory();

    const userService = new UserService();
    const [data, setData] = useState([]);

    const fetchData = () => {
        userService.getAll().then(resp => {
            setData(resp.data)
        })
    }

    const handleNewUser = () => {
       history.push('/form-user')
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className={'container'}>
            <hr/>
            <button type="button" className="btn btn-primary" onClick={handleNewUser}>New User</button>
            <ListUserComponent users={data} />
        </div>
    );
};

export default UserContainer;
