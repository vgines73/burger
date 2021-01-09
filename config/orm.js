// import mysql connection
const connection = require("./connection");


const orm = {
    selectAll(tableInput, cb) {
        const queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            console.log(result)
            cb(result);

        });
    },
    insertOne() {
        connnection.query("INSERT INTO")
    },
    updateOne(table, column, devoured, id, cb) {
        connection.query("UPDATE ?? SET ?? = ? WHERE id = ?", [table, column, devoured, id, cb], (err, result) => {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    }
};

module.exports = orm;