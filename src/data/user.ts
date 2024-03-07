import ProfileIcon from '../lib/assets/profile_icon.png';

export const userData = {
	name: 'Ram Goel',
	image: ProfileIcon,
	description:
		'Frontend Engineer Intern at Animall - India #1 Cattle Trading Platform. Ex- Mobile Developer Intern @Surplus . I love building cool stuff using code over weekends. Check my projects https://ramgoel.me/archive ',
	company: [
		{
			company_name: 'Animall',
			logo: 'https://media.licdn.com/dms/image/C4D0BAQFsgKS6HiPGnw/company-logo_200_200/0/1655973903347/animall_in_logo?e=2147483647&v=beta&t=Rwt2fBmQzNQHFiUIrGhEwKbX-hdHFosVju8t8N2mt-Y',
			role: 'Frontend Engineer Intern'
		}
	],
	website: 'https://ramgoel.me/',
	isFollowing: true, // Extract request token, and check if user followed
	timeline: [
		{
			date: 'Feb 2024',
			type: 'post',
			events: [
				{
					image:
						'https://ramgoel.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdumbel.185e4132.png&w=640&q=75',
					description:
						'Dumbel, A social platform for developers, where they can explore other developers profile, ask questions, etc. #35users '
				},
				{
					image: 'https://i.ibb.co/ySngsVn/image.png',
					description: `EcoEcho, A gamification based application which assigns nature friendly tasks to users which help them reduce their carbon footprint`
				}
			]
		},
		{
			date: 'Nov 2023',
			type: 'position',
			position: {
				company_name: 'Animall',
				logo: 'https://media.licdn.com/dms/image/C4D0BAQFsgKS6HiPGnw/company-logo_200_200/0/1655973903347/animall_in_logo?e=2147483647&v=beta&t=Rwt2fBmQzNQHFiUIrGhEwKbX-hdHFosVju8t8N2mt-Y',
				role: 'Frontend Engineer Intern',
				type: 'Internship',
				workType: 'Remote',
				location: 'Gurugram, HR, India',
				joined: 'Dec 2023'
			}
		},
		{
			date: 'Oct 2023',
			type: 'post',
			events: [
				{
					image:
						'https://ramgoel.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcodechat.62acfd4c.png&w=640&q=75',
					description:
						'CodeChat, A Web based application which allows users to create code rooms and code together, with support of some cool features.'
				},
				{
					image:
						'https://media.licdn.com/dms/image/D4D22AQFcC8Wp4PNwkA/feedshare-shrink_800/0/1693414819777?e=1712793600&v=beta&t=rJpl6Zq8DOaJyfD-fjCmZjdnqGVWOtkAg4LCPnhvoMc',
					description: `Surplus app helps you manage expenses easily. I built the Bill Payments and Subscription tracking feature in the app.`
				}
			]
		},
		{
			date: 'Sep 2022',
			type: 'position',
			position: {
				company_name: 'Surplus',
				logo: 'https://pbs.twimg.com/profile_images/1423647634997215236/0zWAbbj2_400x400.jpg',
				role: 'React Native Intern',
				type: 'Internship',
				location: 'Mumbai, MH, India',
				joined: 'July 2023'
			}
		}
	]
};
