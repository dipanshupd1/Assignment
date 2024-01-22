import React from 'react'
import '../css/table.css'
import { useNavigate } from 'react-router'

const Table = () => {
    const navigate=useNavigate()

    const data=[
        {
            select:0,
            id:1,
            name:'dipanshu',
            email:"dp@gmail",
            phone:6576543456,
            hobby:'chess',
            update:0
        },
        {
            select:0,
            id:2,
            name:'dipanshu pd',
            email:"dp@gmail",
            phone:6576543456,
            hobby:'chess',
            update:0
        },
        {
            select:0,
            id:3,
            name:'dipanshu pd',
            email:"dp@gmail",
            phone:6576543456,
            hobby:'chess',
            update:0
        },
        {
            select:0,
            id:4,
            name:'dipanshu pd',
            email:"dp@gmail",
            phone:6576543456,
            hobby:'chess',
            update:0
        },{
            select:0,
            id:5,
            name:'dipanshu pd',
            email:"dp@gmail",
            phone:6576543456,
            hobby:'chess',
            update:0
        }
    ]
    let s=[]
    const checkhandle=(e,ele,id)=>{
        if(e.target.checked){
            s.push(ele)
        }
        else{
          let newS = s.filter((val)=>{
            return val.id!=id
          })
          s=newS
        }
        console.log(s);
    }


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
                data.map((ele)=>(
                    <tr key={ele.id}>
                    <td><input type="checkbox" name="checkbox" id="check"  onChange={(e)=>{checkhandle(e,ele,ele.id)}}/></td>
                    <td>{ele.id}</td>
                    <td>{ele.name}</td>
                    <td>{ele.email}</td>
                    <td>{ele.phone}</td>
                    <td>{ele.hobby}</td>
                    <td><button className='update'>Update</button><button className='delete'>Delete</button></td>
                    </tr>
                    
                ))
            }
            </tbody>
        </table>
    </div>
    <div className="lower">
        <button className='add' onClick={()=>{navigate('/newdata')}}>New Data</button>
        <button className='send'>Send</button>
    </div>
      
    </div>
  )
}

export default Table
