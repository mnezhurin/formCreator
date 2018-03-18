import React from 'react';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import FormHead from './FormHead.jsx';
import { connect } from 'react-redux';
import ElementsContainer from './ElementsContainer.jsx';

const styles = {
    container: {
        width: '70%',
        display: 'block',
        alignItems: 'center',
        padding: '8px 16px',
        margin:'auto',
        position:'relative'
    },
    title: {
        cursor: 'pointer',
      },
};

const App = React.createClass({

    getInitialState(){
        return{
            renderer:true
        }
    },

    handleClick() {
        this.setState({renderer:false});
    },    
    
    render(){
        const { 
            elements
         } = this.props;

        return(
            <MuiThemeProvider>
                <form action="POST">                           
                    <Paper style={styles.container}>                    
                        <FormHead onRender={this.handleClick}/>                   
                        <ElementsContainer elements={elements} render={this.state.renderer}/>
                    </Paper>  
                </form>         
            </MuiThemeProvider>
        );
    }
})

const mapStateToProps = state => ({elements: state});

export default connect(mapStateToProps, {})(App);