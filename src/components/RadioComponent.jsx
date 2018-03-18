import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import './Radiocomponent.css';

export default class RadioComponent extends React.Component{
    constructor(props){
        super(props);        
    }   
    handleDelete(id){
        this.props.fieldDelete(id);

    }    
    textChange(e,id){
        this.props.radioText(e.target.value,id);
    } 

    render(){ 
        const {components, fieldDelete} = this.props;      
            return(
            <div>
                {
                    components.map(component => 
                     <div className="field" key={ component.id }>
                        <div className="icon"></div>
                        <TextField
                            hintText="Имя поля"
                            value={ component.text }
                            onChange={(val)=> this.textChange(val, component.id)}
                        
                        />  
                        <div className="close">
                            <IconButton onClick={()=>this.handleDelete(component.id)}>
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