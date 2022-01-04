import React, { useState } from 'react';
import { Layout } from 'antd';
import Breadcrumbs from '../components/breadcrumbs';
import { IntlProvider } from 'react-intl'; /* react-intl imports */
import zh_CN from '../locales/zh-CN'; // import defined messages in Chinese
import en_US from '../locales/en-US'; // import defined messages in English
import HeaderLayout from '../components/headerLayout';
const { Content, Footer } = Layout;
const localeMessage = {
	'en-US': en_US,
	'zh-CN': zh_CN,
};

export default function MyApp({ Component, pageProps }) {
	const [currentLocale, setCurrentLocale] = useState('zh-CN');
	const [currentMenu, setCurrentMenu] = useState('index');
	return (
		<>
			<IntlProvider locale={currentLocale} messages={localeMessage[currentLocale]}>
				<div style={{ height: '100vh' }}>
					<Layout>
						<HeaderLayout setCurrentLocale={setCurrentLocale} currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} />
						<Content style={{ padding: '0 50px' }}>
							<Breadcrumbs currentMenu={currentMenu} />
							<div style={{ padding: 24, minHeight: 'calc(100vh - 188px)' }}>
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
