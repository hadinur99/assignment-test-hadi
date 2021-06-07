let leaderboards = [200, 100, 100, 50, 10]
let player = [20,80,80,10,10,300]

var result = leaderboards.concat(player);
result.sort(function(a, b){return b-a});
console.log(result)
document.write("leaderboards: " + result)

var rank = 1;
for (var i = 0; i < result.length; i++) {
//naikkan rank jika current score lebih rendah dari score sebelumnya
  if (i > 0 && result[i] < result[i - 1]) {
    rank++;
  }
    result[i].rank = rank;
    console.log(result[i]+' = '+rank)
    document.write("<br>");
    document.write("rank :" + rank)
}
