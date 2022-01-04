import { Breadcrumb } from 'antd';
import { FormattedMessage } from 'react-intl';
const { Item } = Breadcrumb;

export default function Breadcrumbs(props) {
	return (
		<Breadcrumb style={{ margin: '16px 0' }}>
			<Item>
				<FormattedMessage id={props.currentMenu} />
			</Item>
		</Breadcrumb>
	);
}
