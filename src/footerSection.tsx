import { useState } from "react";
const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.21-6.83-5.07 6.83H1.725l7.393-8.49L.82 2.25h3.308l5.4 7.08z"/>
  </svg>
);

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM4 21h4V9H4v12zM6 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2zm-.2 4A2.4 2.4 0 0 0 5 7.4v8.2a2.4 2.4 0 0 0 2.4 2.4h8.2a2.4 2.4 0 0 0 2.4-2.4V7.4A2.4 2.4 0 0 0 16.2 5H7.6zm9.6.7a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg>
);

const YouTubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.4 4.5A2.44 2.44 0 0 0 18 2.25H6A2.44 2.44 0 0 0 3.6 4.5 25.1 25.1 0 0 0 3 9.4c0 5 1.5 9.4 3 9.4h12c1.5 0 3-4.4 3-9.4a25.1 25.1 0 0 0-.6-4.9zM10 16V8l6 4-6 4z"/>
  </svg>
);

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.217 6.06c-.4-.367-1.04-.567-1.84-.567H5.62c-.8 0-1.44.2-1.84.567A8.1 8.1 0 0 0 3 10.433v5.6c0 .1.067.133.167.133.433 0 .733-.3.867-.733l.233-1.067c.367.133.7.233 1.033.3.067 0 .133.033.2.033 4.167 0 7.6-3.833 7.6-3.833a10.88 10.88 0 0 1 3.533 1.2 1.3 1.3 0 0 1 .434.334c.133.3.2.666.2.933 0 .433-.167.667-.5.734-.3.066-.633.1-1 .133l-.233 1.067c.133.433.433.733.867.733.1 0 .167-.033.167-.133v-5.6c0-1.8-.467-3.467-1.333-4.877zM8 14.5c-.733 0-1.333-.6-1.333-1.333 0-.733.6-1.333 1.333-1.333.733 0 1.333.6 1.333 1.333 0 .733-.6 1.333-1.333 1.333zm8 0c-.733 0-1.333-.6-1.333-1.333 0-.733.6-1.333 1.333-1.333.733 0 1.333.6 1.333 1.333 0 .733-.6 1.333-1.333 1.333z"/>
  </svg>
);

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.036 2a10.02 10.02 0 0 0-8.875 14.881l-1.096 4.019 4.144-1.077A10.04 10.04 0 0 0 12.058 22h-.022A10.02 10.02 0 0 0 22 12.036C22 6.505 17.525 2 12.036 2zm.006 17.616c-1.336 0-2.67-.358-3.818-1.054l-.271-.161-2.767.72.732-2.825-.178-.283c-.768-1.295-1.176-2.781-1.176-4.303a7.56 7.56 0 0 1 7.585-7.585c4.17 0 7.585 3.415 7.585 7.585a7.56 7.56 0 0 1-7.585 7.585zM17.13 14.93c-.092-.152-.338-.242-.71-.433-.372-.191-2.203-1.082-2.544-1.201-.34-.119-.59-.179-.84.179-.25.358-.962 1.201-1.18 1.44-.218.239-.436.269-.807.09a10.45 10.45 0 0 1-3.265-2.012c-.528-.485-.886-1.157-1.176-1.636-.289-.479.032-.446.257-.674.204-.204.382-.479.573-.717.191-.238.254-.423.364-.672.109-.25.054-.479-.027-.672-.08-.194-.808-1.936-1.107-2.651-.299-.715-.602-.618-.827-.627-.204-.009-.436-.009-.672-.009-.235 0-.616.089-.949.447-.333.359-1.275 1.258-1.275 3.064 0 1.806 1.304 3.55 1.865 4.288 1.137 1.493 2.654 2.21 4.168 2.583 1.514.374 3.037.323 4.19.141 1.252-.196 2.654-.863 3.035-1.341.383-.478.25-.886.17-1.038z"/>
  </svg>
);

const FooterLink: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
  <li>
    <a href={href} className="text-gray-400 hover:text-white transition duration-200">
      {children}
    </a>
  </li>
);

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log(`Subscribing: ${email}`);
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000); 
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#181a20] text-white pt-16 pb-6 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-gray-700/50 pb-12">
          
          <div className="lg:col-span-1">
            <div className="flex items-center text-3xl font-bold mb-2 text-purple-400">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-1 text-purple-600">
                  <path d="M7 21L17 12L7 3V21Z" />
              </svg>
              Vācaka.AI
            </div>
            <p className="text-sm text-purple-300 mb-8">Go Live, Go Flawless, Go Regional</p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">About Us</h3>
              <p className="text-sm text-gray-400">
                Vācaka.AI is an AI-first infrastructure company, disrupting generalized AI voice synthesis.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
              <div className="text-sm text-gray-400 space-y-2">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  <span>+91 930636000*</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  <a href="mailto:contactus@vacaka.ai">contactus@vacaka.ai</a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-3 text-sm">
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Our Story</FooterLink>
              <FooterLink href="#">Blogs</FooterLink>
              <FooterLink href="#">Testimonials</FooterLink>
              <FooterLink href="#">Trust & Safety</FooterLink>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Helpful Links</h3>
            <ul className="space-y-3 text-sm">
              <FooterLink href="#">Products</FooterLink>
              <FooterLink href="#">Supports</FooterLink>
              <FooterLink href="#">Terms & Conditions</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Subscribe More Info</h3>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full py-3 pl-12 pr-4 bg-gray-100 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
                />
                <svg className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-purple-700 text-white font-semibold rounded-xl shadow-lg hover:bg-purple-600 transition duration-200 focus:outline-none focus:ring-4 focus:ring-purple-300/50"
                disabled={subscribed}
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
              {subscribed && <p className="text-green-400 text-sm mt-2">Thanks for subscribing!</p>}
            </form>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-6">
          
          <div className="flex space-x-4 mb-4 sm:mb-0">
            {[
              { Icon: XIcon, label: 'X (Twitter)' },
              { Icon: LinkedInIcon, label: 'LinkedIn' },
              { Icon: WhatsAppIcon, label: 'WhatsApp' },
              { Icon: InstagramIcon, label: 'Instagram' },
              { Icon: YouTubeIcon, label: 'YouTube' },
              { Icon: DiscordIcon, label: 'Discord' },
            ].map(({ Icon, label }, index) => (
              <a 
                key={index} 
                href="#" 
                className="p-2 rounded-full border border-gray-700 text-white hover:border-purple-500 hover:text-purple-500 transition duration-200"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <p className="text-sm text-gray-500">
            © 2025 Vācaka.AI — Built with ❤️ in India
          </p>
        </div>
      </div>
      
      <button
        onClick={handleScrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-purple-700 rounded-full shadow-xl hover:bg-purple-600 transition duration-200 z-30 opacity-90"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>
      </button>
    </footer>
  );
};

export default Footer;