export default function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/919211825264"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-secondary text-on-secondary w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform z-50"
      aria-label="Chat on WhatsApp"
    >
      <span className="material-symbols-outlined text-2xl">chat</span>
    </a>
  )
}
