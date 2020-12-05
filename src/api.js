import axios from "axios"
const API_URL = "https://eklavya-coaching-admin.herokuapp.com/api/v1/secret/admin"

export const fetchClasses = async () => {
    try{
        var res = null
        await fetch(`${API_URL}/getAllClasses`)
        .then(response => response.json())
        .then(data => {console.log(data); res=data;});
        return res
    }catch(err){
        console.log("error=>",err)
    }
}

export const createClass = async (name, description, costOfSession) => {

    const res = await fetch(`${API_URL}/createClass`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({ name: name,
            description:description,
            costOfSession:costOfSession}) // body data type must match "Content-Type" header
      });
      return res.json(); // parses JSON response into native JavaScript objects
}

export const createSubject = async (resBody) => {

    const res = await fetch(`${API_URL}/createSubject`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(resBody) // body data type must match "Content-Type" header
      });
      return res.json(); // parses JSON response into native JavaScript objects
}

export const createChapter = async (body) => {

    const res = await fetch(`${API_URL}/createChapter`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(body) // body data type must match "Content-Type" header
      });
      return res.json(); // parses JSON response into native JavaScript objects
}
export const createSlots = async (chapterId, date, classId, duration, startTime, endTime) => {

    const res = await fetch(`${API_URL}/createSlot`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({ 
            chapterId:chapterId,
            date:date,
            classId:classId,
            duration:duration,
            startTime:startTime,
            endTime:endTime
        }) // body data type must match "Content-Type" header
      });
      return res.json(); // parses JSON response into native JavaScript objects
}

export const deleteClass = async (classId) => {
    const res = await fetch(`${API_URL}/deleteClass/${classId}`, {
        method: 'DELETE',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
      });
      return res.json();

}
export const deleteSubject = async (subjectId) => {
    const res = await fetch(`${API_URL}/deleteSubject/${subjectId}`, {
        method: 'DELETE',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
      });
      return res.json();

}
export const deleteChapter = async (chapterId) => {
    const res = await fetch(`${API_URL}/deleteChapter/${chapterId}`, {
        method: 'DELETE',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
      });
      return res.json();

}
export const deleteTeacher = async (teacherId) => {
    const res = await fetch(`${API_URL}/deleteTeacher/${teacherId}`, {
        method: 'DELETE',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
      });
      return res.json();

}

export const fetchClassById = async (classId) => {
    const res = await fetch(`${API_URL}/getClassById/${classId}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
      });
      return res.json();
}

export const fetchSubjectById = async (subjectId) => {
    const res = await fetch(`${API_URL}/getSubjectById/${subjectId}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
      });
      return res.json();
}

export const fetchChapterById = async (chapterId) => {
    const res = await fetch(`${API_URL}/getChapterById/${chapterId}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
      });
      return res.json();
}

export const fetchTeacherById = async (teacherId) => {
  const res = await fetch(`${API_URL}/getTeacherById/${teacherId}`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer'
    });
    return res.json();
}

export const fetchStudents = async () => {
    const res = await fetch(`${API_URL}/getAllStudents`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      });
      return res.json();
}
export const fetchStudentById = async (stId) => {
    const res = await fetch(`https://eklavya-coaching-student.herokuapp.com/getStudentDetails/${stId}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      });
      return res.json();
}

export const fetchTeachers = async () => {
    const res = await fetch(`${API_URL}/viewAllTeachers`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      });
      return res.json();
}

export const fetchSessions = async () => {
    const res = await fetch(`${API_URL}/viewAllCreatedSession`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      });
      return res.json();
}

export const createTeacher = async (resData) => {
  const res = await fetch(`${API_URL}/createTeacher`, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(
            resData
    ) // body data type must match "Content-Type" header
  });
  return res.json(); // parses JSON response into native JavaScript objects
}

export const assignTeacher = async (sessionId,teacherId,meetingUrl,teacherMeetingUrl) => {
  const res = await fetch(`${API_URL}/assignTeacherToSession`, {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({
              sessionId:sessionId,
              teacherId:teacherId,
              meetingUrl:meetingUrl,
              teacherMeetingUrl:teacherMeetingUrl
            }) // body data type must match "Content-Type" header
  });
  return res.json(); // parses JSON response into native JavaScript objects
}