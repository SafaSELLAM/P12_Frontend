import { USER_MAIN_DATA } from "./Mockdatas/mockdatas.js";
const API_BASE_URL = 'http://localhost:3000/user';
import { UserModel } from "./Models/UserModel.js";
/**

 */
export const getUserById = async (userId) => {
    const useMock = Boolean(Number(import.meta.env.VITE_APP_USE_MOCK))

    if (useMock) {
        console.log('use mock datas');
        const userData = USER_MAIN_DATA.find(user => user.id === userId);

        if (!userData) {
            throw new Error(`user with id  ${userId} not found.`);
        }
        return new UserModel({
            id: userData.id,
            firstName: userData.userInfos.firstName,
            lastName: userData.userInfos.lastName,
            age: userData.userInfos.age,
            score: userData.score || userData.todayScore,
            keyData: userData.keyData
        });
    } else {
        console.log('Using real API');
        try {
            const response = await fetch(`${API_BASE_URL}/${userId}`);
            if (!response.ok) {
                throw new Error(`Error HTTP ! Status : ${response.status}`);
            }
            const data = await response.json();

            return new UserModel({
                id: userData.id,
                firstName: userData.userInfos.firstName,
                lastName: userData.userInfos.lastName,
                age: userData.userInfos.age,
                score: userData.score || userData.todayScore,
                keyData: userData.keyData
            });
        } catch (error) {
            console.error('Error while fetching user datas:', error);
            throw error;
        }
    }
};
