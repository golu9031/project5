import React, { useEffect, useState } from "react";
const Studentid =()=>{
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        getProducts();
    },[])
    const getProducts=async()=>{
        let result = await fetch('http://localhost:7676/student');
        result = await result.json();
        setProducts(result);
    }

    console.warn(products);
   
    return(
        <div className="product-list">
            <h3>Student List</h3>
            <ul>
                <li>S.No</li>
                <li>Name</li>
                <li>Age</li>
                <li>Sex</li>
                <li>Address</li>
                <li>Delete</li>
            </ul>
            {
                products.map((item,index)=>
            <ul key={item}>
                <li>{index}</li>
                <li>{item.name}</li>
                <li>{item.age}</li>
                <li>{item.sex}</li>
                <li>{item.address}</li>
                <li><button>Delete</button></li>
            </ul>
                )
            }
        </div>
    )
}
export default Studentid; 