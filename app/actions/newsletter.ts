'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function subscribeNewsletter(formData: FormData) {
  const email = formData.get('email') as string

  if (!email || !email.includes('@')) {
    return { success: false, message: 'Please provide a valid email address.' }
  }

  try {
    // Optional: You can send an email to yourself, or use Resend Audience API if you set up contacts
    await resend.emails.send({
      from: `Rock & Safety <onboarding@resend.dev>`, // Replace with your verified domain e.g. info@rockandsafety.com once DNS verifies
      to: ['info@rockandsafety.com'], // Where you want to receive notifications
      subject: 'New Newsletter Subscriber',
      text: `New subscriber email: ${email}`,
    })

    return { success: true, message: 'Thank you for subscribing!' }
  } catch (error) {
    console.error('Newsletter error:', error)
    return {
      success: false,
      message: 'Something went wrong. Please try again.',
    }
  }
}
