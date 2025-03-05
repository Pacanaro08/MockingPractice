import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Info = () => {
    const [userInfo, setUserInfo] = useState({});
    const navigate = useNavigate();

    const logOut = () => {
        navigate('../')
    }

    useEffect(() => {
        fetch('/api/user_info')
            .then(userInfoResponse => userInfoResponse.json())
            .then(userInfo => {
                setUserInfo(userInfo);
                console.log(userInfo);
            })
            .catch(error => {
                console.error("Erro ao buscar informações: ", error);
            });
    }, []);

    return (
        <div className="bg">
            <div className="container">
                <div className="square">
                    <h2>Info</h2>
                    {!userInfo.age && !userInfo.color && !userInfo.name ? (
                        <p>Loading...</p>
                    ) : (
                        <>
                            <input type="text" id="age" placeholder={`Age: ${userInfo.age}`} className="input" value={userInfo.age} disabled />
                            <input type="text" id="color" placeholder={`Color: ${userInfo.color}`} className="input" value={userInfo.color} disabled />
                            <input type="text" id="name" placeholder={`Name: ${userInfo.name}`} className="input" value={userInfo.name} disabled />
                        </>
                    )}
                    <button className="button" onClick={logOut}>Logout</button>
                </div>
            </div>
        </div>
    );
}

export default Info