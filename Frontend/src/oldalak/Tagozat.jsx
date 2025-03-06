import React from "react";
import { Link, useParams } from 'react-router-dom'
import '../styles/global.css'
import Valaszto from "../elemek/AgazatValaszto";
import { useState, useEffect } from "react"
import axios from 'axios'

const Tagozat = (() => {
    const {id} = useParams()
    const [tagNeve, setTagNeve] = useState("");

    useEffect(() => {
        axios.get('http://127.0.0.1:3333/agazatneve/'+id)
            .then(res => {
                console.log(res.data[0].agazat)
                setTagNeve(res.data[0].agazat)
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6 zoldhatter">
                        <h2>Központi felvételi tájékoztató</h2>
                        <p>A középiskolákba történő jelentkezés során az iskolák határozzák meg, hogy a felvételi rangsort mi alapján döntik el. A Jószakma Szakgimnázium a felvételi során az általános iskolából hozott és a központi felvételin szerzett pontok alapján rangsorolja az iskolába jelentkezőket.</p>
                        <Link to="">Tájékoztató oldal</Link><br />
                        <img src="logo.png" alt="OKTATÁSI HIVATAL" />
                    </div>
                    <div className="col-6">
                        <h2>Tájékoztatás</h2>
                        <h3>Jószakma Szakgimnázium</h3>
                        <p>A központi felvételit magyar nyelv és irodalom, illetve matematika tantárgyakból írják a jelentkezők. Mindkét tárgy esetén legfeljebb 50 pont szerezhető. A felvételiző hozott pontjait az általános iskolai év végi eredményei alapján számolják, ez a pontszám legfeljebb 50 pont lehet. A hozott pontokat duplázzák. A központi felvételin szerzett és a hozott pontok összege adja a felvételiző összesített pontszámát.</p>
                        <img src="e-mail-marketing-2745489__340.jpg" />
                    </div>
                </div>
                <div className="row">
                    <br />
                    <p>A választott ágazat: {tagNeve}</p>
                    <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Tanuló neve</th>
                        <th scope="col">Ágazat</th>
                        <th scope="col">Összes pontszám</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
                </div>
            </div>
        </>
    )
})

export default Tagozat