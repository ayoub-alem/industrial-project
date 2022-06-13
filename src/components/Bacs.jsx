import React, { useEffect, useState } from 'react';
import getBacs from "./../services/getBacs"
import Element from './Element';
import "./../css/Bacs.css"

const Bacs = () => {

    const [state, setState] = useState({ "bacs": [] })
    const { bacs } = state
    useEffect(() => {
        let execute = async () => {
            let response = async () => { return await getBacs() }
            let { data } = { ...await response() }
            setState((prev) => { return { "bacs": [...data] } })
        }
        execute();
    }, [])



    return (<div className='bacs'>
        <div className="vide">
            <h3>Les bacs vides</h3>
            <div className='items'>
                {bacs.length !== 0 && bacs.map((bac, idx) => {
                    return bac.status_bac === "vide" && <Element key={idx} status={bac.status_bac}>{bac.id}</Element>
                })}
            </div>
        </div>
        <div className="en-cours">
            <h3>Les bacs en cours de remplissage</h3>
            <div className='items'>
                {console.log(bacs)}
                {bacs.length !== 0 && bacs.map((bac, idx) => {
                    return bac.status_bac === "en cours" && <Element key={idx} status={bac.status_bac}>{bac.id}</Element>
                })}
            </div>
        </div>
        <div className="plein">
            <h3>Les bacs pleins</h3>
            <div className='items'>
                {bacs.length !== 0 && bacs.map((bac, idx) => {
                    return bac.status_bac === "plein" && <Element key={idx} status={bac.status_bac}>{bac.id}</Element>
                })}
            </div>
        </div>
    </div>)
}

export default Bacs