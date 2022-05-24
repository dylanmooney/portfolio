import { GuidelineGrid } from './GuideLineGrid';
import { Navigation } from './Navigation';
import { SocialRibbon } from './SocialRibbon';

export const Layout = ({ children }) => (
	<>
		<GuidelineGrid />
		<Navigation />
		<SocialRibbon />
		{children}
	</>
);

export default Layout;
