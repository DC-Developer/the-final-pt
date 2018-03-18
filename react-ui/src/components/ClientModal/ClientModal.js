import React from 'react';
import './ClientModal.css';
import $ from 'jquery';

class ClientModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formValues: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChange (e) { 
        console.log(this.state.formValues);
        let formValues = this.state.formValues;
        let name = e.target.name;
        let value = e.target.value;

        formValues[name] = value;

        this.setState({ formValues });
    }

    onSubmit (e) {
        //target the input div for the picture and get the value, create an addtional
        //formvalue below and store the name and value in the formvalues. 
        e.preventDefault();
        //find the potential fix here.
        var interstitial = (
            '<div class="container">' 
                +'<div class="loader">' 
                    +'<svg class="spinner" width="50px" height="50px" viewbox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">' 
                        +'<circle class="circle" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30">'
                        +'</circle>'
                    +'</svg>'
                +'</div>' 
            +'</div>'
        );
        $("#root").append(interstitial);
        // $(document.body).append(interstitial);
        //this is probably not the best way to do it, but going to store the 
        //user id in the formvalues to be saved into the client model, and then retrieve
        //the user id after saving the client and making a db query to find and update
        //the user located by the id to push the client into it

        let formValues = this.state.formValues;
        const user_id = JSON.parse(sessionStorage.getItem('myToken'));
        const userId = "userId";

        formValues[userId] = user_id;

        console.log("add client formvalues: ", this.state.formValues);

        fetch('/api/client', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formValues)
        })
        .then(res => res.json())
        .catch(err => console.log(err));
        
        this.props.addClient();
        $("#modalForm").find('input[type="text"]').val("");
        $("#modalForm").find('input[type="file"]').val("");
        $("#exampleModal .close").click();
    }

    render() {
        return (
            <div className="wrapper">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Add Client
                </button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add a new client</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                        </div>

                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row">
                                    <form id="modalForm"className="row" onSubmit={this.onSubmit}>
                                        <div className="col-sm-5">
                                            <div>Profile Picture <input name="picture" type="file" id="client_pic" value={this.state.picture} onChange={this.onChange}/></div>
                                            <div>
                                                <div className="picture-box">
                                                    
                                                </div>
                                            </div>
                                            {/* <input className="profileImg"><img/></input> */}
                                        </div>
                                              
                                        <div className="col-sm-7">
                                            <div className="pInfo">Personal Info</div>
                                            
                                            <div>Full Name</div>
                                            <input className="Rectangle-Copy-Modal" name="fullname" type="text" value={this.state.fullname} onChange={this.onChange} />
    
                                            <div>Email</div>
                                            <input className="Rectangle-Copy-Modal" name="email" type="text" value={this.state.email} onChange={this.onChange} />

                                            <div>Phone</div>
                                            <input className="Rectangle-Copy-Modal" name="phone" type="text" value={this.state.phone} onChange={this.onChange} />

                                            <div className="heightDiv">
                                                <div className="botHeaders">Height</div>
                                                <input className="Rectangle-Copy-Height" name="height" type="text" value={this.state.height} onChange={this.onChange} />
                                            
                                            </div>

                                            <div className="weightDiv">
                                                <div className="botHeaders">Weight</div>
                                                <input className="Rectangle-Copy-Weight" name="weight" type="text" value={this.state.weight} onChange={this.onChange} />
                                            
                                            </div>

                                            <div className="bfatDiv">
                                                <div className="botHeaders">Body Fat</div>
                                                <input className="Rectangle-Copy-Bodyfat" name="bodyfat" type="text" value={this.state.bodyfat} onChange={this.onChange} />
                                            
                                            </div>  

                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">CANCEL</button>
                                                <button type="submit" value="Submit" className="btn btn-primary" onClick={this.props.onClick}>ADD CLIENT</button>
                                                {/* <button type="submit" value="Submit" className="btn btn-primary" onClick={this.props.onClick}>ADD CLIENT</button> */}
                                            </div>
                                        </div>
                                    </form>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}


export default ClientModal;

