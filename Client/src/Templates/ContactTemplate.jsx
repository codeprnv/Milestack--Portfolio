import React from "react";
import {
	Html,
	Head,
	Preview,
	Body,
	Container,
	Heading,
	Section,
	Text,
	Hr,
} from "@react-email/components";


const ContactTemplate = ({ name, email, message }) => (
	<Html>
		<Head />
		<Preview>New message from your contact form</Preview>
		<Body style={main}>
			<Container style={container}>
				<Heading style={heading}>📬 New Contact Form Submission</Heading>
				<Section style={section}>
					<Text style={label}>👤 Name</Text>
					<Text style={value}>{name}</Text>
					<Hr style={hr} />
					<Text style={label}>📧 Email</Text>
					<Text style={value}>{email}</Text>
					<Hr style={hr} />
					<Text style={label}>💬 Message</Text>
					<Text style={messageStyle}>{message}</Text>
				</Section>
				<Text style={footer}>
					This message was sent from your portfolio contact form.
				</Text>
			</Container>
		</Body>
	</Html>
);

export default ContactTemplate;

// Styles
const main = {
	backgroundColor: "#f9f9f9",
	padding: "20px 0",
	fontFamily: "Helvetica, Arial, sans-serif",
};

const container = {
	backgroundColor: "#ffffff",
	padding: "30px",
	borderRadius: "8px",
	maxWidth: "600px",
	margin: "0 auto",
	boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
};

const heading = {
	fontSize: "24px",
	marginBottom: "20px",
	color: "#333333",
	textAlign: "center",
};

const section = {
	padding: "10px 0",
};

const label = {
	fontSize: "14px",
	fontWeight: "bold",
	color: "#555555",
	marginBottom: "5px",
};

const value = {
	fontSize: "16px",
	color: "#333333",
	marginBottom: "15px",
};

const messageStyle = {
	fontSize: "16px",
	color: "#333333",
	backgroundColor: "#f0f0f0",
	padding: "15px",
	borderRadius: "5px",
	whiteSpace: "pre-wrap",
};

const hr = {
	border: "none",
	borderTop: "1px solid #eeeeee",
	margin: "15px 0",
};

const footer = {
	fontSize: "12px",
	color: "#999999",
	textAlign: "center",
	marginTop: "30px",
};
