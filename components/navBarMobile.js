import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import { NavBar, Avatar, Button } from 'antd-mobile';
import LanguageChanger from './languageChanger';

export default function NavBarMobile(props) {
	function downloadResume() {
		const URL = `/pdf/AndyChaoResume[${props.currentLocale}].pdf`;
		window.open(URL);
	}

	return (
		<Fragment>
			<div style={{ width: '100vw', borderBottom: '1px solid lightgray', background: 'white' }}>
				<NavBar
					back={null}
					left={<Avatar src={'/images/profilepic.jpg'} style={{ '--size': '32px' }} onClick={downloadResume} />}
					right={<LanguageChanger {...props} />}
				>
					<FormattedMessage id={props.currentMenu} />
				</NavBar>
			</div>
		</Fragment>
	);
}
