import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom"

export default function RegisterPage(){
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    function registeruser(ev){
        ev.preventDefault();
        axios.get('/register', {
            name,
            email,
            password,
        });
    }
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
            <h1 className="text-4xl text-center mb-4">Sign Up</h1>
            <form className="max-w-md mx-auto" onSubmit={registeruser}>
                <input type="text" 
                    placeholder="Name" 
                    value={name} 
                    onChange={ev => setName(ev.target.value)}/>
                <input type="email" 
                    placeholder="your@gmail.com" 
                    value={email} 
                    onChange={ev => setEmail(ev.target.value)}/>
                <input type="password" 
                    placeholder="password" 
                    value={password} 
                    onChange={ev => setPassword(ev.target.value)}/>
                <button className="primary">Sign Up</button>
                <div className="text-center py-2 text-gray-500">
                    Already a member? <Link className="underline text-black" to={'/Login'}>Login</Link>
                </div>
            </form>
            </div>          
        </div>
    )
}