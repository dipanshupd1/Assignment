import React from 'react'
import { useRef, useState ,useEffect} from 'react'
import '../css/form.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Update = () => {
    const navigate=useNavigate()
    const nameref = useRef(null)
    const emailref = useRef(null)
    const phoneref = useRef(null)
    const hobbiesref = useRef(null)

    const userObj=JSON.parse(localStorage.getItem('user'))
        
    const [details, setDetails] = useState({
        nameField: userObj.Name,
        emailField: userObj.email,
        phoneField: userObj.phone,
        hobbiesField: userObj.hobby,
    });
    const toastifyErrorOptions={
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        theme: "dark",
        pauseOnHover: false,
        };

    const dataChange = (e) => {
        setDetails((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const submitHandler = async(e) => {
        e.preventDefault()
        const Name = nameref.current.value
        const email = emailref.current.value
        const phone = phoneref.current.value
        const hobby = hobbiesref.current.value

        if(Name.trim().length==0 || phone.trim().length==0 || email=='' || hobby.trim().length==0){
            toast.error('Fields cannot be empty',toastifyErrorOptions )
        }
        else if(phone.trim().length!=10){
            toast.error('Invalid Phone Number',toastifyErrorOptions )
        }
        else if(phone%1!=0){
            toast.error('Invalid Phone Number',toastifyErrorOptions )
        }
        else{
           const id=userObj.id
            const resp= await axios.post(`${import.meta.env.VITE_SERVER}/update`,{
                Name,email,phone,hobby,id
            })
            // console.log(resp.data);
            if(resp.data.msg=='success')
            navigate('/')
        else{
            toast.error('unsucessful...try again',toastifyErrorOptions ) 
        }
        }
        
    }


    return (
        <div className='form-main'>
            <form className='form-body' onSubmit={submitHandler}>
                <div className='form-head'>Make A New Entry</div>
                <p>Enter Your Username</p>
                <input type="text" name="nameField" onChange={dataChange} ref={nameref} value={details.nameField}/>
                <p>Enter Your email</p>
                <input type="email" name="emailField" onChange={dataChange} ref={emailref} value={details.emailField}/>
                <p>Enter Your Phone</p>
                <input type="tel" name="phoneField" onChange={dataChange} ref={phoneref}  value={details.phoneField}/>
                <p>Enter Your hobbies</p>
                <input type="text" name="hobbiesField" onChange={dataChange} ref={hobbiesref}  value={details.hobbiesField}/> <br />
                <button>Save</button> <br />
               <p className='go-back'> <Link to='/' className='link'>Back To Home</Link></p>
            </form>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark" />
        </div>
    )
}

export default Update
