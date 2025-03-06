import React from "react";
import axios from 'axios'
import { useState, useEffect } from "react"
import { useNavigate } from "react-router";


const Valaszto = (() => {
    const [tagozatok, setTagozatok] = useState([]);
    const [valasztott, setValasztott] = useState("");
    let navigate = useNavigate();

    useEffect(() => {
        axios.get('http://127.0.0.1:3333/tagozatok')
            .then(res => {
                setTagozatok(res.data)
            })
            .catch(err => console.error(err));
    }, []);

    function kivalasztva(event) {
        const id = event.target.value
        setValasztott(id)
    }

    return (
        <>
            <label>Válassza ki, melyik ágazat adatait szeretné látni:</label>
            <select onChange={(e) => kivalasztva(e)}>
                <option value="" selected>Válassz...</option>
                {tagozatok.map(tagozat => (
                    <option value={tagozat.akod}>{tagozat.agazat}</option>
                ))}
            </select> <br />
            <button onClick={() => {
                navigate("/tagozat/" + valasztott);
            }}>Adatok</button>
        </>
    )
})

export default Valaszto