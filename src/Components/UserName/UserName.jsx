import { getUserById } from "../../fetchAPI.js";
import { useState, useEffect } from "react";
import './username.css'

export const UserName = ({ userId }) => {
    const [userName, setUserName] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userData = await getUserById(userId);
                setUserName(userData.firstName);


            } catch (error) {
                setError('Error loading datas.');
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [userId]);

    if (loading) {
        return <p>Chargement...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="userContent column ">
            <h1 id="username">Bonjour <span className="colorPrimary">{userName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏 </p>
        </div>
    )
};