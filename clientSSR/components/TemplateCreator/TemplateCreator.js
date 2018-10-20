import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core';
import './TemplateCreator.css';
class TemplateCreator extends Component
{
  state = {
    name: '',
    type2: '',
    fields: [],
    attributeName: '',
    type: '',
  }
  onSubmitHandler(){
    const {name, fields, type} = this.state
    const templateForm = {name, fields, type};
    this.props.submit(templateForm);
  }
  render()
  {
    const {classes} = this.props;

    const gettypes = () =>
    {
      const array = ['number', 'string', 'date'];
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

    const getTemplateOptions = () =>
    {
      const array = ['event', 'object'];
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
      return this.state.fields.map((temp) =>
      {
        const index = this.state.fields.indexOf(temp);

        return (
          <div className = 'attribute' key = {index}>
            <p> {'NAME: ' + temp[0]} <br/> {'TYPE: ' + temp[1]} </p>
            <Button
              variant = 'contained'
              color = 'primary'
              onClick = {(e) =>
              {
                e.preventDefault();
                let tempArray = JSON.parse(JSON.stringify(this.state.fields));
                tempArray.splice(index, 1);
                this.setState({fields: tempArray});
              }}
              className = 'button'
            >
              Delete Attribute
            </Button>
          </div>
        );
      });
    }

    return (
      <div className = 'App'>
        <p className = 'title'> Template Creator </p>
        <div className = 'form'>
          <TextField
            label = 'template name'
            id = 'name'
            name = 'name'
            value = {this.state.name}
            onChange = {(event) =>
            {
              this.setState({name: event.target.value});
            }}
          />
          <TextField
            select
            label = 'template type'
            className = {classes.textField}
            value = {this.state.type}
            onChange = {(event) =>
            {
              this.setState({type: event.target.value});
            }}
            SelectProps = {{MenuProps: {className: classes.menu}}}
          >
            {getTemplateOptions()}
          </TextField>
          <div className = 'divider'/>
          {this.state.fields.length === 0 ? null : getAttributes()}
        </div>
        <div className = 'divider'/>
        <div className = 'attributeCreator'>
          <TextField
            label = 'attribute data'
            id = 'attributeName'
            name = 'attributeName'
            value = {this.state.attributeName}
            onChange = {(event) =>
            {
              this.setState({attributeName: event.target.value});
            }}
          />
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
            {gettypes()}
          </TextField>
          <div className = 'divider'/>
          <Button
            variant = 'contained'
            color = 'primary'
            onClick = {(e) =>
            {
              e.preventDefault();
              const temp = {name: this.state.attributeName, type: this.state.type2};
              let tempArray = JSON.parse(JSON.stringify(this.state.fields));
              tempArray.push(temp);
              this.setState({fields: tempArray});
            }}
            className = 'button'
          >
            Add Attribute
          </Button>
        </div>
        <div className = 'divider'/>
        <Button
          variant = 'contained'
          color = 'secondary'
          onClick = {(e) =>
          {
            e.preventDefault();
            console.log(this.state);
            this.onSubmitHandler();
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
  return (
  {
    textField:
    {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: '8rem'
    },
    menuItem:
    {
      height: '0.5rem'
    }
  });
}

export default withStyles(styles)(TemplateCreator);