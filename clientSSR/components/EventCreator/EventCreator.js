import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core';

class EventCreator extends Component
{
  /** MUST PASS IN PROPS.TEMPLATE OBJECT CONTAINING ATTRIBUTES AS ELEMENTS */
  /** MUST PASS IN PROPS.OBJECTS ARRAY CONTAINING oBJECT NAMES AS ELEMENTS */

  state = {selectedObj: '', objArray: []}
  
  static getDerivedStateFromProps(props, state)
  {
    if (state === null)
    {
      return null
    }
    else
    {
      if (Object.keys(state).length === 2)
      {
        return {...props.template, ...state};
      }
      else
      {
        return state;
      }
      console.log(template)
    }
  }

  render()
  {
    const {classes} = this.props;

    const getInputs = () =>
    {
      console.log(this.props.template);
      return Object.keys(this.props.template).map((key) =>
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

    const getTypes = () =>
    {
      return this.props.objects.map((e) =>
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

    const getObjects = () =>
    {
      return this.state.objArray.map((temp) =>
      {
        const index = this.state.objArray.indexOf(temp);

        return (
          <div className = {classes.list} key = {index}>
            <p> {temp} </p>
            <Button
              variant = 'contained'
              color = 'secondary'
              onClick = {(e) =>
              {
                e.preventDefault();
                let tempArray = JSON.parse(JSON.stringify(this.state.objArray));
                tempArray.splice(index, 1);
                this.setState({objArray: tempArray});
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
      <div className = {classes.app}>
        {getInputs()}
        {getObjects()}
        <div className = {classes.objectAdder}>
          <TextField
            select
            label = 'object type'
            className = {classes.textField}
            value = {this.state.selectedObj}
            onChange = {(event) =>
            {
              this.setState({selectedObj: event.target.value});
            }}
            SelectProps = {{MenuProps: {className: classes.menu}}}
          >
            {getTypes()}
          </TextField>
          <div className = {classes.divider}/>
          <Button
            variant = 'contained'
            color = 'primary'
            onClick = {(e) =>
            {
              e.preventDefault();
              let temp = JSON.parse(JSON.stringify(this.state.objArray));
              temp.push(this.state.selectedObj);
              this.setState({objArray: temp});
            }}
          >
            Add Object
          </Button>
        </div>
        <Button
          variant = 'contained'
          color = 'secondary'
          onClick = {(e) =>
          {
            e.preventDefault();
            console.log(this.state);
          }}
        >
          Create Event
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
    objectAdder:
    {
      backgroundColor: 'lightgrey',
      borderRadius: '2rem',
      margin: 'auto',
      marginTop: '1rem',
      marginBottom: '1rem',
      padding: '1rem',
    },
    divider:
    {
      height: '1rem'
    },
    list:
    {
      backgroundColor: 'lightgreen',
      borderRadius: '2rem',
      margin: 'auto',
      marginBottom: '1rem',
      padding: '1rem',
      paddingTop: '0.5rem'
    }
  });
}

export default withStyles(styles)(EventCreator);