import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get('email'); 
        const name = form.get('name'); 
        const photo = form.get('photo-url')
        const password = form.get('password')
        console.log(name, photo, email, password)
    }

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-3xl text-center my-10">Please Register</h2>
                <div className="hero min-h-screen bg-base-200">
                    <form onSubmit={handleRegister} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name="photo-url" className="input input-bordered" required />
                        </div>
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
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p>Already have an account? <Link to="/login" className="text-blue-600 underline">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;