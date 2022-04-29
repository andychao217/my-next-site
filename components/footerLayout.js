import React, { Fragment } from 'react';
import { Tooltip, Layout, Row, Col, Badge } from 'antd';
import { WeiboOutlined, WechatOutlined, GithubOutlined, MailOutlined, LinkedinOutlined, PhoneOutlined, InfoCircleOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { FormattedMessage } from 'react-intl';
import styles from '../styles/Footer.module.css';

const { Footer } = Layout;

export default function FooterLayout(props) {
	const contactItems = [
		{
			title: 'Github: https://github.com/andychao217',
			icon: <GithubOutlined />,
			href: 'https://github.com/andychao217',
		},
		{
			title: 'LinkedIn: https://www.linkedin.com/in/andy-chao-6423583a/',
			icon: <LinkedinOutlined />,
			href: 'https://www.linkedin.com/in/andy-chao-6423583a/',
		},
		{
			title: 'Weibo: http://weibo.com/andychao217',
			icon: <WeiboOutlined />,
			href: 'http://weibo.com/andychao217',
		},
		{
			title: <Image src={'/images/wechat.jpg'} height='270' width='184' alt='Wechat picture' />,
			icon: <WechatOutlined />,
			href: null,
		},
		{
			title: 'Tel: 135-4869-1522',
			icon: <PhoneOutlined />,
			href: 'tel:+8613548691522',
		},
		{
			title: 'Mail: andychao217@qq.com',
			icon: <MailOutlined />,
			href: 'mailto:andychao217@qq.com',
		},
		{
			title: (
				<span>
					<Badge
						status='warning'
						text={
							<span style={{ color: '#fff' }}>
								<FormattedMessage id={'dedaoCreditText'} />
								<span>: </span>
								<FormattedMessage id={'dedaoCredit'} />
							</span>
						}
					/>
					<br />
					<Badge
						status='processing'
						text={
							<span style={{ color: '#fff' }}>
								<FormattedMessage id={'zhimaCreditText'} />
								<span>: </span>
								<FormattedMessage id={'zhimaCredit'} />
							</span>
						}
					/>
				</span>
			),
			icon: <InfoCircleOutlined />,
			href: null,
		},
	];
	return (
		<Fragment>
			<Footer style={{ textAlign: 'center' }}>
				<Row>
					<Col span='24'>
						{contactItems.map((item, index) => {
							return (
								<Tooltip key={index} placement='top' title={item.title}>
									{item.href ? (
										<a target='_blank' rel='noreferrer' href={item.href} className={styles.linkIcon}>
											{item.icon}
										</a>
									) : (
										<span className={styles.linkIcon}>{item.icon}</span>
									)}
								</Tooltip>
							);
						})}
					</Col>
				</Row>
				<Row>
					<Col span='24'>
						<a target='_blank' rel='noreferrer' href='http://beian.miit.gov.cn/' style={{ marginRight: '10px' }}>
							<span>湘ICP备17005934号</span>
						</a>
						<a target='_blank' rel='noreferrer' href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=43012102000324'>
							<span>湘公网安备43012102000324号</span>
						</a>
					</Col>
				</Row>
			</Footer>
		</Fragment>
	);
}
