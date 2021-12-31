import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import Menus from '../components/menus';
import Breadcrumbs from '../components/breadcrumbs';
import LanguageChanger from '../components/languageChanger';
import { IntlProvider } from 'react-intl'; /* react-intl imports */
import zh_CN from '../locales/zh-CN'; // import defined messages in Chinese
import en_US from '../locales/en-US'; // import defined messages in English
const { Header, Content, Footer } = Layout;
const localeMessage = {
	'en-US': en_US,
	'zh-CN': zh_CN,
};

export default function MyApp({ Component, pageProps }) {
	const [currentLocale, setCurrentLocale] = useState('zh-CN');
	console.log('currentLocale', currentLocale);
	return (
		<>
			<IntlProvider locale={currentLocale} messages={localeMessage[currentLocale]}>
				<div style={{ height: '100vh' }}>
					<Layout>
						<Header style={{ position: 'fixed', zIndex: 1, width: '100%', position: 'flex' }}>
							<div className='logo' />
							<Menus />
							<div style={{ position: 'fixed', zIndex: 22, right: '20px', top: '0px' }}>
								<LanguageChanger setCurrentLocale={setCurrentLocale} />
							</div>
						</Header>
						<Content className='site-layout' style={{ padding: '0 50px', marginTop: 64 }}>
							<Breadcrumbs />
							<div className='site-layout-background' style={{ padding: 24, minHeight: 'calc(100vh - 188px)' }}>
								<Component {...pageProps} />
							</div>
						</Content>
						<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
					</Layout>
				</div>
			</IntlProvider>
		</>
	);
}
