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
                                <form action="" method="post" className="col-sm-5">
                                        Profile Picture <input type="file" />
                                        {/* <input className="profileImg"><img/></input> */}
                                </form>
                                    <form action="/api/client" method="post" className="col-sm-7">
                                        <div className="pInfo">Personal Info</div>
                                        
                                        <div>Full Name</div>
                                        <input className="Rectangle-Copy-Modal" name="fullname" type="text" />
  
                                        <div>Email</div>
                                        <input className="Rectangle-Copy-Modal" name="email" type="text" />

                                        <div>Phone</div>
                                        <input className="Rectangle-Copy-Modal" name="phone" type="text" />

                                        <div className="heightDiv">
                                            <div className="botHeaders">Height</div>
                                            <input className="Rectangle-Copy-Height" name="height" type="text" />
                                        
                                        </div>

                                        <div className="weightDiv">
                                            <div className="botHeaders">Weight</div>
                                            <input className="Rectangle-Copy-Weight" name="weight" type="text" />
                                        
                                        </div>

                                        <div className ="bfatDiv">
                                            <div className="botHeaders">Body Fat</div>
                                            <input className="Rectangle-Copy-Bodyfat" name="bodyfat" type="text" />
                                        
                                        </div>  

                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">CANCEL</button>
                                            <button type="submit" value="submit" className="btn btn-primary">ADD CLIENT</button>
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

