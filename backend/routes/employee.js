const express = require('express')
const router = express.Router()
const connection = require('../connection')


router.get('/api/employees', async(req, res) => {
  let sql = "SELECT * FROM employees"
  try{
      await connection.query(sql, function (error, results, fields) {
          if (error) {
              if (error) throw error
          }
          res.json(results)
      })
  }catch(error){
      return res.status(500).json({
          error: error.message
      })
  }
})

router.get('/api/employees/:id', async(req, res) => {
  let sql = "SELECT * FROM employees WHERE employeesId = ?"
  try{
      await connection.query(sql,[req.params.id], function (error, results, fields) {
          if (error) {
              if (error) throw error
          }
          res.json(results)
      })
  }catch(error){
      return res.status(500).json({
          error: error.message
      })
  }
})

router.post('/api/employees', async(req, res) => {
  // let sql ='INSERT INTO bok (bokTitel, bokForfattare, bokIsbn, bokPris, bokKategoriId) VALUES (?,?,?,?,?)'
  let sql ='INSERT INTO employees(employeeName,employeeEmail,employeePerNr,employeeSalary) VALUES (?,?,?,?)'
  // let params =[req.body.bokTitel, req.body.bokForfattare, req.body.bokIsbn, req.body.bokPris, req.body.bokKategoriId]
  let params =[req.body.employeeName, req.body.employeeEmail, req.body.employeePerNr, req.body.employeeSalary]

  try{
      await connection.query(sql, params, function (error, results, fields) {
          if (error) {
              if (error) throw error
          }
          return res.status(201).json({
              success: true,
              error: '',
              message: 'Du har lagt till en ny bok!'
          })
      })
  }catch(error){
      return res.status(500).json({
          success: false,
          error: error.message,
      })
  }
})

router.put('/api/employees', async(req, res) => {
  let sql ='UPDATE employees SET employeeName = ?, employeeEmail = ?, employeePerNr = ?, employeeSalary = ? WHERE employeesId = ?'
  let params =[req.body.employeeName, req.body.employeeEmail, req.body.employeePerNr, req.body.employeeSalary, req.body.employeesId]

  try{
      await connection.query(sql, params, function (error, results, fields) {
          if (error) {
              if (error) throw error
          }
          return res.status(201).json({
              success: true,
              error: ''
          })
      })
  }catch(error){
      return res.status(500).json({
          success: false,
          error: error.message,
      })
  }
})

router.delete('/api/employees', async(req, res) => {
  console.log(req.body)
  let sql = 'DELETE FROM employees WHERE employeesId = ?'

  try{
      await connection.query(sql, [req.body.employeesId], function (error, results, fields) {
          if (error) {
              if (error) throw error
          }
          return res.status(201).json({
              success: true,
              error: '',
              message: 'Boken är nu raderad!'
          })
      })
  }catch(error){
      return res.status(500).json({
          success: false,
          error: error.message,
      })
  }
})

module.exports = router
