import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 150,
  },
};
export default class FormChoose extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {value: 1};
  }
 

   handleChange = (event, index, value) => {      
     this.setState({value});
     this.props.onChanged(this.state.value);
   }     
   

  render() {
    return (
      <div className="formChoose">
        <SelectField
          floatingLabelText="Множественный выбор:"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={1} primaryText="Текст (Строка)" />
          <MenuItem value={2} primaryText="Один из списка" />
          <MenuItem value={3} primaryText="Раскрывающийся список" />
        </SelectField>        
      </div>
    );
  }
}