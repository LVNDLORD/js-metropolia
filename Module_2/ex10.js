'use strict';
let candidates = [];
const numberCandidates = Number(prompt('Number of candidates?'));

for (let i = 1; i <= numberCandidates; i++) {
    let candidate = {
        name: undefined,
        votes: 0,
    }
    const candidateName = prompt(`Name of Candidate ${i}`);
    candidate.name = candidateName.toLowerCase();
    candidates.push(candidate);
}

console.log(candidates);

// !ASK The program asks each voter in turn who they will vote for. Voter shoud enter candidate name. 
// If the voter enters an empty value instead of the voting number, it will be interpreted as an empty vote.
const numberVoters = Number(prompt('Number of voters?'));

for (let i = 1; i <= numberVoters; i++) {
    let vote = prompt(`Voter ${i}, enter candidate's name: `);
    candidates.forEach(candidate => {
        if (candidate.name === vote.toLowerCase()) {
            candidate.votes += 1;
            console.log(candidate);
        }
        // else if (vote == '') {
        //     emptyVotes += 1;
        //     return;
        //} else {
        //     console.log('Candidate name not in the list.');
        // }
    })
}

console.log(candidates);
// console.log(`empty votes ${emptyVotes}`);

candidates.sort((a, b) => b.votes - a.votes);
console.log(`The winner is ${candidates[0]['name']} with ${candidates[0]['votes']} votes.`);
console.log('results:');
candidates.forEach(candidate => {
    console.log(`${candidate['name']} : ${candidate['votes']} votes`);
})



