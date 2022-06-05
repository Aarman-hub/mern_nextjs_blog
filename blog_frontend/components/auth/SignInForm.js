import React, {useState} from 'react'

const SignInForm = () => {
  const [values, setValues] = useState({
    username:'',
    email:'',
    password:'',
    error:'',
    loading:false,
    message:'',
    showForm:true
  });

  const {username, email, password} = values;

  const onSubmitHandler = e =>{
      e.preventDefault();
  }
  const onChangeHandler = name => (e) =>{
    setValues({...values, error:false,  [name]:e.target.value})
  }

  return (
    <>
        <form onSubmit={onSubmitHandler}>
            <div className='form-group'>
                <input type='text' onChange={onChangeHandler('username')} value={username} className="form-control" placeholder="Username" />
            </div>
            <div className='form-group'>
                <input type='email' onChange={onChangeHandler('email')} value={email} className="form-control" placeholder="Email" />
            </div>
            <div className='form-group'>
                <input type='password' onChange={onChangeHandler('password')} value={password} className="form-control" placeholder="Password" />
            </div>
            <div className='form-group'>
                <button type='submit' className='btn btn-primary'>Signin</button>
            </div>
        </form>
    </>
  )
}

export default SignInForm