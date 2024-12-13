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

    /**
     * Reformats session data for Recharts usage.
     * Converts day indices (1-7) to abbreviated day names (L, M, M, J, V, S, D).
     *
     * @param {Object} sessions - The sessions data fetched from the API.
     * @returns {Array} Reformatted session data to change days number into days names.
    */
    formatAverageSessions(sessions) {
        const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
        return sessions.map((session) => ({
            day: days[session.day - 1],
            sessionLength: session.sessionLength,
        }))
    }

    formatPerformanceData(data, kind) {
        const translatedKind = {
            1: 'Cardio',
            2: 'Énergie',
            3: 'Endurance',
            4: 'Force',
            5: 'Vitesse',
            6: 'Intensité'
        }
        const formattedData = data.map(item => ({
            subject: translatedKind[item.kind],
            value: item.value
        }));

        const order = Object.values(translatedKind);

        return formattedData.sort((a, b) => {
            return order.indexOf(b.subject) - order.indexOf(a.subject);
        });
    }
}

