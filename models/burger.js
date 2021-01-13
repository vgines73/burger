// import orm file
const orm = require('../config/orm');

const burger = {
  // select all
  selectAll(cb) {
    orm.selectAll('burgers', (res) => cb(res));
  },
  // create
  insertOne(cols, vals, cb) {
    orm.insertOne('burgers', cols, vals, cb, (res) => cb(res));
  },
  // update
  updateOne(objColVals, condition, cb) {
    orm.updateOne('burgers', objColVals, condition, (res) => cb(res));
  },
  // delete
  delete(condition, cb) {
    orm.delete('burgers', condition, (res) => cb(res));
  },
};

module.exports = burger;
