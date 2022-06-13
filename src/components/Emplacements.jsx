import React, { useEffect, useState } from 'react';
import getEmp from '../services/getEmp';
import Element from "./Element"

const Emplacements = () => {
    const [state, setState] = useState({ emps: [] })
    const { emps } = state
    useEffect(() => {
        let execute = async () => {
            let response = async () => await getEmp()
            let { data } = { ...await response() }
            setState((prev) => { return { ...prev, emps: [...data] } })
        }
        execute();
    }, [])


    return <div className='bacs emplacements'>
        <div className="vide">
            <h3>Les emplacements vides</h3>
            <div className="items">
                {emps.length !== 0 && emps.map((emp, idx) => {
                    return emp.id_bac === 0 && <Element key={idx} status={emp.id_bac}>{emp.id}</Element>
                })}
            </div>
        </div>
        <div className="plein">
            <h3>Les emplacements pleins</h3>
            <div className="items">
                {emps.length !== 0 && emps.map((emp, idx) => {
                    return emp.id_bac !== 0 && <Element key={idx} status={emp.id_bac}>{emp.id}</Element>
                })}
            </div>
        </div>
    </div>
}

export default Emplacements