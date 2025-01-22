import { Link } from "react-router"

const Footer = () => {
    return (
        <footer className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 py-20 px-14">
            <div>
                <h3 className="text-3xl font-bold text-primaryColor">
                    Boldo
                </h3>
                <p>All rights reserved</p>
            </div>
            <div className="flex flex-col gap-4">
                <h4 className="text-black text-xl font-bold">Landings</h4>
                <Link to={'/'}>
                    Home
                </Link>
                <Link to={'/products'}>
                    Products
                </Link>
                <Link to={'/services'}>
                    Services
                </Link>
            </div>
            <div className="flex flex-col gap-4">
                <h4 className="text-black text-xl font-bold">Company</h4>
                <Link to={'/'}>
                    Home
                </Link>
                <Link to={'/products'}>
                    Careers
                </Link>
                <Link to={'/services'}>
                    Services
                </Link>
            </div>
            <div className="flex flex-col gap-4">
                <h4 className="text-black text-xl font-bold">Resources</h4>
                <Link to={'/'}>
                    Blog
                </Link>
                <Link to={'/products'}>
                    Products
                </Link>
                <Link to={'/services'}>
                    Services
                </Link>
            </div>
        </footer>
    )
}

export default Footer
