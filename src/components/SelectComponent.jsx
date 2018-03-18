import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import './SelectComponent.css';

export default class SelectComponent extends React.Component{
    constructor(props){
        super(props);  
    }   
    handleDelete(id){
        this.props.fieldDelete(id);
    }   
    textChange(e,id){
        this.props.selectText(e.target.value,id);
    } 

    render(){ 
        const {selects, fieldDelete} = this.props;      
            return(
            <div>
                {
                    selects.map(select => 
                     <div className="field" key={ select.id }>                        
                        <TextField
                            hintText="Имя поля"
                            value={ select.text }
                            onChange={(val)=> this.textChange(val, select.id)}
                        />  
                        <div className="close">
                            <IconButton onClick={()=>this.handleDelete(select.id)}>
                                <NavigationClose />
                            </IconButton>
                        </div>  
                    </div>    
                    )
                }       
            </div>
            )
    }
}