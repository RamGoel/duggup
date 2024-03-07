import ProfileIcon from '../lib/assets/profile_icon.png';
import CompanyLogo from '../lib/assets/app_icon.png';

export const userData = {
	name: 'Krishna Kiran',
	image: ProfileIcon,
	description:
		'Co-Founder and CEO at Duggup - Social network for people in tech. Ex-Amazon Head of Engineering. I write hot-takes on building a business, shipping delightful products and accelerating product and career growth.',
	company: [
		{
			name: 'Duggup',
			logo: CompanyLogo,
			role: 'Co-Founder and CEO'
		}
	],
	website: 'https://ramgoel.me/',
	isFollowing: true // Extract request token, and check if user followed
};
