import React,{useEffect, useState} from 'react'
import { fetchSessions, fetchStudents, fetchTeachers } from '../../../api'
import { TilesWidget12 } from '../widgets'
// Total sessions created
// Total number of Active students
// Total number of Active Teacher
// Unassigned Teachers
function MainDashboard() {
    const [tSessions, settSessions] = useState(0)
    const [tStudents, settStudents] = useState(0)
    const [tTeachers, settTeachers] = useState(0)
    const [unAssignedTeacher, setunAssignedTeacher] = useState(0)
    useEffect(() => {
        const fetchAll = async () => {
            var res = await fetchStudents()
            settStudents(res.length)

            var teachers = await fetchTeachers()
            settTeachers(teachers.length)

            var session = await fetchSessions()
            settSessions(session.length)

            var liveSessions = 0
            var TodayDate = new Date()
            session.forEach((s)=>{
                if(TodayDate < new Date(s.endDate)){
                    liveSessions += 1
                }
            })
            var unAssignedTeacher = teachers.length-liveSessions
            if(unAssignedTeacher < 0){
                unAssignedTeacher = 0
            }
            setunAssignedTeacher(unAssignedTeacher)

        }
        fetchAll()
        
        return () => {
            console.log("Dashboard Page")
        }
    }, [])
    return (
        <div>
            <div className="row">
                <div className="col-xl-3">
                    <TilesWidget12 
                        className="gutter-b" 
                        iconColor="success" 
                        widgetHeight="150px" 
                        title="Total sessions created"
                        amount={tSessions}
                        icon="/media/svg/icons/Home/Bulb1.svg"
                    />
                </div>
                <div className="col-xl-3">
                    <TilesWidget12 
                        className="gutter-b" 
                        iconColor="success" 
                        widgetHeight="150px" 
                        title="Total number of Active students"
                        amount={tStudents}
                        icon="/media/svg/icons/Home/Bulb1.svg"
                    />
                </div>
                <div className="col-xl-3">
                    <TilesWidget12 
                        className="gutter-b" 
                        iconColor="success" 
                        widgetHeight="150px"
                        title="Total number of Active Teacher" 
                        amount={tTeachers}
                        icon="/media/svg/icons/Home/Bulb1.svg"
                    />
                </div>
                <div className="col-xl-3">
                    <TilesWidget12 
                        className="gutter-b" 
                        iconColor="success" 
                        widgetHeight="150px" 
                        title="Unassigned Teachers"
                        amount={unAssignedTeacher}
                        icon="/media/svg/icons/Home/Bulb1.svg"
                    />
                </div>
            </div>
        </div>
    )
}

export default MainDashboard
