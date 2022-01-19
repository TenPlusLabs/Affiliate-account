import 'bootstrap/dist/css/bootstrap.min.css';
import './Signup.css';
import background from './assets/images/affiliate-image4.png';
import { Link } from "react-router-dom";


const Signup = () => {
    return (
        <div className="Login-page" style={{ 
            backgroundImage: `url(${background})` 
            
        }}>
            <div className="Signup row">
                <div className=" Signup-col col-md-6">
                    <div>
                        <h1>Sign Up</h1>
                        <h3>It’s 100% FREE to join!</h3>
                        <p>Your information will never be shared or sold.Read Our Privacy Promise.</p>
                    </div>                   
                    <form className="Signup-form">
                        <div className="form-row">
                            <div class="form-group col-md-6">
                                <input type="text" class="form-control" id="" placeholder="Country"/>
                            </div>
                            <div class="form-group col-md-6">
                                <input type="text" class="form-control" id="" placeholder="First Name"/>
                            </div>
                        </div>
                            <div className="form-row">
                            <div class="form-group col-md-6">
                                <input type="text" class="form-control" id="" placeholder="Last Name"/>
                            </div>
                            <div class="form-group col-md-6">
                                <input type="text" class="form-control" id="" placeholder="Phone Number"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div class="form-group col-md-6">
                                <input type="email" class="form-control" id="" placeholder="Email Address"/>
                            </div>
                            <div class="form-group col-md-6">
                                <input type="password" class="form-control" id="" placeholder="Password"/>
                            </div>
                        </div>
                        
                    </form>
                    <div className="Signup-button" >
                        <button type="submit" class="Signup-btn btn btn-primary btn-block">Continue to Terms and Conditions</button>
                    </div>           
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" />
                        <label class="form-check-label text-muted">I have read and agree to the Terms and Conditions.</label>
                    </div>
                    <p className=""><hr /></p>
                    <div className="Signup-button">
                        <button type="submit" class="Signup-btn btn btn-primary btn-block">Join TenPlus</button>
                    </div> 
                    <p>All fields are mandatory</p>
                    <p>Already have a TenPlus account?<Link to="/login">Sign in here.</Link></p>
                </div>
                <div className="col-md-6 text-center">
                    <div className="Login-text">
                        <h2>Welcome To TenPlus Affiliate Market Page</h2>
                        <p>Joint the the best innovating world for seamless solutions</p>
                        <Link to="/signup">SIGN UP</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Signup;