import { map } from 'lodash'
import React,{useState, useEffect, useRef} from 'react'
import { createSubject, fetchClasses } from '../../api'
import SubjectList from './SubjectList'

function ClassDetailView() {
    const [showModal, setshowModal] = useState(false)
    const classSelectedQ = useRef(null)
    const nameQ = useRef(null)
    const descQ = useRef(null)
    const [data, setdata] = useState(null) //set it default for class 2
    const [selectedClass, setselectedClass] = useState("5fc654321ffe22002478cefb") //set it default for class 2
    const classQ = useRef("5fc654321ffe22002478cefb")
    const [lessons, setLessons] = useState([{ value: null }]);
    const [lessionSession, setlessionSession] = useState([{ value: null }]);

    useEffect(() => {
        
        fetchAllClasses()
        return () => {
            console.log('Class')
        }
    }, [])

    const updateSelectedClass = () => {
        setselectedClass(classQ.current.value)
    }

    const fetchAllClasses = async () =>{
      const res = await fetchClasses()
      setdata(res)
   }
   

  function handleChange(i, event) {
    const values = [...lessons];
    values[i].value = event.target.value;
    setLessons(values);
    console.log("val1", values)
  }
  function handleChange1(i, event) {
    const values1 = [...lessionSession];
    values1[i].value = event.target.value;
    setlessionSession(values1)
    console.log("val2", values1)
  }

  function handleAdd() {
    const values = [...lessons];
    const values1 = [...lessionSession];
    values.push({ value: null });
    values1.push({ value: null });
    setLessons(values);
    setlessionSession(values1)
  }

  function handleRemove(i) {
    const values = [...lessons];
    const values1 = [...lessionSession];
    values.splice(i, 1);
    values1.splice(i, 1);
    setLessons(values);
    setlessionSession(values1)
  }
   const handleSubmit= async () => {
      const chapters = lessons.map((l,idx)=>{
        return {
          chapterName: l.value,
          noOfSessions: lessionSession[idx].value
        }
      })
      var classId = classSelectedQ.current.value
      var name = nameQ.current.value
      var desc = descQ.current.value
      console.log({
        classId:classId,
        name:name,
        description:desc,
        chapters:chapters
      })
      const body = {
        classId:classId,
        name:name,
        description:desc,
        chapters:chapters
      }
      // const res = await createSubject(body)
      setshowModal(false)
      fetchAllClasses()
      window.location.reload();
   }
    return (
      
      <div className="">
          <div style={{backgroundColor:'#fff', padding:'10px', width:'295px', borderRadius:'5px'}}>
            <h4>Detail for Class <select onChange={updateSelectedClass} ref={classQ}>
                
                {data && data.map(cla => {
                    return <option className="" value={cla._id}>{cla.name}</option>
                })}
                
            </select></h4>
            <a className="btn btn-primary" onClick={()=>setshowModal(true)} style={{width:'100%', marginTop:'10px'}}>Add A Subject</a>
          </div>
          {showModal && <div style={{display:'block', position: 'absolute', top: '100px',left: '550px', width:'500px', zIndex:100}}><div role="document" className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title h4" id="example-modal-sizes-title-lg">Add New Subject</div>
            <button onClick={()=>{setshowModal(false)}}  type="button" className="close"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
          </div>
          <div className="overlay overlay-block cursor-default modal-body">
            <form action="#" className="form form-label-right">
              <div className="form-group row">
                  <div className="col-lg-6">
                      <label style={{ color : 'red' }}>Select Class</label>
                      <select ref={classSelectedQ} className="form-control">
                          {/* <option value="5fc654321ffe22002478cefb">Class 1</option>
                          <option value="5fc654351ffe22002478cefc">Class 2</option>
                          <option value="5fc6543b1ffe22002478cefd">Class 3</option>
                          <option value="5fc6543f1ffe22002478cefe">Class 4</option>
                          <option value="5fc654431ffe22002478ceff">Class 5</option>
                          <option value="5fc654491ffe22002478cf00">Class 6</option>
                          <option value="5fc6544f1ffe22002478cf01">Class 7</option>
                          <option value="5fc654551ffe22002478cf02">Class 8</option>
                          <option value="5fc654591ffe22002478cf03">Class 9</option>
                          <option value="5fc6545f1ffe22002478cf04">Class 10</option>
                          <option value="5fc654621ffe22002478cf05">Class 11</option>
                          <option value="5fc654c01ffe22002478cf06">Class 12</option>
                          <option value="5fc73e7c28eb660024d92948">Sample Class</option> */}

{data && data.map(cla => {
                    return <option className="" value={cla._id}>Class {cla.name}</option>
                })}

                      </select>
                  </div>
                <div className="col-lg-6">
                  <label>Enter name of Subject</label><input type="text" ref={nameQ} className="form-control" name="className" placeholder="Subject Name"  />
                  {/* <div className="feedback">Please enter <b>Class Name</b></div> */}
                </div>
                <div className="col-lg-12">
                    <br/>
                  <label>Enter description for this subject</label><textarea ref={descQ} className="form-control" name="PerSessionCost" placeholder="Description about Subject"  />
                  {/* <div className="feedback">Please enter <b>Per Session Cost</b></div> */}
                </div>
                <div className="col-lg-12" style={{padding:0}}>
                    {lessons.map((lesson, idx) => {
                        return (
                        <div key={`${lesson}-${idx}`} className="col-lg-12"  style={{display:'flex', justifyContent:'flex-start', marginTop:'10px'}}>
                            <input
                                type="text"
                                placeholder="Enter name of lesson"
                                value={lesson.value || ""}
                                onChange={e => handleChange(idx, e)}
                                className="form-control"
                            />
                            <input
                                type="number"
                                placeholder="Total Sessions"
                                value={lessionSession[idx].value || ""}
                                onChange={e => handleChange1(idx, e)}
                                className="form-control"
                            />
                            <button type="button" className="btn btn-danger" style={{marginLeft:'5px'}} onClick={() => handleRemove(idx)}>
                            x
                            </button>
                        </div>
                        );
                    })}
                </div>
                <div className="col-lg-12" style={{padding:0,justifyContent: 'flex-end',display: 'flex'}}>
                    <button type="button" className="btn btn-success" style={{marginTop:'5px'}} onClick={() => handleAdd()}>
                        Add Lesson
                    </button>
                </div>
                
              </div>
              {/* <div className="form-group row">
                <div className="col-lg-4">
                  <label>Enter Email</label><input type="email" className="form-control" name="email" placeholder="Email" defaultValue />
                  <div className="feedback">Please enter <b>Email</b></div>
                </div>
                <div className="col-lg-4">
                  <label>Date of Birth</label>
                  <div className="react-datepicker-wrapper">
                    <div className="react-datepicker__input-container"><input type="text" name="dateOfBbirth" className="form-control" defaultValue /></div>
                  </div>
                  <div className="feedback">Please enter <b>Date of Birth</b> in 'mm/dd/yyyy' format</div>
                </div>
                <div className="col-lg-4">
                  <label>Enter IP Address</label><input type="text" className="form-control" name="ipAddress" placeholder="IP Address" defaultValue />
                  <div className="feedback">We'll never share customer IP Address with anyone else</div>
                </div> 
              </div>*/}
              {/* <div className="form-group row">
                <div className="col-lg-4">
                  <label>Select Gender</label>
                  <select className="form-control form-control-solid" name="Gender">
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                  </select>
                  <div className="feedback">Please select <b>Gender</b></div>
                </div>
                <div className="col-lg-4">
                  <label>Select Type</label>
                  <select className="form-control form-control-solid" name="type">
                    <option value={0}>Business</option>
                    <option value={1}>Individual</option>
                  </select>
                  <div className="feedback">Please select <b>Type</b></div>
                </div>
              </div> */}
            </form>
          </div>
          <div className="modal-footer"><button  onClick={()=>{setshowModal(false)}} type="button" className="btn btn-light btn-elevate">Cancel</button> <button onClick={handleSubmit} type="submit" className="btn btn-primary btn-elevate">Save</button></div>
        </div>
      </div></div>}

          <div className="container-fluid" style={{ padding: '15px', borderRadius:'5px'}}>
                  
                  <div style={{position:'absolute', top:'7px', right:'20px'}}><a className="btn btn-danger" onClick={()=>setshowModal(true)}>Add New Subject</a></div>
                  <SubjectList currentClass={selectedClass}/>
                  
          </div>

      </div>
        
    )
}

export default ClassDetailView
