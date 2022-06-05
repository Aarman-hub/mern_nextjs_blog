import React, {useState} from 'react'

const SignUpForm = () => {
const [values, setValues] = useState({
    email:'',
    password:'',
    error:'',
    loading:false,
    message:'',
    showForm:true
    });

 const {email, password} = values;


 const onSubmitHadaler = (e) =>{
     e.preventDefault();
 }
 const onChangeHandler = name => (e) =>{
     setValues({...values, error:false,  [name]:e.target.value})
 }

  return (
    <>
        <form onSubmit={onSubmitHadaler}>
            <div className='form-group'>
                <input type='email' onChange={onChangeHandler('email')} value={email} className="form-control" placeholder="E-Mail" />
            </div>
            <div className='form-group'>
                <input type='password' onChange={onChangeHandler('password')} value={password} className="form-control" placeholder="Password" />
            </div>
            <div className='form-group'>
                <button type='submit' className='btn btn-primary'>Signup</button>
            </div>
        </form>
    </>
  )
}

export default SignUpForm