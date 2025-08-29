export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold" data-testid="logo">STARLINK</div>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-accent transition-colors" data-testid="nav-personal">Personal</a>
          <a href="#" className="hover:text-accent transition-colors" data-testid="nav-business">Business</a>
          <a href="#" className="hover:text-accent transition-colors" data-testid="nav-support">Support</a>
        </nav>
        <button className="md:hidden" data-testid="menu-button">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
