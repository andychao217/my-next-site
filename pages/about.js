import React, { Fragment, useState } from 'react';
import { Card } from 'antd';
import { NoticeBar, Space, Swiper, Dropdown, List, Tag, Form, Button, Input } from 'antd-mobile';
import { ExclamationCircleOutline, DownlandOutline } from 'antd-mobile-icons';
import { FormattedMessage } from 'react-intl';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
// 注意，新的接口中默认不再包含 Canvas 渲染器，需要显示引入，如果需要使用 SVG 渲染模式则使用 SVGRenderer
import { CanvasRenderer } from 'echarts/renderers';
import styles from '../styles/Pages.module.css';

echarts.use([BarChart, GridComponent, CanvasRenderer]);

export default function About(props) {
	const [activeKey, setActiveKey] = useState('Characteristics');
	const options = {
		xAxis: {
			type: 'value',
			show: false,
		},
		yAxis: {
			type: 'category',
			data: ['1', 'A', 'B', 'C', 'D', 'E', 'F'],
		},
		series: [
			{
				data: [
					{
						value: 20000,
						itemStyle: {
							color: '#a90000',
						},
					},
					15000,
					8000,
					7000,
					11000,
					13000,
					14000,
				],
				type: 'bar',
			},
		],
	};

	function downloadResume() {
		const URL = `/pdf/AndyChaoResume[${props.currentLocale}].pdf`;
		window.open(URL);
	}

	return (
		<Fragment>
			{props.isMobilePlatform ? (
				<Fragment>
					<div style={{ height: 'calc(100vh - 115px)', padding: '0px 0px 10px 0px', backgroundColor: '#fff', overflowY: 'auto' }}>
						<NoticeBar
							content={
								<span>
									<FormattedMessage id={'helloWhoAmI'} />
									<span> (</span>
									<FormattedMessage id={'dedaoCreditText'} />
									<span>: </span>
									<FormattedMessage id={'dedaoCredit'} />
									<span>, </span>
									<FormattedMessage id={'zhimaCreditText'} />
									<span>: </span>
									<FormattedMessage id={'zhimaCredit'} />
									<span>) </span>
								</span>
							}
							color='info'
							icon={<ExclamationCircleOutline />}
						/>
						<Swiper>
							<Swiper.Item key={'lifeMottoJobs1'}>
								<div
									style={{
										backgroundImage: `url(/images/bg1.jpg)`,
									}}
									className={styles.mobileSlider}
								>
									<Space direction='vertical' block justify='center' align='center'>
										<FormattedMessage id={'lifeMottoJobs1'} />
										<span>
											- <FormattedMessage id={'jobs'} />
										</span>
									</Space>
								</div>
							</Swiper.Item>
							<Swiper.Item key={'lifeMottoGump'}>
								<div
									style={{
										backgroundImage: `url(/images/bg2.jpg)`,
									}}
									className={styles.mobileSlider}
								>
									<Space direction='vertical' block justify='center' align='center'>
										<FormattedMessage id={'lifeMottoGump'} />
										<span>
											- <FormattedMessage id={'gump'} />
										</span>
									</Space>
								</div>
							</Swiper.Item>
						</Swiper>
						<Dropdown closeOnClickAway closeOnMaskClick>
							<Dropdown.Item
								key='sorter'
								title={
									activeKey === 'Characteristics' ? (
										<FormattedMessage id={'introTitle'} />
									) : activeKey === 'Ability' ? (
										<FormattedMessage id={'ability'} />
									) : (
										<FormattedMessage id={'personalInfo'} />
									)
								}
							>
								<Space direction='vertical' block>
									<List>
										<List.Item onClick={() => setActiveKey('Characteristics')} arrow={false}>
											<FormattedMessage id={'introTitle'} />
										</List.Item>
										<List.Item onClick={() => setActiveKey('Ability')} arrow={false}>
											<FormattedMessage id={'ability'} />
										</List.Item>
										<List.Item onClick={() => setActiveKey('PersonalInfo')} arrow={false}>
											<FormattedMessage id={'personalInfo'} />
										</List.Item>
									</List>
								</Space>
							</Dropdown.Item>
						</Dropdown>
						{activeKey === 'Characteristics' ? (
							<Space direction={'vertical'} style={{ padding: '5px 20px' }}>
								<p style={{ whiteSpace: 'pre-wrap', textAlign: 'justify', fontSize: '13px' }}>
									<FormattedMessage id={'introText'} />
								</p>
								<Space>
									<Tag color='success'>
										<FormattedMessage id={'hobbies'} />
									</Tag>
								</Space>
							</Space>
						) : activeKey === 'Ability' ? (
							<ReactEChartsCore echarts={echarts} option={options} notMerge={true} lazyUpdate={true} />
						) : (
							<Form
								name='form'
								footer={
									<Button block color='primary' size='large' onClick={downloadResume}>
										<DownlandOutline /> <FormattedMessage id={'resumeText'} />
									</Button>
								}
							>
								<Form.Header>基础用法</Form.Header>
								<Form.Item name='name' label={<FormattedMessage id={'nameInput'} />} initialValue={'赵庆'}>
									<Input readOnly type={'text'} />
								</Form.Item>
								<Form.Item name='email' label={<FormattedMessage id={'emailInput'} />} initialValue={'andychao217@qq.com'}>
									<Input readOnly type={'email'} />
								</Form.Item>
								<Form.Item name='phone' label={<FormattedMessage id={'phoneInput'} />} initialValue={'(+86)13548691522'}>
									<Input readOnly />
								</Form.Item>
							</Form>
						)}
					</div>
				</Fragment>
			) : (
				<Fragment>
					<Card style={{ borderRadius: '5px' }}>
						<ReactEChartsCore echarts={echarts} option={options} notMerge={true} lazyUpdate={true} />;
					</Card>
				</Fragment>
			)}
		</Fragment>
	);
}
