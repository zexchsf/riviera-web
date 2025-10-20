function Footer() {
    return (
        <footer className="bg-navy-900 text-white py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <p className="text-center text-sm">
                    &copy; {new Date().getFullYear()} Riviera Homes. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer;
