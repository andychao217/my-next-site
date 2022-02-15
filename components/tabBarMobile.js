import React, { Fragment, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useRouter } from 'next/router';
import { TabBar } from 'antd-mobile';
import { MailOutline, PicturesOutline, UnorderedListOutline, UserOutline } from 'antd-mobile-icons';

export default function TabBarMobile(props) {
	const [activeKey, setActiveKey] = useState('about');
	const router = useRouter();
	const tabs = [
		{
			key: 'about',
			title: <FormattedMessage id={'about'} />,
			icon: <UserOutline />,
		},
		{
			key: 'timeLine',
			title: <FormattedMessage id={'timeLine'} />,
			icon: <UnorderedListOutline />,
		},
		{
			key: 'portfolios',
			title: <FormattedMessage id={'portfolios'} />,
			icon: <PicturesOutline />,
		},
		{
			key: 'contact',
			title: <FormattedMessage id={'contact'} />,
			icon: <MailOutline />,
		},
	];
	return (
		<Fragment>
			<div style={{ position: 'fixed', bottom: 0, width: '100vw', borderTop: '1px solid lightgray' }}>
				<TabBar
					activeKey={activeKey}
					onChange={(value) => {
						router.push(value);
						setActiveKey(value);
						props.setCurrentMenu(value);
					}}
				>
					{tabs.map((item) => (
						<TabBar.Item key={item.key} icon={item.icon} title={item.title} />
					))}
				</TabBar>
			</div>
		</Fragment>
	);
}
