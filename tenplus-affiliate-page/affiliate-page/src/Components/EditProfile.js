import Starter from './Starter';
import './EditProfile.css';

const EditProfile = () => {
    return ( 
        <div className="editprofile">
            <div className="container">
                <Starter />
                <div className=" mb-4">
                    <div className="card shadow-sm">
                        <div className="card-body editprofile">
                            <div class="d-flex">
                                <div class="">Profile Settings</div>
                                <div class="ml-auto"><i class="las la-question-circle la-2x"></i></div>
                            </div>
                            <hr />
                            <div className="p-2 mb-3 col-md-6 offset-md-3 card">
                                <div class="d-flex">
                                    <div class="font-weight-bolder"><i class="las la-angle-right"></i> Profile Settings</div>
                                    <div class="ml-auto"><a href="">Edit</a></div>
                                </div>
                            </div>                  
                            <div className="p-2 mb-3 col-md-6 offset-md-3 card">
                                <div class="d-flex">
                                    <div class="font-weight-bolder"><i class="las la-angle-right"></i> Profile Settings</div>
                                    <div class="ml-auto"><a href="">Edit</a></div>
                                </div>
                            </div>                  
                            <div className="p-2 mb-3 col-md-6 offset-md-3 card">
                                <div class="d-flex">
                                    <div class="font-weight-bolder"><i class="las la-angle-right"></i> Profile Settings</div>
                                    <div class="ml-auto"><a href="">Edit</a></div>
                                </div>
                            </div>                  
                            <div className="p-2 mb-3 col-md-6 offset-md-3 card">
                                <div class="d-flex">
                                    <div class="font-weight-bolder"><i class="las la-angle-right"></i> Profile Settings</div>
                                    <div class="ml-auto"><a href="">Edit</a></div>
                                </div>
                            </div>                  
                            <div className="p-2 mb-3 col-md-6 offset-md-3 card">
                                <div class="d-flex">
                                    <div class="font-weight-bolder"><i class="las la-angle-right"></i> Profile Settings</div>
                                    <div class="ml-auto"><a href="">Edit</a></div>
                                </div>
                            </div>                  
                                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default EditProfile;