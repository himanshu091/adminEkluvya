import React, { useEffect, useState } from 'react'
import { deleteClass, editClass, fetchClasses } from '../../api'
import './style.css'
function DeleteClassModal({toggleVissibility}) {
    const [classes, setClasses] = useState(null)
    const [current, setCurrent] = useState(null)
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
        console.log("My Value", value)
        if(value === "null"){
            setCurrent(null)
        }else{
            for(let i=0; i<classes.length; i++){
                if(classes[i]._id === value){
                    setCurrent(classes[i])
                    setName(classes[i].name)
                    setUrl(classes[i].profileUrl)
                    setDesc(classes[i].description)
                    break
                }
            }
        }
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        const res = await deleteClass(current._id)
        // console.log("Edit Class",res.data)
        alert("Class Deleted!")
        toggleVissibility()
    }
    return (
        <div className="modal-class">
            <div className="box1">
                <h4>Delete Class</h4>
                <select className="form-control" onChange={(e)=>{getSelected(e.target.value)}}>
                    <option value="null">Select Class</option>
                    {classes && classes.map((item,idx) => {
                        return <option key={idx} value={item._id}>{item.name}</option>
                    })}
                </select>
                
                <br/>
                <div className="action-button1">
                    <button className="btn btn-secondary" onClick={()=>toggleVissibility()}>Cancel</button>
                    {current && <button className="btn btn-danger" style={{float:'right'}} onClick={e=>handleSubmit(e)}>Delete</button>}
                </div>
            </div>
        </div>
    )
}

export default DeleteClassModal
