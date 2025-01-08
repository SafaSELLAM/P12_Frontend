import { getUserById } from "../../fetchAPI.js";
import { useState, useEffect } from "react";
import './username.css'
/**
 * A functional component that fetches and displays the user's first name based on the provided user ID.
 * It shows a loading message while the data is being fetched, and an error message if the fetch fails.
 * Once the data is successfully fetched, it displays a personalized greeting to the user.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {number} props.userId - The unique ID of the user to fetch data for.
 * 
 * @returns {JSX.Element} The rendered JSX for the user greeting or loading/error message.
 */
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
    if (!userName) return <p>Loading...</p>;
    return (
        <div className="userContent column ">
            <h1 id="username">Bonjour <span className="colorPrimary">{userName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏 </p>
        </div>
    )
};