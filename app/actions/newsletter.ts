'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function subscribeNewsletter(formData: FormData) {
  const name = (formData.get('name') as string)?.trim() || ''
  const email = (formData.get('email') as string)?.trim() || ''

  if (!email || !email.includes('@')) {
    return { success: false, message: 'Please provide a valid email address.' }
  }

  // Split name into firstName and lastName for Resend contact creation
  const nameParts = name.split(' ')
  const firstName = nameParts[0] || ''
  const lastName = nameParts.slice(1).join(' ') || ''

  try {
    // 1. Add subscriber to Resend Contacts with name details
    const { error: contactError } = await resend.contacts.create({
      email: email,
      firstName: firstName,
      lastName: lastName,
      unsubscribed: false,
    })

    if (contactError) {
      console.error('Resend contact error:', contactError)
      return {
        success: false,
        message: 'This email might already be subscribed.',
      }
    }

    // 2. Send notification email to admin with name included
    await resend.emails.send({
      from: `Rock & Safety <info@rockandsafety.com>`,
      to: ['info@rockandsafety.com'],
      subject: 'New Newsletter Subscriber!',
      text: `A new user just subscribed to the newsletter:\nName: ${name || 'N/A'}\nEmail: ${email}`,
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
