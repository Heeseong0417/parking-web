import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const  App=()=> {
  const put_method=async ()=>{
    //console.log(json_data[value_input])
            axios.put("/text",{data: "putdata", name : "희승"} )
          .then(function (response) {
            alert("핑 도착! : "+JSON.stringify(response.data))
               console.log(JSON.stringify(response.data));
          }).catch(function (error) {
              // 오류발생시 실행
              console.log(error);
          }).then(function() {
              // 항상 실행
          });
          
      // async await 함수를 사용할 때, 
      
      try {
        const data = await axios.put("/text", "put~");
      } catch {
        // 오류 발생시 실행
      }
          }
          /** 
 const getServerData = () => {


    fetch('http://localhost:3001',{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Auth-Key': 'Lrmgdf...'
      },
      method: 'POST'

    })
    .then(res=>{
console.log(res);
console.log(typeof(res));
return res.json();
    })
    .then(res=> console.log(res));
  }*/
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
         
        </a>
        
        <button className='text-3xl font-bold underline' onClick={put_method}> button axios</button>
      </header>
    </div>
  );
}

export default App;
