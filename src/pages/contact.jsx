

function Contact() {
  return (
    <div>
<section className="flex flex-col lg:flex-row gap-10 p-6 sm:p-8 lg:p-12 bg-blue-100">
  {/* Contact Info */}
  <article className="flex-1 flex flex-col gap-6">
    <div className="space-y-2 mb-6">
      <h1 className="text-2xl sm:text-3xl font-semibold">Contact Our Team</h1>
      <p className="text-teal-500 text-sm sm:text-base">
        Get in touch with our team to explore how we can support your financial journey. We're here to answer your questions and provide personalized assistance!
      </p>
    </div>

    <div className="space-y-5">
      <div className="bg-white rounded-lg px-4 py-6 shadow-sm flex gap-4 items-center">
        <img src="phone.svg" alt="phone icon" className="w-6 h-6" />
        <div>
          <p className="text-sm text-teal-500">Give us a call</p>
          <p>
            <a href="tel:+44 45 7200 8200" className="text-blue-500 font-semibold underline">
              +44 45 7200 8200
            </a>
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg px-4 py-6 shadow-sm flex gap-4 items-center">
        <img src="email.svg" alt="email icon" className="w-6 h-6" />
        <div>
          <p className="text-sm text-teal-500">Send us an email</p>
          <p>
            <a href="mailto:info@zeepay.com" className="text-blue-500 font-semibold underline">
              info@zeepay.com
            </a>
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg px-4 py-6 shadow-sm flex gap-4 items-center">
        <img src="location.svg" alt="location icon" className="w-6 h-6" />
        <div>
          <p className="text-sm text-teal-500">Visit us</p>
          <p className="text-blue-500 font-semibold">L.K.Road, Vashi -410200</p>
        </div>
      </div>
    </div>
  </article>

  {/* Contact Form */}
  <article className="flex-1">
    <form className="bg-white rounded-lg p-6 shadow-sm space-y-5">
      <div>
        <h1 className="text-xl sm:text-2xl">We'll get in touch shortly</h1>
        <p className="text-teal-500 text-sm sm:text-base">
          We're here to answer your questions and provide personalized assistance!
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p className="text-sm">
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              type="text"
              placeholder="Enter your name"
              className="border border-gray-300 rounded-md p-2 w-full text-sm"
            />
          </p>
          <p>
            <label htmlFor="email" className="text-sm">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-md p-2 w-full text-sm"
            />
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p>
            <label htmlFor="number" className="text-sm">Phone Number</label>
            <input
              id="number"
              type="number"
              placeholder="Enter your number"
              className="border border-gray-300 rounded-md p-2 w-full text-sm"
            />
          </p>
          <p>
            <label htmlFor="subject" className="text-sm">Subject</label>
            <input
              id="subject"
              type="text"
              placeholder="Enter your subject"
              className="border border-gray-300 rounded-md p-2 w-full text-sm"
            />
          </p>
        </div>
        <div>
          <textarea
            name="message"
            id="message"
            placeholder="Type your message"
            className="border border-gray-300 rounded-md p-2 w-full text-sm mt-2 h-24"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white text-center rounded-md w-full px-4 py-2 text-sm sm:text-base hover:bg-blue-600 transition"
          >
            Send message &gt;
          </button>
        </div>
      </div>
    </form>
  </article>
</section>

      {/* Reviews Section */}
<section className="p-6 sm:p-10 lg:p-14">
  <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold mb-8">
    Customer reviews about Zeepay
  </h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div className="bg-teal-50 p-6 rounded-lg shadow-sm">
      <p className="text-sm sm:text-base md:text-lg">
        "Zeepay makes online payments a breeze! It’s fast, reliable, and so easy to use. I handle all my transactions with just a few taps, whether I’m paying for groceries, services, or sending money to friends. Zeepay truly simplifies my day-to-day payments."
      </p>
      <p className="mt-3 text-xs sm:text-sm md:text-base">
        <span className="font-semibold">Priya K</span>, Small Business Owner
      </p>
    </div>
    <div className="bg-teal-100 p-6 rounded-lg shadow-sm">
      <p className="text-sm sm:text-base md:text-lg">
        "Zeepay makes online payments a breeze! It’s fast, reliable, and so easy to use. I handle all my transactions with just a few taps, whether I’m paying for groceries, services, or sending money to friends. Zeepay truly simplifies my day-to-day payments."
      </p>
      <p className="mt-3 text-xs sm:text-sm md:text-base">
        <span className="font-semibold">Priya K</span>, Small Business Owner
      </p>
    </div>
    <div className="bg-teal-50 p-6 rounded-lg shadow-sm">
      <p className="text-sm sm:text-base md:text-lg">
        "Zeepay makes online payments a breeze! It’s fast, reliable, and so easy to use. I handle all my transactions with just a few taps, whether I’m paying for groceries, services, or sending money to friends. Zeepay truly simplifies my day-to-day payments."
      </p>
      <p className="mt-3 text-xs sm:text-sm md:text-base">
        <span className="font-semibold">Priya K</span>, Small Business Owner
      </p>
    </div>
    <div className="bg-teal-100 p-6 rounded-lg shadow-sm">
      <p className="text-sm sm:text-base md:text-lg">
        "Zeepay makes online payments a breeze! It’s fast, reliable, and so easy to use. I handle all my transactions with just a few taps, whether I’m paying for groceries, services, or sending money to friends. Zeepay truly simplifies my day-to-day payments."
      </p>
      <p className="mt-3 text-xs sm:text-sm md:text-base">
        <span className="font-semibold">Priya K</span>, Small Business Owner
      </p>
    </div>
  </div>
</section>

{/* CTA Section */}
<section className="bg-blue-950 text-white text-center p-8 sm:p-10 lg:p-12 space-y-6">
  <img src="logo.svg" alt="Zeepay Logo" className="mx-auto w-12 sm:w-16 md:w-20" />
  <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
    Get Started with <span className="block">Zeepay Today</span>
  </h2>
  <p className="text-sm sm:text-base md:text-lg max-w-xl mx-auto">
    Experience seamless, secure transactions at your fingertips. Sign up now and simplify your payments with just a few taps!
  </p>
  <button className="bg-white text-blue-500 px-4 sm:px-6 py-2 sm:py-3 rounded-lg mt-4 text-sm sm:text-base font-medium hover:bg-gray-100 transition">
    Get Started now &gt;
  </button>
</section>

{/* Footer Section */}
<section className="w-full p-6 sm:p-8 lg:p-12 bg-gray-50">
  <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 w-full">
    {/* Logo + Description */}
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 mb-2.5">
        <img src="/zeepay-replica/logo.svg" alt="logo" className="w-6 h-6" />
        <span className="text-base sm:text-lg font-semibold">Zeepay</span>
      </div>
      <p className="text-xs sm:text-sm md:text-base text-gray-500">
        Find quick solutions and helpful tips for using Zeepay. We’ve compiled answers to the most frequently asked questions right here.
      </p>
    </div>

    {/* About */}
    <div>
      <p className="font-semibold mb-2.5 text-sm sm:text-base">About</p>
      <div className="flex flex-col gap-1">
        <a href="#" className="text-xs sm:text-sm md:text-base text-gray-500 hover:text-blue-600">Our story</a>
        <a href="#" className="text-xs sm:text-sm md:text-base text-gray-500 hover:text-blue-600">Careers</a>
        <a href="#" className="text-xs sm:text-sm md:text-base text-gray-500 hover:text-blue-600">Blog</a>
        <a href="#" className="text-xs sm:text-sm md:text-base text-gray-500 hover:text-blue-600">Contact Us</a>
      </div>
    </div>

    {/* Resources */}
    <div>
      <p className="font-semibold mb-2.5 text-sm sm:text-base">Resources</p>
      <div className="flex flex-col gap-1">
        <a href="#" className="text-xs sm:text-sm md:text-base text-gray-500 hover:text-blue-600">Help center</a>
        <a href="#" className="text-xs sm:text-sm md:text-base text-gray-500 hover:text-blue-600">API Documentation</a>
        <a href="#" className="text-xs sm:text-sm md:text-base text-gray-500 hover:text-blue-600">Community</a>
        <a href="#" className="text-xs sm:text-sm md:text-base text-gray-500 hover:text-blue-600">Partner</a>
      </div>
    </div>

    {/* Products */}
    <div>
      <p className="font-semibold mb-2.5 text-sm sm:text-base">Products</p>
      <div className="flex flex-col gap-1">
        <a href="#" className="text-xs sm:text-sm md:text-base text-gray-500 hover:text-blue-600">For Personal</a>
        <a href="#" className="text-xs sm:text-sm md:text-base text-gray-500 hover:text-blue-600">For Business</a>
        <a href="#" className="text-xs sm:text-sm md:text-base text-gray-500 hover:text-blue-600">Personal solutions</a>
        <a href="#" className="text-xs sm:text-sm md:text-base text-gray-500 hover:text-blue-600">Imaginations</a>
      </div>
    </div>

    {/* Support */}
    <div>
      <p className="font-semibold mb-2.5 text-sm sm:text-base">Support</p>
      <div className="flex flex-col gap-1">
        <a href="#" className="text-xs sm:text-sm md:text-base text-gray-500 hover:text-blue-600">Customer support</a>
        <a href="#" className="text-xs sm:text-sm md:text-base text-gray-500 hover:text-blue-600">FAQ</a>
        <a href="#" className="text-xs sm:text-sm md:text-base text-gray-500 hover:text-blue-600">Report a problem</a>
        <a href="#" className="text-xs sm:text-sm md:text-base text-gray-500 hover:text-blue-600">Security & Policy</a>
      </div>
    </div>
  </article>
</section>

<footer className='text-center'>&copy; {new Date().getFullYear()} Zeepay</footer>
    </div>
  );
}

export default Contact;

