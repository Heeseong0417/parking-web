
import Sidebar  from "./sidebar/sidebar"
import axios from 'axios';
import Pi1 from './main_items/parking_info'
import { Link } from 'react-router-dom';
const main = ()=>{
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



    return (

        <>
        <div className=" w-full h-full flex">
        <div className="xl:w-1/3 w-50 sm:w-40 h-max">
<Sidebar/>
</div>
        <div className="h-full w-full xl:grid xl:grid-cols-2 block p-4 gap-4 items-center text-center text-color-clound-b">

<div className="col ">
<Pi1></Pi1>
</div>
<div className="col">
<Pi1></Pi1>
</div>
<div className="col">
<Pi1></Pi1>
</div>
<div className="col">
    main 화면 <button className='text-3xl font-bold underline ' onClick={put_method}> button axios</button>
    <Link to="/text">ddddddddddddddddd</Link>
</div>
</div>
        </div>
        
        
        </>
    )
}

export default main;