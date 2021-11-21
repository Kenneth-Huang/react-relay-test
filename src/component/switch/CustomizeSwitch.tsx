import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { purple, green, red } from '@material-ui/core/colors';

export default function CustomizedSwitch() {
  const [state, setState] = React.useState({
	checkedA: true
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	setState({ ...state, [event.target.name]: event.target.checked });
  };

  const theme = createTheme({
	overrides: {
	  MuiSwitch: {  
		switchBase: {
		  // Controls default (unchecked) color for the thumb
			  color: red[500],
			  "&$disabled": {
				color:red[500],
			  },
			  "&$disabled + $track": {
				backgroundColor: "green",
				opacity: 0.5
			  }
		},
		colorSecondary: {
		  "&$checked": {
			// Controls checked color for the thumb
				color: green[500],
				
			},
		},
		track: {
		  // Controls default (unchecked) color for the track
		  opacity: 0.8,
		  backgroundColor: red[500],
		  "$checked$checked + &": {
			// Controls checked color for the track
			opacity: 0.7,
			backgroundColor: green[800]
		  },
		}
	  }
	  }
  });

  return (
	<ThemeProvider theme={theme}>
	  {/* <FormGroup>
		<FormControlLabel
		  control={
			<Switch
			  checked={state.checkedA}
			  onChange={handleChange}
			  name="checkedA"
			/>
		  }
		  label="Custom color"
		/>
		  </FormGroup> */}
		  <span>Off</span>
		  <Switch
			  checked={state.checkedA}
			  disableRipple
			  onChange={handleChange}
			// disabled={true}
		  name="checkedA"
		  />
		  <span>On</span>
	</ThemeProvider>
  );
}
