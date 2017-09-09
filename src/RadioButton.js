import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 0,
    marginLeft : 0,
    marinRight : 15
  },
  divBlock:{
    marginLeft : 0,
    marinRight : 15
  }
};

const RadioButtons = () => (
  <div style={styles.divBlock} >
    <RadioButtonGroup name="Gender" labelPosition="left" style={styles.divBlock} >
      <RadioButton
        value="male"
        label="Male"
        style={styles.radioButton}
      />
      <RadioButton
        value="female"
        label="Female"
        style={styles.radioButton}
      />
    </RadioButtonGroup>
  </div>
);

export default RadioButtons;