import React, { Fragment, useState } from 'react';
import { Timeline, Card, Collapse } from 'antd';
import { Tabs, Steps, Space } from 'antd-mobile';
import timeLineData from '/public/data/timeLineData.json';
import { FormattedMessage } from 'react-intl';
const { Panel } = Collapse;
const { Step } = Steps;

export async function getStaticProps(ctx) {
	const timeLineFileContent = await timeLineData;
	return {
		props: { timeLineFileContent },
	};
}

export default function TimeLine(props) {
	const [activeKey, setActiveKey] = useState('work');
	const onChangeTab = (key) => {
		if (key && key !== activeKey) {
			setActiveKey(key);
		}
	};
	return (
		<Fragment>
			{props.isMobilePlatform ? (
				<Fragment>
					<div style={{ height: 'calc(100vh - 115px)', padding: '0px 0px 10px 0px', backgroundColor: '#fff', overflowY: 'auto' }}>
						<Tabs activeKey={activeKey} onChange={onChangeTab}>
							{props.timeLineFileContent.map((timeRange, index) => {
								return (
									<Tabs.Tab title={<FormattedMessage id={timeRange.title} />} key={timeRange.key}>
										<Steps direction='vertical'>
											{timeRange.experience.map((exp, expIndex) => {
												let endTime = exp.endTime,
													timeLabel = `${exp.startTime} - ${endTime}`;
												if (endTime === 'tillNow') {
													timeLabel = (
														<span>
															<span>{`${exp.startTime} - `}</span>
															<FormattedMessage id={'tillNow'} />
														</span>
													);
												}
												return (
													<Step
														title={<FormattedMessage id={exp.title} />}
														status={expIndex === timeRange.experience.length - 1 ? 'process' : 'finish'}
														key={expIndex}
														description={
															<Space block direction='vertical'>
																<div>{timeLabel}</div>
																<p style={{ whiteSpace: 'pre-wrap', textAlign: 'justify' }}>
																	<FormattedMessage id={exp.content} />
																</p>
															</Space>
														}
													/>
												);
											})}
										</Steps>
									</Tabs.Tab>
								);
							})}
						</Tabs>
					</div>
				</Fragment>
			) : (
				<Fragment>
					<Card style={{ borderRadius: '5px' }}>
						<Collapse activeKey={activeKey} accordion={true} onChange={onChangeTab}>
							{props.timeLineFileContent.map((timeRange, index) => {
								return (
									<Panel header={<FormattedMessage id={timeRange.title} />} key={timeRange.key}>
										<Timeline mode={'alternate'}>
											{timeRange.experience.map((exp, expIndex) => {
												let endTime = exp.endTime,
													timeLabel = `${exp.startTime} - ${endTime}`;
												if (endTime === 'tillNow') {
													timeLabel = (
														<span>
															<span>{`${exp.startTime} - `}</span>
															<FormattedMessage id={'tillNow'} />
														</span>
													);
												}
												return (
													<Timeline.Item label={timeLabel} key={expIndex}>
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
