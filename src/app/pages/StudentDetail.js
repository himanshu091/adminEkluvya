import React, { useEffect, useState } from 'react'
import { fetchStudentById, fetchTeachers } from '../../api'

function TeacherDetail({match}) {
    const [data, setdata] = useState(null)
    useEffect(() => {
        const fetchThisStudent = async () => {
            const res = await fetchStudentById(match.params.id)
            setdata(res)
        }
        fetchThisStudent()
        return () => {
            console.log("Temp")
        }
    }, [])
    return (
        <div>
            {!data?<h3>Fetching...</h3>:<p>{JSON.stringify(data)}</p>}
        </div>
    )
}

export default TeacherDetail
