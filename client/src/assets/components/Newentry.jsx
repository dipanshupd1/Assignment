import React from 'react'
import { useRef, useState } from 'react'
import '../css/form.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Newentry = () => {
    const nameref = useRef(null)
    const emailref = useRef(null)
    const phoneref = useRef(null)
    const hobbiesref = useRef(null)

    const [details, setDetails] = useState({
        nameField: "",
        emailField: "",
        phoneField: "",
        hobbiesField: "",
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

    const submitHandler = (e) => {
        e.preventDefault()
        const Name = nameref.current.value
        const email = emailref.current.value
        const phone = phoneref.current.value
        const hobbies = hobbiesref.current.value

        if(Name.trim().length==0 || phone.trim().length==0 || email=='' || hobbies.trim().length==0){
            toast.error('Fields cannot be empty',toastifyErrorOptions )
        }
        else if(phone.trim().length!=10){
            toast.error('Invalid Phone Number',toastifyErrorOptions )
        }
        else if(phone%1!=0){
            toast.error('Invalid Phone Number',toastifyErrorOptions )
        }
        else{

            alert("hii")
        }
        
    }


    return (
        <div className='form-main'>
            <form className='form-body' onSubmit={submitHandler}>
                <div className='form-head'>Make A New Entry</div>
                <p>Enter Your Username</p>
                <input type="text" name="nameField" onChange={dataChange} ref={nameref}/>
                <p>Enter Your email</p>
                <input type="email" name="emailField" onChange={dataChange} ref={emailref}/>
                <p>Enter Your Phone</p>
                <input type="tel" name="phoneField" onChange={dataChange} ref={phoneref} />
                <p>Enter Your hobbies</p>
                <input type="text" name="hobbiesField" onChange={dataChange} ref={hobbiesref} /> <br />
                <button>Save</button>
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

export default Newentry
