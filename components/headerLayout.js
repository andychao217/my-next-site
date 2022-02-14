import React from 'react';
import Image from 'next/image';
import { Avatar, Layout, Tooltip, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { FormattedMessage } from 'react-intl';
import Menus from './menus';
import LanguageChanger from './languageChanger';
import Profilepic from '../public/images/profilepic.jpg';
const { Header } = Layout;

export default function HeaderLayout(props) {
	function downloadResume() {
		const URL = `/pdf/AndyChaoResume[${props.currentLocale}].pdf`;
		window.open(URL);
	}
	return (
		<Header>
			<div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
				<Avatar src={<Image src={Profilepic} alt='Avatar picture' width={32} height={32} />} />
				<div style={{ flexGrow: 1, marginLeft: '10px' }}>
					<Menus {...props} />
				</div>
				<div style={{ display: 'inline-block', width: '135px' }}>
					<LanguageChanger {...props} />
					<Tooltip placement='bottom' title={<FormattedMessage id={'resume'} />}>
						<Button onClick={downloadResume} style={{ marginLeft: '10px' }} type='primary' shape='circle' icon={<DownloadOutlined />} />
					</Tooltip>
				</div>
			</div>
		</Header>
	);
}
