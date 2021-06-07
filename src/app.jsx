import React from 'react';
import CoursesList from './components/CoursesList';

export const App = (props) => {
    
    const textValue = 'Это какой-то текст';
    
    return (
        <div>
            <h1>Hello, React! </h1>
            <p>{textValue}</p>
            <hr></hr>
            <b>{props.something}</b>
            <hr/>
            <CoursesList 
                entries={props.courses.entries}
                error={props.courses.error}
            />
        </div>
    );
};


export default App;