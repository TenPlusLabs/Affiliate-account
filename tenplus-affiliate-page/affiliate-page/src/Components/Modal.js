import React from 'react'
import './Modal.css'

class Modal  extends React.Component {

    copyToClipboard = () => {
        let element = document.getElementById('myInput'); //select the element
        //let elementText = element.textContent; //get the text content from the element
       // copyText(elementText); //use the copyText function below
        element.select();
        element.selectSelectionRange(0, 99999);
        
        document.execCommand('copy');

        alert('Copied the text: ' + element.value);
    }

        //If you only want to put some Text in the Clipboard just use this function
        // and pass the string to copied as the argument.
//          copyText = (text) => {
//         navigator.clipboard.writeText(text);
//  }
 render() {
    return (
        <div>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Product link</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p className="text-blue">Copy & Paste the link below </p>
                            <div className="m-2 border-left p-3">
                                <p className="text-secondary"  id='myInput'>https://tenpluslabs/dfkmdjkfskdflkdfkls.com</p>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={this.copyToClipboard}>Copy Link to clipboard</button>
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">Customize link</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="myModal" tabindex="-3"  aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="myModal">Customize link</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p className="text-blue">Customize the link to your desired choice </p>
                            <div className="m-2 border-left p-3">
                                <form action="">
                                    <textarea name="message" className="text-secondary">https://tenpluslabs/dfkmdjkfskdflkdfkls.com</textarea>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={this.copyToClipboard}>Copy Link to clipboard</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}

export default Modal
