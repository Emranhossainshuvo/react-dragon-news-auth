import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Login = () => {

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        console.log(form.get('password'))
    }

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-3xl text-center my-10">Please login</h2>
                <div className="hero min-h-screen bg-base-200">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>Do not have an account? <Link to="/register" className="text-blue-600 underline">Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;