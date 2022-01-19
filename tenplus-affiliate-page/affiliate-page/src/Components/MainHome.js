import './MainHome.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import img1 from './assets/images/affiliate-image1.png';
import img2 from './assets/images/affiliate-image2.png';
import img3 from './assets/images/affiliate-image3.png';
import img4 from './assets/images/affiliate-image4.png';
import img5 from './assets/images/newimage2.png';

const MainHome = () => {
    const [useMessage, setMessage] = useState(''),
    handleMouseOver = () => {
        setMessage("You are welcome");
    }

    return (
        <div className="MainHome">
            <div className="container">
            <div class="row">
               <div className="col-md-5">
                   <img className="image1" src={ img1 } alt="" />
               </div> 
                <div class="col-md-7">
                <h3 className="MainHome-header">Your Business <strong>Starts</strong> and Scales <strong>here</strong></h3>
                        <p>
                            TenPlus is a hub for the world’s best marketers and most innovative product owners 
                            to build businesses that matter. Our marketplace empowers entrepreneurs and brands 
                            to grow online through global reach, powerful tools, and support you can trust.
                        </p>
                        <div>
                            <Tippy content="more information">
                                <p className="MainHome-header"><strong><i class="las la-arrow-circle-right"></i> Sale</strong></p>
                            </Tippy>
                            
                            <p>Whether you are a super affiliate or just beginning your marketing career, there’s 
                                never a bad time to get started with ClickBank. The world’s leading performance 
                                marketers have been promoting ClickBank products for over 20 years with more 
                                than $4 billion in commissions earned.
                            </p>
                        </div>
                        
                        <div>
                            
                            <Tippy content="Follow all the details">
                                <p className="MainHome-header"><strong><i class="las la-arrow-circle-right"></i> Promote</strong></p>
                            </Tippy> 
                            <p>Whether you are a super affiliate or just beginning your marketing career, there’s 
                                never a bad time to get started with ClickBank. The world’s leading performance 
                                marketers have been promoting ClickBank products for over 20 years with more 
                                than $4 billion in commissions earned.
                            </p>
                        </div>
                </div>
                
              </div>
            </div>
            
            <div className="w-100 h-25 bg-blue text-light display-lg text-center p-lg-4 p-sm-2">
                    <span>Our customer say <span className="h5 ">  Excellent  </span>
                        <span className=""><i class="las la-star"></i></span>
                        <span className=""><i class="las la-star"></i></span>
                        <span className=""><i class="las la-star"></i></span>
                        <span className=""><i class="las la-star"></i></span>
                        <span className=""><i class="las la-star-half-alt"></i></span>                  
                    </span> out of 5 based on over 1,000+ reviews.
            </div>
            <div className="container">
            <div className="MainHome-margin">
                <div>
                    <h1 className="MainHome-header text-center">Empowering Entrepreneur and Online Brands</h1>
                    <div className="row">
                        <div className="rating-content col-md-8 offset-md-2">
                            <div className="row text-center">
                                <div className="MainHome-header col-md-4">
                                    <p>IN OVER</p>
                                    <h3>200 Countries</h3>
                                </div>
                                <div className="MainHome-header col-md-4">
                                    <p>IN OVER</p>
                                    <h3>200 Countries</h3>
                                </div>
                                <div className="MainHome-header col-md-4">
                                    <p className="Main">IN OVER</p>
                                    <h3>200 Countries</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="MainHome-margin row">
                <div class="col-md-5 image1"> 
                    <img src={ img2 } alt="" />
                </div>                   
                    <div className="col-md-7">
                        <h1 className="MainHome-header">How It Works</h1>
                            <p>
                                <strong></strong>
                                Our program offers the opportunity for you to earn commissions by referring students to Udacity Nanodegree programs.
                                We’ll provide you with a full list of programs you can promote, exciting offers, and promotional assets.
                                So help us spread the word about TenPlus and become an affiliate today!
                                
                            </p>
                            <button className="MainHome-btn">Start Promoting</button>
                    </div>                  
                </div>

            <div className="MainHome MainHome-col row">
                <div className="col-md-7">
                    <h1 className="MainHome-header">Become an Affiliate</h1>
                    <p>
                        Nearly one hundred thousand affiliates power ClickBank’s 
                        vast marketplace to promote top-performing, compliant products  
                        and to get paid on time, every time.
                    </p>
                    <button className="MainHome-btn">Start Promoting</button>
                </div>
                <div class="col-md-5 image1">
                    <img src={ img3 } alt="" />
                </div>                    
            </div>
            <div className="MainHome MainHome-col row">
                <div className="col-md-5">
                    <h1 className="MainHome-header">Program Benefits</h1>
                    <p><strong>What are the benefits of joining the Udacity Affiliate program?</strong></p>
                    <ul>
                        <li>Competitive commission rates with the opportunity for increased payouts based on performance.</li>
                        <li>Access to a product feed, high quality banners, promotional assets, and a reporting dashboard to track earnings.</li>
                        <li>Be the first to know about our special promotions and product launches!</li>
                        <li>Dedicated account team to help you get started and answer any questions.</li> 
                    </ul>
                    
                </div>              
                <div class="col-md-7 image1">
                    <img src={ img4 } alt="" />
                </div>
                    <button className="MainHome-btn">Start Selling</button>
                    <button className="MainHome-btn">Promote</button>
            </div>
            </div>
            
        </div>
        </div>
    );
}
 
export default MainHome;