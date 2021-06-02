import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

}));

function Work (props)  {
	const theme = useTheme();
	const classes = useStyles(theme);

	return (
		<div style={{ marginTop: 20, padding: 30 }}>
			Here are some examples of my work.
		</div>
	);
}
  
export default Work