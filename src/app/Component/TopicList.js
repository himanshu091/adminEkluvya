import React,{useEffect, useState, useRef} from 'react'
import { createChapter } from '../../api'

function TopicList({data,currentClass,currentSubject}) {
    const [showModal, setshowModal] = useState(false)
    const nameQ = useRef(null)
    const priceQ = useRef(null)
    const descQ = useRef(null)
    useEffect(() => {
        console.log("I am Topic",data)
        return () => {
            console.log()
        }
    }, [data])
    const handleSubmit = async () => {
      const name = nameQ.current.value
      const totalSessions = priceQ.current.value
      // const language = descQ.current.value
      const res = await createChapter({ 
                                        name: name,
                                        classId: currentClass,
                                        subjectId: currentSubject,
                                        noOfSessions:totalSessions
                                      });
      setshowModal(false);
      window.location.reload()
    }
    return (
        <div style={{width:'100%', minHeight:'350px'}}>
            {currentSubject && <div className="container-fluid" style={{paddingRight: '0px'}}><div className="row" style={{paddingRight: '0px',paddingTop:'10px'}}><div className="col-8"></div><div className="col-4"><a className="btn btn-success" onClick={()=>setshowModal(true)} style={{backgroundColor:'#3e94f6'}}>Add New Lesson</a></div></div></div>}
            <hr/>
            <p style={{paddingLeft:'10px',paddingRight:'10px'}}><b>Subject Description :</b>{data && data.subjectDescription}</p>
            {data && <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Lesson</th>
                        <th>Sessions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.listOfChaptersId.map(chap=>{
                        if(chap.chapterId){
                            return <tr key={chap.chapterId._id}>
                                    <td>{chap.chapterId.name}</td>
                                    <td>{chap.chapterId.noOfSessions}</td>
                                </tr>
                        }
                    })}
                </tbody>
            </table>}
            {showModal && <div style={{display:'block', position: 'absolute', top: '-100px',left: '-250px', width:'500px', zIndex:100}}><div role="document" className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title h4" id="example-modal-sizes-title-lg">Add New Lesson</div>
            <button onClick={()=>{setshowModal(false)}}  type="button" className="close"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
          </div>
          <div className="overlay overlay-block cursor-default modal-body">
            <form action="#" className="form form-label-right">
              <div className="form-group row">
                <div className="col-lg-6">
                  <label>Enter name of lesson</label><input type="text" ref={nameQ} className="form-control" name="className" placeholder="Lesson Name"  />
                  {/* <div className="feedback">Please enter <b>Class Name</b></div> */}
                </div>
                <div className="col-lg-6">
                  <label>Enter total number of sessions</label><input type="number" ref={priceQ} className="form-control" name="PerSessionCost" placeholder="Total Sessions"  />
                  {/* <div className="feedback">Please enter <b>Per Session Cost</b></div> */}
                </div>
                {/* <div className="col-lg-12">
                    <br/>
                  <label>Languages(Enter Comma seperated values)</label><textarea type="textarea" ref={descQ} className="form-control" name="description" placeholder="English,Hindi"  />
                  
                  <br/>
                </div> */}

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
        </div>
    )
}

export default TopicList
