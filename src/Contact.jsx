import React from "react";
import { useState } from "react";

const Contact =()=>{
    const [data, setData] = useState({
        fullname:'',
        phone:'',
        email:'',
        msg: '',
    });

    const InputEvent= (event)=>{
        const {name,value} = event.target;
        setData((prevVal)=>{
            return {
                ...prevVal,
                [name]:value,

            }
        })
    }

    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`My name is ${data.fullname}. You can contact me via phone @${data.phone} or email at ${data.email}. My opinion is: ${data.msg}`)

    }

    return (
        <>
            <div className="my-5">
            <h1 className="text-center"> Contact Us </h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                        
  <div class="form-group">
    <label for="exampleFormControlInput1">FullName</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your Name"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Phone Number</label>
    <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Mobile Number"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" name="msg" value={data.msg} onChange={InputEvent} rows="3"></textarea>
  </div>
<div className="col-12">
<button type="submit" class="btn btn-outline-primary my-1">Submit Form</button>
</div>

</form>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Contact;