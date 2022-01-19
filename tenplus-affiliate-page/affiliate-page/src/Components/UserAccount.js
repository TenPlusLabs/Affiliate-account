import Starter from "./Starter";

const UserAccount = () => {
    return (
        <div>
          <Starter />
            <main role="main">
              <div class="container py-5">
                  <div class="row">
                      <div class="col-md-10 offset-md-1">                     
                      <h1>User Account</h1>
                          <div class="card mb-4 shadow-sm"> 
                              <div class="card-body">
                                  <div class="row">
                                      <div class="col-md-4">Good evening</div>
                                      <div class="col-md-4">Local Time:</div>
                                      <div class="col-md-4"></div>
                                      <div class="col-md-4">User Doe</div>
                                      <div class="col-md-4">Last Visit:</div>
                                      <div class="col-md-4"></div>
                            
                                      <div class="col-md-4"><hr /></div>
                                      <div class="col-md-4"></div>
                                      <div class="col-md-4"></div>
                                      <div class="col-md-4">Customer ID 4458751</div>
                                      <div class="col-md-4"></div>
                                      <div class="col-md-4"></div>
                                  </div>
                              </div>                        
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-md-10 offset-md-1">
                        <div class="account-card card mb-4 shadow-sm"> 
                            <div class="card-body ">
                                <div class="text-center">
                                    <h4>Account statement for TenPlus</h4>
                                </div>  
                                <hr /> 
                                <div class="row">
                                  <div class="col-md-8 mb-3 offset-md-2">
                                    <div class="card shadow-sm">
                                      <div class="card-body">
                                        <p>Receiving account</p>
                                      <hr />
                                      <p class="text-muted">USD receiving account</p> 
                                        <div>USD GPS account-XX-0470</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>                       
                                <div class="row">
                                  <div class="col-md-8 offset-md-2">
                                    <div class="account_stat_card card shadow-sm">
                                      <div class="card-body">
                                        <p>Account statement detail</p>
                                      <hr />
                                        <p>Make sure details match those used in TenPlus Affilate account central registration</p>
                                        <div class="col-md-10 offset-md-1">
                                              <form class="mainaccountform">
                                                <div class="">
                                                  <div class="form-group">
                                                    
                                                    <input type="text" class="form-control accountform" id="validationTooltip01" placeholder="Registered name on TenPlus" required />
                                                    <div class="valid-tooltip">
                                                      Looks good!
                                                    </div>
                                                  </div>
                                                  <div class="form-group">
                                                    
                                                    <input type="text" class="form-control accountform" id="validationTooltip01" placeholder="Email (as on your registered account)" required />
                                                    <div class="valid-tooltip">
                                                      Looks good!
                                                    </div>
                                                  </div>
                                                  <div class="form-group">
                                                    
                                                    <input type="text" class="form-control accountform" id="validationTooltip01" placeholder="Country" required />
                                                    <div class="valid-tooltip">
                                                      Looks good!
                                                    </div>
                                                  </div>
                                                  <div class="form-group">
                                                    
                                                    <input type="text" class="form-control accountform" id="validationTooltip01" placeholder="Address" required />
                                                    <div class="valid-tooltip">
                                                      Looks good!
                                                    </div>
                                                  </div>
                                                  <div class="form-group">
                                                    
                                                    <input type="text" class="form-control accountform" id="validationTooltip01" placeholder="City/Town" required />
                                                    <div class="valid-tooltip">
                                                      Looks good!
                                                    </div>
                                                  </div>
                                                  <div class="form-group"> 
                                                    <input type="text" class="form-control accountform" id="validationTooltip01" placeholder="Phone No" required />
                                                    <div class="valid-tooltip">
                                                      Looks good!
                                                    </div>
                                                  </div>
                                                </div>
                                              </form>
                                        </div>                                 
                                        <hr />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="text-center mt-3">
                                  <button type="button" class="btn btn-lg account-stat-btn btn-outline-primary">DOWNLOAD</button>
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
 
export default UserAccount;