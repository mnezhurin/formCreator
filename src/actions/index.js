
export const addElement = (text) => ({
    text : '',
    type: 'ADD_ELEMENT',
    context: '',
    id:Date.now(), 
    el_type: 1
});

export const removeElement = id => ({
    type: 'REMOVE_ELEMENT',
    id 
});

export const changeType = (value,id) => ({
    type:'CHANGE_TYPE',
    id,
    value
})

export const changeElement = (text, id) => ({
    type:'CHANGE_ELEMENT',
    id,
    text
})

export const changeContext = (context, id) => ({
    type:'CHANGE_CONTEXT',
    id,
    context
})
