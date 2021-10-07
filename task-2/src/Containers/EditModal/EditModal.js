// import Modal from 'react-bootstrap/Modal';
// import React, {Component} from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import DropdownList from '../../components/DropdownList/DropdownList';
// import Dropdown from 'react-bootstrap/Dropdown';
// import classes from './RegModal.module.css';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import Axios from 'axios';

// class EditModal extends Component{

//   state={
//     chosenResource:"",
//     birthdate:"",
//     fullname:"",
//     gender:"",
//     numKids:0
//   }

//   componentDidMount = () =>{

//   }

//   handleResourceClick =(resource) =>{
//     this.setState({chosenResource:resource});
//   }

//   handleDateChange = (date)=>{
//     this.setState({birthdate:date});
    
//   }
//   handleNumKids = (event) =>{
//     this.setState({numKids:event.target.value});
//   }

//   handleNameChange = (event) =>{
//     this.setState({fullname:event.target.value});
//   }

//   handleGenderChange = (event) =>{
//     this.setState({gender:event.target.value});
//   }

//   handleSubmit = ()=>{
//     let data = {
//       resource:this.state.chosenResource,
//       fullname:this.state.fullname,
//       numkids:this.state.numKids,
//       gender:this.state.gender,
//       birthdate:this.state.birthdate
//     };
    
//      Axios.post("http://localhost:3000/entries",data)
//       .then(response =>{
//         console.log(response);
//     })
//     .catch((error)=>{
//       console.log(error);
//      });
//   }

//     getData = () =>{
//         Axios.get("http://localhost:3000/entries/"+this.props.paperId)
//       .then(response =>{
//             this.setState({
//                 id:response.data.id,
//                 fullname:response.data.fullname,
//                 numkids:response.data.numkids,
//                 gender:response.data.gender,
//                 birthdate:response.data.birthdate,
//                 resource:response.data.resource})
           
//         console.log(response);
//     })
//     .catch((error)=>{
//       console.log(error);
//      });
//     }

//   render(){

//     let resources = ["Google","TV","Radio","Social Network"];

//     return(
//       <Modal
//       show={this.props.show}  
//       onHide={() => this.props.closeModal()}
//       dialogClassName="modal-90w"
//       aria-labelledby="example-custom-modal-styling-title"
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="example-custom-modal-styling-title">
//           Tell Us A Little Bit About Yourself
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form>
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Full Name</Form.Label>
//             <Form.Control type="text" placeholder="Enter Your Name" onChange={(event)=>this.handleNameChange(event)}/>
//           </Form.Group>

//           <div key={`inline-radio`} className="mb-3" onChange={(event)=>this.handleGenderChange(event)}>
//           <div>Gender</div>
//           <Form.Check
//           inline
//           label="Female"
//           name="group1"
//           type="radio"
//           id={`inline-radio-1`}
//           value="Female"/>
//           <Form.Check
//           inline
//           label="Male"
//           name="group1"
//           type="radio"
//           id={`inline-radio-2`}
//           value="Male"/>
//           </div>

//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label>Number of Kids</Form.Label>
//             <Form.Control type="number" placeholder="Enter a Number" onChange={(event)=>this.handleNumKids(event)}/>
//           </Form.Group>
//           <DropdownList
//                   text={this.state.chosenResource !== ""?this.state.chosenResource:"Where Did You Hear About Us?"}
//                   dark>
//                     {resources.map((resource,index)=>{
//                        return(
//                           <Dropdown.Item
//                           key={index}
//                           onClick={()=>this.handleResourceClick(resource)}>{resource}</Dropdown.Item>
//                        );
//                     })}
//           </DropdownList>
//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label>Date of Birth</Form.Label>
//             <DatePicker onChange={(date)=>this.handleDateChange(date)} selected={this.state.birthdate}  id="change_handler_example"/>
//           </Form.Group>
          
//           <Button 
//           variant="primary" 
//           type="submit" 
//           className={classes.SubmitButton}
//           onClick={this.handleSubmit}>
//             Submit
//           </Button>
//       </Form>
//       </Modal.Body>
//     </Modal>
//     );
//   }
// }

// export default EditModal;