import Head from 'next/head';
import ContactContainer from '../components/ContactContainer';

const contactDetails = {
  title: 'Contact',
  subTitle: 'Contact Details',
  iframeUrl: 'https://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll=37.0625,-95.677068&amp;spn=56.506174,79.013672&amp;t=m&amp;z=4&amp;&output=embed',
  address: '3481 Melrose Place\nBeverly Hills, CA 90210',
  telno: '(123) 456-7890',
  email: 'name@example.com',
  timings: 'Monday - Friday: 9:00 AM to 5:00 PM'
}

export default function About({ details }) {
  return (
    <>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContactContainer details={details} />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      details: contactDetails
    }
  }
}