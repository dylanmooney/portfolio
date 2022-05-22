import Head from 'next/head';
import Layout from '../components/Layout';
import { AboutMe } from '../features/AboutMe';
import { Contact } from '../features/Contact';
import { Hero } from '../features/Hero';
import { Projects } from '../features/Projects';

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Dylan Mooney</title>
				<meta name='description' content='My portfolio of work' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Hero />
			<AboutMe />
			<Projects />
			<Contact />
		</Layout>
	);
}
