import Link from 'next/link';
import { Menu } from 'antd';
import { FormattedMessage } from 'react-intl';
const { Item } = Menu;

export default function Menus(props) {
	const handleClick = (e) => {
		props.setCurrentMenu(e.key);
	};

	const router = [
		{
			name: 'about',
			route: '/about',
		},
		{
			name: 'timeLine',
			route: '/timeLine',
		},
		{
			name: 'portfolios',
			route: '/portfolios',
		},
		{
			name: 'contact',
			route: '/contact',
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
