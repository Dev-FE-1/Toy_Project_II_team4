const { onRequest } = require('firebase-functions/v2/https');
const logger = require('firebase-functions/logger');
const functions = require('firebase-functions');

const ResponseDTO = require('./DTO/responseDTO');

var admin = require('firebase-admin');
var serviceAccount = require('./premissions.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ origin: true }));

const db = admin.firestore();

// Routes

// 직원 로그인 및 로그아웃
// firebase auth 사용
// Login
app.post('/api/v1/employees/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Implement employee login logic here
    // ...
    const token = await admin.auth().createCustomToken(email);

    // 로그인 성공
    return res.status(200).json(ResponseDTO.success(200, 'Login successful', { token }));
  } catch {
    return res.status(500).json(ResponseDTO.fail(500, 'Login failed', null));
  }
});

// Logout
app.post('/api/v1/employees/logout', async (req, res) => {
  try {
    // Implement employee logout logic here
    // ...
    return res.status(200).json(ResponseDTO.success(200, 'Logout successful', null));
  } catch {
    return res.status(500).json(ResponseDTO.fail(500, 'Logout failed', null));
  }
});

function getEmployeeData(employeeId) {
  const newProfileRef = db.collection('employees').doc(req.body.employeeId);
  newProfileRef.create({ profile: profileData });
}

// 직원 프로필
// Create
app.post('/api/v1/employees/profiles', async (req, res) => {
  const profileData = req.body;

  try {
    await newProfileRef.create({ profile: profileData });
    return res.status(201).json(ResponseDTO.success(201, 'ok', profileData));
  } catch {
    return res.status(500).json(ResponseDTO.fail(500, 'fail', null));
  }
});

// Read
app.get('/api/v1/employees/profiles', async (req, res) => {
  const employeeId = req.query.employeeId;
  const profileRef = db.collection('employees').doc(employeeId);

  console.log('employeeId', employeeId);
  try {
    const profile = await profileRef.get();
    if (!profile.exists) {
      return res.status(404).json(ResponseDTO.fail(404, 'Not Found', null));
    }
    return res.status(200).json(ResponseDTO.success(200, 'ok', profile.data()));
  } catch {
    return res.status(500).json(ResponseDTO.fail(500, 'fail', null));
  }
});

// 직원 일정
// Create

// POST /api/v1/employees/schedules
// Request Body:
// {
//     "employeeId": "sajo123456",
//     "title":"공연 일정",
//     "startDate": "YYYY-MM-DD HH:MM:SS",
//     "endDate": "YYYY-MM-DD HH:MM:SS",
//     "category":"공연",
//     "description":"수정된 비고"
// }

app.post('/api/v1/employees/schedules', async (req, res) => {
  const scheduleData = req.body;

  console.log('scheduleData', scheduleData);
  if (!scheduleData.employeeId) {
    return res.status(400).json(ResponseDTO.fail(400, 'Bad Request', null));
  }
  const newScheduleRef = db
    .collection('employees')
    .doc(req.body.employeeId)
    .collection('schedules');

  try {
    const scheduleCount = await newScheduleRef.get().then((snapshot) => snapshot.size);
    const updatedScheduleData = { ...scheduleData, id: scheduleCount };
    await newScheduleRef.doc(scheduleCount.toString()).set(updatedScheduleData);
    return res.status(201).json(ResponseDTO.success(201, 'ok', updatedScheduleData));
  } catch {
    return res.status(500).json(ResponseDTO.fail(500, 'fail', null));
  }
});

// Read
app.get('/api/v1/employees/schedules', async (req, res) => {
  const employeeId = req.query.employeeId;
  if (!employeeId) {
    return res.status(400).json(ResponseDTO.fail(400, 'Bad Request', null));
  }
  const scheduleRef = db.collection('employees').doc(employeeId).collection('schedules');

  try {
    const snapshot = await scheduleRef.get();
    if (snapshot.empty) {
      return res.status(404).json(ResponseDTO.fail(404, 'Not Found', null));
    }

    const schedules = [];
    snapshot.forEach((doc) => {
      schedules.push({ id: doc.id, ...doc.data() });
    });

    return res.status(200).json(ResponseDTO.success(200, 'ok', schedules));
  } catch (error) {
    console.error('Error fetching schedules:', error);
    return res.status(500).json(ResponseDTO.fail(500, 'fail', null));
  }
});

// Update by schedule ID
// PUT /api/v1/employees/schedules/:id
// Request Body:
// {
//     "employeeId": "sajo123456",
//     "title":"공연 일정",
//     "startDate": "YYYY-MM-DD HH:MM:SS",
//     "endDate": "YYYY-MM-DD HH:MM:SS",
//     "category":"공연",
//     "description":"수정된 비고"
// }
app.put('/api/v1/employees/schedules', async (req, res) => {
  const scheduleId = req.params.id;
  const scheduleData = req.body;
  console.log(scheduleData);
  const scheduleRef = db
    .collection('employees')
    .doc(req.body.employeeId)
    .collection('schedules')
    .doc(scheduleId);

  try {
    await scheduleRef.update(scheduleData);
    return res.status(200).json(ResponseDTO.success(200, 'ok', scheduleData));
  } catch {
    return res.status(500).json(ResponseDTO.fail(500, 'fail', null));
  }
});

// Delete by schedule ID
// DELETE /api/v1/employees/schedules/:employeeId/:id
app.delete('/api/v1/employees/schedules/:employeeId/:id', async (req, res) => {
  const employeeId = req.params.employeeId;
  const scheduleId = req.params.id;
  const scheduleRef = db
    .collection('employees')
    .doc(employeeId)
    .collection('schedules')
    .doc(scheduleId);

  try {
    await scheduleRef.delete();
    return res.status(200).json(ResponseDTO.success(200, 'ok', null));
  } catch {
    return res.status(500).json(ResponseDTO.fail(500, 'fail', null));
  }
});

// 직원 급여내역
// Create
app.post('/api/v1/employees/salaries', async (req, res) => {
  const salaryData = req.body;
  const newSalaryRef = db.collection('salaries').doc(req.body.employeeId);

  try {
    await newSalaryRef.create({ salary: salaryData });
    return res.status(201).json(ResponseDTO.success(201, 'ok', salaryData));
  } catch {
    return res.status(500).json(ResponseDTO.fail(500, 'fail', null));
  }
});

// Read
// GET ALL
// GET /api/v1/employees/salaries?employeeId=123
app.get('/api/v1/employees/salaries', async (req, res) => {
  const employeeId = req.query.employeeId;
  const salaryRef = db.collection('salaries').doc(employeeId);

  try {
    const salary = await salaryRef.get();
    if (!salary.exists) {
      return res.status(404).json(ResponseDTO.fail(404, 'Not Found', null));
    }
    return res.status(200).json(ResponseDTO.success(200, 'ok', salary.data()));
  } catch {
    return res.status(500).json(ResponseDTO.fail(500, 'fail', null));
  }
});

// Read
// GET salary by ID
// GET /api/v1/employees/salaries/123
app.get('/api/v1/employees/salaries/:id', async (req, res) => {
  const salaryId = req.params.id;
  const salaryRef = db.collection('salaries').doc(salaryId);

  try {
    const salary = await salaryRef.get();
    if (!salary.exists) {
      return res.status(404).json(ResponseDTO.fail(404, 'Not Found', null));
    }
    return res.status(200).json(ResponseDTO.success(200, 'ok', salary.data()));
  } catch {
    return res.status(500).json(ResponseDTO.fail(500, 'fail', null));
  }
});

// 직원 급여 정정 요청
// Create
app.get('/api/v1/employees/salary-corrections', async (req, res) => {
  const salaryCorrectionData = req.body;
  const newSalaryCorrectionRef = db.collection('salaryCorrections').doc(req.body.employeeId);

  try {
    await newSalaryCorrectionRef.create({ salaryCorrection: salaryCorrectionData });
    return res.status(201).json(ResponseDTO.success(201, 'ok', salaryCorrectionData));
  } catch {
    return res.status(500).json(ResponseDTO.fail(500, 'fail', null));
  }
});

// Read
app.get('/api/v1/employees/salary-corrections', async (req, res) => {
  const employeeId = req.query.employeeId;
  const salaryCorrectionRef = db.collection('salaryCorrections').doc(employeeId);

  try {
    const salaryCorrection = await salaryCorrectionRef.get();
    if (!salaryCorrection.exists) {
      return res.status(404).json(ResponseDTO.fail(404, 'Not Found', null));
    }
    return res.status(200).json(ResponseDTO.success(200, 'ok', salaryCorrection.data()));
  } catch {
    return res.status(500).json(ResponseDTO.fail(500, 'fail', null));
  }
});

// Update
app.put('/api/v1/employees/salary-corrections', async (req, res) => {
  const salaryCorrectionData = req.body;
  const salaryCorrectionRef = db.collection('salaryCorrections').doc(req.body.employeeId);

  try {
    await salaryCorrectionRef.update({ salaryCorrection: salaryCorrectionData });
    return res.status(200).json(ResponseDTO.success(200, 'ok', salaryCorrectionData));
  } catch {
    return res.status(500).json(ResponseDTO.fail(500, 'fail', null));
  }
});

// Delete
app.delete('/api/v1/employees/salary-corrections', async (req, res) => {
  const employeeId = req.query.employeeId;
  const salaryCorrectionRef = db.collection('salaryCorrections').doc(employeeId);

  try {
    await salaryCorrectionRef.delete();
    return res.status(200).json(ResponseDTO.success(200, 'ok', null));
  } catch {
    return res.status(500).json(ResponseDTO.fail(500, 'fail', null));
  }
});

// Export the API to Firebase Cloud Functions
exports.app = functions.https.onRequest(app);
