/**
 * This file contains mock data for users, their activities, average session lengths, and performance statistics.
 * The data is structured for two users with user IDs 12 and 18.
 * 
 * The data includes:
 * - `USER_MAIN_DATA`: Basic information about the users, including their name, age, today's score, and key data (calories, proteins, carbohydrates, and lipids).
 * - `USER_ACTIVITY`: Daily activity data for users, including their weight (kilogram) and calorie consumption for each day.
 * - `USER_AVERAGE_SESSIONS`: The average session length in minutes for each user across a 7-day period.
 * - `USER_PERFORMANCE`: Performance data for users, including various metrics such as cardio, energy, endurance, strength, speed, and intensity.
 * 
 * @module mockData
 */

/**
 * Array containing main data for users.
 * @type {Array<Object>}
 * @property {number} id - The unique identifier of the user.
 * @property {Object} userInfos - The user's personal information.
 * @property {string} userInfos.firstName - The user's first name.
 * @property {string} userInfos.lastName - The user's last name.
 * @property {number} userInfos.age - The user's age.
 * @property {number} todayScore - The user's score for today.
 * @property {Object} keyData - The user's key data (e.g., calories, proteins, carbohydrates, and lipids).
 * @property {number} keyData.calorieCount - The user's daily calorie count.
 * @property {number} keyData.proteinCount - The user's daily protein count.
 * @property {number} keyData.carbohydrateCount - The user's daily carbohydrate count.
 * @property {number} keyData.lipidCount - The user's daily lipid count.
 */
export const USER_MAIN_DATA = [
    {
        id: 12,
        userInfos: {
            firstName: 'Karl',
            lastName: 'Dovineau',
            age: 31,
        },
        todayScore: 0.12,
        keyData: {
            calorieCount: 1930,
            proteinCount: 155,
            carbohydrateCount: 290,
            lipidCount: 50
        }
    },
    {
        id: 18,
        userInfos: {
            firstName: 'Cecilia',
            lastName: 'Ratorez',
            age: 34,
        },
        score: 0.3,
        keyData: {
            calorieCount: 2500,
            proteinCount: 90,
            carbohydrateCount: 150,
            lipidCount: 120
        }
    }
]
/**
 * Array containing activity data for users.
 * @type {Array<Object>}
 * @property {number} userId - The unique identifier of the user.
 * @property {Array<Object>} sessions - An array of activity sessions for the user.
 * @property {string} sessions.day - The day of the session (YYYY-MM-DD format).
 * @property {number} sessions.kilogram - The user's weight on that day (in kilograms).
 * @property {number} sessions.calories - The number of calories consumed on that day.
 */
export const USER_ACTIVITY = [
    {
        userId: 12,
        sessions: [
            {
                day: '2020-07-01',
                kilogram: 80,
                calories: 240
            },
            {
                day: '2020-07-02',
                kilogram: 80,
                calories: 220
            },
            {
                day: '2020-07-03',
                kilogram: 81,
                calories: 280
            },
            {
                day: '2020-07-04',
                kilogram: 81,
                calories: 290
            },
            {
                day: '2020-07-05',
                kilogram: 80,
                calories: 160
            },
            {
                day: '2020-07-06',
                kilogram: 78,
                calories: 162
            },
            {
                day: '2020-07-07',
                kilogram: 76,
                calories: 390
            }
        ]
    },
    {
        userId: 18,
        sessions: [
            {
                day: '2020-07-01',
                kilogram: 70,
                calories: 240
            },
            {
                day: '2020-07-02',
                kilogram: 69,
                calories: 220
            },
            {
                day: '2020-07-03',
                kilogram: 70,
                calories: 280
            },
            {
                day: '2020-07-04',
                kilogram: 70,
                calories: 500
            },
            {
                day: '2020-07-05',
                kilogram: 69,
                calories: 160
            },
            {
                day: '2020-07-06',
                kilogram: 69,
                calories: 162
            },
            {
                day: '2020-07-07',
                kilogram: 69,
                calories: 390
            }
        ]
    }
]
/**
 * Array containing the average session length for users.
 * @type {Array<Object>}
 * @property {number} userId - The unique identifier of the user.
 * @property {Array<Object>} sessions - An array of sessions for the user.
 * @property {number} sessions.day - The day of the session (1-7).
 * @property {number} sessions.sessionLength - The session length in minutes for that day.
 */

export const USER_AVERAGE_SESSIONS = [
    {
        userId: 12,
        sessions: [
            {
                day: 1,
                sessionLength: 30
            },
            {
                day: 2,
                sessionLength: 23
            },
            {
                day: 3,
                sessionLength: 45
            },
            {
                day: 4,
                sessionLength: 50
            },
            {
                day: 5,
                sessionLength: 0
            },
            {
                day: 6,
                sessionLength: 0
            },
            {
                day: 7,
                sessionLength: 60
            }
        ]
    },
    {
        userId: 18,
        sessions: [
            {
                day: 1,
                sessionLength: 30
            },
            {
                day: 2,
                sessionLength: 40
            },
            {
                day: 3,
                sessionLength: 50
            },
            {
                day: 4,
                sessionLength: 30
            },
            {
                day: 5,
                sessionLength: 30
            },
            {
                day: 6,
                sessionLength: 50
            },
            {
                day: 7,
                sessionLength: 50
            }
        ]
    }
]
/**
 * Array containing performance data for users.
 * @type {Array<Object>}
 * @property {number} userId - The unique identifier of the user.
 * @property {Object} kind - The categories of performance data.
 * @property {string} kind.[key] - A performance category (e.g., 'cardio', 'strength').
 * @property {Array<Object>} data - The performance data for the user.
 * @property {number} data.value - The performance value for that category.
 * @property {number} data.kind - The identifier of the performance category.
 */

export const USER_PERFORMANCE = [
    {
        userId: 12,
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity'
        },
        data: [
            {
                value: 80,
                kind: 1
            },
            {
                value: 120,
                kind: 2
            },
            {
                value: 140,
                kind: 3
            },
            {
                value: 50,
                kind: 4
            },
            {
                value: 200,
                kind: 5
            },
            {
                value: 90,
                kind: 6
            }
        ]
    },
    {
        userId: 18,
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity'
        },
        data: [
            {
                value: 200,
                kind: 1
            },
            {
                value: 240,
                kind: 2
            },
            {
                value: 80,
                kind: 3
            },
            {
                value: 80,
                kind: 4
            },
            {
                value: 220,
                kind: 5
            },
            {
                value: 110,
                kind: 6
            }
        ]
    }
]


