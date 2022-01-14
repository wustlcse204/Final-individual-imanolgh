document.getElementById("standingsText").style.display = 'none';
document.getElementById("TGStext").style.display = 'none';
function shownUser(id) {
    document.getElementById("startofText").style.display ="none";
    var apiLink = "https://api.football-data.org/v2/competitions/" + id + "/standings?standingType=TOTAL";
    var XMLHttpreq = new XMLHttpRequest();
    XMLHttpreq.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            var JSONreturn = JSON.parse(this.responseText);
            var table = JSONreturn.standings[0].table;
            clear();
            tableLoad();
            document.getElementById("standingsText").style.display = 'block';
            i = 0;
            while (i < table.length) {
                let Row = document.createElement("tr");
                let pos = document.createElement("td");
                let textPosition = document.createTextNode(i + 1);
                pos.appendChild(textPosition);
                pos.style.textAlign = "center";
                Row.appendChild(pos);
                let cf = document.createElement("td");
                let cfText = document.createTextNode(table[i].team.name);
                cf.appendChild(cfText);
                cf.style.textAlign = "left";
                Row.appendChild(cf);
                let games = document.createElement("td");
                let gamesText = document.createTextNode(table[i].playedGames);
                games.appendChild(gamesText);
                Row.appendChild(games);
                let numDubs = document.createElement("td");
                let dubsText = document.createTextNode(table[i].won);
                numDubs.appendChild(dubsText);
                Row.appendChild(numDubs);
                let numTies = document.createElement("td");
                let tiesText = document.createTextNode(table[i].draw);
                numTies.appendChild(tiesText);
                Row.appendChild(numTies);
                let numLoss = document.createElement("td");
                let losesText = document.createTextNode(table[i].lost);
                numLoss.appendChild(losesText);
                Row.appendChild(numLoss);
                let golsinfavor = document.createElement("td");
                let golsinfavorText = document.createTextNode(table[i].goalsFor);
                golsinfavor.appendChild(golsinfavorText);
                Row.appendChild(golsinfavor);
                let golsAgainst = document.createElement("td");
                let golsAgainstText = document.createTextNode(table[i].goalsAgainst);
                golsAgainst.appendChild(golsAgainstText);
                Row.appendChild(golsAgainst);
                let golDifferential = document.createElement("td");
                let golDifferentialText = document.createTextNode(table[i].goalDifference);
                golDifferential.appendChild(golDifferentialText);
                Row.appendChild(golDifferential);
                let numPoints = document.createElement("td");
                let pointsText = document.createTextNode(table[i].points);
                numPoints.appendChild(pointsText);
                Row.appendChild(numPoints);
                document.getElementById("standings").appendChild(Row);
                i++;
            } 
            
                
            
        }
    };
    XMLHttpreq.open("GET", apiLink, true);
    XMLHttpreq.setRequestHeader('X-Auth-Token', '336c6c3d23f64ef2a24ca14792bff8c7');
    XMLHttpreq.send();
    var apiLink2 = "https://api.football-data.org/v2/competitions/" + id + "/scorers";
    var XMLHttpreq2 = new XMLHttpRequest();
    XMLHttpreq2.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var JSONreturn = JSON.parse(this.responseText);
            var table = JSONreturn.scorers;
            showScorers();
            document.getElementById("TGStext").style.display = 'block';
            i = 0;
            while (i < table.length) {
                let Row = document.createElement("tr");
                let plName = document.createElement("td");
                let plNameText = document.createTextNode(table[i].player.name);
                plName.appendChild(plNameText);
                Row.appendChild(plName);
                let clubName = document.createElement("td");
                let clubNameText = document.createTextNode(table[i].team.name);
                clubName.appendChild(clubNameText);
                Row.appendChild(clubName);
                let rank = document.createElement("td");
                let rankNum = document.createTextNode(table[i].numberOfGoals);
                rank.appendChild(rankNum);
                Row.appendChild(rank);
               
                document.getElementById("scorers").appendChild(Row);
                i++;
            }
            
               
            
        }
    };
    XMLHttpreq2.open("GET", apiLink2, true);
    XMLHttpreq2.setRequestHeader('X-Auth-Token', '36e8a9854ee348d888fbe863ad953556');
    XMLHttpreq2.send();
}

function clear() {
    let retrieve = document.getElementById("standingsBin");
    while (retrieve.hasChildNodes()) {
        retrieve.removeChild(retrieve.firstChild);
    }
    let none = document.getElementById("scorersBin");
    while (none.hasChildNodes()) {
        none.removeChild(none.firstChild);
    }
}
function tableLoad() {
    let table = document.createElement("table");
    table.setAttribute("id", "standings");
    let bigRow = document.createElement("tr");
    let pos = document.createElement("th");
    let textPosition = document.createTextNode("");
    pos.appendChild(textPosition);
    bigRow.appendChild(pos);
    let cf = document.createElement("th");
    let cfText = document.createTextNode("Club");
    cf.appendChild(cfText);
    bigRow.appendChild(cf);
    let games = document.createElement("th");
    let gamesText = document.createTextNode("MP");
    games.appendChild(gamesText);
    bigRow.appendChild(games);
    let numDubs = document.createElement("th");
    let dubsText = document.createTextNode("W");
    numDubs.appendChild(dubsText);
    bigRow.appendChild(numDubs);
    let numTies = document.createElement("th");
    let tiesText = document.createTextNode("D");
    numTies.appendChild(tiesText);
    bigRow.appendChild(numTies);
    let numLoss = document.createElement("th");
    let losesText = document.createTextNode("L");
    numLoss.appendChild(losesText);
    bigRow.appendChild(numLoss);
    let golsinfavor = document.createElement("th");
    let golsinfavorText = document.createTextNode("GF");
    golsinfavor.appendChild(golsinfavorText);
    bigRow.appendChild(golsinfavor);
    let golsAgainst = document.createElement("th");
    let golsAtext = document.createTextNode("GA");
    golsAgainst.appendChild(golsAtext);
    bigRow.appendChild(golsAgainst);
    let golDifferential = document.createElement("th");
    let golDifferentialText = document.createTextNode("GD");
    golDifferential.appendChild(golDifferentialText);
    bigRow.appendChild(golDifferential);
    let points = document.createElement("th");
    let pointsText = document.createTextNode("Pts");
    points.appendChild(pointsText);
    bigRow.appendChild(points);
    table.appendChild(bigRow);

    document.getElementById("standingsBin").appendChild(table);
}
function showScorers() {
    let playerScored = document.createElement("table");
    playerScored.setAttribute("id", "scorers");
    let bigRow = document.createElement("tr");
    let plName = document.createElement("th");
    let plNameText = document.createTextNode("Name");
    plName.appendChild(plNameText);
    bigRow.appendChild(plName);
    let clubName = document.createElement("th");
    let clubNameText = document.createTextNode("Team");
    clubName.appendChild(clubNameText);
    bigRow.appendChild(clubName);
    let rank = document.createElement("th");
    let rankNum = document.createTextNode("#");
    rank.appendChild(rankNum);
    bigRow.appendChild(rank);
    
    playerScored.appendChild(bigRow);
    document.getElementById("scorersBin").appendChild(playerScored);
}

document.getElementById("EngLeague").addEventListener("click", function () { shownUser(2021) }, false);
document.getElementById("FrLeague").addEventListener("click", function () { shownUser(2015) }, false);
document.getElementById("ItLeague").addEventListener("click", function () { shownUser(2019) }, false);
document.getElementById("SpLeague").addEventListener("click", function () { shownUser(2014) }, false);
document.getElementById("GrLeague").addEventListener("click", function () { shownUser(2002) }, false);

function activateDark(button) {
    document.body.style.backgroundColor = "black";
    document.getElementById('standingsText').style.color = "White";
    document.getElementById('TGStext').style.color = "White";
    document.getElementById('bigHeader').style.color = "black";
    document.getElementById('bigHeader').style.backgroundColor = "White";
    document.getElementById('Directions').style.color = 'white';
    button.style.display ="none";
    document.getElementById('white').style.display ="inline-block";
    
}
function activateWhite(button) {
    document.body.style.backgroundColor = "white";
    document.getElementById('standingsText').style.color = "rgb(77, 77, 92)";
    document.getElementById('TGStext').style.color = "rgb(77, 77, 92)";
    document.getElementById('bigHeader').style.color = "white";
    document.getElementById('bigHeader').style.backgroundColor = "rgb(16, 155, 58)";
    document.getElementById('Directions').style.color = 'black';
    button.style.display ="none";
    document.getElementById('black').style.display ="inline-block";
    
}