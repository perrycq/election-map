//$(document).ready(function() {

var makePolitician = function(name, partyColor) {    
    var politician = {};
    politician.name = name;
    politician.electionResults = null;
    politician.totalVotes = 0;
    politician.partyColor = partyColor;

    politician.totalVotes = function () {

        this.totalVotes = 0;
    
        for (var i = 0; i < this.electionResults.length; i++)
        {
            this.totalVotes = this.totalVotes + this.electionResults[i];
            console.log(this.totalVotes);
        }
    };

    return politician;
};

var winner = null;

var bitcoin = makePolitician("Bitcoin", [132, 17, 11]);
bitcoin.electionResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];

var ethereum = makePolitician("Ethereum", [245, 141, 136]);
ethereum.electionResults = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];

bitcoin.electionResults[4] = 17;
ethereum.electionResults[4] = 38;
bitcoin.electionResults[9] = 1;
ethereum.electionResults[9] = 28;
bitcoin.electionResults[43] = 11;
ethereum.electionResults[43] = 27;


/*var declareWinner = function() {
    if (bitcoin.totalVotes > ethereum.totalVotes){
        winner = bitcoin;
        console.log(bitcoin.name + " is the winner with " + bitcoin.totalVotes + " votes!");
    } else if (ethereum.totalVotes > bitcoin.totalVotes){
        winner = ethereum;
        console.log(ethereum.name + " is the winner with " + ethereum.totalVotes + " votes!");
    } else {
        console.log("It's a draw. We may need a recount!")
    }
};

declareWinner(); */

var setStateResults = function(state) {
    theStates[state].winner = null;

    if (bitcoin.electionResults[state] > ethereum.electionResults[state]){
        theStates[state].winner = bitcoin.name;
    } else if (ethereum.electionResults[state] > bitcoin.electionResults[state]){
        theStates[state].winner = ethereum.name
    }

    var stateWinner = theStates[state].winner;

    if (stateWinner !== null) {
        theStates[state].rgbColor = stateWinner.partyColor;
    } else {
        theStates[state].rgbColor = [11, 32, 57];
    }
}
/////////////////////////////////////////////////////////
    bitcoin.totalVotes();
    ethereum.totalVotes();

    if (bitcoin.totalVotes > ethereum.totalVotes){
        winner = bitcoin;
        console.log(bitcoin.name + " is the winner with " + bitcoin.totalVotes + " votes!");
    } else if (ethereum.totalVotes > bitcoin.totalVotes){
        winner = ethereum;
        console.log(ethereum.name + " is the winner with " + ethereum.totalVotes + " votes!");
    } else {
        winner = "We can't have a tie, redo!";
    }

    var countryInfoTable = document.getElementById("countryResults");
    var row = countryInfoTable.children[0].children[0];
    
    row.children[0].innerText = bitcoin.name;
    row.children[1].innerText = bitcoin.totalVotes;
    row.children[2].innerText = ethereum.name;
    row.children[3].innerText = ethereum.totalVotes;
    row.children[5].innerText = winner;

//});