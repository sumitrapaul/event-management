/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";



const Login = () => {
  const { signIn } = useContext(AuthContext)
  const navigate=useNavigate()
  const handleLogin=e=>{
    e.preventDefault();
    const email=e.target.email.value
   const password=e.target.password.value
   signIn(email, password)
   .then(result =>{
    toast.success('Users logged in successfully!!')
    navigate('/')
   })
   .catch(error =>{
    toast.error(error.message)
   })
  }
    return (
        <div>
       
          <div>
            <h1 className="text-3xl font-bold my-8 text-center">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-[500px] mx-auto shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Enter your email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="Enter your password" name="password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            
            </form>
            
            <p className="text-center mt-3 mb-8">Do not have an account?Please <Link to='/register' className="text-blue-600 font-bold">Register</Link></p>
          </div>
        </div>
      
    );
};

export default Login;