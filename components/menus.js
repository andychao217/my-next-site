import Link from 'next/link';
import { Menu } from 'antd';
import { FormattedMessage } from 'react-intl';
const { Item } = Menu;

export default function Menus(props) {
	const handleClick = (e) => {
		props.setCurrentMenu(e.key);
	};

	return (
		<Menu onClick={handleClick} theme='dark' mode='horizontal' defaultSelectedKeys={['index']}>
			<Item key='index'>
				<Link href='/'>
					<a>
						<FormattedMessage id='index' />
					</a>
				</Link>
			</Item>
			<Item key='about'>
				<Link href='/about'>
					<a>
						<FormattedMessage id='about' />
					</a>
				</Link>
			</Item>
			<Item key='other'>
				<Link href='/'>
					<a>
						<FormattedMessage id='other' />
					</a>
				</Link>
			</Item>
		</Menu>
	);
}
