import { Navigation } from './Navigation';
import { SocialRibbon } from './SocialRibbon';

export const Layout = ({ children }) => (
	<>
		<Navigation />
		<SocialRibbon />
		{children}
	</>
);

export default Layout;
