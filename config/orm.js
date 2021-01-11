// import mysql connection
const connection = require("./connection");

// helper function for sql syntax to add question marks in query
const questionMarks = (num) => {
    const arr = [];

    for (let i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
};

const objToSql = (ob) => {
    const arr = [];

    for (const key in ob) {
        let value = ob[key];
        
        if (Object.hasOwnProperty.call(ob, key)) {

            if (typeof value === "string" && value.indexOf("  ") >= 0) {
                value = `'${value}'`;
            }
            
            arr.push(`${key}=${value}`);
        }
    }
    return arr.toString();
}

const orm = {
    selectAll(tableInput, cb) {
        const queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            //console.log(result)
            cb(result);

        });
    },
    insertOne(table, cols, vals, cb) {
        let queryString = `INSERT INTO ${table}`;
        queryString += ' (';
        queryString += cols.toString();
        queryString += ') ';
        queryString += 'VALUES (';
        queryString += questionMarks(vals.length);
        queryString += ') ';

        //console.log(queryString);

        connnection.query(queryString, vals, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne(table, objColVals, cb) {
        let queryString = `UPDATE ${table}`;
        queryString += ' SET ';
        queryString += objToSql(objColVals);
        // queryString += ' WHERE ';
        // queryString += condition;

        //console.log(queryString);
        connection.query(querySting, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
};

module.exports = orm;