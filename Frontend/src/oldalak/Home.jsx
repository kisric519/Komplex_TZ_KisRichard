import React from "react";
import { Link } from 'react-router-dom'
import '../styles/global.css'
import Valaszto from "../elemek/AgazatValaszto";
import Elozetes from "../elemek/ElozetesTablazat";
import { useState, useEffect } from "react"

const Home = (() => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4 zoldhatter">
                        <h2>Központi felvételi tájékoztató</h2>
                        <p>A középiskolákba történő jelentkezés során az iskolák határozzák meg, hogy a felvételi rangsort mi alapján döntik el. A Jószakma Szakgimnázium a felvételi során az általános iskolából hozott és a központi felvételin szerzett pontok alapján rangsorolja az iskolába jelentkezőket.</p>
                        <Link to="">Tájékoztató oldal</Link><br />
                        <img src="logo.png" alt="OKTATÁSI HIVATAL" />
                    </div>
                    <div className="col-4">
                        <h2>Tájékoztatás</h2>
                        <h3>Jószakma Szakgimnázium</h3>
                        <p>A központi felvételit magyar nyelv és irodalom, illetve matematika tantárgyakból írják a jelentkezők. Mindkét tárgy esetén legfeljebb 50 pont szerezhető. A felvételiző hozott pontjait az általános iskolai év végi eredményei alapján számolják, ez a pontszám legfeljebb 50 pont lehet. A hozott pontokat duplázzák. A központi felvételin szerzett és a hozott pontok összege adja a felvételiző összesített pontszámát.</p>
                        <img src="e-mail-marketing-2745489__340.jpg" />
                    </div>
                    <div className="col-4 zoldhatter">
                        <h2>Az oldal használatáról</h2>
                        <h6>Ön az oldal használatával a következő információkhoz juthat hozzá</h6>
                        <ul>
                            <li>Előzetes rangsor: </li>
                            <ol>
                                <li>Nevek</li>
                                <li>Ágazat</li>
                                <li>Összes pontszám</li>
                            </ol>
                            <li>Előzetes rangsor nyelvi előkészítő</li>
                            <li>A felvettek névsora</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <h2>A felvételt nyert tanulók névsora a nyelvi előkészítőre</h2>
                        <Valaszto />
                    </div>
                    <div className="col-8">
                        <Elozetes />
                    </div>
                </div>
            </div>
        </>
    )
})

export default Home