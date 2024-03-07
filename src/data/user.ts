import ProfileIcon from '../lib/assets/profile_icon.png';
import Company1Logo from '../lib/assets/app_icon.png';
import Company2Logo from '../lib/assets/betterup.png';

export const userData = {
	name: 'Krishna Kiran',
	image: ProfileIcon,
	description:
		'Co-Founder and CEO at Duggup - Social network for people in tech. Ex-Amazon Head of Engineering. I write hot-takes on building a business, shipping delightful products and accelerating product and career growth.',
	company: [
		{
			company_name: 'Duggup',
			logo: Company1Logo,
			role: 'Co-Founder and CEO'
		}
	],
	website: 'https://ramgoel.me/',
	isFollowing: true, // Extract request token, and check if user followed
	timeline: [
		{
			date: 'Dec 2023',
			type: 'post',
			events: [
				{
					image: 'https://wallpapers.com/images/hd/bill-gates-smile-vaga2ec95vycqimt.jpg',
					description: 'No amount of technology can convert a bad story into a good story.'
				},
				{
					image: 'https://wallpapers.com/images/hd/bill-gates-smile-vaga2ec95vycqimt.jpg',
					description: `Most people don't have original ideas. Here is how Sam Altman pushes himself to have unpopular ideas.`
				}
			]
		},
		{
			date: 'Nov 2023',
			type: 'position',
			position: {
				company_name: 'Duggup',
				logo: Company1Logo,
				role: 'Co-Founder and CEO',
				type: 'Full-time',
				workType: 'Remote',
				location: 'San Francisco Bay Area',
				joined: 'Nov 2023'
			}
		},
		{
			date: 'Oct 2023',
			type: 'post',
			events: [
				{
					image: 'https://wallpapers.com/images/hd/bill-gates-smile-vaga2ec95vycqimt.jpg',
					description: 'No amount of technology can convert a bad story into a good story.'
				},
				{
					image: 'https://wallpapers.com/images/hd/bill-gates-smile-vaga2ec95vycqimt.jpg',
					description: `Most people don't have original ideas. Here is how Sam Altman pushes himself to have unpopular ideas.`
				}
			]
		},
		{
			date: 'Sep 2022',
			type: 'position',
			position: {
				company_name: 'BetterUp',
				logo: Company2Logo,
				role: 'VP Engineering',
				type: 'Full-time',
				location: 'San Francisco Bay Area',
				joined: 'Sep 2023'
			}
		}
	]
};
