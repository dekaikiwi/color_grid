const COLORS = [
  'red', 
  'purple', 
  'blue', 
  'green',
  'pink',
  'yellow',
  'orange',
  'grey'
];

const SQUARES_PER_LINE=5
const ROWS=5

var grid = [];

var appContainer = document.getElementById('app')

for (var i=0; i < ROWS; i+=1) {
  grid[i] = new Array(SQUARES_PER_LINE)
}

for (var i=0; i < grid.length; i+=1) {
  var row = document.createElement('div');
  row.setAttribute('class', `row row-${i}`)

  appContainer.appendChild(row);

  for (var j=0; j < grid[i].length; j+= 1) {
    var block = document.createElement('div')
    block.setAttribute('class', `block column-${j}`)
    block.setAttribute('style', `background\:${randomColor()}`)

    row.appendChild(block);
  }
}


function randomizeGrid() {
  for (var i=0; i < grid.length; i+= 1) {
    var row = document.getElementsByClassName(`row-${i}`)[0]
    row.setAttribute('style', `height: ${100/ROWS}%`)
    for(var j=0; j < grid[i].length; j+= 1) {
      block = row.getElementsByClassName(`column-${j}`)[0];      
      block.setAttribute('style', `background\:${randomColor()}; height:100%; width:${100 / SQUARES_PER_LINE}%`)
    }
  }
}

function randomColor() {
  index = Math.floor(Math.random() * COLORS.length) 

  return COLORS[index];
}

window.setInterval(randomizeGrid, 500)
