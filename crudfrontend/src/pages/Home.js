import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
    const [users, setUsers] = useState([]);

    // Define the deleteUser function before using it in the JSX
    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/users/${id}`);
            loadUsers(); // Refresh the list after deletion
        } catch (error) {
            console.error("Error deleting user", error);
        }
    };

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            const result = await axios.get("http://localhost:8080/api/users");
            setUsers(result.data);
        } catch (error) {
            console.error("Error loading users", error);
        }
    };

    return (
        <div className="container">
            <div className="py-4">
                <table className="table table-hover table-striped table-bordered shadow-sm">
                    <thead className="table-primary">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Username</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col" className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.userName}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td className="text-center">
                                    <Link className="btn btn-primary btn-sm mx-2" to={`/viewuser/${user.id}`}>
                                        View
                                    </Link>
                                    <Link className="btn btn-warning btn-sm mx-2" to={`/edituser/${user.id}`}>
                                        Edit
                                    </Link>
                                    <button
                                        className="btn btn-danger btn-sm mx-2"
                                        onClick={() => deleteUser(user.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
