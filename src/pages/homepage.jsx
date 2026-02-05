import React from 'react'

const Homepage = () => {
  return (
    <div className='flex flex-col gap-12 min-[400px]:justify-center min-[400px]:items-center '>
    {/* first section */}
  <section className="flex flex-col lg:flex-row bg-blue-100 gap-6 min-w-screen">
  {/* Text Section */}
  <div className="flex-1 flex flex-col p-6 sm:p-8 md:p-12 gap-6">
    <p className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[64px] 
                 leading-[30px] sm:leading-[40px] md:leading-[48px] lg:leading-[72px] 
                 tracking-[-0.03em] text-left">
      Early pay, Automatic{" "}
      <span className="block">savings, Transform</span> your money habits
    </p>

    <p className="text-base sm:text-lg md:text-xl text-gray-700 text-left">
      Support small businesses with simple invoicing, powerful integrations,
      <span className="block">
        and cash flow management tools.
      </span>
    </p>

    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm sm:text-base">
        Get Started
      </button>
      <button className="text-blue-500 bg-white px-4 py-2 rounded-md text-sm sm:text-base">
        Learn more
      </button>
    </div>

    <p className="text-xs sm:text-sm md:text-base text-gray-800 mt-6">
      Trusted by 500+ Companies
    </p>

    <div className="flex flex-wrap gap-4 sm:gap-6">
      <img
        src="/zeepay-replica/patreon-logo.svg"
        className="opacity-80 w-8 sm:w-10 md:w-12"
        alt="patreon"
      />
      <img
        src="/zeepay-replica/Uber-Logo.svg"
        className="opacity-80 w-8 sm:w-10 md:w-12"
        alt="uber"
      />
      <img
        src="/zeepay-replica/shopify-logo.svg"
        className="opacity-80 w-8 sm:w-10 md:w-12"
        alt="shopify"
      />
      <img
        src="/zeepay-replica/Visa-logo.svg"
        className="opacity-80 w-8 sm:w-10 md:w-12"
        alt="visa"
      />
    </div>
  </div>

  {/* Picture Section */}
  <div className="flex-1 pt-4 relative overflow-hidden flex justify-center lg:justify-end">
    <img
      src="/zeepay-replica/hero.svg"
      alt="hero"
      className="w-64 sm:w-80 md:w-[300px] lg:w-[380px] h-auto lg:h-[650px] relative lg:absolute lg:top-16"
    />
  </div>
</section>

    {/* SECOND SECTION */}
<section className="flex flex-col p-6 sm:p-8 lg:p-12">
  <p className="text-slate-950 font-inter font-semibold 
                text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 
                leading-7 sm:leading-9 md:leading-10 lg:leading-[48px] 
                tracking-[-0.03em] text-left">
    Experience the convenience of making multiple payments with one app.
  </p>

  {/* main box */}
  <article className="flex flex-col lg:flex-row gap-4 mt-6">
    {/* first box */}
    <div className="flex flex-col items-center justify-center bg-blue-100 flex-1 p-4 sm:p-6 rounded-md text-center lg:text-left">
      <img src="/zeepay-replica/second.png" alt="currency" className="mb-4 w-24 sm:w-32 md:w-40" />
      <h2 className="text-base sm:text-lg md:text-xl font-semibold">Multi Currency Support</h2>
      <p className="text-sm sm:text-base md:text-lg mt-2">
        Handle all your seamlessly across different currencies with Zeepay. Whether it's for personal or business needs, our app empowers you to manage transactions effectively, ensuring you stay organized and in control of your financial operations.
      </p>
    </div>

    {/* second box */}
    <div className="flex flex-col gap-4 flex-1">
      <div className="bg-blue-50 flex-1 rounded-lg p-4">
        <h3 className="font-semibold text-sm sm:text-base md:text-lg">Safe & Secure</h3>
        <p className="text-xs sm:text-sm md:text-base mt-2">
          We've got some extra safety and security features to help employers and employees keep their money safe and secure. The tech team at Zeepay ensures that all our clients' money is in safe hands.
        </p>
      </div>
      <div className="bg-blue-50 flex-1 rounded-lg p-4">
        <h3 className="font-semibold text-sm sm:text-base md:text-lg">Transparency</h3>
        <p className="text-xs sm:text-sm md:text-base mt-2">
          We've got some extra safety and security features to help employers and employees keep their money safe and secure. The tech team at Zeepay ensures that all our clients' money is in safe hands.
        </p>
      </div>
    </div>
  </article>

  {/* second row */}
  <article className="flex flex-col lg:flex-row gap-4 mt-6">
    {/* third box */}
    <div className="flex flex-col gap-4 flex-1">
      <div className="bg-blue-50 flex-1 rounded-lg p-4">
        <h3 className="font-semibold text-sm sm:text-base md:text-lg">Speed</h3>
        <p className="text-xs sm:text-sm md:text-base mt-2">
          We've got some extra safety and security features to help employers and employees keep their money safe and secure. The tech team at Zeepay ensures that all our clients' money is in safe hands.
        </p>
      </div>
      <div className="bg-blue-50 flex-1 rounded-lg p-4">
        <h3 className="font-semibold text-sm sm:text-base md:text-lg">Experience</h3>
        <p className="text-xs sm:text-sm md:text-base mt-2">
          We've got some extra safety and security features to help employers and employees keep their money safe and secure. The tech team at Zeepay ensures that all our clients' money is in safe hands.
        </p>
      </div>
    </div>

    {/* fourth box */}
    <div className="bg-blue-100 flex flex-col items-center justify-center flex-1 rounded-lg p-4 sm:p-6 text-center lg:text-left">
      <img src="/zeepay-replica/third.png" alt="Integration" className="mb-4 w-24 sm:w-32 md:w-40" />
      <h3 className="font-semibold text-base sm:text-lg md:text-xl">Effortless Integration</h3>
      <p className="text-sm sm:text-base md:text-lg mt-2">
        Zeepay seamlessly integrates with your existing financial systems and tools. From invoicing to payroll, our platform works in harmony with your business, providing a hassle-free experience that saves you time and effort.
      </p>
    </div>
  </article>
</section>

        {/* THIRD SECTION */}
<section className="bg-blue-50 p-6 sm:p-8 lg:p-12">
  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">How It Works</h1>

  <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Step 1 */}
    <div className="rounded flex flex-col gap-3 bg-white p-4 shadow-sm">
      <img
        src="/zeepay-replica/fourth.svg"
        alt="fourth-pic"
        className="w-20 sm:w-24 md:w-28 mx-auto"
      />
      <p className="text-xs sm:text-sm bg-blue-100 px-2 py-1 rounded w-fit">Step 1</p>
      <h3 className="font-semibold text-base sm:text-lg md:text-xl">Easy Sign Up</h3>
      <p className="text-xs sm:text-sm md:text-base text-gray-500">
        Create your account in seconds and unlock all the features waiting for you. Start exploring today!
      </p>
    </div>

    {/* Step 2 */}
    <div className="rounded flex flex-col gap-3 bg-white p-4 shadow-sm">
      <img
        src="/zeepay-replica/fifth.svg"
        alt="fifth-pic"
        className="w-20 sm:w-24 md:w-28 mx-auto"
      />
      <p className="text-xs sm:text-sm bg-blue-100 px-2 py-1 rounded w-fit">Step 2</p>
      <h3 className="font-semibold text-base sm:text-lg md:text-xl">Link Your Bank Account</h3>
      <p className="text-xs sm:text-sm md:text-base text-gray-500">
        Connect your bank account in just a few clicks for fast, secure access to all your financial features.
      </p>
    </div>

    {/* Step 3 */}
    <div className="rounded flex flex-col gap-3 bg-white p-4 shadow-sm">
      <img
        src="/zeepay-replica/sixth.svg"
        alt="sixth-pic"
        className="w-20 sm:w-24 md:w-28 mx-auto"
      />
      <p className="text-xs sm:text-sm bg-blue-100 px-2 py-1 rounded w-fit">Step 3</p>
      <h3 className="font-semibold text-base sm:text-lg md:text-xl">Begin Your Transactions</h3>
      <p className="text-xs sm:text-sm md:text-base text-gray-500">
        Seamless, secure transactions at your fingertips. Start now and simplify your financial journey.
      </p>
    </div>
  </article>
</section>

    {/* FOURTH SECTION */}
<section className="p-6 sm:p-8 lg:p-12">
  <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center font-semibold mb-6">
    Customer reviews about Zeepay
  </h1>

  <article className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Review 1 (faded sides) */}
    <div className="text-gray-400 text-sm sm:text-base md:text-lg [mask-image:linear-gradient(to_left,black,transparent)] p-4">
      "Zeepay is my go-to app for all payments. Whether I’m paying bills or transferring money to friends, it’s super convenient and secure! The app has taken the hassle out of managing my finances, and I love the easy interface that keeps everything organized."
    </div>

    {/* Highlighted Review */}
    <div className="bg-blue-50 text-sm sm:text-base md:text-lg p-6 rounded-lg text-left shadow">
      "Zeepay makes online payments a breeze! It's fast, reliable, and so easy to use. I handle all my transactions with just a few taps, whether I’m paying for groceries, services, or sending money to friends. Zeepay truly simplifies my day-to-day payments."
      <p className="text-center mt-4 text-xs sm:text-sm md:text-base font-medium">
        Priya K., Small Business Owner
      </p>
    </div>

    {/* Review 3 (faded sides) */}
    <div className="text-gray-400 text-sm sm:text-base md:text-lg [mask-image:linear-gradient(to_left,black,transparent)] p-4">
      “With Zeepay, sending and receiving money has never been simpler. The app is intuitive, and transactions are instant, which means no more waiting! Whether I’m transferring funds to family or paying bills, Zeepay has made it quick and convenient every time."
    </div>
  </article>
</section>

      {/* FIFTH SECTION */}
 <section className="bg-blue-50 p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row gap-6">
  {/* Left Column */}
  <article className="flex-1">
    <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
      Frequently asked questions
    </h1>
    <p className="text-sm sm:text-base md:text-lg text-gray-700">
      Find quick solutions and helpful tips for using Zeepay. We’ve compiled answers to the most frequently asked questions right here.
    </p>
    <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 text-sm sm:text-base hover:bg-blue-600">
      Contact support
    </button>
  </article>

  {/* Right Column */}
  <article className="flex flex-col flex-1 gap-4">
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <details>
        <summary className="cursor-pointer">
          <h2 className="font-semibold text-sm sm:text-base md:text-lg">What is Zeepay?</h2>
        </summary>
        <p className="text-xs sm:text-sm md:text-base mt-2">
          Zeepay is a secure, user-friendly online payment app that allows users to send and receive money, pay bills, and manage transactions effortlessly.
        </p>
      </details>
    </div>

    <div className="bg-white rounded-lg p-4 shadow-sm">
      <details>
        <summary className="cursor-pointer">
          <h2 className="font-semibold text-sm sm:text-base md:text-lg">Contact support</h2>
        </summary>
        <p className="text-xs sm:text-sm md:text-base mt-2">
          Need help? Our support team is here to assist you with any questions or issues you may have.
        </p>
      </details>
    </div>

    <div className="bg-white rounded-lg p-4 shadow-sm">
      <details>
        <summary className="cursor-pointer">
          <h2 className="font-semibold text-sm sm:text-base md:text-lg">How do I sign up for Zeepay?</h2>
        </summary>
        <p className="text-xs sm:text-sm md:text-base mt-2">
          Sign up in just a few minutes by downloading the app or visiting our website. Create an account and link your bank account to get started.
        </p>
      </details>
    </div>

    <div className="bg-white rounded-lg p-4 shadow-sm">
      <details>
        <summary className="cursor-pointer">
          <h2 className="font-semibold text-sm sm:text-base md:text-lg">Is Zeepay safe to use?</h2>
        </summary>
        <p className="text-xs sm:text-sm md:text-base mt-2">
          Yes, Zeepay uses industry-standard encryption and security protocols to protect your financial information. Your transactions are secure with us.
        </p>
      </details>
    </div>

    <div className="bg-white rounded-lg p-4 shadow-sm">
      <details>
        <summary className="cursor-pointer">
          <h2 className="font-semibold text-sm sm:text-base md:text-lg">What payment methods does Zeepay support?</h2>
        </summary>
        <p className="text-xs sm:text-sm md:text-base mt-2">
          We support all major debit and credit cards, as well as bank transfers. You can also use digital wallets like PayPal for added convenience.
        </p>
      </details>
    </div>

    <div className="bg-white rounded-lg p-4 shadow-sm">
      <details>
        <summary className="cursor-pointer">
          <h2 className="font-semibold text-sm sm:text-base md:text-lg">Can I pay bills using Zeepay?</h2>
        </summary>
        <p className="text-xs sm:text-sm md:text-base mt-2">
          Yes, you can easily pay bills such as utilities, rent, subscriptions, and more directly through the app. Just select the biller and enter the amount.
        </p>
      </details>
    </div>
  </article>
</section>

        {/* SIXTH SECTION */}
<section className="flex flex-col justify-center items-center gap-4 bg-purple-950 p-6 sm:p-8 lg:p-12 w-full text-center">
  {/* Logo */}
  <div>
    <img
      src="/zeepay-replica/logo.svg"
      alt="logo"
      className="w-12 sm:w-16 md:w-20 mx-auto"
    />
  </div>

  {/* Heading */}
  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight">
    <span className="block">Get Started with</span>
    <span className="block">Zeepay Today</span>
  </h1>

  {/* Description */}
  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white max-w-xl">
    Experience seamless, secure transactions at your fingertips. Sign up now
    <span className="block">and simplify your payments with just a few taps!</span>
  </p>

  {/* Button */}
  <button className="text-blue-600 bg-white px-4 py-2 sm:px-6 sm:py-3 rounded-md text-sm sm:text-base font-medium hover:bg-gray-100 transition">
    Get started now
  </button>
</section>

      {/* SEVENTH SECTION */}
 <section className="w-full p-6 sm:p-8 lg:p-12 bg-gray-50">
  <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 w-full">
    {/* Logo + Description */}
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 mb-2.5">
        <img src="/zeepay-replica/logo.svg" alt="logo" className="w-6 h-6 sm:w-7 sm:h-7" />
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

    </div>
  )
}

export default Homepage
