import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

export default function ViewUser() {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const result = await axios.get(`http://localhost:8080/api/users/${id}`);
                setUser(result.data);
            } catch (error) {
                console.error("Error fetching user", error);
            }
        };
        fetchUser();
    }, [id]);

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    {user ? (
                        <div className="card shadow-sm">
                            <div className="card-header bg-primary text-white text-center">
                                <h4>View User</h4>
                            </div>
                            <div className="card-body">
                                <p><strong>Username:</strong> {user.userName}</p>
                                <p><strong>Name:</strong> {user.name}</p>
                                <p><strong>Email:</strong> {user.email}</p>
                            </div>
                            <div className="card-footer text-center">
                                <Link to="/" className="btn btn-secondary">
                                    Back to Home
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
}
