import Starter from "./Starter";
import "./Test.css";
import { useState } from "react";
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import img5 from './assets/images/newimage2.png';
import img1 from './assets/images/affiliate-image1.png';
import img2 from './assets/images/affiliate-image2.png';
import img3 from './assets/images/affiliate-image3.png';
import img4 from './assets/images/affiliate-image4.png';



const Test = () => {
  const [opened, setOpened] = useState(false);
    

// let opened = false;

// const handleMouseOver = () => {
//     opened = !opened;
// }
    return (
        <div>
            <div class="container">
              <div class="row">
                <div class="col-md-7">
                <h1 className="MainHome-header">Your Business Starts and Scales here</h1>
                        <p>
                            ClickBank is a hub for the world’s best marketers and most innovative product owners 
                            to build businesses that matter. Our marketplace empowers entrepreneurs and brands 
                            to grow online through global reach, powerful tools, and support you can trust.
                        </p>
                        <div>
                            <h3 className="MainHome-header"><i onClick= { () => setOpened('opened') } class="las la-arrow-circle-right"></i> Sale</h3>
                            <p className={opened ? 'def' : 'def2' }>Welcome</p>
                            <p>Whether you are a super affiliate or just beginning your marketing career, there’s 
                                never a bad time to get started with ClickBank. The world’s leading performance 
                                marketers have been promoting ClickBank products for over 20 years with more 
                                than $4 billion in commissions earned.
                            </p>
                        </div>
                        
                        <div>
                            
                            <Tippy content="Follow all the details">
                                <h3 className="MainHome-header"><i class="las la-arrow-circle-right"></i> Promote</h3>
                            </Tippy> 
                            <p>Whether you are a super affiliate or just beginning your marketing career, there’s 
                                never a bad time to get started with ClickBank. The world’s leading performance 
                                marketers have been promoting ClickBank products for over 20 years with more 
                                than $4 billion in commissions earned.
                            </p>
                        </div>
                </div>
                <div class="col-md-5 image1" style={{ backgroundImage: `url(${img1})`}}>
                  
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
            <div class="container">
              <div class="row rowb">
              <div class="col-sm-5 image1" style={{ backgroundImage: `url(${img2})`}}>
                  
              </div>
                <div class="col-sm-7">
                <h1 className="MainHome-header">Your Business Starts and Scales here</h1>
                        <p>
                            ClickBank is a hub for the world’s best marketers and most innovative product owners 
                            to build businesses that matter. Our marketplace empowers entrepreneurs and brands 
                            to grow online through global reach, powerful tools, and support you can trust.
                        </p>
                        <div>
                            <h3 className="MainHome-header"><i class="las la-arrow-circle-right"></i> Sale</h3>
                            <p>jjjjj</p>
                            <p>Whether you are a super affiliate or just beginning your marketing career, there’s 
                                never a bad time to get started with ClickBank. The world’s leading performance 
                                marketers have been promoting ClickBank products for over 20 years with more 
                                than $4 billion in commissions earned.
                            </p>
                        </div>
                        
                        <div>
                            <h3 className="MainHome-header"><i class="las la-arrow-circle-right"></i> Promote</h3>
                            <p>Whether you are a super affiliate or just beginning your marketing career, there’s 
                                never a bad time to get started with ClickBank. The world’s leading performance 
                                marketers have been promoting ClickBank products for over 20 years with more 
                                than $4 billion in commissions earned.
                            </p>
                        </div>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="row rowa">
                <div class="col-md-7">
                <h1 className="MainHome-header">Your Business Starts and Scales here</h1>
                        <p>
                            ClickBank is a hub for the world’s best marketers and most innovative product owners 
                            to build businesses that matter. Our marketplace empowers entrepreneurs and brands 
                            to grow online through global reach, powerful tools, and support you can trust.
                        </p>
                        <div>
                            <h3 className="MainHome-header"><i class="las la-arrow-circle-right"></i> Sale</h3>
                            <p>jjjj</p>
                            <p>Whether you are a super affiliate or just beginning your marketing career, there’s 
                                never a bad time to get started with ClickBank. The world’s leading performance 
                                marketers have been promoting ClickBank products for over 20 years with more 
                                than $4 billion in commissions earned.
                            </p>
                        </div>
                        
                        <div>
                            <h3 className="MainHome-header"><i class="las la-arrow-circle-right"></i> Promote</h3>
                            <p>Whether you are a super affiliate or just beginning your marketing career, there’s 
                                never a bad time to get started with ClickBank. The world’s leading performance 
                                marketers have been promoting ClickBank products for over 20 years with more 
                                than $4 billion in commissions earned.
                            </p>
                        </div>
                </div>
                <div class="col-sm-5 image1" style={{ backgroundImage: `url(${img3})`}}>
                  
                </div>
              </div>
            </div>

            </div>
            
        
    );
}
 
export default Test;