import React from 'react';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';

import { connect } from 'react-redux';
import { addElement, getState } from '../actions';

const NoteEditor = React.createClass({   
    getInitialState(){
        return{
            rendering:false,
            form_name:'',
            form_description:'',
            activator:false
        }
    },  
    checkingValue(){
        const {form_name, form_description, activator} = this.state;
        if(form_name.length>0 && form_description.length>0){
            this.setState({activator:true});            
        }else{
            this.setState({activator:false});
        }
    },
    componentWillReceiveProps(nextProps, nextState){        
        if(nextState.activator != this.state.activator){
            return false;
        }else{
            return true
        }
       
    },
    handleNameChange(event){
        this.setState({
            form_name:event.target.value
        },this.checkingValue);
        
    },
    handleTextChange(event){
        this.setState({
            form_description:event.target.value
        },this.checkingValue);     
    },
    handleClick(){
        this.props.onRender();
        this.setState({
            rendering:true
        })
    },
    render(){
        const styles = {
            head_field: {
                fontSize: 16,        
            },
            content_field:{
                fontSize: 13,
            },
            wrap:{
        
            },
            btn:{
                marginRight: 20,
                position:'absolute',
                right:'-80px',
                bottom:'75px'
            },
            button:{
                marginTop: 12,
            }  
        };
        const {
            form_name,
            form_description,
            activator
        } = this.state;
        if(this.state.rendering){
            return(
                <div className="head">
                    <AppBar
                        title={<span style={styles.title}>Поздравляем! Ваша форма была создана!</span>}
                    />  
                    <RaisedButton label="Отправить" primary={true} disabled={false} style={styles.button}/>
                    <h2>
                        {
                            form_name
                        }
                    </h2>
                    <Divider />
                    <h3>
                        {
                            form_description
                        }
                    </h3>
                    <Divider />
                </div>
            );
        }else{
            return(
                <div className="head">
                    <AppBar
                        title={<span style={styles.title}>Конструктор форм:</span>}
                        iconElementRight={<FlatButton label="Save" onClick={this.handleClick} disabled={!activator}/>}
                    />  
                    <TextField 
                        fullWidth={true}
                        style={styles.head_field}
                        floatingLabelText="Название формы"
                        onChange={this.handleNameChange}
                    />
                    <br/>
                    <TextField 
                        fullWidth={true}                   
                        style={styles.content_field}
                        hintText="Описание"
                        onChange={this.handleTextChange}
                    />
                    
                    <div style={styles.wrap} >
                        <FloatingActionButton style={styles.btn} onClick={()=>this.props.addElement()} disabled={!activator}>
                        <ContentAdd />
                        </FloatingActionButton>
                    </div>
                </div>
            );
        }
    }
});

const mapStateToProps = state => ({elements: state});

export  default connect(mapStateToProps, { addElement, getState })( NoteEditor);

