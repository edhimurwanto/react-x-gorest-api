import React, { useState } from 'react';
import UserService from "../UserService";
import { useHistory } from "react-router-dom";

const initialPayload = {
    id: "",
    name: "",
    email: "",
    gender: "",
    status: ""
}

const FormUserComponent = () => {

    const history =  useHistory();

    const userService = new UserService();
    const [payload, setPayload] = useState(initialPayload);

    const addUser = () => {
        userService.createUser(payload).then(resp => {
            if(resp.data && resp.data.id){
                alert('User Created.');
                history.push('/users');
            }
        })
    }

    const handleChangeTextInput = (name, text) => {
        setPayload({...payload, [name]: text});
    }

    const handleCancel = () => {
        history.push('/users');
    }

    return (
        <div className='container'>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1"
                       placeholder="Jhon Doe"
                onChange={(event) => handleChangeTextInput('name', event.target.value )}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleFormControlInput1"
                       placeholder="name@example.com"
                       onChange={(event) => handleChangeTextInput('email', event.target.value )}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Gender</label>
                <input type="text" className="form-control" id="exampleFormControlInput1"
                       placeholder="male"
                       onChange={(event) => handleChangeTextInput('gender', event.target.value )}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Status</label>
                <input type="text" className="form-control" id="exampleFormControlInput1"
                       placeholder="active"
                       onChange={(event) => handleChangeTextInput('status', event.target.value )}
                />
            </div>
            <button type="button" className="btn btn-warning" style={{ marginRight: 16 }} onClick={handleCancel}>Cancel</button>
            <button type="button" className="btn btn-primary" onClick={addUser}>Save</button>
        </div>
    );
};

export default FormUserComponent;
