const DEFAULT_COLORS = [
  '#F37A8E', 
  '#CADE81', 
  '#B7ACCD', 
  '#FCB768',
  '#84BFD1',
];

url = new URL(window.location.href)
userSetColumns = url.searchParams.get('numCol')
userSetExtraColors = url.searchParams.get('extraColors')
extraColors = (userSetExtraColors == null) ? [] :  userSetExtraColors.replace(/\!/g, '#').split(',')
const COLORS = DEFAULT_COLORS.concat(extraColors)

const SQUARES_PER_LINE= parseInt(userSetColumns) || 5
const WIDTH=window.innerWidth / SQUARES_PER_LINE
// const ROWS=5

var grid = [];

var appContainer = document.getElementById('app')

for (var i=0; i*WIDTH < window.innerHeight; i+=1) {
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
    row.setAttribute('style', `height: ${WIDTH}px`)
    for(var j=0; j < grid[i].length; j+= 1) {
      block = row.getElementsByClassName(`column-${j}`)[0];      
      block.setAttribute('style', `background\:${randomColor()}; height:100%; width:${WIDTH}px`)
    }
  }
}

function randomColor() {
  index = Math.floor(Math.random() * COLORS.length) 

  return COLORS[index];
}

window.setInterval(randomizeGrid, 500)
