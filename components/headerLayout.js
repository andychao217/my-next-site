import React from 'react';
import { Layout } from 'antd';
import Menus from './menus';
import LanguageChanger from './languageChanger';
const { Header } = Layout;

export default function HeaderLayout(props) {
	return (
		<Header>
			<div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
				<div className='logo' style={{ width: '50px' }} />
				<div style={{ flexGrow: 1 }}>
					<Menus {...props} />
				</div>
				<div style={{ display: 'inline-block', width: '94px' }}>
					<LanguageChanger {...props} />
				</div>
			</div>
		</Header>
	);
}
