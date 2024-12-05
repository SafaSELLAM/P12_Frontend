
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

    formatKeyData(keyData) {
        return {
            calorieCount: keyData.calorieCount + ' kCal',
            proteinCount: keyData.proteinCount + ' g',
            carbohydrateCount: keyData.carbohydrateCount + ' g',
            lipidCount: keyData.lipidCount + ' g',
        };
    }

    formatActivitySessions(sessions) {
        return sessions.map(session => ({
            day: new Date(session.day).getDate(),
            kilogram: session.kilogram,
            calories: session.calories,
        }));
    }
    formatAverageSessions(sessions) {

    }

    formatPerformanceData(data, kind) {

    }
}

