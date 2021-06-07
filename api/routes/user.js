const { response } = require('express');
const DB = require('../DB/db.js');
//console.log(DB);

exports.Users = async (req, res) => {
    let dataUsers = await DB.gg();
    return dataUsers;
    //console.log(dataUsers);
}
