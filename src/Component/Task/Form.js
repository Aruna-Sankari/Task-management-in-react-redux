import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handlearr1 } from "../Slice.js";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
const Form=()=>{
    let t=new Date()
    let time=t.toLocaleTimeString()
    console.log(time);
    let [id,setId]=useState()
    let [name,setname]=useState()
    let [userid,setuserid]=useState()
    let [gateway,setgateway]=useState()
    let [amount,setAmount]=useState()
    let bool=true
    let dispatch=useDispatch()
    let state=useSelector((samp)=>samp)
    let check=(e)=>{
        if(e.target.name==="id"){
            setId(e.target.value)
        }
        else if(e.target.name==="namee"){
            setname(e.target.value)
        }
        else if(e.target.name==="user"){
            setuserid(e.target.value)
        }
        else if(e.target.name==="gate"){
            setgateway(e.target.value)
        }
        else if(e.target.name==="amo"){
            setAmount(e.target.value)
        }
        
    }
    
    let nav=useNavigate()
    let goto=()=>{
        nav("/Home")
    }
    let [params]=useSearchParams()
    let para=params.get("id")
    console.log(para);
    
    let submit=(e)=>{
        e.preventDefault()

        let obj={id,name,userid,gateway,amount,bool,time}
        console.log(obj);
        if(para!==null){
            let y=state.data.arr1.map((e)=>{
                return e.id===para?obj:e
            })
            dispatch(handlearr1(y))
        }
        else{
            dispatch(handlearr1([...state.data.arr1,obj]))
        }
        setId("")
        setname("")
        setuserid("")
        setgateway("")
        setAmount("")
    }
   
    
    useEffect(()=>{
        if(para!==null){
                    let x= state.data.arr1.find((e)=>{
                       return e.id===para
                    })
                    console.log(x);
        setId(x.id)
        setname(x.name)
        setuserid(x.userid)
        setgateway(x.gateway)
        setAmount(x.amount)
                }
    },[])
    console.log(state.data.arr1);
    return(
        <div>
            <h1 style={{textAlign:"center"}}>FORM</h1>
           <form>
                <table style={{margin:"auto",border:"3px solid black",padding:"20px"}}>
                    <tr>
                        <td>ID:</td>
                        <td><input type="text" value={id} onChange={check} name="id" ></input></td>
                    </tr>
                    <tr>
                        <td>Name:</td>
                        <td><input type="text" value={name} onChange={check} name="namee" ></input></td>
                    </tr>
                    <tr>
                        <td>Transcation ID:</td>
                        <td><input type="text" value={userid} onChange={check} name="user" ></input></td>
                    </tr>
                    <tr>
                        <td>Payment Gateway:</td>
                        <td><input type="text" value={gateway} onChange={check} name="gate" ></input></td>
                    </tr>
                    <tr>
                        <td>Amount:</td>
                        <td><input type="text" value={amount} onChange={check} name="amo" ></input></td>
                    </tr><br></br>
                <tr>
                   <td><button onClick={submit} style={{backgroundColor:"blue",padding:"5px",color:"white"}}>Submit</button></td>
                   <td><button onClick={goto} style={{backgroundColor:"brown",padding:"5px",color:"white"}}>Home</button></td>
                </tr>
                </table>
                   
            </form>
            </div>
    )
}
export default Form