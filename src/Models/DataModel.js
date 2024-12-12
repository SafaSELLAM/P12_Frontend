/**
 * Represents the data model for all users different types of data.
 * This class is used to standardize data fetched.
 * 
 * @class DataModel
 * @param {Object} data - The raw data object fetched from API or mockData.
 * @param {'user' | 'activity' | 'averageSession' | 'performance'} type - The type of data to be standardized.
 */
export class DataModel {
    constructor(data, type) {
        this.type = type;

        switch (type) {
            case 'user':
                this.id = data.id;
                this.firstName = data.userInfos.firstName
                this.lastName = data.userInfos.lastName
                this.age = data.userInfos.age
                this.score = data.score || data.todayScore
                this.keyData = this.formatKeyData(data.keyData || {});
                break;

            case 'activity':
                this.userId = data.userId;
                this.sessions = this.formatActivitySessions(data.sessions || []);
                this.minWeight = this.calculateMinWeight(this.sessions);
                break;

            case 'averageSession':
                this.userId = data.userId;
                this.sessions = this.formatAverageSessions(data.sessions || []);
                break;

            case 'performance':
                this.userId = data.userId;
                this.data = this.formatPerformanceData(data.data || [], data.kind || {});
                break;

            default:
                throw new Error(`Unknown type: ${type}`);
        }
    }
    /**
     * Formats the key data of a user : calorie count, protein count, carbohydrate count and Lipid count.
     * 
     * @function formatKeyData
     * @param {Object} keyData - An object containing the key data.
     * @returns {Object} - The formatted key data with units ("kCal", "g").
     */
    formatKeyData(keyData) {
        
        const formatNumber = new Intl.NumberFormat('en-US');
        return {
            calorieCount: formatNumber.format(keyData.calorieCount) + 'kCal',
            proteinCount: keyData.proteinCount + 'g',
            carbohydrateCount: keyData.carbohydrateCount + 'g',
            lipidCount: keyData.lipidCount + 'g',
        };
    }
    /**
     * Formats activity session data to include day, kilogram, and calories.
     * 
     * @function formatActivitySessions
     * @param {Array<Object>} sessions - The raw session data from the API.
     * @returns {Array<Object>} - The formatted session data (focus on changing dates into days).
     */
    formatActivitySessions(sessions) {
        return sessions.map(session => ({
            day: new Date(session.day).getDate(),
            kilogram: session.kilogram,
            calories: session.calories,
        }));
    }
    /**

    * This function determines the smallest `kilogram` value from the session data, subtracts 5, 
    * and rounds it down to the nearest integer using `Math.floor`.
    * 
    * @function calculateMinWeight
    * @param {Array<Object>} sessions - An array of session objects.
    * @returns {number} - The minimum weight adjusted by subtracting 5 and rounded down.
    * 
    */
    calculateMinWeight(sessions) {
        const minKilogram = Math.min(...sessions.map((session) => session.kilogram)) - 5;
        return Math.floor(minKilogram);
    }

    formatAverageSessions(sessions) {

    }

    formatPerformanceData(data, kind) {

    }
}

