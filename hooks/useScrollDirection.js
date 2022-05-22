import { useRef, useEffect, useState } from 'react';
import { throttle } from 'throttle-debounce';

export const useScrollDirection = (wait = 300, threshold = 50) => {
	const scrollY = useRef(0);
	const [direction, setDirection] = useState(null);

	useEffect(() => {
		const handleScroll = throttle(wait, () => {
			// If window has not been scrolled or is in initial position set to null
			if (window.scrollY === 0) {
				return setDirection(null);
			}

			// Check if old scroll position is less than current scroll position
			if (scrollY.current < window.scrollY - threshold) {
				setDirection('down');
			} else if (scrollY.current > window.scrollY + threshold) {
				setDirection('up');
			}

			scrollY.current = window.scrollY;
		});

		document.addEventListener('scroll', handleScroll, { passive: true });

		return () => document.removeEventListener('scroll', handleScroll);
	});

	return direction;
};
