const express = require('express')
const dbconfig   = require('./config/db.js')(); // 위에서 생성한 MySQL에 연결을 위한 코드(모듈)
const connection = dbconfig.init();                   // node express 와 MySQL의 연동
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(express.static(__dirname+"/parking-web/build"))
// configuration 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('port', /**process.env.PORT || **/3001);

// routing
app.put('/', (req, res)=>{
	res.send({data : '잘전송했따!'});
  connection.query('SELECT * from parkinguser', (error, rows) => {  //쿼리문 
    if (error) throw error;
   
    res.send(rows);
  });
  console.log(path.join(__dirname, '/index.html'))
    res.sendFile(path.join(__dirname, '/index.html'));

});
app.put('/text', (req, res) => {
  const text = req.body
  console.log(text);
  connection.query('SELECT * from parkinguser', (error, rows) => {  //쿼리문 
    if (error) throw error;
   res.send({data : '잘전송했따!', rows});        
    res.send(rows);
  });
   
});
app.get('/data', (req, res) => {  
  res.send({data : '잘전송했따!'});                           //DB에 접근할 수 있는 주소와
  connection.query('SELECT * from parkinguser', (error, rows) => {  //쿼리문 
    if (error) throw error;
   
    res.send(rows);
  });
});

app.listen(app.get('port'), () => {
  console.log('포트 넘버 : ' + app.get('port') + "에서 실행 중");
});

app.get('/insert', (req, res) => {                             //DB에 접근할 수 있는 주소와
    connection.query("INSERT INTO parkinguser values (1,'희승', 1234,0,0,0,0)"), (error, rows) => {  //쿼리문 
      if (error) throw error;
      connection.query('SELECT * from parkinguser', (error, rows) => {  //쿼리문 
        if (error) throw error;
       
        res.send(rows);
      });
    }});
    app.get('/delete', (req, res) => {                             //DB에 접근할 수 있는 주소와
      connection.query("delete from parkinguser where user_email = '0'"), (error, rows) => {  //쿼리문 
        if (error) throw error;
        connection.query('SELECT * from parkinguser', (error, rows) => {  //쿼리문 
          if (error) throw error;
         
          res.send(rows);
        });
      }});
      app.post("/api/insert", (req, res) => {
        const title = req.body.title;
        const content = req.body.content;
        const sqlQuery = "SELECT * from parkinguser";
        db.query(sqlQuery, [title, content], (err, result) => {
            res.send('success!');
        });
    });



    process.on('uncaughtException', function (err) {

      console.log ('uncaughtException : \n'+ err)
      
      if (err.code == 'ECONNREFUSED'|| err.code == 'EHOSTUNREACH') 
      
      {
      
      handler_connect_error (err);
      
      }
      
      else if (err.code == 'ETIMEDOUT')
      
      {
      
      handler_timeout(err);
      
      }
      
      });