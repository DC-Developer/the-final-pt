import React from 'react';
import './EditModal.css';

class EditModal extends React.Component {
    
    render() {
        var style = {color: "#50e2c1"};
        return (
            <div className="wrapper">
                <a style={style} role="button" data-toggle="modal" data-target="#editModal" >
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
                                    <form className="col-sm-7" >
                                        <div className="pInfo">Personal Info</div>
                                        
                                        <div>Full Name</div>
                                        <input className="Rectangle-Copy-Modal" name="fullname" type="text"  />
  
                                        <div>Email</div>
                                        <input className="Rectangle-Copy-Modal" name="email" type="text"  />

                                        <div>Phone</div>
                                        <input className="Rectangle-Copy-Modal" name="phone" type="text"  />

                                        <div className="heightDiv">
                                            <div className="botHeaders">Height</div>
                                            <input className="Rectangle-Copy-Height" name="height" type="text"  />
                                        
                                        </div>

                                        <div className="weightDiv">
                                            <div className="botHeaders">Weight</div>
                                            <input className="Rectangle-Copy-Weight" name="weight" type="text"  />
                                        
                                        </div>

                                        <div className="bfatDiv">
                                            <div className="botHeaders">Body Fat</div>
                                            <input className="Rectangle-Copy-Bodyfat" name="bodyfat" type="text"  />
                                        
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