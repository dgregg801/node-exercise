import mysql from "mysql2";
import dbInfo from "./index.js";

const connection = mysql.createPool(dbInfo.mysql);

const query = (mysqlStr, values) => {
    return new Promise ((resolve, reject) => {
        connection.query(mysqlStr, values, (err, results) => {
            if (err) reject(err);
            resolve(results);
        })
    })
}

export default query;