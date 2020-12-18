import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { deleteTeacher } from '../../api'

function StudentItem({index, data, fetchAllClasses}) {
   const [enable, setenable] = useState(true)
    return (
        <tr>
                     
                      <td>{index+1}</td>
                      <td><Link to={`/teachersdetail/${data._id}`}>{data.name}</Link></td>
                      <td>{data.email}</td>
                      
                      <td>{data.mobileNumber}</td>
                      <td>{data.mainSubject}</td>
                      <td>{data.primaryLanguage}</td>
                      {/* <td>{data.listOfSessionId.length}</td> */}
                      <td className="text-right pr-0" style={{ minWidth: '100px' }}>
                      <a title="Toggle Visibility" onClick={()=>setenable(!enable)} className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3" style={{width:'80px'}}>
                         <span className="svg-icon svg-icon-md svg-icon-primary">
                           <img style={{width:'20px',height:'20px'}} src={!enable?require('../../eyeclosed.png'):require('../../openeye.svg')}/>{!enable?<span>  Enable</span>:<span>  Disable</span>}
                         </span>
                      </a>
                      <a title="Delete Teacher" onClick={
                         async ()=>{
                            await deleteTeacher(data._id);
                           }
                         } className="btn btn-icon btn-light btn-hover-danger btn-sm">
                         <span className="svg-icon svg-icon-md svg-icon">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                               <title>Stockholm-icons / General / Trash</title>
                               <desc>Created with Sketch.</desc>
                               <defs />
                               <g id="Stockholm-icons-/-General-/-Trash" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                  <rect id="bound" x={0} y={0} width={24} height={24} />
                                  <path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" id="round" fill="#000000" fillRule="nonzero" />
                                  <path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" id="Shape" fill="#000000" opacity="0.3" />
                               </g>
                            </svg>
                         </span>
                      </a>
                      </td>
                   </tr>
    )
}

export default StudentItem
