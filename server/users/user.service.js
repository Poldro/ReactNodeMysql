// const config = require('config.json');
// const jwt = require('jsonwebtoken');
const connectionDB = require('../connectionDB');
const connection = connectionDB.createConnectionDB();


connection.connect();
// users hardcoded for simplicity, store in a db for production applications

module.exports = {
    getAll,
    getUser,
    updateUser,
    addUser,
    deleteUser,
    
    getNumber
};


async function getAll() {
    var query = "SELECT * FROM `utenti`"
    function sql() {
        return new Promise((resolve, reject) => {
            connection.query(query, (err, rows) => {
                resolve(rows);
            });
        });
    }

    const utenti = await sql();
    return utenti.map(u => omitPassword(u)) 
}

async function getUser({ email }) {
    var query = "SELECT * FROM `utenti` WHERE email = ?"
    function sql() {
        return new Promise((resolve, reject) => {
            connection.query(query, [email], (err, rows) => {
                resolve(rows);
            });
        });
    }

    const user = await sql();
    return user.map(u => omitPassword(u))
}

async function addUser({ email, name, surname }) {
    var query = "INSERT INTO user SET ?";
    var post = { email: email, name: name, surname: surname };

    function sql() {
        return new Promise((resolve, reject) => {
            connection.query(query, post, (err, rows) => {
                resolve(rows);
            });
        });
    }

    const user = await sql();

    return user
}

async function updateUser({ name, surname, email }) {
    var query = "UPDATE `user` SET `name`= ?,`surname` = ? WHERE email=?"
    var variables = [name, surname, email]

        function sql() {
            return new Promise((resolve, reject) => {
                connection.query(query, variables, (err, rows) => {
                    resolve(rows);
                });
            });
        }

    const user = await sql();
    return user
}

async function deleteUser({ id }) {
    var query = "DELETE FROM `user` WHERE id = ?"
   function sql() {
        return new Promise((resolve, reject) => {
            connection.query(query, id, (err, rows) => {
                resolve(rows);
            });
        });
    }
    const user = await sql();
    return user
}

// helper functions

function omitPassword(user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}



async function getNumber() {
    var query = "SELECT * FROM `numbers`"
    function sql() {
        return new Promise((resolve, reject) => {
            connection.query(query, (err, rows) => {
                resolve(rows);
            });
        });
    }

    const num = await sql();
    return num
}