import React from 'react';
import FormElement from './FormElement.jsx';

export default class ElementsContainer extends React.Component{ 
    render(){
        const {
            elements,
            render
        } = this.props;

        return(            
            <div className="ElementsContainer">
                {                    
                    elements.map( element =>
                        <FormElement
                            key = {element.id}
                            id = {element.id}
                            element = {element}                           
                            onChanged = {this.props.changeElement}
                            renderer = {render}
                        />
                    )                 
                }
            </div>
             
        )      
    }
};
