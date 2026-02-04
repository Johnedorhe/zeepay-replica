

function Contact() {
  return (
    <div>
      <section className="flex gap-10 p-8 bg-blue-100">
        <article className="flex-1 flex flex-col gap-6">
          <div className="space-y-2 mb-6">
            <h1 className="text-3xl font-semibold">Contact Our Team</h1>
            <p className="text-teal-500">Get in touch with our team to explore how we can support your financial journey. We're here to answer your questions and provide personalized assistance!</p>
          </div>
          

          <div className="space-y-5">
            <div className="bg-white rounded-lg px-2 py-6 shadow-sm flex gap-4 items-center">
              <div><img src="phone.svg" alt="phone icon" width="24" height="24" /></div>
              <div>
              <p className="text-sm text-teal-500">Give us a call</p>
              <p><a href="tel:+44 45 7200 8200" className="text-blue-500 font-semibold underline">+44 45 7200 8200</a></p>
              </div>
            </div>

            <div className="bg-white rounded-lg px-2 py-6 shadow-sm flex gap-4 items-center">
              <div><img src="email.svg" alt="email icon" width="24" height="24" /></div>
              <div>
              <p className="text-sm text-teal-500">Send us an email</p>
              <p><a href="mailto:info@zeepay.com" className="text-blue-500 font-semibold underline">info@zeepay.com</a></p>
              </div>
            </div>

            <div className="bg-white rounded-lg px-2 py-6 shadow-sm flex gap-4 items-center">
              <div><img src="location.svg" alt="location icon" width="24" height="24" /></div>
              <div>
              <p className="text-sm text-teal-500">Visit us</p>
              <p className="text-blue-500 font-semibold">L.K.Road, Vashi -410200</p>
              </div>
              </div>

          </div>
        </article>

        <article className="flex-1">
          <form className="bg-white rounded-lg p-6 shadow-sm space-y-5">
            <div>
              <h1 className="text-2xl">We'll get in touch shortly</h1>
              <p className="text-teal-500 text-sm">We're here to answer your questions and provide personalized assistance!</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
              <p className="text-sm">
              <label htmlFor="fullName">Full Name</label>
              <input id="fullName" type="text" placeholder="Enter your name" className="border border-gray-300 rounded-md p-1 w-full" />
              </p>
              <p>
              <label htmlFor="email" className="text-sm">Email Address</label>
              <input id="email" type="email"  placeholder="Email Address" className="text-sm border border-gray-300 rounded-md p-1 w-full" />
              </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <p>
                <label htmlFor="number" className="text-sm">Phone Number</label>
                <input id="number" type="number" placeholder="Enter your number" className="border text-sm border-gray-300 rounded-md p-1 w-full" />
                </p>
                <p>
                <label htmlFor="subject" className="text-sm">Subject</label>
                <input id="subject" type="text" placeholder="Enter your subject" className="border text-sm border-gray-300 rounded-md p-1 w-full" />
                </p>
              </div>
              <div>
                <textarea name="message" id="message" placeholder="Type your message" className="border text-sm border-gray-300 rounded-md p-1 w-full mt-2 h-14"></textarea>
              </div>
              <div>
                <button type="submit" className="bg-blue-500 text-white text-center rounded-md w-full px-4 py-1 text-sm">Send message &gt;</button>
              </div>
            </div>
          </form>
        </article>
      </section>

      <section>
        <h1 className="text-center text-2xl font-semibold mt-8">Customer reviews about Zeepay</h1>

        <div className="grid grid-cols-2 gap-6 p-14">
        <div className='bg-teal-50 p-6 rounded-lg'><p>"Zeepay makes online payments a breeze! It’s fast, reliable, and so easy to use. I handle all my transactions with just a few taps, whether I’m paying for groceries, services, or sending money to friends. Zeepay truly simplifies my day-to-day payments."</p>
          <p><span className='font-semibold'>Priya K</span>, Small Business Owner</p>
        </div>
        <div className='bg-teal-100 p-6 rounded-lg'><p>"Zeepay makes online payments a breeze! It’s fast, reliable, and so easy to use. I handle all my transactions with just a few taps, whether I’m paying for groceries, services, or sending money to friends. Zeepay truly simplifies my day-to-day payments."</p>
          <p><span className='font-semibold'>Priya K</span>, Small Business Owner</p>
        </div>
        <div className='bg-teal-50 p-6 rounded-lg'><p>"Zeepay makes online payments a breeze! It’s fast, reliable, and so easy to use. I handle all my transactions with just a few taps, whether I’m paying for groceries, services, or sending money to friends. Zeepay truly simplifies my day-to-day payments."</p>
          <p><span className='font-semibold'>Priya K</span>, Small Business Owner</p>
        </div>
        <div className='bg-teal-100 p-6 rounded-lg'><p>"Zeepay makes online payments a breeze! It’s fast, reliable, and so easy to use. I handle all my transactions with just a few taps, whether I’m paying for groceries, services, or sending money to friends. Zeepay truly simplifies my day-to-day payments."</p>
          <p><span className='font-semibold'>Priya K</span>, Small Business Owner</p>
        </div>
        </div>
      </section>
      <section className='bg-blue-950 text-white text-center p-10 mt-15 space-y-7'> 
          <div><img src="logo.svg" alt="Zeepay Logo" width={64} height={64} className='mx-auto' /></div>
          <h2 className='font-semibold text-5xl'>Get Started with <span className='block'> Zeepay Today</span></h2>
          <p>Experience seamless, secure transactions at your fingertips. Sign up now and simplify your payments with just a few taps!</p>
          <button className="bg-white text-blue-500 px-6 py-3 rounded-lg mt-4">Get Started now &gt;</button>
        </section>
      <section className='w-full p-12'>
        <article className='flex justify-between items-start w-full'>
          <div className='flex-2'>
            <div className='flex gap-1 mb-2.5'>
              <img src="/zeepay-replica/logo.svg" alt="logo" width={25} /> Zeepay
            </div>
            <p className='text-sm text-gray-500'>Find quick solutions and helpful tips for using <span className='block'> Zeepay. We’ve compiled answers to the most</span> <span className='block'> frequently asked questions right here.</span></p>
          </div>
          <div className='flex-1'>
            <p className='font-semibold mb-2.5'>About</p>
            <div className='flex flex-col'>
            <a href="#" className='text-sm text-gray-500'>Our story</a>
            <a href="#" className='text-sm text-gray-500'>Careers</a>
            <a href="#" className='text-sm text-gray-500'>Blog</a>
            <a href="#" className='text-sm text-gray-500'>Contact Us</a>
            </div>
          </div>
          <div className='flex-1'>
            <p className='font-semibold mb-2.5'>Resources</p>
            <div className='flex flex-col'>
            <a href="#" className='text-sm text-gray-500'>Help center</a>
            <a href="#" className='text-sm text-gray-500'>API Documentation</a>
            <a href="#" className='text-sm text-gray-500'>Community</a>
            <a href="#" className='text-sm text-gray-500'>Partner</a>
            </div>
          </div>
          <div className='flex-1'>
            <p className='font-semibold mb-2.5'>Products</p>
            <div className='flex flex-col'>
            <a href="#" className='text-sm text-gray-500'>For Personal</a>
            <a href="#" className='text-sm text-gray-500'>For Business</a>
            <a href="#" className='text-sm text-gray-500'>Personal solutions</a>
            <a href="#" className='text-sm text-gray-500'>Imaginations</a>
            </div>
          </div>
          <div className='flex-1'>
            <p className='font-semibold mb-2.5'>Support</p>
            <div className='flex flex-col'>
            <a href="#" className='text-sm text-gray-500'>Customer support</a>
            <a href="#" className='text-sm text-gray-500'>FAQ</a>
            <a href="#" className='text-sm text-gray-500'>Report a problem</a>
            <a href="#" className='text-sm text-gray-500'>Security & Policy</a>
            </div>
          </div>
        </article>
      </section>    

    <footer className='text-center'>&copy; {new Date().getFullYear()} Zeepay</footer>
    </div>
  );
}

export default Contact;

