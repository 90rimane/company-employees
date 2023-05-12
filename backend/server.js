const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

// const connection = require('./connection')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())
app.use(express.static('public'))
const port = 3000


app.listen(port, () => console.log(`Example app listening on port ${port}!`))


const employeeRoutes = require('./routes/employee')

app.use(employeeRoutes)



// app.get('/api/books-categories', async(req, res) => {
//     let sql = "SELECT * FROM kategori INNER JOIN bok ON kategori.kategoriId = bok.bokKategoriId"

//     try{
//         await connection.query(sql, function (error, results, fields) {
//             if (error) {
//                 if (error) throw error
//             }
//             res.json(results)
//         })
//     }catch(error){
//         return res.status(500).json({
//             error: error.message
//         })
//     }
// })
