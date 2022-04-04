/*   This is the base file for the Sokoban assignment - include this one in your HTML page, before you add the main script file*/
 export {Tiles,Entities,colors,tileMap01,size,directions,keys,multiplier,kingPlasment}
/*   Enum of CSS Classes for the static elements   */
 var Tiles = {
  Wall: "tile-wall",
  Space: "tile-space",
  Goal: "tile-goal",
};
const kIcon = "kingIcon ";

/*   Enum of CSS Classes for the moving elements   */
 var Entities = {
  Character: "entity-player",
  Block: "entity-block",
  BlockDone: "entity-block-goal",
};
//Added
 const colors = {
 Space : { fill: '#ded7b3', stroke: '#ded7b3',width:50,height:50 },
  Wall: { fill: '#868687', stroke: '#505051', width:50,height:50},
  Block: { fill: '#d9ae0a', stroke: '#C79300' , width:50,height:50},
  BlockDone: { fill: '#4ccd5a', stroke: '#3ca448', width:50,height:50 },
  Goal: { fill: '#dfbbb1', stroke: '#ca8e7d' , width:50,height:50},
  Character: { fill: '#4f99e8', stroke: '#3f7ab9', width:50,height:50 },
}
//could updated
 const size = {
height: 800,//16x50
width: 950,//19x50
}

const kingPlasment = {
  posY: -1,
  posX: -1
}

 const multiplier = 75

 const directions = {
  up: 'up',
  down: 'down',
  left: 'left',
  right: 'right',
}

 const keys = {
  [directions.up]: 'ArrowUp',
  [directions.down]: 'ArrowDown',
  [directions.left]: 'ArrowLeft',
  [directions.right]: 'ArrowRight',
  w: 'w',
  a: 'a',
  s: 's',
  d: 'd',
}
//var tileMap01 = [[Tiles.Space,Tiles.Space,Tiles.Space,Tiles.Space]]

/*  Legend
    W = Wall
    B = Movable block
    P = Player starting position
    G = Goal area for the blocks
*/
//may be need to updated later
 var tileMap01 = 
   [
    [
      [Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space]
    ],
    [
      [Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space]
    ],
    [
      [Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space]
    ],
    [
      [Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Wall],[Tiles.Wall],[Tiles.Wall],[Tiles.Wall],[Tiles.Wall],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space]
    ],
    [
      [Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Wall],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Wall],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space]
    ],
    [
      [Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Wall],[Entities.Block],[Tiles.Space],[Tiles.Space],[Tiles.Wall],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space]
    ],
    [
      [Tiles.Space],[Tiles.Space],[Tiles.Wall],[Tiles.Wall],[Tiles.Wall],[Tiles.Space],[Tiles.Space],[Entities.Block],[Tiles.Wall],[Tiles.Wall],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space]
    ],
    [
      [Tiles.Space],[Tiles.Space],[Tiles.Wall],[Tiles.Space],[Tiles.Space],[Entities.Block],[Tiles.Space],[Entities.Block],[Tiles.Space],[Tiles.Wall],[Tiles.Wall],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space]
    ],
    [
      [Tiles.Wall],[Tiles.Wall],[Tiles.Wall],[Tiles.Space],[Tiles.Wall],[Tiles.Space],[Tiles.Wall],[Tiles.Wall],[Tiles.Space],[Tiles.Wall],[Tiles.Wall],[Tiles.Wall],[Tiles.Wall],[Tiles.Wall],[Tiles.Wall],[Tiles.Wall],[Tiles.Wall],[Tiles.Wall],[Tiles.Wall]
    ],
    [
      [Tiles.Wall],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Wall],[Tiles.Space],[Tiles.Wall],[Tiles.Wall],[Tiles.Space],[Tiles.Wall],[Tiles.Wall],[Tiles.Wall],[Tiles.Wall],[Tiles.Wall],[Tiles.Space],[Tiles.Space],[Tiles.Goal],[Tiles.Goal],[Tiles.Wall]
    ],
    [
      [Tiles.Wall],[Tiles.Space],[Entities.Block],[Tiles.Space],[Tiles.Space],[Entities.Block],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Goal],[Tiles.Goal],[Tiles.Wall]
    ],
    [
      [Tiles.Wall],[Tiles.Wall],[Tiles.Wall],[Tiles.Wall],[Tiles.Wall],[Tiles.Space],[Tiles.Wall],[Tiles.Wall],[Tiles.Wall],[Tiles.Space],[Tiles.Wall],"entity-player kingIcon ",[Tiles.Wall],[Tiles.Wall],[Tiles.Space],[Tiles.Space],[Tiles.Goal],[Tiles.Goal],[Tiles.Wall]
    ],
    [
      [Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Wall],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Wall],[Tiles.Wall],[Tiles.Wall],[Tiles.Wall],[Tiles.Wall],[Tiles.Wall],[Tiles.Wall],[Tiles.Wall],[Tiles.Wall]
    ],
    [
      [Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Wall],[Tiles.Wall],[Tiles.Wall],[Tiles.Wall],[Tiles.Wall],[Tiles.Wall],[Tiles.Wall  ],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space]
    ],
    [
      [Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space]
    ],
    [
      [Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space],[Tiles.Space]
    ],
  ]

// document.getElementById("demo").innerHTML = tileMap01;

//Old 
/* var tileMap01 = {
  width: 19,
  height: 16,
  mapGrid: [
    [
      [Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],
    ],
    [
      [Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],
    ],
    [
      [Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],
    ],
    [
      [Space],[Space],[Space],[Space],[Wall],[Wall],[Wall],[Wall],[Wall],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],
    ],
    [
      [Space],[Space],[Space],[Space],[Wall],[Space],[Space],[Space],[Wall],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],
    ],
    [
      [Space],[Space],[Space],[Space],[Wall],[Block],[Space],[Space],[Wall],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],
    ],
    [
      [Space],[Space],[Wall],[Wall],[Wall],[Space],[Space],[Block],[Wall],[Wall],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],
    ],
    [
      [Space],[Space],[Wall],[Space],[Space],[Block],[Space],[Block],[Space],[Wall],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],
    ],
    [
      [Wall],[Wall],[Wall],[Space],[Wall],[Space],[Wall],[Wall],[Space],[Wall],[Space],[Space],[Space],[Wall],[Wall],[Wall],[Wall],[Wall],[Wall],
    ],
    [
      [Wall],[Space],[Space],[Space],[Wall],[Space],[Wall],[Wall],[Space],[Wall],[Wall],[Wall],[Wall],[Wall],[Space],[Space],[Goal],[Goal],[Wall],
    ],
    [
      [Wall],[Space],[Block],[Space],[Space],[Block],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Goal],[Goal],[Wall],
    ],
    [
      [Wall],[Wall],[Wall],[Wall],[Wall],[Space],[Wall],[Wall],[Wall],[Space],[Wall],[ Character],[Wall],[Wall],[Space],[Space],[Goal],[Goal],[Wall],
    ],
    [
      [Space],[Space],[Space],[Space],[Wall],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Wall],[Wall],
    ],
    [
      [Space],[Space],[Space],[Space],[Wall],[Wall],[Wall],[Wall],[Wall],[Wall],[Wall],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],
    ],
    [
      [Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],
    ],
    [
      [Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],[Space],
    ],
  ],
};

*/
