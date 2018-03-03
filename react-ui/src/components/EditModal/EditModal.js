import React from 'react';
import './EditModal.css';

var clients = [];

class EditModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clients
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        console.log("this props client.fullname: ", this.props.clientData.fullname);
        clients = this.props.clientData;

        // var client_name = document.getElementById("client_name");
        // client_name.value = this.props.key;

    }
    handleChange(e) {

    }
    onSubmit(e) {

    }
    onClick() {
        var client_name = document.getElementById("client_name").value = this.props.clientData.fullname;
        var client_email = document.getElementById("client_email").value = this.props.clientData.email;
        var client_phone = document.getElementById("client_phone").value = this.props.clientData.phone;
        var client_height = document.getElementById("client_height").value = this.props.clientData.height;
        var client_weight = document.getElementById("client_weight").value = this.props.clientData.weight;
        var client_bodyfat = document.getElementById("client_bodyfat").value = this.props.clientData.bodyfat;
    }

    render() {
        var style = {
            color: "#50e2c1"
        };
        return (
            <div className="wrapper">
                {/* <div className="edit-link">
                    <a style={style} role="button" data-toggle="modal" data-target="#editModal" >
                        Edit
                    </a>
                </div> */}
                <a style={style} role="button" data-toggle="modal" data-target="#editModal" onClick={this.onClick}>
                        Edit
                </a>


            <div className="modal fade" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit client</h5>
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
                                        
                                        <div>Full Name:</div>
                                        <input className="Rectangle-Copy-Modal" name="fullname" type="text" id="client_name" placeholder={this.props.clientData.fullname} />
  
                                        <div>Email</div>
                                        <input className="Rectangle-Copy-Modal" name="email" type="text" id="client_email" placeholder={this.props.clientData.email}/>

                                        <div>Phone</div>
                                        <input className="Rectangle-Copy-Modal" name="phone" type="text" id="client_phone" placeholder={this.props.clientData.phone}/>

                                        <div className="heightDiv">
                                            <div className="botHeaders">Height</div>
                                            <input className="Rectangle-Copy-Height" name="height" type="text" id="client_height" placeholder={this.props.clientData.height} />
                                        
                                        </div>

                                        <div className="weightDiv">
                                            <div className="botHeaders">Weight</div>
                                            <input className="Rectangle-Copy-Weight" name="weight" type="text" id="client_weight" placeholder={this.props.clientData.weight} />
                                        
                                        </div>

                                        <div className="bfatDiv">
                                            <div className="botHeaders">Body Fat</div>
                                            <input className="Rectangle-Copy-Bodyfat" name="bodyfat" type="text" id="client_bodyfat" placeholder={this.props.clientData.bodyfat} />
                                        
                                        </div>  

                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">CANCEL</button>
                                            <button type="submit" value="Submit" className="btn btn-primary" >SAVE CHANGES</button>
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

export default EditModal;