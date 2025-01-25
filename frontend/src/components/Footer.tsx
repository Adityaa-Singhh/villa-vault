import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="py-10 border-t">
      <div className="flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Branding Section */}
          <div>
            <h3 className="text-3xl font-bold mb-4 text-primaryColor">Boldo</h3>
            <p className="text-gray-400">All rights reserved</p>
          </div>

          {/* Landings Links */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-primaryColor">Landings</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-400 transition-colors duration-200" aria-label="Go to Home">Home</Link>
              <Link to="/products" className="text-gray-400 transition-colors duration-200" aria-label="Go to Products">Products</Link>
              <Link to="/services" className="text-gray-400 transition-colors duration-200" aria-label="Go to Services">Services</Link>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-primaryColor">Company</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-400 transition-colors duration-200" aria-label="Go to Home">Home</Link>
              <Link to="/careers" className="text-gray-400 transition-colors duration-200" aria-label="Go to Careers">Careers</Link>
              <Link to="/services" className="text-gray-400 transition-colors duration-200" aria-label="Go to Services">Services</Link>
            </div>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-primaryColor">Resources</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/blog" className="text-gray-400 transition-colors duration-200" aria-label="Go to Blog">Blog</Link>
              <Link to="/products" className="text-gray-400 transition-colors duration-200" aria-label="Go to Products">Products</Link>
              <Link to="/services" className="text-gray-400 transition-colors duration-200" aria-label="Go to Services">Services</Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-10 border-t pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Boldo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
