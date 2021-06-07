const DB = require ('./api/DB/db.js');
const { async } = require('regenerator-runtime');
//const ContentfulAPI = require ('./api/contentful.js');
let Users = async () => {
    let dataUsers = await DB.gg();
    console.log(dataUsers);
}
Users();



/*let CoursesList = async () => {
    let dataCoursesList = await ContentfulAPI.coursesList();
    //console.log(dataCoursesList);
}*/

//let dataCoursesAll = ContentfulAPI.coursesAll();

//console.log(dataCoursesAll);