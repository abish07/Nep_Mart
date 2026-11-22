import { useState } from "react"

function Login(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState({});
    const [success,setSuccess] = useState(false);

    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validate = () =>{
        const newErrors = {};
        if(!email.trim()){
            newErrors.email = "Email is Required";
        }else if(emailRegex.test(email)){
            newErrors.email = "Invalid Email";
        }
        if(!password.trim()){
            newErrors.password = "Password is Required";
        }else if(password.length < 8){
            newErrors.password = "Invalid Password";
        }
        return newErrors;
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newErrors = validate()
        setError(newErrors);

        if(Object.keys(newErrors).length===0){
            setSuccess(true);
            console.log({email});
        }else{
            setSuccess(false);
        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <label htmlFor="Email">Email: </label>
                    <input 
                    id="Email"
                    type="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    placeholder="Enter your email"/>
                    {error.email && <p className="text-red-600 text-sm">{error.email}</p>}
                </div>
                <div>
                    <label htmlFor="Password">Password: </label>
                    <input 
                    className="px-2"
                    id="Password"
                    type="password" 
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    placeholder="Enter your password"/>
                    {error.password && <p className="text-red-600 text-sm">{error.password}</p>}
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
                <div>
                    {success && <p className="text-green-400 text-sm">Form is Valid</p>}
                </div>
            </form>
        </div>
    )
}
export default Login;