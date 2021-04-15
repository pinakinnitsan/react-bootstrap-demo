import Head from 'next/head';
import CustomCarousel from '../components/CustomCarousel';

const slides = [
  {
    id: 1,
    imageUrl: 'http://placehold.it/1900x1080',
    title: 'First Slide',
    description: 'This is a description for the first slide.'
  },
  {
    id: 2,
    imageUrl: 'http://placehold.it/1900x1080',
    title: 'Second Slide',
    description: 'This is a description for the second slide.'
  },
  {
    id: 3,
    imageUrl: 'http://placehold.it/1900x1080',
    title: 'Third Slide',
    description: 'This is a description for the third slide.'
  },
];

export default function Home(props) {
  return (
    <>
      <Head>
        <title>React Bootstrap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <CustomCarousel slides={props.slides} />
      </header>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      slides
    }
  }
}
