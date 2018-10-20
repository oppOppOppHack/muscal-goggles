import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';

class ObjectCreator extends Component
{
  state = {
    attributes: {}
  }

  render()
  {
    return (
      <TextField
        label = 'Park Name'
        className = {classes.parkName}
        id = 'parkName'
        name = 'parkName'
        value = {this.getState('parkName')}
        error = {this.state.parkNameError}
        helperText = {this.state.parkNameError ? 'missing data' : null}
        onChange = {(event) =>
        {
          this.resetError('parkName');
          this.handleChange('parkName', event.target.value);
        }}
      />
    );
  }
}

export default ObjectCreator;