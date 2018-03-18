import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const styles = {
    block: {
      maxWidth: 250,
    },
    h2: {
        fontSize:'22px',
        fontWeight: 'normal'
    },
    radio: {
        marginBottom: 16,
    },
    mt:{
        marginTop:10
    },
    subhead:{
        marginLeft:2,
        fontSize:'20px',
        fontWeight:'bold'
    }
  };

  export default class Result extends Component{
    state = {
        value: 1,
    };

    handleChange = (event, index, value) => this.setState({value});
    render(){
        const {
            element
        } = this.props;
        if(element.type == 1){
            return(
                <div className="result-item">
                    <h2 style={styles.h2}>
                    Вопрос: 
                    <span style={styles.subhead}>
                    {
                        element.text
                    } 
                    </span>
                                       
                    </h2>
                    <Divider/>
                    <TextField
                        style={styles.mt}
                        hintText="Ваш ответ:"
                    />
                </div>
            )
        }else if(element.type == 2){
            return(
                <div className="result-item">
                    <h2 style={styles.h2}>
                    Вопрос: 
                    <span style={styles.subhead}>
                    {
                        element.text
                    } 
                    </span>                   
                    </h2>
                    <Divider/>
                    <RadioButtonGroup name="shipSpeed" style={styles.mt} defaultSelected="not_light">
                        {
                            element.context.map(el =>
                                <RadioButton
                                    key={el.id}
                                    value={el.id}
                                    label={el.text}
                                    style={styles.radio}
                                />
                            )
                        }
                    </RadioButtonGroup>
                </div>
            )
        }else if(element.type == 3){
            return(
                <div className="result-item">
                    <h2 style={styles.h2}>
                    Вопрос: 
                    <span style={styles.subhead}>
                    {
                        element.text
                    } 
                    </span>                   
                    </h2>
                    <Divider/>
                    <SelectField
                        floatingLabelText="Множественный выбор:"
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                    {
                        element.context.map(el =>
                            <MenuItem 
                                key={el.id}
                                value={el.id} 
                                primaryText={el.text} 
                            />                           
                        )
                    }
                    </SelectField>
                </div>
            )
        }else{
            return(
                <div className="result-item">
                    Some error!    
                </div>
            )
        } 
    }
  }