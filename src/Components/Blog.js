import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './Header';
import MainFeaturedProduct from './MainFeaturedProduct';
import FeaturedPost from './FeaturedPost';
import Album from './Album';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Home', url: '#' },
  { title: 'Products', url: '#' },
  { title: 'Testimonial', url: '#' },
  { title: 'Insight', url: '#' },
  { title: 'About Us', url: '#' },
  { title: 'Contacts', url: '#' },
];

const mainFeaturedPost = {
  title: 'New Collection',
  description:
    "",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'View Collection',
};

// const featuredPosts = [
//   {
//     title: 'Featured post',
//     date: 'Nov 12',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random',
//     imageText: 'Image Text',
//   },
//   {
//     title: 'Post title',
//     date: 'Nov 11',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random',
//     imageText: 'Image Text',
//   },
// ];

export default function Blog() {

  return (
    <React.Fragment>
      <CssBaseline />
      <>
        <Header title="E-Commerce" sections={sections} />
        <main>
          <MainFeaturedProduct post={mainFeaturedPost} />
          <FeaturedPost />
          <Album />
        </main>
      </>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </React.Fragment>
  );
}
