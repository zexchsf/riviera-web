function Footer() {
    return (
        <footer className="bg-navy-900 text-white py-8 md:py-12 lg:py-16 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                <p className="text-center text-xs sm:text-sm md:text-base">
                    &copy; {new Date().getFullYear()} Riviera Homes. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer;
