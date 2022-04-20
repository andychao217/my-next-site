import React, { useState, useEffect, Fragment } from 'react';
import Head from 'next/head';
import { IntlProvider } from 'react-intl'; /* react-intl imports */
import { useRouter } from 'next/router';
import { Layout } from 'antd';
import Breadcrumbs from '../components/breadcrumbs';
import HeaderLayout from '../components/headerLayout';
import FooterLayout from '../components/footerLayout';
import TabBarMobile from '../components/tabBarMobile';
import NavBarMobile from '../components/navBarMobile';
import langData from '/public/data/lang.json';

const initialLocaleMessage = {
	'en-US': {
		hello: '你好',
		title: 'Welcome to my world',
		about: 'About me',
		timeLine: 'Timeline',
		portfolios: 'Portfolios',
		contact: 'Get in touch',
	},
	'zh-CN': { hello: 'Hello', title: '欢迎来到我的世界', about: '关于我', timeLine: '时间线', portfolios: '作品集', contact: '联系我' },
};
const { Content } = Layout;
export default function MyApp({ Component, pageProps }) {
	const [currentLocale, setCurrentLocale] = useState('zh-CN');
	const [currentMenu, setCurrentMenu] = useState('about');
	const [isMobilePlatform, setIsMobilePlatform] = useState(false);
	const [localeMessage, setLocaleMessage] = useState(initialLocaleMessage);
	const router = useRouter();
	useEffect(() => {
		router.push('about');
		isMobile();
		const getLangData = async () => {
			let res = await langData;
			setLocaleMessage({ ...JSON.parse(JSON.stringify(res)) });
		};
		getLangData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function isMobile() {
		let res = false;
		if (/android/i.test(navigator.userAgent) || /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
			res = true;
		}
		setIsMobilePlatform(res);
	}

	return (
		<Fragment>
			<IntlProvider locale={currentLocale} messages={localeMessage[currentLocale]}>
				<div style={{ height: '100vh' }}>
					<Head>
						<title>{localeMessage[currentLocale]['title']}</title>
						<meta charSet='utf-8' />
						<meta name='description' content={localeMessage[currentLocale]['title']} />
						<meta
							name='keywords'
							content='HTML,JavaScript,React,Vue.js,Coder,Programme,Software,Front-End,Engineer,Andy Chao,赵庆,andychao217'
						></meta>
						<meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
						<meta name='apple-mobile-web-app-capable' content='yes' />
						<meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
						<meta name='apple-mobile-web-app-title' content='Andy Chao'></meta>
						<link rel='apple-touch-icon' href='/images/profilepic.jpg' />
						<meta name='robots' content='all' />
						<meta name='author' content='Andy Chao' />
						<meta httpEquiv='Pragma' content='no-cache'></meta>
						<meta httpEquiv='Cache-Control' content='no-siteapp' />
						<link rel='icon' href='/favicon.ico' />
					</Head>
					{isMobilePlatform ? (
						<Layout>
							<div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
								<NavBarMobile
									currentLocale={currentLocale}
									setCurrentLocale={setCurrentLocale}
									currentMenu={currentMenu}
									setCurrentMenu={setCurrentMenu}
									isMobilePlatform={isMobilePlatform}
								/>
								<div style={{ flexGrow: '2' }}>
									<Component {...pageProps} isMobilePlatform={isMobilePlatform} />
								</div>
								<TabBarMobile currentLocale={currentLocale} currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} />
							</div>
						</Layout>
					) : (
						<Layout>
							<HeaderLayout
								currentLocale={currentLocale}
								setCurrentLocale={setCurrentLocale}
								currentMenu={currentMenu}
								setCurrentMenu={setCurrentMenu}
								isMobilePlatform={isMobilePlatform}
							/>
							<Content style={{ padding: '0 50px', marginTop: '66px' }}>
								<Breadcrumbs currentMenu={currentMenu} />
								<div style={{ padding: '0px' }}>
									<Component {...pageProps} isMobilePlatform={isMobilePlatform} />
								</div>
							</Content>
							<FooterLayout currentLocale={currentLocale} />
						</Layout>
					)}
				</div>
			</IntlProvider>
		</Fragment>
	);
}
