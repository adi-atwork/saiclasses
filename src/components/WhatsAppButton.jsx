"use client";

import { MessageCircleMore } from "lucide-react";
import Link from "next/link";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Link
        href="https://wa.me/+917835850337" // Replace with your WhatsApp number
        target="_blank"
        className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircleMore className="w-6 h-6" />
      </Link>
    </div>
  );
}
