"use client"
import React from 'react'
import { useFormStatus } from 'react-dom'

const ContactButton = () => {
    const { pending } = useFormStatus()
  return (
    <button aria-disabled={pending} className="w-1/2 bg-gray-300 dark:bg-gray-700 rounded-xl p-4">Send</button>
  )
}

export default ContactButton