import React from 'react'
import ClassDetailView from '../Component/ClassDetailView'
import Classes from './Classes'


const card = {
    backgroundColor: '#fff',
    borderRadius: '5px',
    color: '#ff7000',
    border: '1px solid #ff7000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',
    fontWeight: '700'
}
function Curriculum() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-3"><div style={card}>Example Analytics</div></div>
                <div className="col-3"><div style={card}>Example Analytics</div></div>
                <div className="col-3"><div style={card}>Example Analytics</div></div>
                <div className="col-3"><div style={card}>Example Analytics</div></div>
            </div>
            <br/>
            <ClassDetailView/>
        </div>
    )
}

export default Curriculum
