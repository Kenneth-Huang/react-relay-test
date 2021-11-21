import React from "react";
import Switch from "@material-ui/core/Switch";
import { makeStyles } from "@material-ui/core/styles";
import { purple, green, red } from '@material-ui/core/colors';

const useCheckedStyles = makeStyles({
	switchBase: {
			color: red[500],
			'&$checked': {
				color: green[500],
				'& + $track': {
				opacity: 1,
				backgroundColor: green[500],
				},
				"&$disabled + $track": {
					backgroundColor: "green",
					opacity: 0.5
				}
			},
			"&.MuiSwitch-colorSecondary.Mui-disabled + .MuiSwitch-track": {
				backgroundColor: green[300],
			}
				
		},
		track: {
		},
		checked: {},
});
  
const useUncheckedStyles = makeStyles({
	switchBase: {
			color: red[500],
			'&$checked': {
				color: green[500],
				'& + $track': {
				opacity: 1,
				backgroundColor: green[500],
				},
				"&$disabled + $track": {
					backgroundColor: "green",
					opacity: 0.5
				}
		},
		"&.MuiSwitch-colorSecondary.Mui-disabled": {
			color: red[500],
		},
		"&.MuiSwitch-colorSecondary.Mui-disabled + .MuiSwitch-track": {
			backgroundColor: red[800],
		}
				
		},
		track: {
		},
		checked: {},
  });

type DisableSwitchProps = {
	checked: boolean
}
const DisableSwitch: React.FC<DisableSwitchProps> = ({ checked }) => {
	const checkedClasses = useCheckedStyles()
	const uccheckedClasses = useUncheckedStyles()
	const classes = checked ? {
		switchBase: checkedClasses.switchBase,
		track: checkedClasses.track,
		checked: checkedClasses.checked
	} : {
		switchBase: uccheckedClasses.switchBase,
		track: uccheckedClasses.track,
		checked: uccheckedClasses.checked
		}
	return (<Switch
		// focusVisibleClassName={classes.focusVisible}
		disabled
		checked={checked}
		classes={classes}
	  />)
	
}

export default DisableSwitch