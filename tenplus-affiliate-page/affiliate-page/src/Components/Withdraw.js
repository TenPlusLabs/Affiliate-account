import Starter from "./Starter";

const Withdraw = () => {
    return ( 
        <div className="container">
            <div>
                <Starter />
            </div>
            <div>
            <div class="row">
                <div class="col-md-10 offset-md-1">
                    <div class="card mb-4 shadow-sm"> 
                        <div class="card-body">
                            <div class="row">
                                <h3>Bank Accounts</h3>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card mb-4 shadow-sm">
                                        <div className="col">
                                            <i class="las la-university la-3x"></i>
                                        </div>
                                        <div className="col">United Bank For Africa | NGN
                                            <p>Account Number</p>
                                            <p>X-0123456789</p>
                                            <hr />
                                            <p>Approved</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div class="card mb-4 shadow-sm">
                                        <i class="las la-mouse ml-auto la-2x"></i>
                                        <div class="card-body text-center">
                                            <h1>0</h1>
                                            <p>Clicks</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>  
            </div>
        </div>
     );
}
 
export default Withdraw;