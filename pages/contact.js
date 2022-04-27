import React, { Fragment, useState } from 'react';
import { Card } from 'antd';

export default function Home(props) {
	return (
		<Fragment>
			{props.isMobilePlatform ? (
				<Fragment>
					<div style={{ height: 'calc(100vh - 115px)', padding: '0px 0px 10px 0px', backgroundColor: '#fff', overflowY: 'auto' }}>1111</div>
				</Fragment>
			) : (
				<Fragment>
					<Card style={{ borderRadius: '5px' }}></Card>
				</Fragment>
			)}
		</Fragment>
	);
}
