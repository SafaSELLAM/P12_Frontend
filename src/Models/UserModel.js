
export class UserModel {
    constructor(data) {
        this.id = data.id;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.age = data.age;
        this.score = data.score;
        this.keyData = this.formatKeyData(data.keyData);
    }

    formatKeyData(keyData) {
        return {
            calorieCount: keyData.calorieCount + 'kCal',
            proteinCount: keyData.proteinCount + 'g',
            carbohydrateCount: keyData.carbohydrateCount + 'g',
            lipidCount: keyData.lipidCount + 'g',
        };
    }
}
