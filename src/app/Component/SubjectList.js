import React,{useState, useEffect} from 'react'
import { fetchClassById } from '../../api'
import TopicList from './TopicList'

function SubjectList({currentClass}) {
    const [data, setdata] = useState(null)
    const [currentSubjectData, setcurrentSubjectData] = useState(null)

    useEffect(() => {
        fetchCurrentClasses()
        return () => {
            console.log('Subject')
        }
    }, [currentClass])

    const fetchCurrentClasses = async () =>{
        if(currentClass !== null){
            const res = await fetchClassById(currentClass)
            setdata(res)
        }
   }
    return (
        <div className="row">
                <div className="col-3">
                    {data?(
                        <div>
                            {data && data.listOfSubjectId.map(sub=>{
                                if(sub.subjectId){
                                    return <a className="btn btn-success" onClick={()=>setcurrentSubjectData(sub.subjectId)} style={{width: '100%', marginTop:'5px', fontWeight:'700', textTransform:'capitalize'}} key={sub.subjectId._id}>{sub.subjectId.name}</a>
                                }
                            })}
                        </div>
                    ):(
                    <p>Select a class to view its details</p>
                    )}
                </div>
                <div className="col-9">
                    <TopicList data={currentSubjectData}/>
                </div>
        </div>
    )
}

export default SubjectList
