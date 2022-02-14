import React, { useState, useEffect, Fragment } from 'react';
import { IntlProvider } from 'react-intl'; /* react-intl imports */
import { useRouter } from 'next/router';
import { Layout } from 'antd';
import Breadcrumbs from '../components/breadcrumbs';
import HeaderLayout from '../components/headerLayout';
import FooterLayout from '../components/footerLayout';
import zh_CN from '../locales/zh-CN'; // import defined messages in Chinese
import en_US from '../locales/en-US'; // import defined messages in English
const { Content } = Layout;
const localeMessage = {
	'en-US': en_US,
	'zh-CN': zh_CN,
};

export default function MyApp({ Component, pageProps }) {
	const [currentLocale, setCurrentLocale] = useState('zh-CN');
	const [currentMenu, setCurrentMenu] = useState('about');
	const router = useRouter();

	useEffect(() => {
		router.push('about');
	}, []);

	useEffect(() => {
		document.title = currentLocale === 'zh-CN' ? zh_CN.title : en_US.title;
	}, [currentLocale]);

	return (
		<Fragment>
			<IntlProvider locale={currentLocale} messages={localeMessage[currentLocale]}>
				<div style={{ height: '100vh' }}>
					<Layout>
						<HeaderLayout
							currentLocale={currentLocale}
							setCurrentLocale={setCurrentLocale}
							currentMenu={currentMenu}
							setCurrentMenu={setCurrentMenu}
						/>
						<Content style={{ padding: '0 50px' }}>
							<Breadcrumbs currentMenu={currentMenu} />
							<div style={{ padding: 24, minHeight: 'calc(100vh - 188px)' }}>
								<Component {...pageProps} />
							</div>
						</Content>
						<FooterLayout currentLocale={currentLocale} />
					</Layout>
				</div>
			</IntlProvider>
		</Fragment>
	);
}
