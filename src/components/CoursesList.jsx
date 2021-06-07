import React from 'react';


export const CoursesList = (props) => {
    //TODO проверка данных
   
    const entries = props.entries || [];
    return (
        <ul>
            {entries.map( (item) => (
                <li key={item} >{item}</li>
            ))}
        </ul>
    );
};


export default CoursesList;