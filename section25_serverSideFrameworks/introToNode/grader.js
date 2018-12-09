
function average(scores){
    var total = 0;
    scores.forEach(function(score){
        total += score;
    })
    var avg = total/scores.length
    return Math.round(avg);
    // for(var i = 0; i < scoring.length; i++){
    //     avg = avg + scoring[i]
    // }
    // console.log(Math.ceil(avg/scoring.length));
}

var scores = [90, 98, 89, 100, 100, 86, 94];
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];


console.log(average(scores));
console.log(average(scores2));
