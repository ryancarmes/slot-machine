function playSlots(numOfQuarters){
    while(numOfQuarters > 0){
        var pull = Math.floor((Math.random()*100) +1);
        if(pull == 1){
            var winnings = Math.floor((Math.random()*50) + 50);
            console.log("You have won " + winnings + " quarters!");
            return winnings;
        } else {
          console.log("You are out of quarters :( ");
        return 0;
        }
    }
 }
playSlots(100);