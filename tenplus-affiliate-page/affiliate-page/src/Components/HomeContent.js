import Starter from "./Starter";
import "./HomeContent.css";
import { Chart } from "react-google-charts";

const HomeContent = () => {
    return (
        <div>
            <main role="main">
            <div class="album py-5 bg-light">
              <div class="container">
                <Starter />
                <div class="row">  
                  <div class="col-md-3">
                    <div class="card mb-4 shadow-sm">              
                      <div class="card-body">
                        <p class="card-text commision-header">Available commisions balance.</p>
                        <hr />
                        <div class="d-flex justify-content-between align-items-center mb-4">
                          <div class="">
                            <p>Commisions Pending Maturation</p>
                          </div>
                          <small class="text-muted">9 mins</small>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="">
                            <p>Total Amount Withdrawn</p>
                          </div>
                          <small class="text-muted">9 mins</small>                     
                        </div>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Request Withdrawal</button>            
                      </div> 
                        <div className="HomeContent-alert">
                          <i class="las la-exclamation-circle"></i>You will be able to request a withdrawal as soon as your balance reach the minimum required amount of $3000
                        </div>         
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card home-card mb-4 shadow-sm">
                      <i className="las la-mouse ml-auto la-2x"></i>
                      <div className="card-body text-center">
                        <h1>0</h1>
                        <p>Clicks</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                  <div class="card home-card mb-4 shadow-sm">
                    <i class="las la-user-tie ml-auto la-2x"></i>
                    <div class="card-body text-center">
                      <h1>0</h1>
                      <p>Signup</p>
                    </div>
                  </div>
                  </div>
                  <div className="col-md-3">
                  <div class="card home-card mb-4 shadow-sm">
                    <i class="lar la-chart-bar ml-auto la-2x"></i>
                    <div class="card-body conversion text-center">
                      <h1>0</h1>
                      <p>Conversion</p>
                    </div>
                  </div>
                  </div>

                        <div className="col-md-9 offset-md-3">
                            <div class="card mb-4 shadow-sm">
                                <div class="card-body text-center">
                                <Chart
                                    chartType="ScatterChart"
                                    spreadSheetUrl="https://docs.google.com/spreadsheets/d/1jN0iw0usssnsG1_oi-NXtuKfsUsGme09GsFidbqxFYA/edit#gid=0"
                                    options={{
                                    hAxis: {
                                    format: 'short',
                                    },
                                    vAxis: {
                                    format: 'decimal',
                                    // format:'scientific'
                                    // format:'long'
                                    // format:'percent'
                                    },
                                    }}
                                    rootProps={{ 'data-testid': '1' }}
                                />
                                </div>
                            </div>
                        </div>  




                  {/* <div className="col-md-9">
                      <div className="row">
                        <div className="col-md-4">
                          <div class="card mb- shadow-sm">
                            <i class="las la-mouse ml-auto la-2x"></i>
                            <div class="card-body text-center">
                              <h1>0</h1>
                              <p>Clicks</p>
                            </div>
                          </div>
                        </div>
                      <div className="col-md-4">
                        <div class="card mb-4 shadow-sm">
                          <i class="las la-user-tie ml-auto la-2x"></i>
                          <div class="card-body text-center">
                            <h1>0</h1>
                            <p>Signup</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 ">
                        <div class="card mb-4 shadow-sm">
                          <i class="lar la-chart-bar ml-auto la-2x"></i>
                          <div class="card-body conversion text-center">
                            <h1>0</h1>
                            <p>Conversion</p>
                          </div>
                        </div>
                      </div>
                      </div>
                        <div className="col">
                            <div class="card mb-4 shadow-sm">
                                <div class="card-body text-center">
                                <Chart
                                    chartType="ScatterChart"
                                    spreadSheetUrl="https://docs.google.com/spreadsheets/d/1jN0iw0usssnsG1_oi-NXtuKfsUsGme09GsFidbqxFYA/edit#gid=0"
                                    options={{
                                    hAxis: {
                                    format: 'short',
                                    },
                                    vAxis: {
                                    format: 'decimal',
                                    // format:'scientific'
                                    // format:'long'
                                    // format:'percent'
                                    },
                                    }}
                                    rootProps={{ 'data-testid': '1' }}
                                />
                                </div>
                            </div>
                        </div>  
                  </div>     */}
                </div>




              <div className="Home-table col-md-9 offset-md-3">
                <table class="table table-hover table-border">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Payment</th>
                        <th scope="col">Interest Payment</th>
                        <th scope="col">Principal Payment</th>
                        <th scope="col">Principal Balance</th>
                        <th scope="col">Accumulated Interest</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>$22</td>
                        <td>$22</td>
                        <td>$22</td>
                        <td>$22</td>
                        <td>$22</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>$22</td>
                        <td>$22</td>
                        <td>$22</td>
                        <td>$22</td>
                        <td>$22</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>$22</td>
                        <td>$22</td>
                        <td>$22</td>
                        <td>$22</td>
                        <td>$22</td>
                      </tr>
                    </tbody>
                </table>
              </div>
                




                  <div class="col-md-9 offset-md-3">
                  <h4>Your referrals</h4>
                    <div class="card mb-4 shadow-sm"> 
                      <div class="card-body text-center">
                        <div class="input-group flex-nowrap">
                          <div class="input-group-prepend">
                            <span class="input-group-text" id="addon-wrapping">Your Unique Referral Link</span>
                          </div>
                          <input type="text" value="https://tenplusdigitallabs.com/0ab34bv1" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                        </div>
                      </div>
                    </div>
                    
                    <h4>Your Link</h4>
                    <div class="card mb-4 shadow-sm"> 
                      <div class="card-body text-center">
                        <div>
                          <div class="input-group flex-nowrap mb-3">
                            <div class="input-group-prepend">
                              <span class="input-group-text" id="addon-wrapping">Product Name</span>
                            </div>
                            {/* <a href="">https://tenplusdigitallabs.com/0ab34bv1</a> */}
                            <input type="text" value="https://tenplusdigitallabs.com/0ab34bv1" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                            <input className="mr-auto" type="submit" value="$10" />
                          </div>
                          <div class="input-group flex-nowrap mb-3">
                            <div class="input-group-prepend">
                              <span class="input-group-text" id="addon-wrapping">Product Name</span>
                            </div>
                            <input type="text" value="https://tenplusdigitallabs.com/0ab34bv1" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                            <input type="submit" value="$10" />
                          </div>
                          <div class="input-group flex-nowrap mb-3">
                            <div class="input-group-prepend">
                              <span class="input-group-text" id="addon-wrapping">Product Name</span>
                            </div>
                            <input type="text" value="https://tenplusdigitallabs.com/0ab34bv1" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                            <input type="submit" value="$10" />
                          </div>
                          <div class="input-group flex-nowrap mb-3">
                            <div class="input-group-prepend">
                              <span class="input-group-text" id="addon-wrapping">Product Name</span>
                            </div>
                            <input type="text" value="https://tenplusdigitallabs.com/0ab34bv1" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                            <input type="submit" value="$10" />
                          </div>
                          <div class="input-group flex-nowrap">
                            <div class="input-group-prepend">
                              <span class="input-group-text" id="addon-wrapping">Product Name</span>
                            </div>
                            <input type="text" value="https://tenplusdigitallabs.com/0ab34bv1" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                            <input type="submit" value="$10" />
                          </div>
                          <div className="pt-2"><button type="button" className="btn btn-primary btn-small">Click to see more</button></div>                
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
 
export default HomeContent;