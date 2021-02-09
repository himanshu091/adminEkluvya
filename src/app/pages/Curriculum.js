import React, { useState } from 'react'
import ClassDetailView from '../Component/ClassDetailView'
import EditClassModal from '../Component/EditClassModal'
import EditSubjectModal from '../Component/EditSubjectModal'
import EditTopicModal from '../Component/EditTopicModal'
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
    const [showClassEdit, setShowClassEdit] = useState(false)
    const [showSubjectEdit, setShowSubjectEdit] = useState(false)
    const [showTopicEdit, setShowTopicEdit] = useState(false)
    const toggleVissibility = () => {
        setShowClassEdit(!showClassEdit)
    }
    const toggleVissibilitySubject = () => {
        setShowSubjectEdit(!showSubjectEdit)
    }
    const toggleVissibilityTopic = () => {
        setShowTopicEdit(!showTopicEdit)
    }
    return (
        <div className="container">
            
            
            <div className="row">
                <div className="col-3"><div style={card}>Example Analytics</div></div>
                <div className="col-3"><div style={card}>Example Analytics</div></div>
                <div className="col-3"><div style={card}>Example Analytics</div></div>
                <div className="col-3"><div style={card}>Example Analytics</div></div>
            </div>
            <br/>
            <div className="row" style={{background: '#fff', padding: '10px', margin:'0'}}>
                <div className="col-12">
                    <h4>Action Menu</h4>
                </div>
                <div style={{display:'flex'}}>
                    <button className="btn btn-outline-primary" style={{marginRight:'10px', marginLeft:'10px'}} onClick={toggleVissibility}>Edit Class Details</button>
                    <button className="btn btn-outline-primary" style={{marginRight:'10px'}} onClick={toggleVissibilitySubject}>Edit Subject Details</button>
                    <button className="btn btn-outline-primary" style={{marginRight:'10px'}} onClick={toggleVissibilityTopic}>Edit Topic</button>
                </div>
            </div>
            <br/>
            <ClassDetailView/>
            {showClassEdit && <EditClassModal toggleVissibility={()=>toggleVissibility()}/>}
            {showSubjectEdit && <EditSubjectModal toggleVissibility={()=>toggleVissibilitySubject()}/>}
            {showTopicEdit && <EditTopicModal toggleVissibility={()=>toggleVissibilityTopic()}/>}
        </div>
    )
}

export default Curriculum
