import React from "react";
import { v4 as uuidv4 } from 'uuid';




const Head =(props)=>{

 let data=props.data
 let setData=props.setData
 let Data2=props.Data2
let setData2=props.setData2
  let setInput=props.setInput
  let editinput=props.editinput
  let seteditInput=props.seteditInput
   let store=props.store
     let setstore=props.setstore
    let input=props.input
    

    // console.log(data);
    //  console.log(input,"input");
    

    let onHandleChamge=(e)=>{
    // console.log(e.target.value);
    setInput(e.target.value)  
   
    
 }
  let onHandleok=()=>{
    let res =[...data,{title:input,isCom:false,id:uuidv4()}]
    console.log(res);
    
    setData(res)  
    setData2(res)
     setInput("")
     
    
 }
 let onHandleChamge1=(e)=>{
   
    seteditInput(e.target.value)  
    
   
    
 }
 let onHandleup=()=>{
    // let res =[...data,{title:editinput}]
    let res2 =[...data]
   res2[store].title=editinput
   setData(res2)
 seteditInput("")

   setstore(null) 

    
 }


 return(
    <div className="">
        <div className="input-section">
        <input type="text" value={input} onChange={onHandleChamge} />
        {input&& < button onClick={onHandleok}>ok</button>}
<br />{
   store !=null &&
   <div className="edit-section">
   <input type="text" value={editinput} onChange={onHandleChamge1} />
     <button lassName="btn btn-edit" onClick={onHandleup}>edit</button>
   </div>
   
}

    </div>
    <div></div>
    </div>
    )
}
export default Head



// import React, { useState, useEffect } from "react";
// import { v4 as uuidv4 } from 'uuid';

// const Head = (props) => {
//    console.log(props);

//    let { Data, setData, Index, setIndex, Editinput, setEditinput, input, setInput, Data2, setData2 } = props


//    let HandleChange = (e) => {
//       setInput(e.target.value)


//    }
//    let HandleChange2 = (e) => {
//       setEditinput(e.target.value)
//       // setInput(Editinput)
//    }

//    let HandleOk = () => {
//       let res = [...Data, { title: input, isCom: false ,id: uuidv4()}]
//       setData(res)
//       setData2(res)
//       console.log(res);
//       setInput("")
//    }
//    let HandleUP = () => {
//       let res = [...Data]
//       res[Index].title = Editinput
//       setData(res)
//       setEditinput("")
//       setIndex(null)
//    }
//    console.log(Data);


//    return (
//       <>
//          <h1>To-Do List</h1>
//          <div className="a">
//             <div className="head">
//                <div className="hdmain">
//                   <input className="input_1" type="text" placeholder="Enter a new task" value={input} onChange={HandleChange} />
//                   {input && <button className="add" onClick={HandleOk}>Add</button>}
//                </div>


//                {Index != null &&
//                   <>
//                      <h3>Edit</h3>
//                      <div className="hdmain">
//                         <input className="input_1" type="text" value={Editinput} onChange={HandleChange2} />
//                         <button className="update" onClick={HandleUP}>Update</button>
//                      </div>
//                   </>
//                }


//             </div>
//          </div>
//       </>
//    )
// }

// export default Head