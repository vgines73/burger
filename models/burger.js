//import orm file
const orm = require("../config/orm");

const burger = {
    selectAll(cb) {
        orm.selectAll('burgers', (res) => cb(res));
    },
    insertOne(objColVals, condition, cb) {
        orm.insertOne('burgers', objColVals, condition, cb, (res) => cb(res));
    },
    updateOne(table, column, devoured, id, cb) {
        orm.updateOne('burgers', table, column, devoured, id, (res) => cb(res));
    },
};

module.exports = burger;