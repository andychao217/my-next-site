import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { Dropdown, Button, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

export default function LanguageChanger(props) {
	useEffect(() => {
		//  浏览器默认语言
		const navigatorLanguage = navigator.language.toLowerCase() || '';
		let defaultLanguage = '';
		if (
			navigatorLanguage === 'zh-cn' ||
			navigatorLanguage === 'zh-chs' ||
			navigatorLanguage === 'zh-chs-cn' ||
			navigatorLanguage === 'zh-hans' ||
			navigatorLanguage === 'zh-hans-cn'
		) {
			defaultLanguage = 'zh-CN';
			//  繁体中文：台湾、香港、澳门
		} else if (
			navigatorLanguage === 'zh-tw' ||
			navigatorLanguage === 'zh-hk' ||
			navigatorLanguage === 'zh-mo' ||
			navigatorLanguage === 'zh-cht' ||
			navigatorLanguage === 'zh-cht-cn' ||
			navigatorLanguage === 'zh-hant' ||
			navigatorLanguage === 'zh-hant-cn'
		) {
			defaultLanguage = 'zh-CN';
			//  英文：其他
		} else {
			defaultLanguage = 'en-US';
		}
		props.setCurrentLocale(defaultLanguage);
	}, []);

	function handleMenuClick(e) {
		const newLocale = e.key;
		props.setCurrentLocale(newLocale);
	}

	const menu = (
		<Menu onClick={handleMenuClick}>
			<Menu.Item
				key='zh-CN'
				icon={
					<span role='img' aria-label='China' style={{ color: 'red' }}>
						🇨🇳
					</span>
				}
			>
				你好世界!
			</Menu.Item>
			<Menu.Item
				key='en-US'
				icon={
					<span role='img' aria-label='China' style={{ color: 'skyblue' }}>
						🇺🇸
					</span>
				}
			>
				Hello world!
			</Menu.Item>
		</Menu>
	);

	return (
		<Dropdown overlay={menu}>
			<Button type={'primary'}>
				<FormattedMessage id='hello' />
				<span style={{ marginLeft: '10px' }}>
					<DownOutlined />
				</span>
			</Button>
		</Dropdown>
	);
}
