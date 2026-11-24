import { useState } from "react";

function Signup(){
    const [form,setForm] = useState({name:"",email:"",password:"",confirmPassword:""}) 
    const [errors,setErrors] = useState({});
    const [success,setSuccess] = useState(false);

    const handleChange = (e) =>{
        setForm({...form,[e.target.name]:e.target.value})
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const inputClass = "w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"

    const errorClass = "text-red-600 text-sm mt-1"
    const validate = ()=>{
        const signupErrors = {};
        if(!form.name.trim()){
            signupErrors.name="Name field required";
        }
        if(!form.email.trim()){
            signupErrors.email="Email field required";
        }else if(!emailRegex.test(form.email)){
            signupErrors.email="Email is not valid";
        }
        if(!form.password.trim()){
            signupErrors.password="Password field required";
        }else if(!passwordRegex.test(form.password)){
            signupErrors.password = "Password must be at least 8 characters long and include uppercase, lowercase, a number, and a special character."
        }
        if(!form.confirmPassword.trim()){
            signupErrors.confirmPassword = "Confirm password field required";
        }else if(form.password!==form.confirmPassword){
            signupErrors.confirmPassword = "Password do not match";
        }
        return signupErrors;
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        const signupErrors = validate();
        setErrors(signupErrors);
        if(Object.keys(signupErrors).length===0){
            setSuccess(true);
        }else{
            setSuccess(false);
        }
    }
    return(
        <div className="min-h-[80vh] bg-gray-100 px-4 flex items-center justify-center">
            <form onSubmit={handleSubmit} noValidate className="bg-white rounded shadow p-6 w-full max-w-sm space-y-4">
                <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                <div>
                    <label htmlFor="name" className="block mb-1 font-medium">Name:</label>
                    <input
                    className={inputClass}
                    placeholder="Enter your Name"
                    id="name"
                    name="name"
                    value={form.name}
                    type="text" 
                    onChange={handleChange}
                    />
                    {errors.name && <p className={errorClass}>{errors.name}</p>}
                </div>
                <div>
                    <label htmlFor="email" className="block mb-1 font-medium">Email:</label>
                    <input
                    className={inputClass}
                    placeholder="Enter your Email"
                    id="email"
                    name="email"
                    value={form.email}
                    type="email" 
                    onChange={handleChange}
                    />
                    {errors.email && <p className={errorClass}>{errors.email}</p>}
                </div>
                <div>
                    <label htmlFor="password" className="block mb-1 font-medium">Password:</label>
                    <input
                    className={inputClass}
                    placeholder="Enter your Password"
                    id="password"
                    name="password"
                    value={form.password}
                    type="password" 
                    onChange={handleChange}
                    />
                    {errors.password && <p className={errorClass}>{errors.password}</p>}
                </div>
                <div>
                    <label htmlFor="confirmPassword" className="block mb-1 font-medium">Confirm Password:</label>
                    <input
                    className={inputClass}
                    placeholder="Re-enter your password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    type="password" 
                    onChange={handleChange}
                    />
                    {errors.confirmPassword && <p className={errorClass}>{errors.confirmPassword}</p>}
                </div>
                <div>
                    <button type="submit" className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 cursor-pointer">Sign Up</button>
                    {success && <p className="text-green-600 text-sm mt-1">Form is valid</p>}
                </div>
            </form>
        </div>
    );
}
export default Signup;