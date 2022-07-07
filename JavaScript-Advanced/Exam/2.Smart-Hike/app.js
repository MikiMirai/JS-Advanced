class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        if (this.goals.hasOwnProperty(peak)) {
            return `${peak} has already been added to your goals`;
        }

        this.goals[peak] = altitude;

        return `You have successfully added a new goal - ${peak}`
    }

    hike(peak, time, difficultyLevel) {
        if (!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`);
        }

        if (this.resources == 0) {
            throw new Error("You don't have enough resources to start the hike");
        }

        if (this.resources < time * 10) {
            return "You don't have enough resources to complete the hike";
        }

        this.resources -= time * 10;
        this.listOfHikes.push({ peak: peak, time: time, difficultyLevel: difficultyLevel });

        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
    }

    rest(time) {
        if (this.resources + time * 10 > 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        }

        this.resources += time * 10;
        
        return `You have rested for ${time} hours and gained ${time * 10}% resources`;
    }

    showRecord(criteria) {
        if (this.listOfHikes == undefined) {
            return `${username} has not done any hiking yet`;
        }

        if (criteria == "hard") {
            let sorted = this.listOfHikes.filter(x => x.difficultyLevel == criteria).sort((a, b) => a.time - b.time);
            if (sorted.length == 0) {
                return `${this.username} has not done any ${criteria} hiking yet`
            }
            return `${this.username}'s best ${criteria} hike is ${sorted[0].peak} peak, for ${sorted[0].time} hours`;
        }

        if (criteria == "easy") {
            let sorted = this.listOfHikes.filter(x => x.difficultyLevel == criteria).sort((a, b) => a.time - b.time);
            if (sorted.length == 0) {
                return `${this.username} has not done any ${criteria} hiking yet`
            }

            return `${this.username}'s best ${criteria} hike is ${sorted[0].peak} peak, for ${sorted[0].time} hours`;
        }

        if (criteria == "all") {
            const hikes = this.listOfHikes.map((x) => `${this.username} hiked ${x.peak} for ${x.time} hours`);
            return `All hiking records:\n${hikes.join("\n")}`;
        }
    }
}

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));

