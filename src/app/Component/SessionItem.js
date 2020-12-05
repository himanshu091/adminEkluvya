import React,{useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import { assignTeacher, deleteClass } from '../../api'
import AssignTeacher from './AssignTeacher'
import sha1 from 'js-sha1';

function SessionItem({index, data, fetchAllSessions, teachers, teacherData}) {
    const [showForm, setshowForm] = useState(true)
    const [current, setCurrent] = useState(null)
    const nameQ = useRef(null)
    const emailQ = useRef(null)

    const [createMeetingLink, setcreateMeetingLink] = useState("");
    const [joinMeetingLink, setjoinMeetingLink] = useState("");
    const [joinModeratorLink, setjoinModeratorLink] = useState("");

    const [meetingID, setmeetingID] = useState("");

    const [joineeName, setjoineeName] = useState("");

    

    const handleSubmit = async () => {
        const meetingId = data._id
        const meetingName = data.subjectId.name.replace(/\s/g, "+");
        const voiceBridge = 11445
        const fullName = current.name.replace(/\s/g, "+");
        //Logic to generate Meeting
        // await createMeeting(data._id, data.subjectId.name, 12511)
        const createMeetingLink = await createMeeting(meetingId, meetingName, voiceBridge)

        console.log("step1 => createMeetingLink =",createMeetingLink)

        const Http = new XMLHttpRequest();
        const url=createMeetingLink;
        Http.open("GET", url);
        Http.send();
        Http.onreadystatechange=(e)=>{
            console.log(Http.responseText)
        }
        // console.log("Meeting Creation => ",response)
        // await joinAsModerator(current.name,data._id)
        const joinModeratorLink = await joinAsModerator(fullName,meetingId)
        console.log("step2 => joinMeetingLink =",joinModeratorLink)
        //Logic ends
        const res = await assignTeacher(data._id,current.id,data._id,joinModeratorLink)
        console.log(res)
        setshowForm(false)
        fetchAllSessions()
    }
    const createMeeting = async (meetingId, meetingName, voiceBridge) => {
        var secretKey = "uZEOeBZRdZPNvEJFz95VFNmiwlEMfkI0uxRoevec";
        // var checksum=sha1('create'+ `allowStartStopRecording=false&autoStartRecording=false&meetingID=${meetingId}&name=${meetingName}&record=false&voiceBridge=${voiceBridge}`+ 'uZEOeBZRdZPNvEJFz95VFNmiwlEMfkI0uxRoevec')
    
        var checksum = sha1(
          "create" +
            `allowStartStopRecording=false&attendeePW=ap&autoStartRecording=false&meetingID=${meetingId}&moderatorPW=mp&name=${meetingName}&record=false&voiceBridge=${voiceBridge}&welcome=%3Cbr%3EWelcome+to+%3Cb%3E%25%25CONFNAME%25%25%3C%2Fb%3E%21` +
            `${secretKey}`
        );
        console.log("Checksum for create", checksum);
    
        console.log("Meeting Id for Creating meet =>");
        console.log(
          `https://tuitions.ekluvya.guru/bigbluebutton/api/create?allowStartStopRecording=false&autoStartRecording=false&meetingID=${meetingId}&name=${meetingName}&record=false&voiceBridge=${voiceBridge}&checksum=${checksum}`
        );
        return(
          `https://tuitions.ekluvya.guru/bigbluebutton/api/create?allowStartStopRecording=false&attendeePW=ap&autoStartRecording=false&meetingID=${meetingId}&moderatorPW=mp&name=${meetingName}&record=false&voiceBridge=${voiceBridge}&welcome=%3Cbr%3EWelcome+to+%3Cb%3E%25%25CONFNAME%25%25%3C%2Fb%3E%21&checksum=${checksum}`
        );
      };
    const joinAsModerator = async (fullName, meetingId) => {
        var secretKey = "uZEOeBZRdZPNvEJFz95VFNmiwlEMfkI0uxRoevec";
        // var checksum=sha1('join'+`fullName=${fullName}&meetingID=${meetingId}&redirect=false`+ 'uZEOeBZRdZPNvEJFz95VFNmiwlEMfkI0uxRoevec')
    
        var checksum = sha1(
          "join" +
            `fullName=${fullName}&meetingID=${meetingId}&password=mp&redirect=true${secretKey}`
        );
    
        console.log(checksum);
        // console.log("Meeting Id for Joinee =>");
        // console.log(`https://tuitions.ekluvya.guru/bigbluebutton/api/join?fullName=${fullName}&meetingID=${meetingId}&redirect=true&checksum=${checksum}`)
    
        return(
          `https://tuitions.ekluvya.guru/bigbluebutton/api/join?fullName=${fullName}&meetingID=${meetingId}&password=mp&redirect=true&checksum=${checksum}`
        );
      };
    return (
        <tr>
                     
                      <td>{index+1}</td>
                      <td>Class {data.classId && data.classId.name}</td>
                      <td>{data.subjectId.name}</td>
                      <td>{data.chapterId.name}</td>
                      <td>{new Date(data.startDate).toDateString()}</td>
                      <td>{new Date(data.endDate).toDateString()}</td>
                      <td>{data.time}</td>
                      {data.teacherId?<td style={{color:'green',fontWeight:'bold'}}>Assigned</td>:<td>Pending</td>}
                      
                      <td className="text-right pr-0" style={{ minWidth: '100px' }}>
                      {!data.teacherId && <a onClick={()=>setshowForm(true)} className="btn btn-sm btn-success font-weight-bold py-2 px-3 px-xxl-5 my-1">Assign Teacher</a>}
                      </td>
                      {showForm && <div style={{display:'block', position: 'absolute', top: '-125px',left:'150px', zIndex:'100', height:'550px'}}><div role="document" className="modal-dialog modal-lg">
                        <div className="modal-content">
                        <div className="modal-header">
                            <div className="modal-title h4" id="example-modal-sizes-title-lg">Assign a Teacher</div>
                            <button onClick={()=>{setshowForm(false)}}  type="button" className="close"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
                        </div>
                        <div className="overlay overlay-block cursor-default modal-body" style={{paddingTop:'5px',paddingBottom:'0px'}}>
                            <form action="#" className="form form-label-right">
                            <div className="form-group row">
                                <div className="col-lg-12">
                                <AssignTeacher setCurrentTeacher={(id)=>setCurrent(id)} teacherData={teacherData} slot={data.time} subject={data.subjectId.name}/>
                                <br/>
                                </div>
                            </div>
                            
                            </form>
                        </div>
                        <div className="modal-footer"><button  onClick={()=>{setshowForm(false)}} type="button" className="btn btn-light btn-elevate">Cancel</button> <button onClick={handleSubmit} style={{display:current?'block':'none'}} type="submit" className="btn btn-primary btn-elevate">Assign</button></div>
                        </div>
                    </div></div>}
                   </tr>
    )
}

export default SessionItem
