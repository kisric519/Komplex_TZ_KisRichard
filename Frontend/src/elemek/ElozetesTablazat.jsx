import React from "react";
import axios from 'axios'
import { useState, useEffect } from "react"
import { useNavigate } from "react-router";


const Elozetes = (() => {
    const [adatok, setAdatok] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:3333/elozetes')
            .then(res => {
                setAdatok(res.data)
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <h2>Előzetes névsor:</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Tanuló neve</th>
                        <th scope="col">Ágazat</th>
                        <th scope="col">Összes pontszám</th>
                    </tr>
                </thead>
                <tbody>
                    {adatok.map(elem => (
                        <tr key={elem.nev}>
                            <td>{elem.nev}</td>
                            <td>{elem.agazat}</td>
                            <td>{elem.pont}</td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </>
    )
})

export default Elozetes