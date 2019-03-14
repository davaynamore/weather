import React from 'react';

const withSliderData = (View, data) => {
  return (props) => {
    return (
      <View {...props} data={data} />
    )
  }
}

export default withSliderData;