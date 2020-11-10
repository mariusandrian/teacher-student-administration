import { NO_CONTENT, BAD_REQUEST, INTERNAL_SERVER_ERROR } from 'http-status-codes';
import db from '../models/index';

const enrolStudents = async (req, res) => {
  try {
    // Assuming only one teacher, one subject and one class
    let students = req.body.students;
    let teacher = req.body.teacher;
    let subject = req.body.subject;
    let classroom = req.body.class;

    let studentId =[];

    if (Array.isArray(students)) {
      students.forEach(async student => {
        let studentResult = await db.students.create({name: student.name, email: student.email});
        studentId.push(studentResult.dataValues.id);
      })
    } else {
      let studentResult = await db.students.create({name: student.name, email: student.email});
    }
    const teacherResult = await db.teachers.create({name: teacher.name, email: teacher.email});
    const subjectResult = await db.subjects.create({code: subject.subjectCode, name: subject.name});
    const classroomResult = await db.classes.create({code: classroom.classCode, name: classroom.name});

    let teacherId = teacherResult.dataValues.id;
    let subjectId = subjectResult.dataValues.id;
    let classId = classroomResult.dataValues.id;

    // Populate enrolment table
    if (Array.isArray(students)) {
      studentId.forEach(async student => {
        let enrolmentResult = await db.enrolment.create({
          studentId: student,
          teacherId: teacherId,
          subjectId: subjectId,
          classId: classId
        });
        console.log(enrolmentResult);
      });
    } else {
      let enrolmentResult = await db.enrolment.create({
        studentId: studentId[0],
        teacherId: teacherId,
        subjectId: subjectId,
        classId: classId
      });
    }

    return res.sendStatus(NO_CONTENT);
  } catch (err) {
    console.log(err);
  }
}

export default enrolStudents;
