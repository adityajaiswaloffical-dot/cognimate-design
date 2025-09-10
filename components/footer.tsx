export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black/50 backdrop-blur-xl mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>&copy; 2024 Cognimate. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#4FD1C5] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#4FD1C5] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
