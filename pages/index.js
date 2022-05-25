import Head from 'next/head';
import Layout from '../components/Layout';
import { Hero } from '../features/Hero';
import { About } from '../features/About';
import { Projects } from '../features/Projects';
import { Contact } from '../features/Contact';

const Home = () => (
	<Layout>
		<Head>
			<title>Dylan Mooney</title>
			<meta
				name='description'
				content='Web developer with a passion for creating seamless, compelling user experiences. I take great care to understand my clients&#39; needs and work closely with them to create a solution that works for them and their target audience.'
			/>
			<link rel='icon' href='/logo.ico' />
		</Head>
		<Hero />
		<About />
		<Projects />
		<Contact />
	</Layout>
);

export default Home;
