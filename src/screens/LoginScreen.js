import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { BsFacebook, BsFillPatchExclamationFill, BsTwitter } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { MdEmail } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import featuredThumb from '../assets/images/bg/hero-one.png'
import logo from '../assets/images/wipdata-logo.png'

function LoginScreen() {

  const [formValues, setFormValues] = useState();
  const [loading, setLoading] = useState(false)
  const [wrongPassword, setWrongPassword] = useState(false)
  const [saveStorage, setSaveStorage] = useState("")

  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm();

  // handle submit
  const onSubmit = async (formData) => {
    setLoading(true)
    setFormValues(formData)
    
    if(formData?.password !== "wipdata") {
       setWrongPassword(true)
       setSaveStorage(formData.password)
       return
    } else {
      setWrongPassword(false)
    }

    // storing data in localstorage
    localStorage.setItem('userInfo', formData.password)

    // if local storage have a data then redirect to /devices page
    if(formData.password) return navigate('/admin')
  };

  return (
    <section className='login-section'>
        <div className='login-screen-wrapper'
          style={{  
            backgroundImage: `url(${featuredThumb})`,
            backgroundPosition: 'top',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)} id="loginForm">
            <div className='login-box'>

              {/* chatbot credit */}
              <div className='login-logo'>
                  <Link to="/">
                    <img src={logo} alt="site logo" />
                  </Link>
                <h2><span className='orangered'>Wip</span> Data</h2>
              </div>

              <h2 className='login-title'>Hello Everyone , We are WipData</h2>
              <p>Welcome to WipData please login to your account.</p>

              {/* email */}
              <div className='input-group'>
              <input className={errors?.email?.message && "required"} name='email' type="email" placeholder='Email address' {...register('email', { required: "Email is required!" })} />
                <MdEmail className={errors?.email?.message && "required-icon"} />
                <span>Note: Enter any email address <span className='required-star'>*</span></span>
              </div>

              {/* thow errors if email field is empty */}
              <p className='error'>{errors.email?.message}</p>
              

              {/* password */}
              <div className='input-group'>
                <input name='password' type="password" className={errors?.email?.message && "required"} placeholder="Passwrod" {...register('password', { required: "Password is required!" })} />
                <BsFillPatchExclamationFill className={errors?.email?.message && "required-icon"} />
                <span>Note: But password must be wipdata <span className='required-star'>*</span></span>
              </div>
              <p className='error'>{errors.password?.message}</p>
              <p className='error'>
                {
                  wrongPassword && "Password didn't match"
                }
              </p>

              {/* submit button */}
              <div className='input-group'>
                <button id='loginForm' type='submit' className='login-button'> 
                {loading && !wrongPassword ? <div className="loading"></div> : "Login" }</button>
                
              </div>

              {/* connect with social */}
              <div className="connectwith">
                <div className='connect-title'>Or connect with</div>
                <div className='connect-with-line'></div>
              </div>

              {/* social media */}
              <div className='login-social-media'>
                <BsFacebook />
                <BsTwitter />
                <FcGoogle />
              </div>

            </div>
          </form>
          {/* <div className='login-right-section'>
            <img src={login} alt="login" />
          </div> */}
        </div>
    </section>
  )
}

export default LoginScreen