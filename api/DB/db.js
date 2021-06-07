//https://docs.google.com/spreadsheets/d/1UrKfcmupfJ2hyy7ISU9f3jrM_VMGw_AtRmz32TQ-Vfk/edit#gid=0

const e = require('express');
const {google} = require('googleapis');
const keys = require('./keys.json');

client = new google.auth.JWT(
    keys.client_email, 
    null, 
    keys.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
);

let gsrun = async (cl) => {
    const gsapi = google.sheets({version: 'v4', auth: cl});
    const opt = {
        spreadsheetId: '1UrKfcmupfJ2hyy7ISU9f3jrM_VMGw_AtRmz32TQ-Vfk',
        range: 'Data1!A2:E17'
    };

    let data = await gsapi.spreadsheets.values.get(opt);
    let dataArr = data.data.values;
    var list = dataArr.map(function(dataArr){
        let obj = dataArr.reduce(function(acc, cur, i){
            acc[i] = cur;    
            return acc;
        },{});
        let {
            0: id,
            1: login,
            2: password,
            3: eMail,
            4: scoreTests
        } = {...obj}
        const newobj = Object.assign(
            {},
            {
            id,
            login,
            password,
            eMail,
            scoreTests
            }
        );
        return newobj; 
    });
    //console.log(list); 
    return list;
}

exports.gg = async () => {
    let e = await gsrun(client);
    return e;
}
