const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = process.env.PORT || 4000;


app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sign-up-form'
});

connection.connect((err) => {
    if(err) {
        console.error(`Error connecting to databse ${err}`);
        return;
    }
    console.log("Connected to MySQL database");
});

app.post('/register', (req, res) => {
    const {fname,lname,emailaddress,streetaddress,date,school,currentStatus,paymentMethod} = req.body;

    
    if(!fname || !lname || !emailaddress ||!streetaddress || !date || !school || !currentStatus || !paymentMethod){
        console.log("All Fields are required!");
        return res.status(400).json({error: 'All Fields are required!'});
      } 

    const sql = 'INSERT INTO usersdata (fname,lname,emailaddress,streetaddress,date,school,currentStatus,paymentMethod) VALUES (?,?,?,?,?,?,?,?)';
    const values = [fname,lname,emailaddress,streetaddress,date,school,currentStatus,paymentMethod];
    
      
    connection.query(sql, values, (err, result) => {
        if(err) {
            console.error(`Error inserting users-data ${err}`);
            return  res.status(500).json({error: 'error inserting users-data'});
        }
        console.log(`Users inserted`);
        return res.status(200).json({message: 'User registered successfully'});

    });
  
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })
