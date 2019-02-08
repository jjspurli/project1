function PlayerBox(clr, rnd){
    var that = this;
    var round = rnd;
    this.color = clr;
    this.ele = document.createElement("div");
    this.ele.style.backgroundColor = this.color;
    this.ele.style.height = "100px";
    this.ele.style.width = "100px";
    this.ele.style.float = "left";
    document.body.appendChild(this.ele);
    this.ele.addEventListener("click", function () {
        that.ele.innerHTML = "";
        if(that.color == "red"){
            that.color = "green";
            that.ele.style.backgroundColor = that.color;
        }
        else if (that.color == "green"){
            that.color = "blue";
            that.ele.style.backgroundColor = that.color;
        }
        else {
            that.color = "red";
            that.ele.style.backgroundColor = that.color;
        }

        startGame.check();
        startGame.roundCheck();

         })
}



function Game() {
    var that = this;
    var round = 1;
    this.ele = document.createElement("div");
    this.ele.setAttribute("id", "round");
    this.ele.innerHTML = "ROUND " + round;
    document.body.appendChild(this.ele);
    var Box1 = new PlayerBox("red", round);
    var Box2 = new PlayerBox("green", round);
    var Box3 = new PlayerBox("blue", round);
    this.ele = document.createElement("div");
    this.ele.style.clear = "both";
    document.body.appendChild(this.ele);
    var greenBox = new AnswerBox("green");
    var blueBox = new AnswerBox("blue");
    var redBox = new AnswerBox("red");

    this.check = function () {

        if (Box1.color == "green") {
            Box1.ele.innerHTML = "Correct";
        }
        if (Box2.color == "blue") {
            Box2.ele.innerHTML = "Correct";
        }
        if (Box3.color == "red") {
            Box3.ele.innerHTML = "Correct";
        }
    }

    this.roundCheck = function() {
        round = round + 1;

        if (round == 4) {
            alert("Reset game.")
            Box1.color = "red";
            Box1.ele.style.backgroundColor = "red";
            Box1.ele.innerHTML = "";
            Box2.color = "green";
            Box2.ele.style.backgroundColor = "green";
            Box2.ele.innerHTML = "";
            Box3.color = "blue";
            Box3.ele.style.backgroundColor = "blue";
            Box3.ele.innerHTML = "";
            round = 1;
        }
        document.getElementById("round").innerHTML = "ROUND " + round;
    }
}

function AnswerBox(clr){
    this.color = clr;

    this.ele = document.createElement("div");
    this.ele.style.backgroundColor = this.color;
    this.ele.style.height = "100px";
    this.ele.style.width = "100px";
    this.ele.style.float = "left";

    document.body.appendChild(this.ele);
}

var startGame = new Game();

