import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ModalCreate from '../components/ModalCreate'


const Product = () => {
    const [date, setDate] = useState([])
    useEffect(() => {
        axios.get('https://gofiber-production.up.railway.app/api/v1/month/data').then((res) => {
            setDate(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    return (
        <div className='container'>
            <ModalCreate />
            <table class="table border m-4">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Day</th>
                    </tr>
                </thead>
                <tbody>
                    {date.map((item) => (
                        <tr>
                            <td>{item.ID}</td>
                            <td>{item.Name}</td>
                            <td>{item.Day}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default Product