import React from "react";

const AddStudent = () => {
    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState('');
    const [sex, setSex] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [error, setError] = React.useState(false)
    const addstudent = async () => {

        console.warn(!name);
        if (!name || !age || !sex || !address) {
            setError(true)
            return false;
        }


        console.warn(name, age, sex, address);
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:7676/add-student",
            {
                method: 'post',
                body: JSON.stringify({ name, age, sex, userId,address }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
        result = await result.json();
        console.warn(result)
    }

    return (
        <div className="product">
            <h1>Add Student</h1>
            <input type="text" placeholder="Enter Student name" className="inputBox" value={name} onChange={(e) => { setName(e.target.value) }} />
            {error && !name && <span className="invalid-input">Enter valid name</span>}

            <input type="text" placeholder="Enter Student Age" className="inputBox" value={age} onChange={(e) => { setAge(e.target.value) }} />
            {error && !age && <span className="invalid-input">Enter valid age</span>}

            <input type="text" placeholder="Enter Student Sex" className="inputBox" value={sex} onChange={(e) => { setSex(e.target.value) }} />
            {error && !sex && <span className="invalid-input">Enter valid sex</span>}

            <input type="text" placeholder="Enter Student address" className="inputBox" value={address} onChange={(e) => { setAddress(e.target.value) }} />

            <button onClick={addstudent} className="appButton">Add Student</button>
        </div>
    )
}
export default AddStudent; 