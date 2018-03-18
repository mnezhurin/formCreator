import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import InnerContent from './InnerContent.jsx';
import Result from './Result.jsx';


import { connect } from 'react-redux';

import { changeElement, removeElement, changeType } from '../actions';


import './FormElement.css';

const styles = {
    customWidth: {
      width: 150,
    },
    textRight:{
        textAlign:'right',
    }
  };

@connect(mapStateToProps, {changeElement, removeElement, changeType})
export default class FormElement extends Component{
    constructor(props){
        super(props);
        this.state = {
            value:1,
            context:''
        }
    }          

    handleChange = (event, index, value) => {      
        this.setState({value});
        this.props.changeType(value,this.props.id);
    }   
    questionChange = (event) => {            
        this.props.changeElement(event.target.value,this.props.id)      
    }  
    
    
    render(){
        const {
            id, 
            element,    
            renderer            
        } = this.props;
        if(renderer){
            return(
                <div className="formElement">
                    <div style={styles.textRight}>
                        <IconButton onClick={()=>this.props.removeElement(id)}>
                            <NavigationClose />
                        </IconButton>
                    </div>
                    <div className="formElement-head">
                        <div className="question">
                            <TextField 
                                fullWidth={true}
                                floatingLabelText="Вопрос"
                                onChange={this.questionChange}
                            />
                        </div>
                        <div className="formChoose">
                            <SelectField
                                floatingLabelText="Выберите вариснт ответа:"
                                value={this.state.value}
                                onChange={this.handleChange}
                            >
                                <MenuItem value={1} primaryText="Текст (Строка)" />
                                <MenuItem value={2} primaryText="Один из списка" />
                                <MenuItem value={3} primaryText="Раскрывающийся список" />
                            </SelectField>        
                        </div>
                    </div>     
                    <InnerContent 
                        key={id}
                        id={id}
                        value={this.state.value}
                        onContext={this.contextChange}
                    /> 
                </div>
            );            
        }else{
            return(
                <div className="formElement">
                    <Result
                        key={id}
                        id={id}
                        element={element}
                    />
                </div>
            )
        }
        
    }
};
const mapStateToProps = state => ({});