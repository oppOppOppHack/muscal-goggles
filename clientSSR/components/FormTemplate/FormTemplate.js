import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core';

class FormTemplate extends Component
{
  /**must pass in props.attributes as an array of strings */
  state = {
    attribute1: '', attribute2: '', type1: '', type2: '', option1: '', option2: ''
  }

  render()
  {
    const {classes} = this.props;

    const getTypes = () =>
    {
      const array = ['number', 'string', 'date', 'object'];
      return array.map((e) =>
      {
        return (
          <MenuItem
            key = {e}
            value = {e}
            className = {classes.menuItem}
          >
            {e}
          </MenuItem>
        );
      });
    }

    const getMetric = () =>
    {
      const array = ['min', 'max'];
      return array.map((e) =>
      {
        return (
          <MenuItem
            key = {e}
            value = {e}
            className = {classes.menuItem}
          >
            {e}
          </MenuItem>
        );
      });
    }

    const getAttributes = () =>
    {
      let array = this.props.attributes;
      return array.map((e) =>
      {
        return (
          <MenuItem
            key = {e}
            value = {e}
            className = {classes.menuItem}
          >
            {e}
          </MenuItem>
        );
      });
    }

    return (
      <div className = {classes.app}>
        <div className = {classes.form}>
          <Typography variant="h5" component="h3">
            X variable
          </Typography>
          <TextField
            select
            label = 'attribute 1'
            className = {classes.textField}
            value = {this.state.attribute1}
            onChange = {(event) =>
            {
              this.setState({attribute1: event.target.value});
            }}
            SelectProps = {{MenuProps: {className: classes.menu}}}
          >
            {getAttributes()}
          </TextField>
          <TextField
            select
            label = 'attribute type'
            className = {classes.textField}
            value = {this.state.type1}
            onChange = {(event) =>
            {
              this.setState({type1: event.target.value});
            }}
            SelectProps = {{MenuProps: {className: classes.menu}}}
          >
            {getTypes()}
          </TextField>
          <TextField
            select
            label = 'metric option'
            className = {classes.textField}
            value = {this.state.option1}
            onChange = {(event) =>
            {
              this.setState({option1: event.target.value});
            }}
            SelectProps = {{MenuProps: {className: classes.menu}}}
          >
            {getMetric()}
          </TextField>
        </div>
        <div className = {classes.form}>
          <Typography variant="h5" component="h3">
            Y variable
          </Typography>
          <TextField
            select
            label = 'attribute 2'
            className = {classes.textField}
            value = {this.state.attribute2}
            onChange = {(event) =>
            {
              this.setState({attribute2: event.target.value});
            }}
            SelectProps = {{MenuProps: {className: classes.menu}}}
          >
            {getAttributes()}
          </TextField>
          <TextField
            select
            label = 'attribute type'
            className = {classes.textField}
            value = {this.state.type2}
            onChange = {(event) =>
            {
              this.setState({type2: event.target.value});
            }}
            SelectProps = {{MenuProps: {className: classes.menu}}}
          >
            {getTypes()}
          </TextField>
          <TextField
            select
            label = 'metric option'
            className = {classes.textField}
            value = {this.state.option1}
            onChange = {(event) =>
            {
              this.setState({option1: event.target.value});
            }}
            SelectProps = {{MenuProps: {className: classes.menu}}}
          >
            {getMetric()}
          </TextField>
        </div>
        <Button
          variant = 'contained'
          color = 'secondary'
          onClick = {(e) =>
          {
            e.preventDefault();
            alert('submitted');
          }}
          className = 'button'
        >
          Create Template
        </Button>
      </div>
    );
  }
}

const styles = (theme) =>
{
  return ({
    textField:
    {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: '10rem',
    },
    form:
    {
      backgroundColor: 'lightgrey',
      borderRadius: '2rem',
      margin: 'auto',
      marginTop: '1rem',
      marginBottom: '1rem',
      padding: '1rem',
    },
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
  });
}

export default withStyles(styles)(FormTemplate);