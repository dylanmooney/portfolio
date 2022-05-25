import { scroller } from 'react-scroll';

export const useScroll = () => {
	const to = (to, options) => {
		scroller.scrollTo(to, {
			duration: 1500,
			smooth: true,
			...options,
		});
	};

	return { to };
};
