import Head from 'next/head';
import AboutContainer from '../components/AboutContainer';

const aboutDetails = {
  title: 'About',
  subTitle: 'About Modern Business',
  imageUrl: 'http://placehold.it/750x450',
  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat.\nLorem ipsum dolor sit amet, consectetur adipisicing elit.Saepe, magni, aperiam vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem corporis eveniet.Odit, temporibus reprehenderit dolorum!\nLorem ipsum dolor sit amet, consectetur adipisicing elit.Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis?'
}

export default function About({ details }) {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AboutContainer details={details} />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      details: aboutDetails
    }
  }
}