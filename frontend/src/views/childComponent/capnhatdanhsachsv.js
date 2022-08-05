import React from "react";
import { useEffect, useState } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import './capnhatdanhsach.scss';
import * as XLSX from 'xlsx';
import { FaDownload } from 'react-icons/fa';
import fileDownload from 'js-file-download';
import moment from 'moment';
import fileExcelmau from '../../assets/excel/danhsachsinhvien.xlsx';
function CapNhatDanhSachSv() {
    const [data, setData] = useState([]);
    const [message, setMessage] = useState('');


    const readExcel = (file) => {
        const promise = new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file);

            fileReader.onload = (e) => {
                const bufferArray = e.target.result;

                const wb = XLSX.read(bufferArray, { type: 'buffer' });

                const wsname = wb.SheetNames[0];

                const ws = wb.Sheets[wsname];

                const data = XLSX.utils.sheet_to_json(ws);

                resolve(data);
            };

            fileReader.onerror = ((error) => {
                reject(error);
            });
        });

        promise.then((d) => {

            setData(d);


        })

    }
    let handleCapNhat = async () => {
        let res = await axios.post(`http://localhost:8080/api/create-user-student-file-excel`, { data: data })
        if (res.data.errCode === 0) {
            setMessage('Cập nhật thành công!.');
        } else {
            if (res.data.errCode === 1) {
                setMessage('Không có dữ liệu!.');
            } else {
                if (res.data.errCode === 2) {
                    setMessage('Cập nhật không thành công!.');
                }
            }
        }
    }
    let handleDowload = () => {
        fileDownload(fileExcelmau, 'fileExcelMau.xlsx');
    }
    return (
        <div className="cap-nhat-danh-sach">
            <h2>Cập nhật danh sách sinh viên</h2>
            <br />
            <div className="form-group">
                <input
                    type='file'
                    name="file"
                    id="file"
                    className="form-control"
                    onChange={(e) => {
                        const file = e.target.files[0];
                        readExcel(file);
                    }}
                    required
                />
            </div>
            <br />
            <p>File Excel mẫu:
                <button type="button" className="btn btn-success"
                    onClick={() => handleDowload()}

                >
                    <FaDownload /> Excel
                </button>
            </p>

            {message && <p style={{ color: 'red' }}>{message}</p>}
            <br />
            <div className="form-group">
                <button
                    className="btn btn-primary"
                    onClick={handleCapNhat}
                >Cập nhật</button>
            </div>

        </div>

    );
}
export default CapNhatDanhSachSv;