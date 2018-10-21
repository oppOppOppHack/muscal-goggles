import React, {Component} from 'react';
import { withStyles } from '@material-ui/core';

class DataVisual extends Component
{
  render()
  {
    const {classes} = this.props;

    const getData = () =>
    {
      const array = this.props.data;
      return array.map((e) =>
      {
        console.log(e);
        return (
          <div className = {classes.data} key = {e.dataPoints}>
            <h2> {e.field} </h2>
            <p> {e.dataPoints.map(el=>el.data).join(', ')} </p>
          </div>
        );
      });
    }

    return (
      <div className = {classes.app}>
        {getData()}
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
      backgroundColor: 'lightgrey',
      borderRadius: '2rem',
      margin: 'auto',
      marginTop: '1rem',
      padding: '1rem',
      textAlign: 'center'
    },
    data:
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

export default withStyles(styles)(DataVisual);