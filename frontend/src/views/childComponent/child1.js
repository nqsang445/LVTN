import React from "react";
import { useEffect, useState } from 'react';
import axios from "axios";


function Child1() {
    const [data, setData] = useState([]);
    useEffect(async () => {
        try {
            let res = await axios.get('http://localhost:8080/api/get-all-user')
            setData(res.data.users);

        } catch (error) {
            console.log(error);
        }
    }, [])
    return (
        <div className="">
            <p>danh sanh tai khoan</p>

        </div>
    )
}
export default Child1;