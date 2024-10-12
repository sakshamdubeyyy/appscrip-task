import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="relative w-full h-[750px] bg-black">
                {/* <!-- Footer Background --> */}
                <div className="absolute inset-0 bg-black"></div>

                {/* <!-- Follow Us Section --> */}
                <div className="absolute left-[888px] top-[549px] flex gap-2 items-start">
                    <div className="w-14 h-[35px] relative">
                        <div className="absolute inset-0 bg-white rounded-[5px] border border-[#fff2f5]"></div>
                    </div>
                    <div className="w-14 h-[35px] relative">
                        <div className="absolute inset-0 bg-white rounded-[5px] border border-[#fff2f5]"></div>
                    </div>
                    <div className="w-14 h-[35px] relative">
                        <div className="absolute inset-0 bg-white rounded-[5px] border border-[#fff2f5]"></div>
                    </div>
                    <div className="w-14 h-[35px] relative">
                        <div className="absolute inset-0 bg-[#006fcf] rounded-[5px] border border-[#fff2f5]"></div>
                    </div>
                    <div className="w-14 h-[35px] relative">
                        <div className="absolute inset-0 bg-white rounded-[5px] border border-[#fff2f5]"></div>
                    </div>
                    <div className="w-14 h-[35px] relative">
                        <div className="absolute inset-0 bg-[#5a31f4] rounded-[5px] border border-[#fff2f5]"></div>
                    </div>
                </div>

                {/* <!-- Social Media Icons --> */}
                <div className="absolute left-[888px] top-[373px] w-[98px] h-20">
                    <div className="flex gap-3 items-start">
                        <div className="relative w-8 h-8">
                            <div className="absolute inset-0 bg-black rounded-full border border-white"></div>
                        </div>
                        <div className="relative w-8 h-8">
                            <div className="absolute inset-0 bg-black rounded-full border border-white"></div>
                        </div>
                    </div>
                    <div className="absolute text-white text-xl font-bold uppercase">Follow Us</div>
                </div>

                {/* <!-- About Us Section --> */}
                <div className="absolute left-[128px] top-[373px] w-[166px] h-[260px]">
                    <div className="absolute top-[48px] w-full flex flex-col gap-4">
                        <div className="text-white text-lg">About Us</div>
                        <div className="text-white text-lg">Stories</div>
                        <div className="text-white text-lg">Artisans</div>
                        <div className="text-white text-lg">Boutiques</div>
                        <div className="text-white text-lg">Contact Us</div>
                        <div className="text-white text-lg">EU Compliances Docs</div>
                    </div>
                    <div className="absolute text-white text-2xl font-bold">mettā muse</div>
                </div>

                {/* <!-- Quick Links Section --> */}
                <div className="absolute left-[504px] top-[373px] w-[163px] h-[298px]">
                    <div className="absolute top-[48px] w-full flex flex-col gap-4">
                        <div className="text-white text-lg">Orders & Shipping</div>
                        <div className="text-white text-lg">Join/Login as a Seller</div>
                        <div className="text-white text-lg">Payment & Pricing</div>
                        <div className="text-white text-lg">Return & Refunds</div>
                        <div className="text-white text-lg">FAQs</div>
                        <div className="text-white text-lg">Privacy Policy</div>
                        <div className="text-white text-lg">Terms & Conditions</div>
                    </div>
                    <div className="absolute text-white text-xl font-bold uppercase">Quick Links</div>
                </div>

                {/* <!-- Newsletter Subscription Section --> */}
                <div className="absolute left-[128px] top-[197px] w-[584px] h-12">
                    <div className="relative flex justify-start items-center gap-2 bg-white px-6 py-3.5 rounded-[5px]">
                        <div className="text-[#bec7cd] text-lg">Enter your e-mail...</div>
                    </div>
                    <div className="absolute left-[400px] w-[184px] h-12 opacity-30 bg-black rounded-[5px] border border-white flex justify-center items-center">
                        <div className="text-white text-lg font-medium uppercase">Subscribe</div>
                    </div>
                </div>

                {/* <!-- Additional Info --> */}
                <div className="absolute left-[128px] top-[127px] text-white text-base">Sign up for updates from mettā muse.</div>
                <div className="absolute left-[888px] top-[79px] text-white text-xl font-bold uppercase">CONTACT US</div>
                <div className="absolute left-[888px] top-[197px] text-white text-xl font-bold uppercase">Currency</div>

                {/* <!-- Contact Info --> */}
                <div className="absolute left-[888px] top-[237px] flex items-center gap-[5px]">
                    <div className="w-6 h-6 rounded-3xl">
                        <img className="mt-1 rounded-full " src="https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg"/>
                    </div>
                    <div className="text-white text-base font-bold tracking-wide">USD</div>
                </div>
                <div className="absolute left-[888px] top-[277px] w-[447px] text-white text-xs">Transactions will be completed in Euros and a currency reference is available on hover.</div>

                {/* <!-- Footer Bottom --> */}
                <div className="absolute left-[573px] top-[708px] text-center text-white text-sm">Copyright © 2023 mettamuse. All rights reserved.</div>
            </div>

        </div>
    )
}

export default Footer