import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Tooltip, Button } from 'antd';
import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons';

export default function FullScreenController(props) {
	const [isFullScreen, setIsFullScreen] = useState(false);

	function fullScreenControl() {
		setIsFullScreen(!isFullScreen);
		if (isFullScreen) {
			exitFullscreen();
		} else {
			launchFullscreen(document.documentElement);
		}
	}

	//进入全屏
	function launchFullscreen(element) {
		if (element.requestFullscreen) {
			element.requestFullscreen();
		} else if (element.mozRequestFullScreen) {
			element.mozRequestFullScreen();
		} else if (element.msRequestFullscreen) {
			element.msRequestFullscreen();
		} else if (element.webkitRequestFullscreen) {
			element.webkitRequestFullScreen();
		}
	}

	//退出全屏
	function exitFullscreen() {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		}
	}

	return (
		<Tooltip placement='bottom' title={<FormattedMessage id={isFullScreen ? 'fullscreenExit' : 'fullscreen'} />}>
			<Button
				size='middle'
				onClick={fullScreenControl}
				type={props.currentLocale === 'en-US' ? 'primary' : ''}
				danger={props.currentLocale === 'en-US' ? false : true}
				shape='circle'
				icon={isFullScreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
			/>
		</Tooltip>
	);
}
