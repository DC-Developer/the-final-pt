import React from 'react';
import './EditModal.css';
import $ from 'jquery';

var clients = [];
var client_id = null;

class EditModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clients,
            formValues: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onClick = this.onClick.bind(this);
        this.fade = this.fade.bind(this);
        this.removeInterstitial = this.removeInterstitial.bind(this);
        this.deleteClient = this.deleteClient.bind(this);
        this.deleteApiCall = this.deleteApiCall.bind(this);
        this.uploadPic = this.uploadPic.bind(this);
    }

    componentDidMount() {
        console.log("this props client.fullname: ", this.props.clientData.fullname);
        clients = this.props.clientData;

        // var client_name = document.getElementById("client_name");
        // client_name.value = this.props.key;

    }
    handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        let formValues = this.state.formValues;

        formValues[name] = value;
        this.setState({ formValues });
        console.log("formValues: ", this.state.formValues);

    }
    onSubmit(e) {

        e.preventDefault();
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
        $("#editModal").hide();
        $("#root").append(interstitial);

        this.callApi()
            .then(res => res.json())
            .catch(err => console.log(err));
        
            setTimeout(this.removeInterstitial, 1500);

            //call the setTimeout function and then pass in user defined function here
            
            setTimeout(this.fade, 3000);
            this.props.saveClient();
            $("#editModal .close").click();
    }
    onClick() {
        client_id = this.props.clientData._id;
        var client_name = document.getElementById("client_name").value = this.props.clientData.fullname;
        var client_email = document.getElementById("client_email").value = this.props.clientData.email;
        var client_phone = document.getElementById("client_phone").value = this.props.clientData.phone;
        var client_height = document.getElementById("client_height").value = this.props.clientData.height;
        var client_weight = document.getElementById("client_weight").value = this.props.clientData.weight;
        var client_bodyfat = document.getElementById("client_bodyfat").value = this.props.clientData.bodyfat;
        var client_delete = document.getElementById("deleteButton").value = client_id;
        var client_upload_picture = document.getElementById("uploadPicture").value = client_id;
        // var client_pictureInput_value = document.getElementById("client_pic").value;
    }
    //add update route 
    callApi = async () => {
        console.log("client id: ", client_id);
        const response = await fetch("/api/clients/" + client_id, {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(this.state.formValues)
        });
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);

        console.log("app.js callApi: ", body);

        return body;

    }
    deleteApiCall = async () => {
        const response = await fetch("/api/client/" + client_id, { 
            method: "DELETE", 
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify({id : client_id})
        });
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    }
    fade() {

        $(".client-added-div").fadeOut().empty();
        
    }
    removeInterstitial() {
        $(".container").remove();
        //appending the client_added_div here so it won't interfere with the interstitial
        var client_added_div = $("<div>").addClass("client-added-div");
        client_added_div.text("Saved Changes!");
        $(document.body).prepend(client_added_div);
    }
    deleteClient() {
        var client_id = document.getElementById("deleteButton").value;
        console.log("delete ", client_id);
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

        this.deleteApiCall()
            .then(res => res.json())
            .catch(err => console.log(err));

        setTimeout(this.removeInterstitial, 1500);

        //call the setTimeout function and then pass in user defined function here
            
        setTimeout(this.fade, 3000);
        this.props.saveClient();
    }
    // picApiCall = async () => {
    //     const response = await fetch("/api/clients/"+ client_id, {
    //         method: "PUT",
    //         headers: {"Content-Type": "application/json"}, 
    //         body: JSON.stringify({id : client_id, picture: client_pictureInput_value})
    //     });
    //    const body = await response.json();
    //    if (response.status !== 200) throw Error(body.message);
    //    return body;
    // }
    uploadPic() {
        var client_id = document.getElementById("uploadPicture").value;
        var client_pictureInput_value = document.getElementById("client_pic").value;
        console.log("client id: ", client_id);
        console.log("picture input value: ", client_pictureInput_value);
        $("#editModal .close").click();
        
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

        fetch("/api/clients/"+ client_id, {
            method: "PUT",
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify({id : client_id, picture: client_pictureInput_value})
        })
            .then(client => client.json())
            .catch(err => console.log(err));

        setTimeout(this.removeInterstitial, 1500);

        //call the setTimeout function and then pass in user defined function here
                
        setTimeout(this.fade, 3000);
        this.props.saveClient();
       
    }
    render() {
        var style = {
            color: "#50e2c1"
        };
        return (
            <div className="wrapper">

                <div className="edit-link">
                    <a role="button" data-toggle="modal" data-target="#editModal" onClick={this.onClick} >
                        Edit
                    </a>
                </div>

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
                                <div className="col-sm-5">
                                        <div>Profile Picture <input name="picture" type="file" id="client_pic"/></div>
                                        <div>
                                            <button id="uploadPicture" onClick={this.uploadPic}>Upload</button>
                                        </div>
                                        <div>
                                            <div className="picture-box">
                                                
                                            </div>
                                        </div>
                                        {/* <input className="profileImg"><img/></input> */}
                                </div>
                                    <form className="col-sm-7" onSubmit={this.onSubmit}>
                                        <div className="pInfo">Personal Info</div>
                                        
                                        <div>Full Name:</div>
                                        <input className="Rectangle-Copy-Modal" name="fullname" type="text" id="client_name" placeholder={this.props.clientData.fullname} onChange={this.handleChange} />
  
                                        <div>Email</div>
                                        <input className="Rectangle-Copy-Modal" name="email" type="text" id="client_email" placeholder={this.props.clientData.email} onChange={this.handleChange}/>

                                        <div>Phone</div>
                                        <input className="Rectangle-Copy-Modal" name="phone" type="text" id="client_phone" placeholder={this.props.clientData.phone} onChange={this.handleChange}/>
                                        
                                        <div className="fInfo">Fitness Info</div>

                                        <div className="heightDiv">
                                            <div className="botHeaders">Height</div>
                                            <input className="Rectangle-Copy-Height" name="height" type="text" id="client_height" placeholder={this.props.clientData.height} onChange={this.handleChange}/>
                                        
                                        </div>

                                        <div className="weightDiv">
                                            <div className="botHeaders">Weight</div>
                                            <input className="Rectangle-Copy-Weight" name="weight" type="text" id="client_weight" placeholder={this.props.clientData.weight} onChange={this.handleChange}/>
                                        
                                        </div>

                                        <div className="bfatDiv">
                                            <div className="botHeaders">Body Fat</div>
                                            <input className="Rectangle-Copy-Bodyfat" name="bodyfat" type="text" id="client_bodyfat" placeholder={this.props.clientData.bodyfat} onChange={this.handleChange}/>
                                        
                                        </div>  

                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">CANCEL</button>
                                            {/* make the delete button a modal that will prompt the user if they're sure  */}
                                            <button type="button" className="btn btn-secondary" id="deleteButton" data-dismiss="modal" value={this.props.clientData._id} onClick={this.deleteClient}>DELETE</button>
                                            <button type="submit" value="Submit" className="btn btn-primary">SAVE CHANGES</button>
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