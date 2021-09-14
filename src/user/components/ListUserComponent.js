import React from 'react';

const ListUserComponent = ({ users }) => {
    return (
        <table className="table table-striped table-hover">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Gender</th>
            </tr>
            </thead>
            <tbody>
            {
                users.map(item  => {
                    return (
                        <tr key={item.id}>
                            <th scope="row">{item.id}</th>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.gender}</td>
                        </tr>
                    )
                })
            }
            </tbody>

        </table>
    );
};

export default ListUserComponent;
