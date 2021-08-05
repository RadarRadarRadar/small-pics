import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles({
  root: {
    maxWidth: 2000,
    width: 1000,
  },
  media: {
    height: 500,
  },
});

export default function MediaCard(img) {
  const classes = useStyles();
  console.log(img.data);

  return (
    <div>
      <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={img.data}
            />
      </Card>
    </div>
  );
}
