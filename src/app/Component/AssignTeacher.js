import React, { useState, useEffect } from 'react'

function AssignTeacher({teacherData, setCurrentTeacher, slot, subject}) {
    // #64b5f6
    const [current, setCurrent] = useState(null)
    const [name, setName] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")
    const searchTeacher = (e) => {
        const a = e.target.value;
        setSearchQuery(a)
    }
    useEffect(() => {
        setCurrentTeacher({id:current, name:name})
        return () => {
            console.log("teacher")
        }
    }, [current])
    return (
        <div>
            <input type="text" className="form-control" onChange={e=>searchTeacher(e)} placeholder="Search Instructor, by name, subject language"/>
            <div style={{height:'450px', width:'535px',overflowY:'scroll',paddingTop:'4px'}}>
            {teacherData && teacherData.map(teacher =>{
                                if(teacher.timeSlots.includes(slot) && teacher.mainSubject === subject && teacher.mainSubject.includes(subject) && (teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) || teacher.mainSubject.toLowerCase().includes(searchQuery.toLowerCase()) || teacher.primaryLanguage.toLowerCase().includes(searchQuery.toLowerCase()))){
                                    return(
                                        <div key={teacher._id} onClick={()=>{setCurrent(teacher._id);setName(teacher.name)}} style={{display:'flex', justifyContent: 'space-between', alignItems:'flex-start', flexWrap:'wrap', textTransform:'capitalize', background:current===teacher._id?'#64b5f6':'#e3f2fd', marginBottom:'5px',padding:'5px',borderRadius:'5px', cursor:'pointer'}}>
                                            <div>
                                                <h3 style={{marginBottom:'0px',color:'#fc6f01'}}>{teacher.name}</h3>
                                                
                                                <p style={{marginBottom:'0px', fontWeight:'500'}}>{teacher.otherLanguages.map(lang=>{
                                                    return `${lang},`
                                                })}</p>
                                            </div>
                                            <div style={{display:'flex',flexWrap:'wrap'}}>
                                                <a className="btn btn-warning" style={{backgroundColor:'#fc6f01',padding:'5px'}}>{teacher.mainSubject}</a>
                                                {teacher.otherSubjects.map(sub=>{
                                                    return <a className="btn btn-warning" style={{backgroundColor:'#fc6f01',padding:'5px',marginLeft:'3px'}}>{sub}</a>
                                                })}
                                            </div>
                                            <div style={{flexBasis:'100%'}}>
                                                <p style={{marginBottom:'0px', fontWeight:'500',}}>{new Date(teacher.startDate).toDateString()} - {new Date(teacher.endDate).toDateString()}</p>
                                                <div></div>
                                                <div style={{display:'flex',flexWrap:'wrap'}}>
                                                    {/* {teacher.timeSlots.map(sub=>{ */}
                                                        <a className="btn btn-danger" style={{fontSize:'10px', backgroundColor:'green', border:'none', color:'#fff', marginRight:'2px', marginBottom:'2px',padding:'5px'}}>{slot}</a>
                                                    {/* })} */}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }else{
                                    
                                }
                                })}
                                
                                </div>
        </div>
    )
}

export default AssignTeacher
