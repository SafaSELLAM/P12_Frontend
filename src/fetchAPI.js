import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS } from "./Mockdatas/mockdatas.js";
import { DataModel } from "./Models/DataModel.js";

/**
 * Base URL for the API.
 * @constant {string}
 */
const API_BASE_URL = 'http://localhost:3000/user';

/**
 * Flag to determine whether to use mock data instead of the API.
 * @constant {boolean}
 */
const SHOULD_USE_MOCK = Boolean(Number(import.meta.env.VITE_APP_USE_MOCK));

/**
 * Fetches data from the API or mock source and processes it into a `DataModel` object.
 * 
 * @async
 * @function fetchData
 * @param {string} url - The API URL to fetch data from.
 * @param {string} type - The type of data to be processed ('user', 'activity', etc.).
 * @returns {Promise<DataModel>} A promise that resolves to a `DataModel` object.
 * @throws Will throw an error if it fails to fetch the data.
 */
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

/**
 * Fetches user data by ID from the API or mock data.
 * 
 * @async
 * @function getUserById
 * @param {number} userId - The ID of the user to fetch data for.
 * @returns {Promise<DataModel>} A promise that resolves to a `DataModel` object with user data.
 * @throws Will throw an error if it fails to fetch the data.
 */
export const getUserById = async (userId) => {
    if (!SHOULD_USE_MOCK) return fetchData(`${API_BASE_URL}/${userId}`, 'user');

    console.log('Using mock data');
    const userData = USER_MAIN_DATA.find(user => user.id === userId);
    if (!userData) throw new Error(`User with id ${userId} not found.`);
    return new DataModel(userData, 'user');
};


/**
 * Fetches user activity data by user ID from the API or mock data.
 * 
 * @async
 * @function getUserActivity
 * @param {number} userId - The ID of the user to fetch activity data for.
 * @returns {Promise<DataModel>} A promise that resolves to a `DataModel` object with activity data.
 * @throws Will throw an error if it fails to fetch the data.
 */
export const getUserActivity = async (userId) => {
    if (!SHOULD_USE_MOCK) return fetchData(`${API_BASE_URL}/${userId}/activity`, 'activity');

    console.log('Using activity mock data');
    const activityData = USER_ACTIVITY.find(activity => activity.userId === userId);
    if (!activityData) throw new Error(`Activity for user id ${userId} not found.`);
    return new DataModel(activityData, 'activity');
};

/**
 * Fetches user activity data by user ID from the API or mock data.
 * 
 * @async
 * @function getUserAverageSessions
 * @param {number} userId - The ID of the user to fetch activity data for.
 * @returns {Promise<DataModel>} A promise that resolves to a `DataModel` object with average session data.
 * @throws Will throw an error if it fails to fetch the data.
 */
export const getUserAverageSessions = async (userId) => {
    if (!SHOULD_USE_MOCK) return fetchData(`${API_BASE_URL}/${userId}/average-sessions`, 'averageSession');

    console.log('Using average-sessions mock data');
    const averageSessionData = USER_AVERAGE_SESSIONS.find(activity => activity.userId === userId);
    if (!averageSessionData) throw new Error(`Average Session for user id ${userId} not found.`);
    return new DataModel(averageSessionData, 'averageSession');
};