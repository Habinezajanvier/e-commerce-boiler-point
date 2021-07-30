import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Carousel from '@brainhubeu/react-carousel';

const useStyles = makeStyles({
  card: {
    position: "relative",
    maxHeight: "22rem"
  },
  cardDetails: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, .8)",
    color: "#fff"
  },
  cardMedia: {
    objectFit: 'cover'
  },
});

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card ',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card ',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Second Post title',
    date: 'Nov 11',
    description:
      'This is a wider card ',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];

export default function FeaturedPost(props) {
  const classes = useStyles();
  // const { post } = props;

  return (
    <Carousel 
        autoPlay={1000}
        // arrows
        infinite
        slidesPerPage={1}
        slidesPerScroll={1}
      >
      {featuredPosts.map((post) => (
        <div className={classes.card}>
          <div className={classes.cardDetails}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.description}
            </Typography> 
          </div>
          <img className={classes.cardMedia} src={post.image} alt={post.imageTitle} />
        </div>
      ))}
    </Carousel>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};