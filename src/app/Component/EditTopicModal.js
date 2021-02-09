import React, { useEffect, useState } from 'react'
import { editTopic, fetchClasses } from '../../api'
import './style.css'
function EditTopicModal({toggleVissibility}) {
    const [classes, setClasses] = useState(null)
    const [current, setCurrent] = useState(null)
    const [currentSubject, setCurrentSubject] = useState(null)
    const [currentTopic, setCurrentTopic] = useState(null)

    const [name, setName] = useState(null)
    const [session, setSession] = useState(null)

    useEffect(() => {
        fetchAllClasses()
        return () => {
            console.log('Class')
        }
    },[])
    const fetchAllClasses = async () =>{
        const res = await fetchClasses()
        setClasses(res)
        console.log("Classes =>", res)
    }
    const getSelected = async (value) => {
        if(value === "null"){
            setCurrent(null)
        }else{
            for(let i=0; i<classes.length; i++){
                if(classes[i]._id === value){
                    setCurrent(classes[i])
                    console.log("Selected Class", classes[i])
                    break
                }
            }
        }
        
    }
    const getSelectedSubject = async (value) => {
        if(value === "null"){
            setCurrentSubject(null)
        }else{
            for(let i=0; i<current.listOfSubjectId.length; i++){
                if(current.listOfSubjectId[i].subjectId._id === value){
                    setCurrentSubject(current.listOfSubjectId[i].subjectId)
                    break
                }
            }
        }
        
    }
    const getSelectedTopic = async (value) => {
        if(value === "null"){
            setCurrentTopic(null)
        }else{
            for(let i=0; i<currentSubject.listOfChaptersId.length; i++){
                if(currentSubject.listOfChaptersId[i].chapterId._id === value){
                    setCurrentTopic(currentSubject.listOfChaptersId[i].chapterId)
                    setName(currentSubject.listOfChaptersId[i].chapterId.name)
                    setSession(currentSubject.listOfChaptersId[i].chapterId.noOfSessions)
                    break
                }
            }
        }
        
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        const res = await editTopic(currentTopic._id,{
            name: name,
            subjectId: currentSubject._id,
            noOfSessions: session
        })
        // console.log("Edit Topic",res)
        alert("Topic Updated!")
        toggleVissibility()
    }
    return (
        <div className="modal-class">
            <div className="box">
                <h4>Edit Topic</h4>
                <select className="form-control" onChange={(e)=>{getSelected(e.target.value)}}>
                    <option value="null">Select Class</option>
                    {classes && classes.map((item,idx) => {
                        return <option key={idx} value={item._id}>{item.name}</option>
                    })}
                </select>
                <br/>
                {current && <select className="form-control" onChange={(e)=>{getSelectedSubject(e.target.value)}}>
                    <option value="null">Select Subject</option>
                    {current && current.listOfSubjectId.map((item,idx) => {
                        return <option key={idx} value={item.subjectId._id}>{item.subjectId.name}</option>
                    })}
                </select>}
                {currentSubject && <select className="form-control" onChange={(e)=>{getSelectedTopic(e.target.value)}}>
                    <option value="null">Select Topic</option>
                    {current && currentSubject.listOfChaptersId.map((item,idx) => {
                        return <option key={idx} value={item.chapterId._id}>{item.chapterId.name}</option>
                    })}
                </select>}
                {currentTopic && <form className="form class-edit-form" onSubmit={e=>handleSubmit(e)}>
                    <div className="form-group">
                        <label>Topic Name</label>
                        <input type="text" className="form-control" value={name} onChange={e=>setName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>No. Of Sessions</label>
                        <input type="number" className="form-control" value={session} onChange={e=>setSession(e.target.value)}/>
                    </div>
                    <input type="submit" className="btn btn-primary" value="Update" style={{float:'right'}} />
                </form>}
                <div className="action-button">
                    <button className="btn btn-secondary" onClick={()=>toggleVissibility()}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default EditTopicModal
