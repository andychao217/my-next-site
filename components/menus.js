import Link from 'next/link';
import { Menu } from 'antd';
import { FormattedMessage } from 'react-intl';
const { Item } = Menu;

export default function Menus(props) {
	return (
		<Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
			<Item key='1'>
				<Link href='/'>
					<a>
						<FormattedMessage id='hello' />
					</a>
				</Link>
			</Item>
			<Item key='2'>
				<Link href='/about'>
					<a>about</a>
				</Link>
			</Item>
			<Item key='3'>nav 3</Item>
		</Menu>
	);
}
