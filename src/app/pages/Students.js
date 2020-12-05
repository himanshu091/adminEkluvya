import React,{useEffect, useState, useRef} from 'react'
import { fetchStudents, createClass } from '../../api'
import StudentItem from '../Component/StudentItem'

function Students() {
    const [data, setdata] = useState(null)
    const [showForm, setshowForm] = useState(false)
    const nameQ = useRef(null)
    const mobQ = useRef(null)
    const passQ = useRef(null)
    const emailQ = useRef(null)
    const [err, setErr] = useState("");
    useEffect(() => {
        
      fetchAllStudents()
        return () => {
            console.log('Class')
        }
    }, [])
    const fetchAllStudents = async () =>{
      const res = await fetchStudents()
      setdata(res)
   }
    const handleSubmit = async () =>{
      const res = await createClass(nameQ.current.value, emailQ.current.value, passQ.current.value, mobQ.current.value)
      console.log(res)
      setshowForm(false)
      fetchAllStudents()

    }
    const validatePhone = (event) => {
      var mob = event.target.value

      var phoneno = /^\d{10}$/;
      if(mob.match(phoneno)){
            setErr("")
            }
            else{setErr("Enter a valid phone number")
            }
      }
    return (
    <div className="container">
    <div className="card card-custom gutter-b">
       <div className="card-header">
          <div className="card-title">
             <h3 className="card-label">Students</h3>
          </div>
          <div className="card-toolbar"><button onClick={()=>{setshowForm(true)}} type="button" className="btn btn-primary">New Student</button></div>
       </div>
       <div className="card-body">
          <div className="react-bootstrap-table table-responsive">
             <table className="table table table-head-custom table-vertical-center overflow-hidden">
                <thead>
                   <tr>
                      
                      <th tabIndex={0} aria-label="ID sort asc" className="sortable sortable-active">
                         S.no
                         <span className="svg-icon svg-icon-sm svg-icon-primary ml-1">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                               <title>Stockholm-icons / Navigation / Up-2</title>
                               <desc>Created with Sketch.</desc>
                               <defs />
                               <g id="Stockholm-icons-/-Navigation-/-Up-2" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                  <polygon id="Shape" points="0 0 24 0 24 24 0 24" />
                                  <rect id="Rectangle" fill="#000000" opacity="0.3" x={11} y={10} width={2} height={10} rx={1} />
                                  <path d="M6.70710678,12.7071068 C6.31658249,13.0976311 5.68341751,13.0976311 5.29289322,12.7071068 C4.90236893,12.3165825 4.90236893,11.6834175 5.29289322,11.2928932 L11.2928932,5.29289322 C11.6714722,4.91431428 12.2810586,4.90106866 12.6757246,5.26284586 L18.6757246,10.7628459 C19.0828436,11.1360383 19.1103465,11.7686056 18.7371541,12.1757246 C18.3639617,12.5828436 17.7313944,12.6103465 17.3242754,12.2371541 L12.0300757,7.38413782 L6.70710678,12.7071068 Z" id="Path-94" fill="#000000" fillRule="nonzero" />
                               </g>
                            </svg>
                         </span>
                      </th>
                      <th tabIndex={0} aria-label="Firstname sortable" className="sortable">
                         Email
                         <span className="svg-icon svg-icon-sm svg-icon-primary ml-1 svg-icon-sort">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                               <title>Stockholm-icons / Shopping / Sort1</title>
                               <desc>Created with Sketch.</desc>
                               <defs />
                               <g id="Stockholm-icons-/-Shopping-/-Sort1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                  <rect id="bound" x={0} y={0} width={24} height={24} />
                                  <rect id="Rectangle-8" fill="#000000" x={4} y={5} width={16} height={3} rx="1.5" />
                                  <path d="M7.5,11 L16.5,11 C17.3284271,11 18,11.6715729 18,12.5 C18,13.3284271 17.3284271,14 16.5,14 L7.5,14 C6.67157288,14 6,13.3284271 6,12.5 C6,11.6715729 6.67157288,11 7.5,11 Z M10.5,17 L13.5,17 C14.3284271,17 15,17.6715729 15,18.5 C15,19.3284271 14.3284271,20 13.5,20 L10.5,20 C9.67157288,20 9,19.3284271 9,18.5 C9,17.6715729 9.67157288,17 10.5,17 Z" id="Combined-Shape" fill="#000000" opacity="0.3" />
                               </g>
                            </svg>
                         </span>
                      </th>
                      <th tabIndex={0} aria-label="Lastname sortable" className="sortable">
                         Name
                         <span className="svg-icon svg-icon-sm svg-icon-primary ml-1 svg-icon-sort">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                               <title>Stockholm-icons / Shopping / Sort1</title>
                               <desc>Created with Sketch.</desc>
                               <defs />
                               <g id="Stockholm-icons-/-Shopping-/-Sort1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                  <rect id="bound" x={0} y={0} width={24} height={24} />
                                  <rect id="Rectangle-8" fill="#000000" x={4} y={5} width={16} height={3} rx="1.5" />
                                  <path d="M7.5,11 L16.5,11 C17.3284271,11 18,11.6715729 18,12.5 C18,13.3284271 17.3284271,14 16.5,14 L7.5,14 C6.67157288,14 6,13.3284271 6,12.5 C6,11.6715729 6.67157288,11 7.5,11 Z M10.5,17 L13.5,17 C14.3284271,17 15,17.6715729 15,18.5 C15,19.3284271 14.3284271,20 13.5,20 L10.5,20 C9.67157288,20 9,19.3284271 9,18.5 C9,17.6715729 9.67157288,17 10.5,17 Z" id="Combined-Shape" fill="#000000" opacity="0.3" />
                               </g>
                            </svg>
                         </span>
                      </th>
                      <th tabIndex={0} aria-label="Email sortable" className="sortable">
                         Mobile
                         <span className="svg-icon svg-icon-sm svg-icon-primary ml-1 svg-icon-sort">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                               <title>Stockholm-icons / Shopping / Sort1</title>
                               <desc>Created with Sketch.</desc>
                               <defs />
                               <g id="Stockholm-icons-/-Shopping-/-Sort1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                  <rect id="bound" x={0} y={0} width={24} height={24} />
                                  <rect id="Rectangle-8" fill="#000000" x={4} y={5} width={16} height={3} rx="1.5" />
                                  <path d="M7.5,11 L16.5,11 C17.3284271,11 18,11.6715729 18,12.5 C18,13.3284271 17.3284271,14 16.5,14 L7.5,14 C6.67157288,14 6,13.3284271 6,12.5 C6,11.6715729 6.67157288,11 7.5,11 Z M10.5,17 L13.5,17 C14.3284271,17 15,17.6715729 15,18.5 C15,19.3284271 14.3284271,20 13.5,20 L10.5,20 C9.67157288,20 9,19.3284271 9,18.5 C9,17.6715729 9.67157288,17 10.5,17 Z" id="Combined-Shape" fill="#000000" opacity="0.3" />
                               </g>
                            </svg>
                         </span>
                      </th>
                      <th tabIndex={0} aria-label="Email sortable" className="sortable">
                         Age
                         <span className="svg-icon svg-icon-sm svg-icon-primary ml-1 svg-icon-sort">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                               <title>Stockholm-icons / Shopping / Sort1</title>
                               <desc>Created with Sketch.</desc>
                               <defs />
                               <g id="Stockholm-icons-/-Shopping-/-Sort1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                  <rect id="bound" x={0} y={0} width={24} height={24} />
                                  <rect id="Rectangle-8" fill="#000000" x={4} y={5} width={16} height={3} rx="1.5" />
                                  <path d="M7.5,11 L16.5,11 C17.3284271,11 18,11.6715729 18,12.5 C18,13.3284271 17.3284271,14 16.5,14 L7.5,14 C6.67157288,14 6,13.3284271 6,12.5 C6,11.6715729 6.67157288,11 7.5,11 Z M10.5,17 L13.5,17 C14.3284271,17 15,17.6715729 15,18.5 C15,19.3284271 14.3284271,20 13.5,20 L10.5,20 C9.67157288,20 9,19.3284271 9,18.5 C9,17.6715729 9.67157288,17 10.5,17 Z" id="Combined-Shape" fill="#000000" opacity="0.3" />
                               </g>
                            </svg>
                         </span>
                      </th>
                      
                      <th tabIndex={0} className="text-right pr-3">Actions</th>
                   </tr>
                </thead>
                <tbody>
                  {data && data.map((classItem, index) => {
                     return <StudentItem key={classItem._id} fetchAllStudents={fetchAllStudents} data={classItem} index={index}/>
                  })}
                </tbody>
             </table>
          </div>
       </div>
    </div>
    {showForm && <div style={{display:'block', position: 'absolute', top: '50px', zIndex:'100'}}><div role="document" className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title h4" id="example-modal-sizes-title-lg">Add New Student</div>
            <button onClick={()=>{setshowForm(false)}}  type="button" className="close"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
          </div>
          <div className="overlay overlay-block cursor-default modal-body">
            <form action="#" className="form form-label-right">
              <div className="form-group row">
                <div className="col-lg-6">
                  <label>Enter Name Of Student</label><input type="text" ref={nameQ} className="form-control" name="className" placeholder="Enter Name Of Student"  />
                  {/* <div className="feedback">Please enter <b>Class Name</b></div> */}
                </div>
                <div className="col-lg-6">
                  <label>Enter Email</label><input type="email" ref={emailQ} className="form-control" name="PerSessionCost" placeholder="name@domain.com"  />
                  {/* <div className="feedback">Please enter <b>Per Session Cost</b></div> */}
                </div>
                <div className="col-lg-6">
                   <br/>
                  <label>Enter Password</label><input type="password" ref={passQ} className="form-control" name="description" placeholder="Enter Password"  />
                  {/* <div className="feedback">Please enter <b>Login</b></div> */}
                </div>
                <div className="col-lg-6">
                <br/>
                  <label>Mobile* <span style={{color:'red', fontSize: '10px'}}>{err}</span></label><input type="tel" ref={mobQ} onChange={(e)=>validatePhone(e)} className="form-control" name="mob" placeholder="Enter Mobile"  />
                  
                  {/* <div className="feedback">Please enter <b>Per Session Cost</b></div> */}
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
          <div className="modal-footer"><button  onClick={()=>{setshowForm(false)}} type="button" className="btn btn-light btn-elevate">Cancel</button> <button onClick={handleSubmit} type="submit" className="btn btn-primary btn-elevate">Create</button></div>
        </div>
      </div></div>}
 </div>)
}

export default Students
