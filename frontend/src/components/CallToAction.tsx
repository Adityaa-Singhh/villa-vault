const CallToAction = () => {
    return (
        <section className="text-slateBlue block font-sans text-[16px] font-normal text-start text-size-adjust-100 isolate my-20">
            <div className="relative bg-primaryColor py-[6.5rem] px-16 rounded-xl">
                {/* Align the quarter-circle to the left */}
                <div className="absolute top-0 right-0 quarter-circle bg-secondary w-[280px] h-[280px] sm:w-[180px] sm:h-[180px] opacity-10 z-0"></div>
                <div className="flex flex-col">
                    <h1 className="text-cloudWhite text-center text-[32px] sm:text-[40px] lg:text-[47.7757px]">
                        Ready to embark on a journey of digital transformation?
                    </h1>
                    <div className="flex justify-center mt-12 text-[16px] gap-2">
                        <input
                            className="text-left px-6 py-3 sm:px-9 rounded-full font-medium text-jetBlack placeholder:text-jetBlack"
                            type="email"
                            placeholder="Your email address"
                        />
                        <button className="bg-green-400 px-6 py-3 sm:px-9 rounded-full font-medium text-jetBlack">Start Now</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallToAction
