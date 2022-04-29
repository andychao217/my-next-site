import React from 'react';
import Image from 'next/image';
import { Avatar, Layout, Tooltip, Button, Tag } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { FormattedMessage } from 'react-intl';
import Menus from './menus';
import LanguageChanger from './languageChanger';
import FullScreenController from './fullScreenController';
const { Header } = Layout;

export default function HeaderLayout(props) {
	function downloadResume() {
		const URL = `/pdf/AndyChaoResume[${props.currentLocale}].pdf`;
		window.open(URL);
	}
	return (
		<Header style={{ width: '100vw', position: 'fixed', zIndex: 99, padding: '0px' }}>
			<div
				style={{
					padding: '0px 20px',
					width: '100vw',
					display: 'flex',
					alignItems: 'center',
					backgroundColor: props.currentLocale === 'en-US' ? '#001529' : '#fff',
				}}
			>
				<Avatar src={<Image src={'/images/profilepic.jpg'} alt='Avatar picture' width={32} height={32} />} />
				<div style={{ flexGrow: 1, marginLeft: '10px' }}>
					<Menus {...props} />
				</div>
				<div style={{ display: 'inline-block', width: 'auto' }}>
					<FullScreenController {...props} />
					<LanguageChanger {...props} />
					<Tooltip placement='bottom' title={<FormattedMessage id={'resume'} />}>
						<Button
							onClick={downloadResume}
							type={props.currentLocale === 'en-US' ? 'primary' : ''}
							danger={props.currentLocale === 'en-US' ? false : true}
							shape='circle'
							icon={<DownloadOutlined />}
						/>
					</Tooltip>
				</div>
			</div>
		</Header>
	);
}
