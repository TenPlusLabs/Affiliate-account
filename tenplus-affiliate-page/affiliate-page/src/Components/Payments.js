import Starter from "./Starter";

const Payments = () => {
    return (
        <div>
            <main role="main">
                <div class="container py-5">
                  <Starter />  
                    <div class="row">
                        <div class="col-md-10 offset-md-1">
                            <div class="card mb-4 shadow-sm"> 
                                <div class="card-body ">
                                    <div class="text-center">
                                        <h4>Withdrawal to bank</h4>
                                    </div>  
                                    <hr />                        
                                    <div class="row">
                                        <div class="col-md-8 offset-md-2">
                                        <div class="account-card card shadow-sm">
                                            <div class="card-body">
                                            <h5>Withdrawal details</h5>
                                            <hr />
                                            <p>Withdraw to your personal or company bank account. <span> <a href="">Add new account</a></span> </p>
                                            <div class="col-md-10 offset-md-1">
                                                <div class="card mb-4 shadow-sm">
                                                <div class="card-body">
                                                    <form>
                                                    <div class="form-row">
                                                        <div class="col-md-6 mb-3">
                                                        <label for="validationTooltip01">From</label>
                                                        <input type="text" class="form-control" id="validationTooltip01" placeholder="Select balance" required />
                                                        <div class="valid-tooltip">
                                                            Looks good!
                                                        </div>
                                                        </div>
                                                        <div class="col-md-6 mb-3">
                                                        <label for="validationTooltip02">To</label>
                                                        <input type="text" class="form-control" id="validationTooltip02" value="Otto" required />
                                                        <div class="valid-tooltip">
                                                            Looks good!
                                                        </div>
                                                        </div>
                                                    </div>
                                                    </form>
                                                </div>
                                                </div>
                                            </div>
                                            <div class="col-md-10 offset-md-1">
                                                <div class="card mb-4 shadow-sm">
                                                <div class="card-body">
                                                    <form>
                                                    <div class="form-row">
                                                        <div class="col-md-6 mb-3">
                                                        <label for="validationTooltip01">From</label>
                                                        <input type="text" class="form-control" id="validationTooltip01" placeholder="Select balance" required />
                                                        <div class="valid-tooltip">
                                                            Looks good!
                                                        </div>
                                                        </div>
                                                        <div class="col-md-6 mb-3">
                                                        <label for="validationTooltip02">To</label>
                                                        <input type="text" class="form-control" id="validationTooltip02" value="Otto" required />
                                                        <div class="valid-tooltip">
                                                            Looks good!
                                                        </div>
                                                        </div>
                                                    </div>
                                                    </form>
                                                </div>
                                                </div>
                                                <hr />
                                                <h6>Description (optional)</h6>
                                                <hr />
                                                The description will appear in Transactions
                                            </div>
                                            <hr />
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="text-center mt-3">
                                        <button type="button" class="btn btn-lg btn-outline-primary">REVIEW</button>
                                    </div>                                                                        
                                </div>                       
                            </div>                 
                    </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
 
export default Payments;