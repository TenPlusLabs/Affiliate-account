import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import background from './assets/images/newaimage.png';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className="Login-opac">
            <div className="Login-page jjj" style={{ 
            backgroundImage: `url(${background})` 
            
             }}>
            <div className="Login-content row">
                <div className="Login col-md-4">
                    <div>
                        <h1>Sign in to your Tenplus account</h1>
                        <p>When you sign in you agree to the terms stated in the TenPlus Client Contract.</p>
                    </div>                   
                    <form>
                        <div class="form-group">
                            {/* <label for="exampleInputEmail1">Email address</label> */}
                            <input type="email" class="form-control" id="" placeholder="Enter email"/>
                            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                        </div>
                        <div class="form-group">
                            {/* <label for="exampleInputPassword1">Password</label> */}
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <p><input type="checkbox" /> Remember me</p>
                        <button type="submit" class="Login-btn btn btn-primary">Submit</button>                       
                    </form>
                    <div className="text-center">
                        <p className="Login-pwd-val">oh no!<a href="">Forgot your Password?</a></p>                      
                        <p className="">Don't have an account? <Link to="/signup">Sign up</Link></p>
                    </div>                    
                </div>
                <div className="col-md-6 text-center">
                    <div className="Login-text">
                        <h2>Welcome To TenPlus Affiliate Market Page</h2>
                        <p>Joint the the best innovating world for seamless solutions</p>
                        <a href="">SIGN UP</a>
                    </div>
                </div>
            </div>
            
        </div>
        
        </div>
    );
}
 
export default Login;