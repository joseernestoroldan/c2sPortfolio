"use client";

import { useFormStatus } from "react-dom";

const ContactButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      aria-disabled={pending}
      className="w-full max-w-xl bg-gray-300 dark:bg-gray-700 rounded-xl p-4 border border-gray-500 hover:bg-gray-400"
    >
      Send
    </button>
  );
};

export default ContactButton;
