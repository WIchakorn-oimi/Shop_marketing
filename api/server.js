const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const userController = require('./controllers/UserController');
const productController =require('./controllers/ProductControllre')

// ใช้ body-parser middleware
app.use(bodyParser.json());// เพื่อ parse ข้อมูล JSON
app.use(bodyParser.urlencoded({ extended: true }));// เพื่อ parse ข้อมูล URL-encoded
// ใช้ cors middleware
app.use(cors()); // เพื่อจัดการการอนุญาตข้ามโดเมน
app.use('/uploads', express.static('uploads'));

// ใช้ router จาก userController สำหรับเส้นทาง /user
app.use('/user', userController);
app.use("/product", productController);

// เริ่มต้นเซิร์ฟเวอร์ที่พอร์ต 3001
app.listen(3001)