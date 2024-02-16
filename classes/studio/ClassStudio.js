//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate{
    constructor(name, mass, scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore){
        this.scores.push(newScore);
        return this.scores;

    }
    average(){
        let totalScore = 0;
        for (let i = 0; i < this.scores.length; i++){
            totalScore += this.scores[i];
            
        }
        
        let average = Math.round((totalScore / this.scores.length) * 10) / 10 ;

       return average;

    }
    status(){
        if(this.average() > 90){
            return "Accepted";

        }
        else if(this.average() < 89 || this.average() > 80){
            return "Reserve";

        }
        else if (this.average() > 70 || this.average() < 79){
            return "probationary";

        }
        else if (this.average() < 70){
            return "Rejected";

        }
    }
}

let candidateA = new CrewCandidate("Bubba Bear",135 , [88,85,90]);
let candidateB = new CrewCandidate("Merry Maltese", 1.5, [93,88,97]);
let candidateC = new CrewCandidate("Glad Gator",225,[75,78,62]);


let j = 0;
do { 
    
    let updatedScore = Math.round(Math.random()* 100);
    if (updatedScore > 90){
    
    candidateC.addScore(updatedScore);
    j++;
    }
}  while (candidateC.status() != "Reserve")
        console.log(candidateC.status() + candidateC.scores); 
        console.log(j);








candidateA.addScore(83);
console.log ( `${candidateA.name} 'earned an average test score of ${candidateA.average()}% and has a status of ${candidateA.status()}.'`);
console.log ( `${candidateB.name} 'earned an average test score of ${candidateB.average()}% and has a status of ${candidateB.status()}.'`);
console.log ( `${candidateC.name} 'earned an average test score of ${candidateC.average()}% and has a status of ${candidateC.status()}.'`)
// console.log(candidateA.scores)
// console.log(candidateA,
//     candidateB,
//     candidateC)

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.**