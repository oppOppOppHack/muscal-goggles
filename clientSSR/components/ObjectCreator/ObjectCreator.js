import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';

class ObjectCreator extends Component
{
  /** MUST PASS IN PROPS.TEMPLATE OBJECT CONTAINING ATTRIBUTES AS ELEMENTS */
  state = {}
  
  static getDerivedStateFromProps(props, state)
  {
    if (state === null)
    {
      return null
    }
    else
    {
      if (Object.keys(state).length === 0)
      {
        return props.template;
      }
      else
      {
        return state;
      }
    }
  }

  render()
  {
    const {classes} = this.props;

    const getInputs = () =>
    {
      return Object.keys(this.state).map((key) =>
      {
        return (
          <div className = {classes.input} key = {key}>
            <TextField
              label = {key}
              id = {key}
              name = {key}
              value = {this.state.key}
              onChange = {(event) =>
              {
                let obj = JSON.parse(JSON.stringify(this.state));
                obj[key] = event.target.value;
                this.setState(obj);
              }}
            />
          </div>
        );
      });
    }

    return (
      <div className = {classes.app}>
        {getInputs()}
        <Button
          variant = 'contained'
          color = 'secondary'
          onClick = {(e) =>
          {
            e.preventDefault();
            console.log(this.state);
          }}
          className = 'button'
        >
          Create Object
        </Button>
      </div>
    );
  }
}

const styles = (theme) =>
{
  return ({
    app:
    {
      width: '60%',
      backgroundColor: 'lightblue',
      borderRadius: '2rem',
      margin: 'auto',
      marginTop: '1rem',
      padding: '1rem',
      textAlign: 'center'
    },
    input:
    {
      marginBottom: '1rem'
    }
  });
}

export default withStyles(styles)(ObjectCreator);