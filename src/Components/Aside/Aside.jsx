import { AsideDatas } from "../AsideDatas/AsideDatas.jsx"
import { getUserById } from "../../fetchAPI.js"
import calorieIcon from '../../assets/calories-icon.svg'
import proteinIcon from '../../assets/protein-icon.svg'
import lipidIcon from '../../assets/carbs-icon.svg'
import carbIcon from '../../assets/fat-icon.svg'
import { useEffect, useState } from "react"
import './aside.css'

export const Aside = ({ userId }) => {

    const [userKeyData, setUserKeyData] = useState(null);

    useEffect(() => {

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
    return (
        <aside className="column">
            <AsideDatas logo={calorieIcon} value={userKeyData.calorieCount} label="Calories" />
            <AsideDatas logo={proteinIcon} value={userKeyData.proteinCount} label="Protéines" />
            <AsideDatas logo={lipidIcon} value={userKeyData.lipidCount} label="Lipides" />
            <AsideDatas logo={carbIcon} value={userKeyData.carbohydrateCount} label="Glucides" />
        </aside>
    )
}