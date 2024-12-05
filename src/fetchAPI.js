import { USER_MAIN_DATA, USER_ACTIVITY } from "./Mockdatas/mockdatas.js";
import { DataModel } from "./Models/DataModel.js";
/**
 
*/

const API_BASE_URL = 'http://localhost:3000/user';
const SHOULD_USE_MOCK = Boolean(Number(import.meta.env.VITE_APP_USE_MOCK));

const fetchData = async (url, type) => {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error HTTP ! Status : ${response.status}`);
        const data = await response.json();
        return new DataModel(data, type);
    } catch (error) {
        console.error(`Error while fetching ${type} data:`, error);
        throw error;
    }
};

export const getUserById = async (userId) => {
    if (!SHOULD_USE_MOCK) return fetchData(`${API_BASE_URL}/${userId}`, 'user');

    console.log('Using mock data');
    const userData = USER_MAIN_DATA.find(user => user.id === userId);
    if (!userData) throw new Error(`User with id ${userId} not found.`);
    return new DataModel(userData, 'user');
};

export const getUserActivity = async (userId) => {
    if (!SHOULD_USE_MOCK) return fetchData(`${API_BASE_URL}/${userId}/activity`, 'activity');

    console.log('Using activity mock data');
    const activityData = USER_ACTIVITY.find(activity => activity.userId === userId);
    if (!activityData) throw new Error(`Activity for user id ${userId} not found.`);
    return new DataModel(activityData, 'activity');
};
