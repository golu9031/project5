import React from "react";
import {Link} from 'react-router-dom';
const Student = () => {
    
    return(
        <div>
            <ul className="studentinfo">
            
                <li><Link to ="/studentid">Student Id</Link></li>
                <li><Link to ="/addstudent">AddStudent</Link></li>
                <li><Link to ="/result">Result</Link></li>
                <li><Link to ="/online classes">Online Classes</Link></li>
                
                <li><Link to ="/books">Books</Link></li>
                <li><Link to ="/timetable">Timetable</Link></li>
                <li><Link to ="/logout">Logout</Link></li>
                
                
            </ul>
         
        </div>
    )
};
export default Student;