import express from "express";
import { Resend } from "resend";
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();
const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/", async (req, res) => {
	const { name, html } = req.body;

	try {

		// Send email using Resend
		const response = await resend.emails.send({
			from: "Milestack Contact Form <onboarding@resend.dev>",
			to: "pranavpradhan23424@gmail.com",
			subject: `📬 New message from ${name}`,
			html: html,
		});

		res.status(200).json({ success: true });
		console.log('Response: ',response);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Email not sent" });
	}
});

export default router;
