import { OK, BAD_REQUEST, INTERNAL_SERVER_ERROR } from 'http-status-codes';
import db from '../models/index';

const generateReportData = async (req, res) => {
  try {
    let payload = {};

    const getAll = await db.enrolment.findAll({
      include: [
        {
          model: db.teachers,
          attributes: ['email']
        },
        {
          model: db.subjects,
          attributes: ['code', 'name']
        }
    ]
    });
    getAll.forEach(row => {
      if (row.teacher.email in payload) {
        let isSubjectExist = false;
        payload[row.teacher.email].forEach(subject => {
          if (subject.subjectCode === row.subject.code) {
            isSubjectExist = true;
            subject.numberOfClasses = subject.numberOfClasses + 1;
          }
        });
        if (!isSubjectExist) {
          payload[row.teacher.email].push({subjectCode: row.subject.code,subjectName: row.subject.name,numberOfClasses: 1})
        }
      } else {
        payload[row.teacher.email] = [];
        payload[row.teacher.email].push({subjectCode: row.subject.code,subjectName: row.subject.name,numberOfClasses: 1})
      }
    });

    return res.status(200).json(payload);
  } catch (err) {
    console.log(err);
  }
}

export default generateReportData;
