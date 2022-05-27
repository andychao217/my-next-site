export default async function sendEmail(req, res) {
	const { firstName, lastName, email } = req.body;
	console.log(req.method);
	console.log('req.body', req.body);
	if (req.method === 'POST') {
		return res.status(200).json({
			message: JSON.stringify(req.body),
		});
	} else {
		return res.status(200).json({
			message: JSON.stringify(req.body),
		});
	}
}
