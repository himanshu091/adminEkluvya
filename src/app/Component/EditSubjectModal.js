import React, { useEffect, useState } from 'react'
import { editSubject, fetchClasses } from '../../api'
import './style.css'
function EditSubjectModal({toggleVissibility}) {
    const [classes, setClasses] = useState(null)
    const [current, setCurrent] = useState(null)
    const [currentSubject, setCurrentSubject] = useState(null)
    const [name, setName] = useState(null)
    const [url, setUrl] = useState(null)
    const [desc, setDesc] = useState(null)
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
                    setName(current.listOfSubjectId[i].subjectId.name)
                    setUrl(current.listOfSubjectId[i].subjectId.imageUrl    )
                    setDesc(current.listOfSubjectId[i].subjectId.subjectDescription)
                    break
                }
            }
        }
        
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        const res = await editSubject(currentSubject._id,{
            name: name,
            description: desc,
            imageUrl: url
        })
        // console.log("Edit Subject",res)
        alert("Subject Updated!")
        toggleVissibility()
    }
    return (
        <div className="modal-class">
            <div className="box">
                <h4>Edit Subject</h4>
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
                {currentSubject && <form className="form class-edit-form" onSubmit={e=>handleSubmit(e)}>
                    <div className="form-group">
                        <label>Subject Name</label>
                        <input type="text" className="form-control" value={name} onChange={e=>setName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Cover Image Url</label>
                        <input type="text" className="form-control" value={url} onChange={e=>setUrl(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control" rows="5" value={desc} onChange={e=>setDesc(e.target.value)}/>
                    </div>
                    <input type="submit" className="btn btn-primary" value="Update" style={{float:'right'}}/>
                </form>}
                <div className="action-button">
                    <button className="btn btn-secondary" onClick={()=>toggleVissibility()}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default EditSubjectModal
