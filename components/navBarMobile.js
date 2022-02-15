import React, { Fragment, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { NavBar, Avatar, ActionSheet, Button } from 'antd-mobile';

export default function NavBarMobile(props) {
	const [actionsVisible, setActionsVisible] = useState(false);

	function downloadResume() {
		const URL = `/pdf/AndyChaoResume[${props.currentLocale}].pdf`;
		window.open(URL);
	}
	const actions = [
		{ text: '复制', key: 'copy' },
		{ text: '修改', key: 'edit' },
		{ text: '删除', key: 'delete' },
	];

	return (
		<Fragment>
			<div style={{ position: 'fixed', top: 0, width: '100vw', borderBottom: '1px solid lightgray', zIndex: 99 }}>
				<NavBar
					back={null}
					left={<Avatar src={'/images/profilepic.jpg'} style={{ '--size': '32px' }} onClick={downloadResume} />}
					right={
						<Fragment>
							<Button onClick={() => setActionsVisible(true)}>最简单的用法</Button>
							<ActionSheet visible={actionsVisible} actions={actions} onClose={() => setActionsVisible(false)} />
						</Fragment>
					}
				>
					<FormattedMessage id={props.currentMenu} />
				</NavBar>
			</div>
		</Fragment>
	);
}
