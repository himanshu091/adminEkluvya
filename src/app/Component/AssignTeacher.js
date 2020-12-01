import React, { useState, useEffect } from 'react'

function AssignTeacher({teacherData, setCurrentTeacher}) {
    // #64b5f6
    const [current, setCurrent] = useState(null)
    const [name, setName] = useState(null)
    const searchTeacher = (e) => {
        const a = e.target.value;
        console.log(a)
    }
    useEffect(() => {
        setCurrentTeacher({id:current, name:name})
        return () => {
            console.log("teacher")
        }
    }, [current])
    return (
        <div>
            <input type="text" className="form-control" onChange={e=>searchTeacher(e)} placeholder="Search Instructor, buy name, subject language"/>
            <div style={{height:'450px',overflowY:'scroll',paddingTop:'4px'}}>
            {teacherData && teacherData.map(teacher =>{
                                    return(
                                        <div key={teacher._id} onClick={()=>{setCurrent(teacher._id);setName(teacher.name)}} style={{display:'flex', justifyContent: 'space-between', alignItems:'flex-start', flexWrap:'wrap', textTransform:'capitalize', background:current===teacher._id?'#64b5f6':'#e3f2fd', marginBottom:'5px',padding:'5px',borderRadius:'5px', cursor:'pointer'}}>
                                            <div>
                                                <h3 style={{marginBottom:'0px'}}>{teacher.name}</h3>
                                                
                                                <p style={{marginBottom:'0px', fontWeight:'500'}}>{teacher.otherLanguages.map(lang=>{
                                                    return `${lang},`
                                                })}</p>
                                            </div>
                                            <div style={{display:'flex',flexWrap:'wrap'}}>
                                                <a className="btn btn-warning">{teacher.mainSubject}</a>
                                                {teacher.otherSubjects.map(sub=>{
                                                    console.log(sub)
                                                    // return <a className="btn btn-warning">{sub}</a>
                                                })}
                                            </div>
                                            <div style={{flexBasis:'100%'}}>
                                                <p style={{marginBottom:'0px', fontWeight:'500'}}>{new Date(teacher.startDate).toDateString()} - {new Date(teacher.endDate).toDateString()}</p>
                                                <div></div>
                                                <div style={{display:'flex',flexWrap:'wrap'}}>
                                                    {teacher.timeSlots.map(sub=>{
                                                        return <a className="btn btn-danger" style={{fontSize:'10px', backgroundColor:'#ed1576', color:'#fff', marginRight:'2px'}}>{sub}</a>
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                                </div>
        </div>
    )
}

export default AssignTeacher
