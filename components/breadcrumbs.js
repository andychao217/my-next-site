import { Breadcrumb } from 'antd';
const { Item } = Breadcrumb;

export default function Breadcrumbs() {
	return (
		<Breadcrumb style={{ margin: '16px 0' }}>
			<Item>Home</Item>
			<Item>List</Item>
			<Item>App</Item>
		</Breadcrumb>
	);
}
