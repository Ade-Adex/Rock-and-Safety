'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function subscribeNewsletter(formData: FormData) {
  const email = formData.get('email') as string

  if (!email || !email.includes('@')) {
    return { success: false, message: 'Please provide a valid email address.' }
  }

  try {
    // 1. Add the subscriber to your Resend Contacts/Audience
    // (If you created a specific Audience ID in your Resend dashboard, you can pass `audienceId: 'YOUR_ID'`)
    const { error: contactError } = await resend.contacts.create({
      email: email,
      unsubscribed: false,
    })

    if (contactError) {
      console.error('Resend contact error:', contactError)
      return {
        success: false,
        message: 'This email might already be subscribed.',
      }
    }

    // 2. (Optional) Send a notification email to yourself about the new subscriber
    await resend.emails.send({
      from: `Rock & Safety <info@rockandsafety.com>`, // Use your verified domain email
      to: ['info@rockandsafety.com'],
      subject: 'New Newsletter Subscriber!',
      text: `A new user just subscribed to the newsletter: ${email}`,
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
