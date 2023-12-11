import React from "react";
import {FaEdit} from 'react-icons/fa'
import {BsTrash} from 'react-icons/bs'
import { useSelector } from "react-redux";
import { handlearr1 } from "../Slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import './Home.css'
const Home=()=>{
    let dispatch=useDispatch()
    let state=useSelector((sam)=>sam)
    console.log(state.data.arr1);
    const del=(id)=>{
       let x= state.data.arr1.map((v)=>{
           return v.id===id?v.bool===true?{...v,bool:false}:{...v,bool:true}:v
        })
        dispatch(handlearr1(x))
    }
    let nav=useNavigate()
    let edit=(id)=>{
       nav(`/?id=${id}`) 
    }
    return(
        <div>
            <div>
            <table style={{cellPadding:"10",cellSpacing:"20",align:"center",border:"all"}} className="table2">
                            <tr>
                                <th className="thead">Name</th>
                                <th className="thead">Transcation Id</th>
                                <th className="thead">Payment Gateway</th>
                                <th className="thead">Amount</th>
                                <th className="thead">Transaction Time</th>
                                <th className="thead">Change</th>
                            </tr>
            {
                state.data.arr1.map((e,i)=>{
                
                    return e.bool===true?(
                        
                            <tr key={i}>
                                <td className="tcon">{e.name}</td>
                                <td className="tcon">{e.userid}</td>
                                <td className="tcon">{e.gateway}</td>
                                <td className="tcon">{e.amount}</td>
                                <td className="tcon">{e.time}</td>
                                <td className="tcon"><FaEdit onClick={()=>edit(e.id)}/>   <BsTrash onClick={()=>del(e.id)}/></td>
                            </tr>
                        
                    ):""
                })
            }
            </table>
            </div>
        </div>
    )
}
export default Home