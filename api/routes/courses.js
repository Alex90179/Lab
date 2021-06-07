const ContentfulAPI = require('../contentful');

//обработчики


exports.getAll = async (req, res) => {
    // как-то используем функцию contentfulAPI.getCoursesList() и, возможно, другие
    let dataCoursesList = await ContentfulAPI.coursesList();
    let CourseIntroductionToJavaScript = await ContentfulAPI.course1();
    let CourseReferencesAndSpecifications = await ContentfulAPI.course2();
    let CourseCodeEditors = await ContentfulAPI.course3();
    let CourseDeveloperConsole = await ContentfulAPI.course4();
    //console.log(CourseIntroductionToJavaScript);
    //res.setHeader('Access-Control-Allow-Origin', '*');
    //res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    //res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.send(dataCoursesList);
    // CORS
}

exports.getOne = function(req, res){
    // как-то используем функцию contentfulAPI.getCoursesList() и, возможно, другие
    res.send();
}

