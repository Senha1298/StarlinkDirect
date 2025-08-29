import starlinkLogo from '@assets/starlink-logo.png';

export default function Header() {
  return (
    <>
      {/* Promotional Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white text-black py-1 px-4">
        <div className="container mx-auto text-center max-w-7xl">
          <p className="font-bold text-sm" style={{textShadow: 'none'}} data-testid="promo-banner">
            Try Starlink and get a SIM card with internet access for just $9.90 with no monthly fees.
          </p>
        </div>
      </div>
      
      {/* Main Header */}
<header className="fixed top-10 left-0 right-0 z-40 bg-black/85 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
          <div className="flex items-center" data-testid="logo">
            <img 
              src={starlinkLogo} 
              alt="Starlink" 
              className="h-8 w-auto"
            />
          </div>
          <nav className="hidden md:flex space-x-10">
            <a href="#" className="text-white/90 hover:text-white transition-colors font-medium text-sm tracking-wide" data-testid="nav-personal">PERSONAL</a>
            <a href="#" className="text-white/90 hover:text-white transition-colors font-medium text-sm tracking-wide" data-testid="nav-business">BUSINESS</a>
            <a href="#" className="text-white/90 hover:text-white transition-colors font-medium text-sm tracking-wide" data-testid="nav-support">SUPPORT</a>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white/90 hover:text-white transition-colors font-medium text-sm tracking-wide">
              SIGN IN
            </button>
            <button className="bg-white text-black px-4 py-2 rounded-sm font-medium text-sm tracking-wide hover:bg-white/90 transition-colors">
              ORDER NOW
            </button>
          </div>
          <button className="md:hidden text-white" data-testid="menu-button">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}
