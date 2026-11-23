import { useState } from "react"

function Login({email,setEmail}){
    const [password,setPassword] = useState("");
    const [error,setError] = useState({});
    const [success,setSuccess] = useState(false);

    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const inputClass = "w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400";

    const validate = () =>{
        const newErrors = {};
        if(!email.trim()){
            newErrors.email = "Email is required";
        }else if(!emailRegex.test(email)){
            newErrors.email = "Invalid Email";
        }
        if(!password.trim()){
            newErrors.password = "Password is required";
        }else if(password.length < 6){
            newErrors.password = "Password must be at least 6 characters";
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
    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-gray-100 px-4">
            <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white p-6 rounded-lg shadow w-full max-w-sm space-y-4"
            >
            <h1 className="text-2xl font-bold text-center">Login</h1>

            <div>
                <label htmlFor="Email" className="block mb-1 font-medium">Email</label>
                <input
                    id="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className={inputClass}
                />
                {error.email && <p className="text-red-600 text-sm mt-1">{error.email}</p>}
            </div>

            <div>
                <label htmlFor="Password" className="block mb-1 font-medium">Password</label>
                <input
                    id="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className={inputClass}
                />
                {error.password && <p className="text-red-600 text-sm mt-1">{error.password}</p>}
            </div>

            <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 cursor-pointer">
                Submit
            </button>

            {success && <p className="text-green-600 text-sm text-center">Form is valid</p>}
            </form>
        </div>
    );
}
export default Login;