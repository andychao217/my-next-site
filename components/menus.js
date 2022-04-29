import Link from 'next/link';
import { Menu } from 'antd';
import { FormattedMessage } from 'react-intl';
import { MailOutline, PicturesOutline, UnorderedListOutline, UserOutline } from 'antd-mobile-icons';
const { Item } = Menu;

export default function Menus(props) {
	const handleClick = (e) => {
		props.setCurrentMenu(e.key);
	};

	const router = [
		{
			name: 'about',
			route: '/about',
			icon: <UserOutline />,
		},
		{
			name: 'timeLine',
			route: '/timeLine',
			icon: <UnorderedListOutline />,
		},
		{
			name: 'portfolios',
			route: '/portfolios',
			icon: <PicturesOutline />,
		},
		{
			name: 'contact',
			route: '/contact',
			icon: <MailOutline />,
		},
	];
	return (
		<Menu
			onClick={handleClick}
			theme={props.currentLocale === 'en-US' ? 'dark' : 'light'}
			mode='horizontal'
			defaultSelectedKeys={['about']}
			color={props.currentLocale === 'en-US' ? 'primary' : 'danger'}
		>
			{router.map((item) => {
				return (
					<Item key={item.name}>
						<Link href={item.route}>
							<a>
								<FormattedMessage id={item.name} />
							</a>
						</Link>
					</Item>
				);
			})}
		</Menu>
	);
}
