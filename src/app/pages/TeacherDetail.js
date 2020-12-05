import { map } from 'lodash'
import React, { useEffect, useState } from 'react'
import { fetchTeachers } from '../../api'

function TeacherDetail({match}) {
    const [data, setdata] = useState(null)
    useEffect(() => {
        const fetchThisTeacher = async () => {
            const res = await fetchTeachers()
            for(var i=0; i<res.length; i++){
                if(res[i]._id === match.params.id){
                    setdata(res[i])
                    break
                }
                
            }
        }
        fetchThisTeacher()
        return () => {
            console.log("Temp")
        }
    }, [])
    return (
        <div>
            {!data?<h3>Fetching...</h3>:<div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5 col-md-6" >
                            <div style={{background: '#fff', padding: '10px', marginBottom:'10px'}}>
                                <h3 style={{color:'#ff7000'}}>Basic Details for <b>{data.name}</b></h3>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>TeacherId</th>
                                            <td>{data._id}</td>
                                        </tr>
                                        <tr>
                                            <th>Email</th>
                                            <td>{data.email}</td>
                                        </tr>
                                        <tr>
                                            <th>Mobile</th>
                                            <td>{data.mobileNumber}</td>
                                        </tr>
                                        <tr>
                                            <th>Primary Subjects</th>
                                            <td>{data.mainSubject}</td>
                                        </tr>
                                        <tr>
                                            <th>Subject</th>
                                            <td>{data.otherSubjects.map(sub =>{return `${sub},`})}</td>
                                        </tr>
                                        <tr>
                                            <th>Language</th>
                                            <td>{data.primaryLanguage}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-6">
                            <div style={{background: '#fff', padding: '10px', marginBottom:'10px'}}>
                                <h3 style={{color:'#ff7000'}}>Availability</h3>
                                <h6>Start Date:{new Date(data.startDate).toDateString()}</h6>
                                <h6>End Date:{new Date(data.endDate).toDateString()}</h6>
                                {data.timeSlots.map(slot=>{
                                    return <a className="btn btn-danger" style={{fontSize:'10px', backgroundColor:'green', border:'none', color:'#fff', marginRight:'2px', marginBottom:'2px',padding:'5px'}}>{slot}</a>
                                })}
                            </div>
                        </div>
                        <div className="col-6" >
                            <div style={{background: '#fff', padding: '10px'}}>
                                <h3 style={{color:'#ff7000'}}>Sessions</h3>
                                <ul>
                                    {data.listOfSessionId.map(s=>{
                                        return <li>SessionId: {s.sessionId}</li>
                                    })}
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>}
        </div>
    )
}

export default TeacherDetail
