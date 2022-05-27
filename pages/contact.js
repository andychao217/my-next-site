import React, { Fragment } from 'react';
import { Form, Input, Button, Dialog, TextArea } from 'antd-mobile';
import { Card } from 'antd';
import { FormattedMessage } from 'react-intl';
import axios from 'axios';

export default function Home(props) {
	const placeholderTxt = props.currentLocale === 'en-US' ? 'Please input' : '请输入';

	const onFinish = async (values) => {
		try {
			const res = await axios.get(
				`/public/PHPMailer/sendMail.php?contactName=${values.name}&contactEmail=${values.email}&contactSubject=${values.subject}&contactMessage=${values.message}`,
			);
			Dialog.alert({
				content: <pre>{<FormattedMessage id='sendSuccess' />}</pre>,
				//sendFailed
			});
		} catch (e) {
			console.log('e', e);
		}
	};

	const getContactForm = () => {
		return (
			<Form
				name={props.isMobilePlatform ? 'contactFormMobile' : 'contactFormDesktop'}
				onFinish={onFinish}
				footer={
					<Button block={props.isMobilePlatform} type='submit' color='primary' size='large'>
						<FormattedMessage id='submit' />
					</Button>
				}
			>
				<Form.Header>{<FormattedMessage id='send' />}</Form.Header>
				<Form.Item
					name='name'
					label={<FormattedMessage id='nameInput' />}
					rules={[
						{ required: true, message: <FormattedMessage id='required' /> },
						{
							type: 'string',
							min: 2,
							message: (
								<span>
									<FormattedMessage id='minStringLength' />
									<span>2</span>
								</span>
							),
						},
					]}
				>
					<Input placeholder={placeholderTxt} />
				</Form.Item>
				<Form.Item
					name='email'
					label={<FormattedMessage id='emailInput' />}
					rules={[
						{ required: true, message: <FormattedMessage id='required' /> },
						{
							type: 'string',
							min: 6,
							message: (
								<span>
									<FormattedMessage id='minStringLength' />
									<span>6</span>
								</span>
							),
						},
						{ type: 'email', message: <FormattedMessage id='wrongFormat' /> },
					]}
				>
					<Input placeholder={placeholderTxt} />
				</Form.Item>
				<Form.Item
					name='subject'
					label={<FormattedMessage id='subjectInput' />}
					rules={[
						{ required: true, message: <FormattedMessage id='required' /> },
						{
							type: 'string',
							min: 2,
							message: (
								<span>
									<FormattedMessage id='minStringLength' />
									<span>2</span>
								</span>
							),
						},
					]}
				>
					<Input placeholder={placeholderTxt} />
				</Form.Item>
				<Form.Item
					name='message'
					label={<FormattedMessage id='messageInput' />}
					rules={[
						{ required: true, message: <FormattedMessage id='required' /> },
						{
							type: 'string',
							min: 6,
							message: (
								<span>
									<FormattedMessage id='minStringLength' />
									<span>6</span>
								</span>
							),
						},
					]}
				>
					<TextArea placeholder={placeholderTxt} maxLength={100} rows={2} showCount />
				</Form.Item>
			</Form>
		);
	};

	return (
		<Fragment>
			{props.isMobilePlatform ? (
				<Fragment>
					<div style={{ height: 'calc(100vh - 115px)', padding: '0px 0px 10px 0px', backgroundColor: '#fff', overflowY: 'auto' }}>
						{getContactForm()}
					</div>
				</Fragment>
			) : (
				<Fragment>
					<Card style={{ borderRadius: '5px' }}>{getContactForm()}</Card>
				</Fragment>
			)}
		</Fragment>
	);
}
