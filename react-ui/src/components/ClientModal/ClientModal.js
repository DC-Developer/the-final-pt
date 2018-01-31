import React from 'react';
import './ClientModal.css';
// import { observable, action } from 'mobx';
// import { observer } from 'mobx-react';



// const ClientModal = observer(class ClientModal extends React.PureComponent {
//     @observable isOpen = false;

//     @action open = (e) => {
//         if (e) { e.preventDefault(); }

//         this.isOpen = true;
//     }

//     @action close = (e) => {
//         if (e) { e.preventDefault(); }

//         this.isOpen = false;
//     }

//     render() {
//         const overlayClasses = classNames({ open: this.isOpen });
//         return (
//             <div id="modal" className={overlayClasses}>

//             </div>
//         );
//     }


// })

class ClientModal extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Add Client
                </button>


            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                    <div className="col-sm-6">
                                        Profile Picture
                                    </div>
                                    <div className="col-sm-6">
                                        <div>Personal Info</div>
                                        <div>Full Name</div>
                                        <div>Email</div>
                                        <div>Phone</div>
                                        <div>Height</div>
                                        <div>Weight</div>
                                        <div>Body Fat</div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}


export default ClientModal;

