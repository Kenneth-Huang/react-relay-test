import { withStyles } from '@material-ui/core/styles';
import { purple, green, red } from '@material-ui/core/colors';
import { Switch } from '@material-ui/core'

const AntSwitch = withStyles((theme) => ({
	// root: {
	//   width: 28,
	//   height: 16,
	//   padding: 0,
	//   display: 'flex',
	// },
	switchBase: {
	//   padding: 2,
	//   color: theme.palette.grey[500],
		color: red[500],
		'&$checked': {
			// transform: 'translateX(12px)',
			// color: theme.palette.common.white,
			color: green[500],
			'& + $track': {
			opacity: 1,
			backgroundColor: green[500],
			// borderColor: theme.palette.primary.main,
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
	thumb: {
	//   width: 12,
	//   height: 12,
	  boxShadow: 'none',
	},
	track: {
	},
	checked: {},
}))(Switch);
  
export default AntSwitch