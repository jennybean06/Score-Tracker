let blackScore = document.querySelector("#black-score");
let whiteScore = document.querySelector("#white-score");

let blackCount = 0;
let whiteCount = 0;

blackScore.onclick = function() {
  blackCount += 1;
  blackScore.innerHTML = blackCount;
};

whiteScore.onclick = function() {
  whiteCount += 1;
  whiteScore.innerHTML = whiteCount;
};

function resetButton() { 
  blackCount = 0;
  blackScore.innerHTML = blackCount;
  whiteCount = 0;
  whiteScore.innerHTML = whiteCount;
}
