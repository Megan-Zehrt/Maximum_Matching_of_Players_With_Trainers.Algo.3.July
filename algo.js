// 2410. Maximum Matching of Players With Trainers



// You are given a 0-indexed integer array players, where players[i] represents the ability of the ith player. You are also given a 0-indexed integer array trainers, where trainers[j] represents the training capacity of the jth trainer.

// The ith player can match with the jth trainer if the player's ability is less than or equal to the trainer's training capacity. Additionally, the ith player can be matched with at most one trainer, and the jth trainer can be matched with at most one player.

// Return the maximum number of matchings between players and trainers that satisfy these conditions.





var matchPlayersAndTrainers = function(players, trainers) {
    players.sort((a, b) => a - b);
    trainers.sort((a, b) => a - b);

    let i = 0;
    for (let j = 0; j < trainers.length; j++) {
        if (i >= players.length) break; // Prevent out-of-bounds access
        if (players[i] <= trainers[j]) {
            i++;
        }
    }

    return i;
};