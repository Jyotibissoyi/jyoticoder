 const { chunk } = require("lodash");
const  _= require("lodash");
 function lodash() {
    let month1 = [
        "jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec",
    ];
    console.log(_.chunk(month1));
    
    const oddnum = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    console.log(_.tail(oddnum, 9));

    const num = [2, 5, 4, 2, 7];
    console.log(_.union(num));

    const keyvalue = [
        ['horror','The Shining'],
        ['drama',"Titanic"],
        ['thriller',"Shutter Island"],
        ['fantasy',"Pans Labyrinth"]

    ]
    console.log(_.fromPairs(keyvalue));
 }

 module.exports.lodash=lodash;