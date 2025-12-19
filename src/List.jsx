import React from "react";
import { v4 as uuidv4 } from 'uuid';

const id = uuidv4();
console.log(id); 


const List =(props)=>{
let data=props.data
let setData=props.setData
let Data2=props.Data2
let setData2=props.setData2

 
  let seteditInput=props.seteditInput
 
    let setstore=props.setstore

    let store=props.store

     function temp(id){
       console.log(id);
    let res = data.filter((val, indx) => id != val.id) // 
    setData(res)
    let res2 = Data2.filter((val, indx) => id != val.id)
   setData2(res2)
     setstore(null)
    }

 let HandleFilter = (filter) => {
    let res = [...Data2]
    if (filter == 'All') {
      setData(res)
    }
    else if (filter == 'Completed') {
      let res2 = res.filter((val, indx) => val.isCom == true)
      setData(res2)
    }
    else if (filter == 'NonCompleted') {
      let res2 = res.filter((val, indx) => val.isCom == false)
      setData(res2)
    }

  }

 let onHandlecompl=(ind)=>{
    let res =[...data]
    // res[ind].isCom=  res[ind].isCom?false:true
    
    res[ind].isCom=  !res[ind].isCom
    
    
    setData(res)  
    
console.log(res);

    
 }
 
 let onHandleedit=(index,id)=>{
  {

     let res = [...data]
  let res2 = res.filter((val, indx) => id == val.id)
 console.log(res2[0],"res2");
    seteditInput(res2[0].title)
    setstore(index)
    
  }
 
    
 }

//  ______________________________________________



    return(
        <div>
         {Data2!="" && <div className="Z2">
            <button onClick={() => HandleFilter('All')} className="Z22">All</button>
            <span></span>
            <button onClick={() => HandleFilter('Completed')} className="Z22">Completed</button>
            <span></span>
           <button onClick={() => HandleFilter('NonCompleted')} className="Z22">Non-Completed</button>
           </div>}

    {
        data.map((val,index)=>(
          
            <div className={`todo-item ${val.isCom ? "completed" : ""}`} key={index}>
          <span className="text">{val.title}</span>
          <div className="item-buttons">
             {index==store?<span></span>:<button onClick={()=>temp(val.id)}>delete</button>}
             {index==store?<span></span>:<button onClick={()=>onHandlecompl(index)}>{val.isCom?"complieted":"compliete"}</button>}
            {val.isCom?onHandlecompl:index==store?<span></span>:<button onClick={()=>onHandleedit(index,val.id)}>edit</button>}
</div>
             </div>
        ))
    }
    </div>
    )
}

export default List


// //  Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass



// import React, { useState, useEffect } from "react";
// import { v4 as uuidv4 } from 'uuid';

// // import './List.css'

// const List = (props) => {

//   let { Data, setData, setIndex, setEditinput, Index, Data2, setData2, com, setcom } = props

//   let HandleDelete = (id) => {
//     console.log(id);
//     let res = Data.filter((val, indx) => id != val.id) // 
//     setData(res)
//     let res2 = Data2.filter((val, indx) => id != val.id)
//     setData2(res2)
//     setIndex(null)
//   }

//   let HandleCom = (index) => {
//     let res = [...Data]
//     res[index].isCom = !res[index].isCom
//     //   res[index].isCom =  res[index].isCom == false && setIndex(null)
//     //   res[index].isCom = res[index].isCom ? false:true
//     setData(res)
    
//     // if (res[index].isCom==true) {
//     //  sethedit(true)
//     // }
//     // sethedit(false)
//   }
//   let HandleEdit = (id,index) => {
//     let res = [...Data]
//     let res2 = res.filter((val, indx) => id == val.id)
//     // console.log(res2[0],"res2");
//     setEditinput(res2[0].title)
//     setIndex(index)

//   }
//   let HandleFilter = (filter) => {
//     let res = [...Data2]
//     if (filter == 'All') {
//       setData(res)
//     }
//     else if (filter == 'Completed') {
//       let res2 = res.filter((val, indx) => val.isCom == true)
//       setData(res2)
//     }
//     else if (filter == 'NonCompleted') {
//       let res2 = res.filter((val, indx) => val.isCom == false)
//       setData(res2)
//     }

//   }


//   return (
//     <>
//       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
//       <div className="body">
//         <div className="z">
//           {Data!="" && <div className="Z2">
//             <button onClick={() => HandleFilter('All')} className="Z22">All</button>
//             <button onClick={() => HandleFilter('Completed')} className="Z22">Completed</button>
//             <button onClick={() => HandleFilter('NonCompleted')} className="Z22">Non-Completed</button>
//           </div>}
//           {Data.map((val, ind) => (
//             <>
//               {val.isCom ?
//                 <div className="main2" key={ind}>
//                   <span className="val2">{val.title}</span>
//                   <div key={ind} className="sub">
//                     <button className="bt1" onClick={() => HandleCom(ind)}>{val.isCom ? "completed" : "complete"}</button>
//                     {/* {ind==Index ? <button className="bt22" onClick={()=>HandleEdit(ind)}><i class="fa-solid fa-pen"></i></button>:<button className="bt2" onClick={()=>HandleEdit(ind)}><i class="fa-solid fa-pen"></i></button>} */}
//                     <button className="bt3" onClick={() => HandleDelete(val.id)}><i class="fa-solid fa-trash"></i></button>
//                   </div>
//                 </div> :
//                 <div className="main" key={ind}>
//                   <span className="val">{val.title}</span>
//                   <div className="sub">
//                     {ind == Index ? <span></span> : <button className="bt1" onClick={() => HandleCom(ind)}>{val.isCom ? "completed" : " complete"}</button>}
//                     {ind == Index ? <button className="bt22" onClick={() => HandleEdit(val.id,ind)}><i class="fa-solid fa-pen"></i></button> : <button className="bt2" onClick={() => HandleEdit(ind)}><i class="fa-solid fa-pen"></i></button>}
//                     {ind == Index ? <span></span> : <button className="bt3" onClick={() => HandleDelete(val.id)}><i class="fa-solid fa-trash"></i></button>}
//                   </div>
//                 </div>
//               }

//             </>
//           ))}

//         </div>
//       </div>
//     </>
//   )
// }
// export default List