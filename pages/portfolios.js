import React, { Fragment, useState } from 'react';
import { Swiper, Card, Tag, Space, ImageViewer } from 'antd-mobile';
import { FormattedMessage } from 'react-intl';
import Image from 'next/image';
import portfolioData from '/public/data/portfolioData.json';

const colors = ['#26324D', '#4A5671', '#99A9BF', '#24D6FF', '#027AFF', '#20CE66', '#F7BA2B', '#FF4040', '#58A7F4'];

export async function getStaticProps(ctx) {
	const fileContent = await portfolioData;
	return {
		props: { fileContent },
	};
}

export default function Portfolios(props) {
	const [visible, setVisible] = useState(false);
	const [imageUrls, setImageUrls] = useState([]);

	const handleViewImage = (item) => {
		const imageUrls = [];
		for (let i = item.length; i > 0; i--) {
			imageUrls.push(`/portfolios/${item.name}/${i}.png`);
		}
		setImageUrls(imageUrls);
		setVisible(true);
	};

	return (
		<Fragment>
			<div style={{ paddingRight: '10px' }}>
				<Swiper
					trackOffset={10}
					slideSize={80}
					style={{
						'--border-radius': '8px',
					}}
					defaultIndex={0}
				>
					{props.fileContent.map((item) => {
						return (
							<Swiper.Item key={item.name}>
								<div style={{ height: 'calc(100vh - 115px)', padding: '10px 0px 10px 10px' }}>
									<Card
										headerStyle={{
											border: 'none',
											whiteSpace: 'nowrap',
											textOverflow: 'ellipsis',
											overflow: 'hidden',
										}}
										style={{ background: 'linear-gradient(to right, #00c6ff, #0072ff)' }}
										title={<FormattedMessage id={item.title} />}
									>
										<div
											onClick={() => {
												handleViewImage(item);
											}}
											style={{ height: 'calc(100vh - 115px - 100px)', paddingTop: '60px' }}
										>
											<div style={{ textAlign: 'center' }}>
												<Image src={`/portfolios/${item.name}.svg`} height='100' width='100' alt={item.name} />
												<p style={{ marginTop: '20px' }}>
													<FormattedMessage id={item.Desc} />
												</p>
											</div>
											<div style={{ position: 'absolute', bottom: '30px', paddingRight: '10px' }}>
												<Space wrap>
													{item.tags.map((tag, index) => (
														<Tag color={colors[index]} key={tag}>
															{tag}
														</Tag>
													))}
												</Space>
											</div>
										</div>
									</Card>
								</div>
							</Swiper.Item>
						);
					})}
				</Swiper>
			</div>
			<ImageViewer.Multi
				images={imageUrls}
				visible={visible}
				defaultIndex={0}
				onClose={() => {
					setVisible(false);
				}}
			/>
		</Fragment>
	);
}
