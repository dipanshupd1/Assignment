import React, { useState,useCallback } from 'react'
import '../css/table.css'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'
import axios from 'axios'

const Table = () => {
    const navigate=useNavigate()
    const [newdata, setnewdata] = useState([]);
    const getdata=async()=>{
        try {
            const userdata=await axios.post(`${import.meta.env.VITE_SERVER}/getdata`)
            if(userdata.data.msg='success'){
                setnewdata(userdata.data.alluser)
            }

        } catch (error) {
            console.log(error);
        }
    }
    
    
    // console.log(newdata)

    let s=[]
    const checkhandle=(e,ele,phone)=>{
        if(e.target.checked){
            s.push(ele)
            // console.log(id);
        }
        else{
          let newS = s.filter((val)=>{
            return val.phone!=phone
          })
          s=newS
        }
        // console.log(s);
    }

    const update=(val)=>{
       const user={
        Name:val.Name,
        email:val.email,
        phone:val.phone,
        hobby:val.hobby,
        id:val._id
    }
    // console.log(user);
    localStorage.setItem('user',JSON.stringify(user))
    // console.log(localStorage.getItem('user'));
    navigate('/update')
    }
    const deleteuser=async(val)=>{
     const id=val._id
    try {
        const resp= await axios.post(`${import.meta.env.VITE_SERVER}/deleteuser`,{
                id
            })
            console.log(resp.data.msg);
            getdata()
    } catch (error) {
        console.log(error);
    }
    }

    const senditems=()=>{
        let mailid="info@redpositive.in"
        let body=''
        // console.log(s);
        s.forEach((ele)=>{
            // console.log('ele',ele);
            body=body.concat(`Name: ${ele.Name} ,email: ${ele.email}, Phone:${ele.phone}, hobby:${ele.hobby}     `)
        })
    console.log('body',body);
    window.location.replace(`mailto:${mailid}?subject=${"sending data"}&body=${body}`)
    }
    useEffect(() => {
        getdata()
       console.log('running useEffect');
    },[]);


  return (
    <div className='table-main'>
    <div className="table-head">USER-DATA</div>
    <div className="table-body">
        <table>
            <thead>
                <tr>
                    <th>Select</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Hobby</th>
                    <th>Update</th>
                </tr>
            </thead>
            <tbody>
            {
                newdata.map((ele,ind)=>(
                    <tr key={ele._id}>
                    <td><input type="checkbox" name="checkbox" id="check"  onChange={(e)=>{checkhandle(e,ele,ele.phone)}}/></td>
                    <td>{ind+1}</td>
                    <td>{ele.Name}</td>
                    <td>{ele.email}</td>
                    <td>{ele.phone}</td>
                    <td>{ele.hobby}</td>
                    <td><button className='update' onClick={()=>{update(ele)}}>Update</button><button className='delete' onClick={()=>{deleteuser(ele)}}>Delete</button></td>
                    </tr>
                    
                ))
            }
            </tbody>
        </table>
    </div>
    <div className="lower">
        <button className='add' onClick={()=>{navigate('/newdata')}}>New Data</button>
        <button className='send' onClick={senditems}>Send</button>
    </div>
      
    </div>
  )
}

export default Table
