import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import RegModal from '../RegModal/RegModal';
import EditModal from '../EditModal/EditModal';
import Modal from 'react-bootstrap/Modal';
import ViewModal from '../ViewModal/ViewModal';
import classes from './Home.module.css';
import PaperBox from '../../components/paper/paper';
import Form from 'react-bootstrap/Form';
import Axios from 'axios';

class Home extends Component{
  
    state = {
        posts:[],
        showRegModal:false,
        showViewModal:false,
        paperToView:0
    }

    componentDidMount =()=>{
        this.getPosts();
    }

     //Registration Modal Handling
     showRegModalHandler =()=>{
        this.setState({showRegModal:true});
    }
    closeRegModalHandler = () =>{
        this.setState({showRegModal:false});
    }

    handleCloseViewModal = () =>{
        this.setState({showViewModal:false});
    }

    getPosts = ()=>{
        let tempArr = [];
        Axios.get("http://localhost:3000/entries")
            .then((response) => {
            console.log(response.data);
            
            response.data.map((post)=>{

            tempArr.push({
            id:post.id,
            fullname:post.fullname,
            numkids:post.numkids,
            birthdate:post.birthdate,
            resource:post.resource
            });
        });
        this.setState({posts:[...tempArr]});
    })
    
    }
    
    handleDelete = (paperId) =>{
        Axios.delete("http://localhost:3000/entries/"+paperId)
        .then((response)=>{window.location.reload(false);})
    }

    handleViewClick = (paperId) => {
        this.setState({showViewModal:true,paperToView:paperId});
    }

    render(){

        return(
        <Container fluid={+true} className={classes.Container}>
        <Row>
            <Header
            showRegModal={this.showRegModalHandler}/>
        </Row>
        <Row>
        
            <div className={classes.content}>
            <Form.Group className="mb-3" className={classes.searchBar}>
                <Form.Label>What Are You Looking For?</Form.Label>
                <Form.Control type="text" placeholder="Search" />
            </Form.Group>
            <PaperBox papers={this.state.posts} handleViewClick={this.handleViewClick} handleDelete={this.handleDelete}/>
            </div>
        </Row>
     
        <Row>
            <Footer></Footer>
        </Row>
        
        <EditModal
        paperId={this.state.paperToView}
        show={this.state.showEditModal} 
        closeModal={this.handleCloseViewModal}/>
        <ViewModal
        paperId={this.state.paperToView}
        show={this.state.showViewModal} 
        closeModal={this.handleCloseViewModal}/>
        <RegModal
        show={this.state.showRegModal} 
        closeModal={this.closeRegModalHandler}/>

        </Container>);
    }
}
export default Home;


