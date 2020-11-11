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
        let studentResult = await db.students.findOrCreate({
          where: {
            email: student.email
          },
          defaults: {
            name: student.name,
            email: student.email
          }
        });
        studentId.push(studentResult[0].dataValues.id);
      })
    } else {
      let studentResult = await db.students.findOrCreate({
        where: {
          email: student.email
        },
        defaults: {
          name: student.name,
          email: student.email
        }
      });
      studentId.push(studentResult[0].dataValues.id);
    }
    const teacherResult = await db.teachers.findOrCreate({
      where: {
        email: teacher.email,
      },
      defaults: {
        name: teacher.name,
        email: teacher.email
      }
    });
    const subjectResult = await db.subjects.findOrCreate({
      where: {
        code: subject.subjectCode
      },
      defaults: {
        code: subject.subjectCode, name: subject.name
      }
    });
    const classroomResult = await db.classes.findOrCreate({
      where: {
        code: classroom.classCode
      },
      defaults: {
        code: classroom.classCode,
        name: classroom.name
      }
    });

    let teacherId = teacherResult[0].dataValues.id;
    let subjectId = subjectResult[0].dataValues.id;
    let classId = classroomResult[0].dataValues.id;

    // Populate enrolment table
    if (Array.isArray(students)) {
      studentId.forEach(async student => {
        let enrolmentResult = await db.enrolment.create({
          studentId: student,
          teacherId: teacherId,
          subjectId: subjectId,
          classId: classId
        });
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
