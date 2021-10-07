import Modal from 'react-bootstrap/Modal';
import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DropdownList from '../../components/DropdownList/DropdownList';
import Dropdown from 'react-bootstrap/Dropdown';
import classes from './ViewModal.module.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Axios from 'axios';

class ViewModal extends Component{

  state={
        chosenResource:"",
        birthdate:"",
        fullname:"",
        gender:"",
        numKids:0
  }

  flag =0;
  
  componentDidMount = () =>{
        
  }

  handleResourceClick = (resource) =>{
    this.setState({chosenResource:resource});
  }

  handleDateChange = (date)=>{
    this.setState({birthdate:date});
    
  }
  handleNumKids = (event) =>{
    this.setState({numKids:event.target.value});
  }

  handleNameChange = (event) =>{
    this.setState({fullname:event.target.value});
  }

  handleGenderChange = (event) =>{
    this.setState({gender:event.target.value});
  }

  handleGettingData = ()=>{
     Axios.get("http://localhost:3000/entries/"+this.props.paperId)
      .then(response =>{
            this.setState({
                id:response.data.id,
                fullname:response.data.fullname,
                numkids:response.data.numkids,
                gender:response.data.gender,
                birthdate:response.data.birthdate,
                resource:response.data.resource})
           
        console.log(response);
    })
    .catch((error)=>{
      console.log(error);
     });
  }

  handleModalClosing = ()=>{
    this.flag=0;
    this.props.closeModal()
  }

  handleEditOpen = () =>{
    this.setState({showEdit:true});
  }

  handleEditClose = () =>{
      this.setState({showEdit:false});
  }

  render(){

    if(this.props.show){
        if(this.flag == 0)
        {
            this.flag=1;
            this.handleGettingData();
        }
    }
    let resources = ["Google","TV","Radio","Social Network"];

        const arr = this.state.birthdate.substring(0,9).split('-');
        console.log("arr= "+arr)
        
        let properDate = arr[2]+"/"+arr[1]+"/"+arr[0];


    return(
        <>
      <Modal
      show={this.props.show}  
      onHide={() => this.handleModalClosing()}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
    >
        {/* View Modal */}
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          {this.state.fullname}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div>Gender</div>
          <Modal.Title id="example-custom-modal-styling-title">
          {this.state.gender}
        </Modal.Title>
        <br/>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Number of Kids</Form.Label>
            <Modal.Title id="example-custom-modal-styling-title">
          {this.state.numKids}
        </Modal.Title>
          </Form.Group>
          <br/>
          <Form.Label>Where Did They Hear About Us?</Form.Label>
          <Modal.Title id="example-custom-modal-styling-title">
          {this.state.resource}
        </Modal.Title>
        <br/>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Date of Birth</Form.Label>
            <Modal.Title id="example-custom-modal-styling-title">
          {properDate}
        </Modal.Title>
          </Form.Group>
          
          <Button 
          variant="primary" 
          type="submit" 
          className={classes.SubmitButton}
          onClick={this.handleEditOpen}>
            Edit
          </Button>
      </Form>
      </Modal.Body>
    </Modal>
  </>
    );
  }
}

export default ViewModal;