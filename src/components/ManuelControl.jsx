import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './../css/ManuelControl.css';
import url from "./../services/urls"

const ManuelControl = () => {
    const [state, setState] = useState({ empNum: '', bacNum: '', bac: '' })

    const handleChange = ({ currentTarget: input }) => {
        let inputName = input.name
        let inputVal = input.value

        setState((state) => {
            let prevState = { ...state }
            prevState[inputName] = inputVal
            return prevState
        })
    }

    const setRelation = async (e) => {
        e.preventDefault();
        let targetName = e.currentTarget.name
        let sentData = { "bacId": parseInt(state.bacNum), "empId": parseInt(state.empNum) };
        let prevState = { ...state };
        let endpoint = targetName === "lier" ? "liaison" : "separation"
        try {
            let { data } = await axios.post(url + endpoint, sentData);
            setState(prev => {
                return { ...prev, empNum: "", bacNum: "" }
            })
            toast.success(data);
        } catch (error) {
            setState(() => prevState);
            toast.error(error.response.data);
        }
    }

    const setEmpty = async (e) => {
        e.preventDefault();
        let prevState = { ...state };
        try {
            const { data } = await axios.post(url + "vider-bac", { "bacId": parseInt(prevState.bac) });
            console.log(parseInt(prevState.bac))
            setState((prev) => { return { ...prev, bac: "" } });
            toast.success(data);
        } catch ({ response: { data } }) {
            setState(() => prevState);
            toast.error(data);
        }
    }

    return (<div className='manuel-control'>
        <div className='manuel-control-liaison'>
            <h3>Lier/Separer Bac avec Emplacement</h3>
            <div className='manuel-control-liaison-inputs'>
                <input value={state.empNum} onChange={handleChange} name='empNum' type="text" placeholder='N° Emplacement' />
                <input value={state.bacNum} onChange={handleChange} name='bacNum' type="text" placeholder='N° Bac' />
            </div>
            <div className="manuel-control-liaison-buttons">
                <button onClick={setRelation} name="lier" type='submit'>Lier</button>
                <button onClick={setRelation} name="separer" type='submit'>Separer</button>
            </div>
        </div>
        <div className='manuel-control-vider-bac'>
            <h3>Vider Bac</h3>
            <input value={state.bac} onChange={handleChange} name='bac' type="text" placeholder='N° Bac' />
            <button onClick={setEmpty} name="vider" type='submit'>Vider</button>
        </div>

    </div >)
}

export default ManuelControl