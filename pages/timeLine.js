import React, { Fragment, useState } from 'react';
import { Layout, Timeline, Card, Collapse } from 'antd';
import Menus from '../components/menus';
import Breadcrumbs from '../components/breadcrumbs';
import timeLineData from '/public/data/timeLineData.json';
import { FormattedMessage } from 'react-intl';
const { Header, Content, Footer } = Layout;
const { Panel } = Collapse;

export async function getStaticProps(ctx) {
	const timeLineFileContent = await timeLineData;
	return {
		props: { timeLineFileContent },
	};
}

export default function Home(props) {
	console.log('workSPONContent25132', <FormattedMessage id={'workSPONTitle'} />);
	return (
		<Fragment>
			{props.isMobilePlatform ? (
				<Fragment>
					<div>mobile</div>
				</Fragment>
			) : (
				<Fragment>
					<Card style={{ borderRadius: '5px' }}>
						<Collapse defaultActiveKey={['work']}>
							{props.timeLineFileContent.map((timeRange, index) => {
								return (
									<Panel header={<FormattedMessage id={timeRange.title} />} key={timeRange.key}>
										<Timeline mode={'alternate'}>
											{timeRange.experience.map((exp, expIndex) => {
												let endTime = exp.endTime,
													label = `${exp.startTime} - ${endTime}`;
												if (endTime === 'tillNow') {
													label = (
														<span>
															<span>{`${exp.startTime} - `}</span>
															<FormattedMessage id={'tillNow'} />
														</span>
													);
												}
												return (
													<Timeline.Item label={label} key={expIndex}>
														<Card title={<FormattedMessage id={exp.title} />} bordered={true}>
															<p style={{ whiteSpace: 'pre-wrap', textAlign: 'left' }}>
																<FormattedMessage id={exp.content} />
															</p>
														</Card>
													</Timeline.Item>
												);
											})}
										</Timeline>
									</Panel>
								);
							})}
						</Collapse>
					</Card>
				</Fragment>
			)}
		</Fragment>
	);
}
