const contentful = require('contentful-management');
const { async } = require('regenerator-runtime');



let Connect = async () => {
    let client = contentful.createClient({
        accessToken: 'CFPAT-RohlYEQPj7FBKM_xaqr8UyrrljVlvBOn3l4MBwqkego'
    })
    let space = await client.getSpace('8utttqerkifu');
    return await space.getEnvironment("master");   
}

let getCoursesList = async (envi, idCoursesList) => {   
    let courses = await envi.getEntry(idCoursesList);
    courses = courses.fields.coursesList['en-US'];  
    return  courses;
}

let getCourseIntroductionToJavaScript = async (envi, courseIntroductionToJavaScript) => {
    let course = await envi.getEntry(courseIntroductionToJavaScript);
    course = course.fields.introductionToJavaScript['en-US'].content;
    let course1 = representationCourse(course);
    course1.pop();
    course1.pop();
    course1.pop();
    course1.pop();
    return course1;
}

let getCourseReferencesAndSpecifications = async (envi, courseReferencesAndSpecification) => {
    let course = await envi.getEntry(courseReferencesAndSpecification);
    course = course.fields.referencesAndSpecifications['en-US'].content;
    let course2 = representationCourse(course);
    course2.pop();
    return course2;
}

let getCourseCodeEditors = async (envi, courseCodeEditors) => {
    let course = await envi.getEntry(courseCodeEditors);
    course = course.fields.codeEditors['en-US'].content;
    let course3 = representationCourse(course);
    course3.pop();
    return course3;
}

let getCourseDeveloperConsole = async (envi, courseDeveloperConsole) => {
    let course = await envi.getEntry(courseDeveloperConsole);
    course = course.fields.developerConsole['en-US'].content;
    let course4 = representationCourse(course);
    course4.pop();
    course4.pop();
    course4.pop();
    course4.pop();
    return course4;
}

function representationCourse(course) {
    let courseContent = [],
        res = [];
    for (let i = 0; i < course.length; i++) {
       courseContent.push(course[i].content);  
    }
    for (let i = 0; i < courseContent.length; i++) {
        for (let j = 0; j < courseContent[i].length; j++) {
            if (courseContent[i][j].value === undefined) {
                for (let k = 0; k < courseContent[i][j].content.length; k++) {
                    for (let h = 0; h < courseContent[i][j].content[k].content.length; h++) {
                        res.push(courseContent[i][j].content[k].content[h].value);
                        
                    }     
                }
            }
            if (courseContent[i][j].value != undefined) {
                res.push(courseContent[i][j].value);
            }
            
        }   
    }
    return res;
}

exports.coursesList = async () =>{
    const envi = await Connect();
    let res = await getCoursesList(envi, '30NI1dtFXSqcCqsWcFI8q7');
    return res; 
}

exports.course1 = async() =>{
    const envi = await Connect();
    let res = await getCourseIntroductionToJavaScript(envi, '2uF1ZRqq0CuEX3gikbBGae');
    return res;   
}

exports.course2 = async() =>{
    const envi = await Connect();
    let res = await getCourseReferencesAndSpecifications(envi, 'KNLntgvu4w7TZZSmMF6pI');
    return res;   
}

exports.course3 = async() =>{
    const envi = await Connect();
    let res = await getCourseCodeEditors(envi, '6xp4qTDLVBpl9gdlmBL3lR');
    return res;   
}

exports.course4 = async() =>{
    const envi = await Connect();
    let res = await getCourseDeveloperConsole(envi, '5NgwR9jzSrob7zRDN68tVk');
    return res;   
}

    
        
        
    
    

/*

exports.getTestIntroductionToJavaScript = async () => {

}

exports. getTestReferencesAndSpecifications = async () => {
    
}

exports.getTestCodeEditors = async () => {

}

exports.getTestDeveloperConsole = async () => {

}*/