import React,{useEffect, useState, useRef} from 'react'
import { fetchClasses, createClass } from '../../api'
import ClassItem from '../Component/ClassItem'

function Classes() {
    const [data, setdata] = useState(null)
    const [showForm, setshowForm] = useState(false)
    const nameQ = useRef(null)
    const priceQ = useRef(null)
    const descQ = useRef(null)
    useEffect(() => {
        
        fetchAllClasses()
        return () => {
            console.log('Class')
        }
    }, [])
    const fetchAllClasses = async () =>{
      const res = await fetchClasses()
      setdata(res)
   }
    const handleSubmit = async () =>{
      const res = await createClass(nameQ.current.value, descQ.current.value, priceQ.current.value)
      console.log(res)
      setshowForm(false)
      fetchAllClasses()

    }
    return (
    <div className="container">
    <div className="card card-custom gutter-b">
       <div className="card-header">
          <div className="card-title">
             <h3 className="card-label">Class list</h3>
          </div>
          {/* <div className="card-toolbar"><button onClick={()=>{setshowForm(true)}} type="button" className="btn btn-primary">Add a Subject</button></div> */}
       </div>
       <div className="card-body">
          <div className="react-bootstrap-table table-responsive">
             <table className="table table table-head-custom table-vertical-center overflow-hidden">
                <thead>
                   <tr>
                      <th tabIndex={0} style={{width:'100px'}} aria-label="Firstname sortable" className="sortable">
                         Class
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
                         No. of Subjects
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
                      
                      {/* <th tabIndex={0} className="text-right pr-3">Actions</th> */}
                   </tr>
                </thead>
                <tbody>
                  {data && data.map((classItem, index) => {
                     if(classItem.listOfSubjectId.length >0){
                        return <ClassItem key={classItem._id} fetchAllClasses={fetchAllClasses} data={classItem} index={index}/>
                     }
                  })}
                </tbody>
             </table>
          </div>
       </div>
    </div>
    {showForm && <div style={{display:'block', position: 'absolute', top: '50px', zIndex:'100'}}><div role="document" className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title h4" id="example-modal-sizes-title-lg">Add New Subject</div>
            <button onClick={()=>{setshowForm(false)}}  type="button" className="close"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
          </div>
          <div className="overlay overlay-block cursor-default modal-body">
            <form action="#" className="form form-label-right">
              <div className="form-group row">
                <div className="col-lg-6">
                  <label>Class Name</label><input type="text" ref={nameQ} className="form-control" name="className" placeholder="class name"  />
                  {/* <div className="feedback">Please enter <b>Class Name</b></div> */}
                </div>
                <div className="col-lg-6">
                  <label>Per Session Cost</label><input type="number" ref={priceQ} className="form-control" name="PerSessionCost" placeholder="Per Session Cost"  />
                  {/* <div className="feedback">Please enter <b>Per Session Cost</b></div> */}
                </div>
                <div className="col-lg-12">
                  <label>Enter Description</label><textarea type="textarea" ref={descQ} className="form-control" name="description" placeholder="description"  />
                  {/* <div className="feedback">Please enter <b>Login</b></div> */}
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
          <div className="modal-footer"><button  onClick={()=>{setshowForm(false)}} type="button" className="btn btn-light btn-elevate">Cancel</button> <button onClick={handleSubmit} type="submit" className="btn btn-primary btn-elevate">Save</button></div>
        </div>
      </div></div>}
 </div>)
}

export default Classes
