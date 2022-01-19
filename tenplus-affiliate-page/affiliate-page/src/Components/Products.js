// import './Product.css'
import Modal from './Modal'
import Starter from "./Starter";
import { Link } from "react-router-dom";

const Products = () => {

   

    return (
        <div>
            <section>
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <Starter />
                        </div>
                        <div className="col-md-12 shadow-lg rounded-0 p-3 w-75 m-auto">
                            <h4> Home &gt; Product-Links </h4>
                            <p className="mt-lg-5 mt-md-5 mt-sm-1 p-sm-3">Build a link to a specific page from TenPlus using the tools below.</p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-12 shadow-lg rounded-0 p-3 w-75 m-auto">
                            <h4> Search for any products </h4>
                            <p classNameName="mt-lg-3 mt-md-3 mt-sm-1 p-sm-3">Lorem ipsum dolor sit amet 
                                consectetur adipisicing elit. Exercitationem ex similique eveniet a et cupiditate 
                                explicabo maiores dolore eum quidem, doloribus possimus sequi officiis rem, 
                                itaque eos atque, ratione quod?</p>
                    
                            <form action=""  className="row gy-2 gx-3 align-items-center w-75 m-auto">
                                <div className="col-auto">
                                    <label for="">Search</label>
                                    <select className="form-select " id="autoSizingSelect">
                                        <option selected>All products</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="col-auto w-50 mt-2">
                                    <label for="">For</label>
                                    <div className="input-group">
                                    
                                        <div className="input-group-text"><i className="fa fa-search" aria-hidden="true"></i></div>
                                        <input type="text" className="form-control" id="autoSizingInputGroup" placeholder="Product Name"/>
                                        <input type="submit" className=" btn-outline-blue btn-sm go-btn" value="Go"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12 shadow-lg rounded-0 p-3 w-75 mt-3 m-auto">
                            <h4 className="h6"> Found "10" results for "kgkkg" on TenPlus <span className=" d-flex flex-row float-end">
                                <form action="">
                                    <label for="">Sort by</label>
                                    <select className="form-select " id="autoSizingSelect">
                                        <option selected>Featured</option>
                                        <option value="1">Web Development</option>
                                        <option value="2">Graphic Design</option>
                                        <option value="3">Three</option>
                                    </select>
                                </form>
                            </span> </h4>
                            <p className="mt-lg-5 mt-md-5 mt-sm-1 p-sm-3"></p>
                            <table className="table table-hover col-md-12 col-sm-12 table-responsive table-responsive-sm" id='one'>
                                <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Features</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Commission</th>
                                    <th scope="col"></th>
                                    
                                    
                                    <th scope="col"></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td><img src="https://picsum.photos/100/100" alt=""/></td>
                                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, possimus dolorem, minus aliquid iste nisi odio tenetur et veniam 
                                        ab modi atque beatae aut repellat inventore voluptatibus voluptate tempora hic?</td>
                                    <td className=" text-center">$1234.5678</td>
                                    <td className=" text-center">8%</td>
                                    <td><a href="#exampleModal" className="btn btn-primary text-decoration-none"  data-bs-toggle="modal" data-bs-whatever="@mdo" data-bs-target="#exampleModal">Get link</a></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td><img src="https://picsum.photos/100/100" alt=""/></td>
                                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, possimus dolorem, minus aliquid iste nisi odio tenetur et veniam 
                                        ab modi atque beatae aut repellat inventore voluptatibus voluptate tempora hic?</td>
                                    <td className=" text-center">$1234.5678</td>
                                    <td className=" text-center">9%</td>
                                    <td><a href="#exampleModal" className="btn btn-primary text-decoration-none"  data-bs-toggle="modal" data-bs-whatever="@mdo" data-bs-target="#exampleModal">Get link</a></td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td><img src="https://picsum.photos/100/100" alt=""/></td>
                                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, possimus dolorem, minus aliquid iste nisi odio tenetur et veniam 
                                        ab modi atque beatae aut repellat inventore voluptatibus voluptate tempora hic?</td>
                                    <td className=" text-center">$1234.5678</td>
                                    <td className=" text-center">10%</td>
                                    <td><a href="./" className="btn btn-primary text-decoration-none"  data-bs-toggle="modal" data-bs-whatever="@getbootstrap" data-bs-target=".#exampleModal">Get link</a></td>
                                </tr>
                                
                                </tbody>
                            
                            </table>
                            
                                <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-end">
                                    <li className="page-item disabled">
                                    <a className="page-link" href=".#" tabindex="-1" aria-disabled="true">Previous</a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="one">1</a></li>
                                    <li className="page-item"><a className="page-link" href=".#">2</a></li>
                                    <li className="page-item"><a className="page-link" href=".#">3</a></li>
                                    <li className="page-item">
                                    <a className="page-link" href=".#">Next</a>
                                    </li>
                                </ul>
                                </nav>                        
                            <Modal/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Products
