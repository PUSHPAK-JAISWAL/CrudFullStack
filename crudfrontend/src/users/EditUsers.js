import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {
    let navigate = useNavigate();
    const { id } = useParams();

    const [user, setUser] = useState({
        userName: '',
        name: '',
        email: ''
    });

    const { userName, name, email } = user;

    useEffect(() => {
        const loadUser = async () => {
            try {
                const result = await axios.get(`http://localhost:8080/api/users/${id}`);
                setUser(result.data);
            } catch (error) {
                console.error("Error loading user", error);
            }
        };
        loadUser();
    }, [id]);

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/api/users/${id}`, user);
            navigate("/");
        } catch (error) {
            console.error("Error updating user", error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-header bg-primary text-white text-center">
                            <h4>Edit User</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={onSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="userName" className="form-label">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="userName"
                                        name="userName"
                                        value={userName}
                                        onChange={onInputChange}
                                        placeholder="Enter username"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={name}
                                        onChange={onInputChange}
                                        placeholder="Enter full name"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={onInputChange}
                                        placeholder="Enter email address"
                                        required
                                    />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary btn-block mt-2 mx-2 mb-2">
                                        Edit User
                                    </button>
                                    <Link className="btn btn-danger btn-block mt-2 mx-2 mb-2" to="/">
                                        Cancel
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
