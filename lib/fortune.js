var fortunes = require('../build');

var fortune = {};
fortune.fortune = function(limit){
    let r = Math.floor(Math.random() * fortunes.list.length);
    if (typeof limit !== 'undefined') {
        while(fortunes.list[r].length > limit) {
            r = Math.floor(Math.random() * fortunes.list.length);
        }
    }
    return fortunes.list[r];
};

module.exports = fortune;
