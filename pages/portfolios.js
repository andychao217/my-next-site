import React, { Fragment, useState } from 'react';
import { Swiper, Card, Tag, Space, ImageViewer } from 'antd-mobile';
import { FormattedMessage } from 'react-intl';
import { Image as AntdImage, List, Avatar, Card as CardDesktop } from 'antd';
import Image from 'next/image';
import styles from '../styles/Pages.module.css';
import portfolioData from '/public/data/portfolioData.json';
import colorData from '/public/data/colorList.json';

export async function getStaticProps(ctx) {
	const portfolioFileContent = await portfolioData;
	const colorFileContent = await colorData;
	return {
		props: { portfolioFileContent, colorFileContent },
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
		if (imageUrls.length) {
			setImageUrls(imageUrls);
			setVisible(true);
		}
	};

	const gridStyle = {
		width: '100%',
	};

	return (
		<Fragment>
			{props.isMobilePlatform ? (
				<Fragment>
					<div style={{ paddingRight: '0px', backgroundImage: `url(/images/bg1.jpg)`, backgroundSize: 'cover' }}>
						<Swiper
							trackOffset={10}
							slideSize={80}
							style={{
								'--border-radius': '8px',
							}}
							defaultIndex={0}
						>
							{props.portfolioFileContent.map((item) => {
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
												className={styles.card}
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
																<Tag color={props.colorFileContent.at(index)} key={tag}>
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
			) : (
				<Fragment>
					<CardDesktop>
						<List
							itemLayout='vertical'
							size='large'
							dataSource={props.portfolioFileContent}
							renderItem={(item) => (
								<CardDesktop.Grid style={gridStyle}>
									<List.Item
										actions={item.tags.map((tag, index) => (
											<Space key={tag}>
												<Tag color={props.colorFileContent.at(index)} key={tag}>
													{tag}
												</Tag>
											</Space>
										))}
									>
										<List.Item.Meta
											avatar={
												<Avatar
													shape='square'
													size='32'
													src={<Image src={`/portfolios/${item.name}.svg`} layout='fill' alt={item.name} />}
													onClick={() => handleViewImage(item)}
													style={{ cursor: 'pointer' }}
												/>
											}
											title={
												<a onClick={() => handleViewImage(item)}>
													<FormattedMessage id={item.title} />
												</a>
											}
											description={<FormattedMessage id={item.Desc} />}
										/>
									</List.Item>
								</CardDesktop.Grid>
							)}
						/>
					</CardDesktop>
					<div style={{ display: 'none' }}>
						<AntdImage.PreviewGroup preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}>
							{imageUrls.map((image, index) => (
								<AntdImage key={index} src={image} />
							))}
						</AntdImage.PreviewGroup>
					</div>
				</Fragment>
			)}
		</Fragment>
	);
}
