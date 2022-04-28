import React, { Fragment, useState } from 'react';
import { Card, Progress, Divider, Avatar, Row, Col } from 'antd';
import Image from 'next/image';
import { NoticeBar, Space, Swiper, Dropdown, List, Tag, Form, Button, Input, WaterMark } from 'antd-mobile';
import { ExclamationCircleOutline, DownlandOutline } from 'antd-mobile-icons';
import { FormattedMessage } from 'react-intl';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
// 注意，新的接口中默认不再包含 Canvas 渲染器，需要显示引入，如果需要使用 SVG 渲染模式则使用 SVGRenderer
import { CanvasRenderer } from 'echarts/renderers';
import styles from '../styles/Pages.module.css';
import abilitiesData from '/public/data/abilities.json';
import colorData from '/public/data/colorList.json';
import contactInfoData from '/public/data/contactInfo.json';

export async function getStaticProps(ctx) {
	const abilitiesFileContent = await abilitiesData;
	const colorFileContent = await colorData;
	const contactInfoFileContent = await contactInfoData;
	return {
		props: { abilitiesFileContent, colorFileContent, contactInfoFileContent },
	};
}

echarts.use([BarChart, GridComponent, CanvasRenderer]);

export default function About(props) {
	const [activeKey, setActiveKey] = useState('Characteristics');
	const options = {
		height: 500,
		xAxis: {
			type: 'value',
			show: true,
			axisLabel: {
				formatter: (value, index) => {
					return value * 100 + '%';
				},
			},
		},
		yAxis: {
			type: 'category',
			data: props.abilitiesFileContent.map((ability) => {
				return { value: ability.item, textStyle: { fontSize: 10 } };
			}),
		},
		series: [
			{
				data: props.abilitiesFileContent.map((ability, index) => {
					return { value: ability.value, itemStyle: { color: props.colorFileContent.at(index) } };
				}),
				type: 'bar',
				showBackground: true,
				backgroundStyle: {
					color: 'rgba(180, 180, 180, 0.2)',
				},
			},
		],
	};

	function downloadResume() {
		const URL = `/pdf/AndyChaoResume[${props.currentLocale}].pdf`;
		window.open(URL);
	}

	const getPersonalInfoForm = () => {
		return (
			<Form
				name={props.isMobilePlatform ? 'personalInfoFormMobile' : 'personalInfoFormDesktop'}
				footer={
					<Button block={props.isMobilePlatform} color='primary' size='large' onClick={downloadResume}>
						<DownlandOutline /> <FormattedMessage id={'resumeText'} />
					</Button>
				}
			>
				<Form.Item name='name' label={<FormattedMessage id={'nameInput'} />} initialValue={props.contactInfoFileContent?.name}>
					<Input readOnly type={'text'} />
				</Form.Item>
				<Form.Item name='mail' label={<FormattedMessage id={'emailInput'} />} initialValue={props.contactInfoFileContent?.mail}>
					<Input readOnly type={'email'} />
				</Form.Item>
				<Form.Item name='phone' label={<FormattedMessage id={'phoneInput'} />} initialValue={props.contactInfoFileContent?.phone}>
					<Input readOnly />
				</Form.Item>
			</Form>
		);
	};
	return (
		<Fragment>
			{props.isMobilePlatform ? (
				<Fragment>
					<div
						style={{
							height: 'calc(100vh - 115px)',
							padding: '0px 0px 10px 0px',
							backgroundColor: '#fff',
							overflowY: 'auto',
						}}
					>
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
							<Space direction={'vertical'} style={{ padding: '5px 20px', position: 'relative', minHeight: 'calc(100vh - 310px)' }}>
								<p style={{ whiteSpace: 'pre-wrap', textAlign: 'justify', fontSize: '13px' }}>
									<FormattedMessage id={'introText'} />
								</p>
								<Space>
									<Tag color='success'>
										<FormattedMessage id={'hobbies'} />
									</Tag>
								</Space>
								<WaterMark content={'Andy Chao'} gapX={10} gapY={10} fullPage={false} />
							</Space>
						) : activeKey === 'Ability' ? (
							<div style={{ padding: '5px 20px', position: 'relative', minHeight: 'calc(100vh - 310px)' }}>
								{props.abilitiesFileContent.map((ability, index) => {
									return (
										<div key={ability.item}>
											<div>{ability.item}</div>
											<Progress
												type='line'
												percent={ability.value * 100}
												status='active'
												strokeColor={props.colorFileContent?.at(index)}
												showInfo={false}
											/>
										</div>
									);
								})}
								<WaterMark content={'Andy Chao'} gapX={10} gapY={10} fullPage={false} />
							</div>
						) : (
							<div style={{ position: 'relative' }}>
								{getPersonalInfoForm()}
								<WaterMark content={'Andy Chao'} gapX={10} gapY={10} fullPage={false} />
							</div>
						)}
					</div>
				</Fragment>
			) : (
				<Fragment>
					<Card style={{ borderRadius: '5px' }}>
						<Divider orientation='left'>
							<FormattedMessage id={'introTitle'} />
						</Divider>
						<p style={{ whiteSpace: 'pre-wrap', textAlign: 'justify', fontSize: '13px', paddingLeft: '55px' }}>
							<FormattedMessage id={'introText'} />
						</p>
						<Divider orientation='left'>
							<FormattedMessage id={'ability'} />
						</Divider>
						<ReactEChartsCore echarts={echarts} option={options} notMerge={true} lazyUpdate={true} style={{ height: '600px' }} />
						<Divider orientation='left'>
							<FormattedMessage id={'personalInfo'} />
						</Divider>
						<div style={{ paddingLeft: '55px' }}>
							<Row gutter={16}>
								<Col flex='128px'>
									<Avatar
										src={<Image src={'/images/profilepic.jpg'} alt='Avatar picture' width={128} height={128} />}
										shape='square'
										size={128}
									/>
								</Col>
								<Col flex='auto'>{getPersonalInfoForm()}</Col>
							</Row>
						</div>
					</Card>
				</Fragment>
			)}
		</Fragment>
	);
}
