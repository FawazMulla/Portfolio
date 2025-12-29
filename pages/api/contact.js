// Simple local contact form handler for testing
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, company, subject, message } = req.body;

  // Log the form data to console for local testing
  console.log('=== Contact Form Submission ===');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Company:', company);
  console.log('Subject:', subject);
  console.log('Message:', message);
  console.log('Timestamp:', new Date().toISOString());
  console.log('================================');

  // Simulate email sending delay
  setTimeout(() => {
    res.status(200).json({ 
      success: true, 
      message: 'Message received! Check your console for details.' 
    });
  }, 1000);
}