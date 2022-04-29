import React, { Fragment, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Dropdown, Button, Menu } from 'antd';
import { ActionSheet, Button as ButtonMobile } from 'antd-mobile';
import { DownOutlined } from '@ant-design/icons';

export default function LanguageChanger(props) {
	const [actionsVisible, setActionsVisible] = useState(false);

	function handleMenuClick(e) {
		const newLocale = e.key;
		props.setCurrentLocale(newLocale);
	}

	const lanOptions = [
		{ value: 'zh-CN', label: '你好', color: '#ff3141', abbr: 'CN' },
		{ value: 'en-US', label: 'Hello', color: '#1677ff', abbr: 'En' },
	];
	const actions = lanOptions.map((item) => {
		return {
			key: item.value,
			text: (
				<span>
					<span key={item.value} style={{ color: item.color, fontSize: '12px' }}>
						{item.abbr}
					</span>
				</span>
			),
		};
	});

	const menu = () => {
		const menus = lanOptions.map((item) => {
			return (
				<Menu.Item key={item.value} icon={<span style={{ color: item.color, fontSize: '12px' }}>{item.abbr}</span>}>
					{item.label}
				</Menu.Item>
			);
		});
		return <Menu onClick={handleMenuClick}>{menus}</Menu>;
	};

	return props.isMobilePlatform ? (
		<Fragment>
			<ButtonMobile fill='none' color={props.currentLocale === 'en-US' ? 'primary' : 'danger'} onClick={() => setActionsVisible(true)}>
				<FormattedMessage id='hello' />
			</ButtonMobile>
			<ActionSheet
				visible={actionsVisible}
				actions={actions}
				onAction={(action) => {
					props.setCurrentLocale(action.key);
					setActionsVisible(false);
				}}
				onClose={() => setActionsVisible(false)}
			/>
		</Fragment>
	) : (
		<Dropdown overlay={menu}>
			<Button
				type={props.currentLocale === 'en-US' ? 'primary' : ''}
				danger={props.currentLocale === 'en-US' ? false : true}
				style={{ margin: '0px 10px' }}
			>
				<FormattedMessage id='hello' />
				<span style={{ marginLeft: '10px' }}>
					<DownOutlined />
				</span>
			</Button>
		</Dropdown>
	);
}
