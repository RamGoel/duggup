import HomeSvg from '../../lib/assets/icons/home.svg';
import LearnSvg from '../../lib/assets/icons/learn.svg';
import ExploreSvg from '../../lib/assets/icons/explore.svg';
import PostSvg from '../../lib/assets/icons/post.svg';

export interface LinkConfigType {
	name: string;
	icon: string;
	path: string;
}
export const headerLinksConfig: LinkConfigType[] = [
	{
		name: 'Home',
		icon: HomeSvg,
		path: '/'
	},
	{
		name: 'Explore',
		icon: ExploreSvg,
		path: '/explore'
	},
	{
		name: 'Learn',
		icon: LearnSvg,
		path: '/'
	},
	{
		name: 'Post',
		icon: PostSvg,
		path: '/?action=post'
	}
];
