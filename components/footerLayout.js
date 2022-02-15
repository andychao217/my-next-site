import React, { Fragment } from 'react';
import { Tooltip, Layout, Row, Col } from 'antd';
import { WeiboOutlined, WechatOutlined, GithubOutlined, MailOutlined, LinkedinOutlined, PhoneOutlined } from '@ant-design/icons';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';

const { Footer } = Layout;

export default function FooterLayout(props) {
	return (
		<Fragment>
			<Footer style={{ textAlign: 'center' }}>
				<Row>
					<Col span='24'>
						<Tooltip placement='top' title={'Github: https://github.com/andychao217'}>
							<a target='_blank' rel='noreferrer' href='https://github.com/andychao217' className={styles.linkIcon}>
								<GithubOutlined />
							</a>
						</Tooltip>
						<Tooltip placement='top' title={'LinkedIn: https://www.linkedin.com/in/andy-chao-6423583a/'}>
							<a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/andy-chao-6423583a/' className={styles.linkIcon}>
								<LinkedinOutlined />
							</a>
						</Tooltip>
						<Tooltip placement='top' title={'Weibo: http://weibo.com/andychao217'}>
							<a target='_blank' rel='noreferrer' href='http://weibo.com/andychao217' className={styles.linkIcon}>
								<WeiboOutlined />
							</a>
						</Tooltip>
						<Tooltip placement='top' title={<Image src={'/images/wechat.jpg'} height='270' width='184' alt='Wechat picture' />}>
							<span className={styles.linkIcon}>
								<WechatOutlined />
							</span>
						</Tooltip>
						<Tooltip placement='top' title={'Tel: 135-4869-1522'}>
							<a target='_blank' rel='noreferrer' href='tel:+8613548691522' className={styles.linkIcon}>
								<PhoneOutlined />
							</a>
						</Tooltip>
						<Tooltip placement='top' title={'Mail: andychao217@qq.com'}>
							<a target='_blank' rel='noreferrer' href='mailto:andychao217@qq.com' className={styles.linkIcon}>
								<MailOutlined />
							</a>
						</Tooltip>
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
