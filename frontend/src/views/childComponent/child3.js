import React, { useState } from "react";
import { Button, Form } from 'reactstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useStore } from "../../store";
import * as XLSX from 'xlsx';
import { Document, Page } from 'react-pdf';
function Child3() {
    const { register, handleSubmit } = useForm();
    // const [file, setFile] = useState();
    // const [fileName, setFileName] = useState("");

    const handleChangeFile = (e) => {
        // setFile(e.target.files[0]);
        // setFileName(e.target.files[0].name);
    };

    const onSubmit = async (data) => {
        console.log(data)
        const formData = new FormData();
        formData.append("picture", data.picture[0]);
        // let createNewUser = await axios.post(`http://localhost:8080/api/create-user`, data)

        const res = await axios.post(`http://localhost:8080/api/post-formdata`, formData)
        alert(JSON.stringify(res))
    };
    return (<>

        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type='file'
                className="form-control mt-1 mb-2 form-control"
                name="picture"
                id="picture"
                {...register("picture", { required: true })}
            // onChange={handleChangeFile}
            />
            <button type="submit">submit</button>
        </form>
    </>
    )
}
export default Child3;