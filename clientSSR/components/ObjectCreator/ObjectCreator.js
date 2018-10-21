import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core';

class ObjectCreator extends Component
{
  /** MUST PASS IN PROPS.TEMPLATE OBJECT CONTAINING ATTRIBUTES AS ELEMENTS */
  state = {
    templates: [],
    fields: [],
    selectedTemplate: ''
  }
  /*
  static getDerivedStateFromProps(props, state)
  {
    if (state === null)
    {
      return null
    }
    else
    {
      if (Object.keys(state).length === 0 && props.template)
      {
        return props.template;
      }
      else
      {
        return state;
      }
    }
    
  }
*/
  componentWillReceiveProps(props){
    //console.log(props);
    if(props.templates){
      const fields = props.templates.map(el=>{
        let fieldObj = {
          template: el.name
        }
        el.fields.forEach(element => {
          fieldObj = {
            ...fieldObj,
            [element.name]: null
          }
        });
        return fieldObj;
      })
      this.setState({
        ...this.state,
        templates: props.templates,
        fields
      })
    }
  }
  render()
  {
    //console.log(this.state);
    const {classes} = this.props;

    const getInputs = () =>
    {
      if(this.state.selectedTemplate=='')
        return null;
      const element = this.state.fields.find(el=>(el.template===this.state.selectedTemplate));
      return Object.keys(element).map((el) =>
      {
        if(el == 'template')
          return null;
        return (
          <div className = {classes.input} key = {el+this.state.selectedTemplate}>
            <TextField
              label = {el}
              id = {el+this.state.selectedTemplate}
              name = {el+this.state.selectedTemplate}
              value = {element[el]}
              onChange = {(event) =>
              {
                let obj = JSON.parse(JSON.stringify(this.state.fields));
                let index = obj.findIndex(templateObj=>{
                  return templateObj.template == this.state.selectedTemplate;
                })
                obj[index][el] = event.target.value;
                this.setState({fields: obj});
              }}
            />
          </div>
        );
      });
    }
    const getTemplateOptions = () =>
    {
      return this.state.templates.map((e) =>
      {
        return (
          <MenuItem
            key = {e.name}
            value = {e.name}
            className = {classes.menuItem}
          >
            {e.name}
          </MenuItem>
        );
      });
    }
    return (
      <div className = {classes.app}>
        <TextField
            select
            label = 'template type'
            className = {classes.textField}
            value = {this.state.selectedTemplate}
            onChange = {(event) =>
            {
              this.setState({selectedTemplate: event.target.value});
            }}
            SelectProps = {{MenuProps: {className: classes.menu}}}
          >
            {getTemplateOptions()}
          </TextField>
        {getInputs()}
        <div className = {classes.divider}/>
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
    },
    textField:
    {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: '10rem',
    },
    divider: {height: '1rem'}
  });
}

export default withStyles(styles)(ObjectCreator);