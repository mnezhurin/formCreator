function element(state, action){
    switch(action.type){        
        case 'ADD_ELEMENT':{
            return{
                id:action.id,
                text:action.text,
                context:action.context,
                type:action.el_type
            }
        }
        case 'CHANGE_ELEMENT': {
            if(state.id != action.id){
                return state;
            }
            return {
                ...state,
                text: action.text
            }
        }
        case 'CHANGE_TYPE':{
            if(state.id != action.id){
                return state;
            }
            return {
                ...state,
                type: action.value
            }
        }
        case 'CHANGE_CONTEXT': {
            if(state.id != action.id){
                return state;
            }
            return {
                ...state,
                context: action.context
            }
        }
        default:{
            return state;
        }
    }
}

export default function elements(state = [], action){
    switch (action.type){        
        case 'ADD_ELEMENT':{
            return [
                ...state ,
                element(undefined,action)                               
            ] 
        }
        case 'CHANGE_ELEMENT': {
            return state.map( item => element(item, action));
        }
        case 'CHANGE_TYPE': {
            return state.map( item => element(item, action));
        }
        case 'CHANGE_CONTEXT': {
            return state.map( item => element(item, action));
        }

        
        case 'REMOVE_ELEMENT': {
            return state = state.filter(element => element.id != action.id);            
        }      
                
        default:{
            return state;
        }
    }
}