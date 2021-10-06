import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import classes from './Home.module.css';
import PaperBox from '../../components/paper/paper';
import Axios from 'axios';

class Home extends Component{
  
    state = {
        posts:[]
    }

    componentDidMount =()=>{
        this.getPosts();
    }

    getPosts = ()=>{
        let tempArr = [];
        Axios.get("http://localhost:3000/posts")
            .then((response) => {
            console.log(response.data);
            
            response.data.map((post)=>{

            tempArr.push({
            id:post.id,
            title:post.Title,
            subtitle:post.Subtitle,
            content:post.content
            })
        });
        this.setState({posts:[...tempArr]});
    })
    
    }
    

    render(){

        return(
        <Container fluid={+true} className={classes.Container}>
        <Row>
            <Header/>
        </Row>
        <Row  className={classes.content}>
            <PaperBox papers={this.state.posts}/>
          {/* <PaperBox>
            <Paper elevation={2} className={classes.box}>
                <h3>
                    Best Writer Ever: Guillaume Musso
                </h3>
                <h4 className={classes.subtitle}>Subtitle</h4>
                <Button color="inherit" className={classes.viewButton}>View</Button>
                <Button color="inherit" className={classes.deleteButton}>delete</Button>
            </Paper>
            <Paper elevation={2} className={classes.box}>
                <h3>
                    Best Writer Ever: Guillaume Musso
                </h3>
                <h4 className={classes.subtitle}>Subtitle</h4>
                <Button color="inherit" className={classes.viewButton}>View</Button>
                <Button color="inherit" className={classes.deleteButton}>delete</Button>
            </Paper>
          </PaperBox> */}
        </Row>
     
        <Row>
            <Footer></Footer>
        </Row>
        </Container>);
    }
}
export default Home;


