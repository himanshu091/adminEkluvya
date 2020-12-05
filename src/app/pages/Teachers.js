import React,{useEffect, useState, useRef} from 'react'
import { fetchTeachers, createClass, createTeacher } from '../../api'
import TeacherItem from '../Component/TeacherItem'

function Teachers() {
   const [data, setdata] = useState(null)
   const [showForm, setshowForm] = useState(false)
   const nameQ = useRef(null)
   const emailQ = useRef(null)
   const passwordQ = useRef(null)
   const mobQ = useRef(null)
   const subjectQ = useRef(null)
   const langQ = useRef(null)
   const startQ = useRef(null)
   const endQ = useRef(null)
   const [subject, setSubject] = useState([]);
   const [err, setErr] = useState("");
   const [timing, setTiming] = useState([6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]);
   const [timingSelected, settimingSelected] = useState([false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
   const [searchQuery, setSearchQuery] = useState("")
   useEffect(() => {
      
      fetchAllTeachers()
      return () => {
         console.log('Class')
      }
   }, [])
   const fetchAllTeachers = async () =>{
      const res = await fetchTeachers()
      setdata(res)
   }
    const handleSubmit = async () =>{
      // name, email, password, mobileNumber, subject
      var language = langQ.current.value.split(',');
      var otherSubject = subject.map(each=>{
         return each.value
      })
      var timeSlots = []
      timing.forEach((tim,idx) => {
         if(timingSelected[idx]){
            timeSlots.push()
            if(tim<11){
               timeSlots.push(`${tim} AM - ${tim+1} AM`)
             }else if(tim === 11){
               timeSlots.push(`${tim} AM - ${tim+1} PM`)
             }else if(tim === 12){
               timeSlots.push(`${tim} PM - ${tim-12+1} PM`)
             }
             else{
               timeSlots.push(`${tim-12} PM - ${tim-12+1} PM`)
             }
         }
      })
      const resData = {
         name: nameQ.current.value,
         email: emailQ.current.value,
         password: passwordQ.current.value,
         mobileNumber: mobQ.current.value,
         mainSubject: subjectQ.current.value,
         otherSubjects: otherSubject,
         primaryLanguage: language[0],
         otherLanguages: language,
         startDate: startQ.current.value,
         endDate: endQ.current.value,
         timeSlots: timeSlots
      }
      const res = await createTeacher(resData)
      console.log(res)
      setshowForm(false)
      fetchAllTeachers()
      console.log(JSON.stringify(resData))

    }
    function handleChange(i, event) {
      const values = [...subject];
      values[i].value = event.target.value;
      setSubject(values)
      console.log(values)
    }
  
    function handleAdd() {
      const values = [...subject];
      values.push({ value: null });
      setSubject(values);
    }
  
    function handleRemove(i) {
      const values = [...subject];
      values.splice(i, 1);
      setSubject(values);
    }
    const captureTime = (i) => {
      const col = [...timingSelected]
      col[i] = !timingSelected[i]
      settimingSelected(col)
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
    <input type="text" className="form-control" onChange={(e)=>{setSearchQuery(e.target.value)}} placeholder="Search teacher..."/>
    <br/>
    <div className="card card-custom gutter-b">
       <div className="card-header">
          
          <div className="card-title">
             <h3 className="card-label">Teachers</h3>
          </div>
          <div className="card-toolbar"><button onClick={()=>{setshowForm(true)}} type="button" className="btn btn-primary">New Teacher</button></div>
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
                      <th tabIndex={0} aria-label="Lastname sortable" className="sortable">
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
                         Subject
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
                         Medium
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
                     if(classItem.name.toLowerCase().includes(searchQuery.toLowerCase())){
                        return <TeacherItem key={classItem._id} fetchAllTeachers={fetchAllTeachers} data={classItem} index={index}/>
                     }
                  })}
                </tbody>
             </table>
          </div>
       </div>
    </div>
    {showForm && <div style={{display:'block', position: 'absolute', top: '0px', zIndex:'100'}}><div role="document" className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title h4" id="example-modal-sizes-title-lg">Add New Teacher</div>
            <button onClick={()=>{setshowForm(false)}}  type="button" className="close"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
          </div>
          <div className="overlay overlay-block cursor-default modal-body">
            <form action="#" className="form form-label-right" autoComplete="off">
              <div className="form-group row">
                <div className="col-lg-6">
                  <label>Name of Teacher*</label><input type="text" ref={nameQ} className="form-control" name="teacherName" placeholder="Enter name"  />
                  {/* <div className="feedback">Please enter <b>Class Name</b></div> */}
                  <br/>
                </div>
                <div className="col-lg-6">
                  <label>Email*</label><input type="email" ref={emailQ} className="form-control" name="email" placeholder="Enter Email"  />
                  {/* <div className="feedback">Please enter <b>Per Session Cost</b></div> */}
                </div>
                <div className="col-lg-6">
                  <label>Password*</label><input type="password" ref={passwordQ} className="form-control" name="password" placeholder="Enter Password"  />
                  <div className="feedback">Password must be <b>6 characters long</b></div>
                  <br/>
                </div>
                <div className="col-lg-6">
                  <label>Mobile* <span style={{color:'red', fontSize: '10px'}}>{err}</span></label><input type="tel" ref={mobQ} onChange={(e)=>validatePhone(e)} className="form-control" name="mob" placeholder="Enter Mobile"  />
                  
                  {/* <div className="feedback">Please enter <b>Per Session Cost</b></div> */}
                </div>
                  <div className="col-lg-12">
                     <label>Enter Language for teaching (Comma seperated value)</label><textarea type="text" ref={langQ} className="form-control" name="subject" placeholder="English,Hindi,Tamil"  />
                     {/* <div className="feedback">Please enter <b>Per Session Cost</b></div> */}
                  </div>
                <div className="col-lg-6">
                   <br/>
                  <label>Primary Subject*</label><input type="text" ref={subjectQ} className="form-control" name="subject" placeholder="Enter Subject"  />
                  {/* <div className="feedback">Please enter <b>Per Session Cost</b></div> */}
                </div>
                <div className="col-lg-6"></div>
                {subject.map((lesson, idx) => {
                        return (
                        <div key={`${lesson}-${idx}`} className="col-lg-6"  style={{display:'flex', justifyContent:'flex-start', marginTop:'25px', alignItems:'center'}}>
                           
                            <input
                                type="text"
                                placeholder="Enter Name of other subject"
                                value={lesson.value || ""}
                                onChange={e => handleChange(idx, e)}
                                className="form-control"
                            />
                            <button type="button" className="btn btn-danger" style={{marginLeft:'7px'}} onClick={() => handleRemove(idx)}>
                            x
                            </button>
                        </div>
                        );
                    })}
                  
                  
                  <div className="col-lg-6">
                     <br/>
                     <label>Start Date</label>
                     <input type="date" ref={startQ} className="form-control"></input>
                  </div>
                  <div className="col-lg-6">
                  <br/>
                     <label>End Date</label>
                     <input type="date" ref={endQ} className="form-control"></input>
                  </div>
                  <div className="col-lg-12">
                     <br/>
                     <label>Select Time Slots*</label><br/>
                     {timing.map((time, idx) =>{
                        return <a className="btn btn-warning" onClick={()=>captureTime(idx)} style={{backgroundColor:timingSelected[idx]?'#ff7000':'#ff700000', color:timingSelected[idx]?'#fff':'#000',marginTop:'4px', marginRight:'4px'}}>{time}:00 - {time+1}:00</a>
                     })}
                  </div>
                  <div className="col-lg-12" style={{justifyContent: 'flex-end',display: 'flex', alignItems:'flex-end',marginTop:'5px', alignContent:'flex-start'}}>
                     <button type="button" className="btn btn-success" onClick={() => handleAdd()}>
                        Add another Subject
                     </button>
                  </div>
              </div>
            </form>
          </div>
          <div className="modal-footer"><button  onClick={()=>{setshowForm(false)}} type="button" className="btn btn-light btn-elevate">Cancel</button> <button onClick={handleSubmit} type="submit" className="btn btn-primary btn-elevate">Save</button></div>
        </div>
      </div></div>}
 </div>)
}

export default Teachers
