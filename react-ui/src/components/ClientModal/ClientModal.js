import React from 'react';
import './ClientModal.css';

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
        // e.preventDefault();
        //find the potential fix here.
        fetch('/api/client', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(this.state.formValues)
        })
        .then(res => res.json())
        .catch(err => console.log(err));
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
                                <form className="col-sm-5">
                                        Profile Picture <input type="file" />
                                        {/* <input className="profileImg"><img/></input> */}
                                </form>
                                    <form className="col-sm-7" onSubmit={this.onSubmit}>
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

