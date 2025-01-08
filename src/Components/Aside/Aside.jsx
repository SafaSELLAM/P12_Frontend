/**
 * @file Aside.jsx
 * @description This file defines the Aside component, which displays user nutritional key data
 * (calories, proteins, lipids, and carbohydrates) using the AsideDatas component.
 */

import { AsideDatas } from "../AsideDatas/AsideDatas.jsx"
import { getUserById } from "../../fetchAPI.js"
import calorieIcon from '../../assets/calories-icon.svg'
import proteinIcon from '../../assets/protein-icon.svg'
import lipidIcon from '../../assets/carbs-icon.svg'
import carbIcon from '../../assets/fat-icon.svg'
import { useEffect, useState } from "react"
import './aside.css'

/**
 * Renders the Aside component to display user key nutritional data.
 * 
 * @component
 * @param {Object} props - Component props.
 * @param {number} props.userId - The ID of the user to fetch data for.
 * @returns {JSX.Element} The Aside component containing key user data or a loading message.
 */
export const Aside = ({ userId }) => {

    const [userKeyData, setUserKeyData] = useState(null);

    useEffect(() => {
        /**
         * Fetches user data by ID and updates the state.
         * Handles errors in case the API request fails.
         */
        const fetchUserData = async () => {
            try {
                const user = await getUserById(userId)
                setUserKeyData(user.keyData)

            } catch (error) {
                console.error(error);
            }
        }
        fetchUserData();
    }, [userId])

    if (!userKeyData) return <p>Loading...</p>;
    // Render the user's key nutritional data
    return (
        <aside className="column">
            <AsideDatas logo={calorieIcon} value={userKeyData.calorieCount} label="Calories" />
            <AsideDatas logo={proteinIcon} value={userKeyData.proteinCount} label="Protéines" />
            <AsideDatas logo={lipidIcon} value={userKeyData.lipidCount} label="Lipides" />
            <AsideDatas logo={carbIcon} value={userKeyData.carbohydrateCount} label="Glucides" />
        </aside>
    )
}