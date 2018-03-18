import React from 'react';
import { connect } from 'react-redux';
import { changeContext } from '../actions';

import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RadioComponent from './RadioComponent.jsx';
import SelectComponent from './SelectComponent.jsx';

import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add';



const InnerContent = React.createClass({
    getInitialState(){
      return{
        components:[
            {id:Date.now(),text:''}
        ],
        selects:[
            {id:Date.now(),text:''}
        ],
      }
    },
        
    
    addRadioField(){
        const newComponent = {
            id:Date.now(),
            text:''
        };
        this.setState({
            components: [...this.state.components, newComponent]
        });
    },
    addSelectField(){
        const newComponent = {
            id:Date.now(),
            text:''
        };
        this.setState({
            selects: [...this.state.selects, newComponent]
        });
    },
    deleteFieldItem(item){
        this.setState({
            components:this.state.components.filter(component => component.id !== item)
        });
    },

    deleteSelectItem(item){
        this.setState({
            selects:this.state.selects.filter(select => select.id !== item)
        });
    },
    radioTextChange(v,id){
        const callback = () => {
            this.props.changeContext(this.state.components, this.props.id);            
        }
        this.setState({
            components:this.state.components.map(component => component.id == id
            ?{
                ...component,
                text: v
            }
            :component
        )
        },callback);
    },
    
    selectTextChange(v,id){
        const callback = () => {
            this.props.changeContext(this.state.selects, this.props.id);            
        }
        this.setState({
            selects:this.state.selects.map(select => select.id == id
            ?{
                ...select,
                text: v
            }
            :select
        )
        },callback);
        
    },

    render(){
        const styles = {
            text: {
                fontSize: 12,        
            },
            block: {
                maxWidth: 250,
              },
              radioButton: {
                marginBottom: 16,
              },
              innerContent: {
                width: '70%',
                fontSize: '12px'
            }
        }
        const {
            id,
            value
        } = this.props;
        if(value == 1){
            return(
                <div style={styles.innerContent} >
                    <TextField 
                        style={styles.text}
                        disabled={true}
                        hintText="Ответ"
                    />                      
                </div>
            );
        }else if(value == 2){
            return(
                <div style={styles.innerContent}>
                    <RadioComponent radioText={this.radioTextChange} components={this.state.components} fieldDelete={this.deleteFieldItem}/>
                    <IconButton tooltip="Добавить поле" onClick={this.addRadioField}>
                        <ContentAdd />
                    </IconButton>              
                </div>  
            );
        }else{
            return(
                <div style={styles.innerContent}>
                    <SelectComponent selectText={this.selectTextChange} selects={this.state.selects} fieldDelete={this.deleteSelectItem}/>
                    <IconButton tooltip="Добавить поле" onClick={this.addSelectField}>
                        <ContentAdd />
                    </IconButton>              
                </div> 
            );
        }
    
        
    }
})
const mapStateToProps = state => ({elements: state});
export default connect(mapStateToProps, { changeContext })(InnerContent);
// export default InnerContent;