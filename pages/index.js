import React, { useEffect, Fragment } from 'react';
import { useRouter } from 'next/router';
export default function MyApp({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {
		router.push('about');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <Fragment></Fragment>;
}
