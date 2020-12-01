import React,{useState, useEffect} from 'react'
import { fetchClassById } from '../../api'
import TopicList from './TopicList'

function SubjectList({currentClass}) {
    const [data, setdata] = useState(null)
    const [currentSubjectData, setcurrentSubjectData] = useState(null)
    const [selectedSubject, setselectedSubject] = useState(null)
    useEffect(() => {
        fetchCurrentClasses()
        return () => {
            console.log('Subject')
        }
    }, [])
    useEffect(() => {
        fetchCurrentClasses()
        return () => {
            console.log('Subject')
        }
    }, [currentClass])

    const fetchCurrentClasses = async () =>{
        if(currentClass){
            const res = await fetchClassById(currentClass)
            setdata(res)
        }
   }
    return (
        <div className="row">
                <div className="col-3" style={{backgroundColor:'#fff'}}>
                    {data?(
                        <div>
                            {data && data.listOfSubjectId.map(sub=>{
                                if(sub.subjectId){
                                    return <a className="btn btn-transparent" onClick={()=>{setcurrentSubjectData(sub.subjectId);setselectedSubject(sub.subjectId._id)}} style={{width: '100%', marginTop:'5px', fontWeight:'700', textTransform:'capitalize', backgroundColor:selectedSubject === sub.subjectId._id?'#ff7000':'#ff700050',color:selectedSubject === sub.subjectId._id?'#fff':'#000'}} key={sub.subjectId._id}>{sub.subjectId.name}</a>
                                }
                            })}
                        </div>
                    ):(
                    <p>Select a class to view its details</p>
                    )}
                </div>
                <div className="col-1"></div>
                <div className="col-8"  style={{backgroundColor:'#fff',padding: '15px'}}>
                    <TopicList data={currentSubjectData}/>
                </div>
        </div>
    )
}

export default SubjectList
