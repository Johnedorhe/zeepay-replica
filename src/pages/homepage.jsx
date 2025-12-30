import React from 'react'

const Homepage = () => {
  return (
    <div className='flex flex-col gap-12'>
    {/* first section */}
    <section className='flex bg-blue-200 p-12 gap-6 relative'>
        <div className='flex-1 flex flex-col gap-6'>
        <p className='text-5xl text-left font-semibold leading-tight'>Early pay,Automatic savings,Transform your money habits</p>
        <p className='text-sm text-gray-700 text-left'>Support small businesses with simple invoicing, powerful integrations, and cash flow management tools.</p>
        <div className='flex gap-1.5'>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>Get Started</button>
            <button className='text-blue-500 bg-white px-4 py-2 rounded-md'>Learn more</button>
        </div>
        <p className='text-sm text-gray-800 mt-6'>Trusted by 500+ Companies</p>

        <div className='flex gap-6'>
            <img src="/patreon-logo.png" className='opacity-80' alt="patreon" width={40} />
            <img src="/Uber-Logo.wine.png" className='opacity-80' alt="uber" width={40}/>
            <img src="/shopify-logo.png" className='opacity-80' alt="shopify" width={40} />
            <img src="/visa-logo.png" className='opacity-80' alt="visa" width={40}/>
        </div>

        </div>

        {/* picture section */}
        <div className='flex-1 flex justify-center pt-4'>
            <img src="/hero.png" alt="hero" width={350} className='absolute bottom-0' />
        </div>
    </section>

    {/* SECOND SECTION */}
        <section className='flex flex-col p-8'>
          <p>Experience the convenience of making multiple payments with one app.</p>
          {/* main box */}
          <article className='flex gap-3'>
            {/* first box */}
            <div className='flex flex-col items-center justify-center bg-blue-100 flex-3 p-4 rounded-md'>
              <img src="/second.png" alt="currency" className='mb-10'/>
              <h2 className='text-'>Multi Currency Support</h2>
              <p>Handle all your seamlessly across different currencies with Zeepay. Whether it's for personal or business needs, our app empowers you to manage transactions effectivel, ensuring you stay organized and in control of your financial operations.</p>
            </div>

            {/* second box */}
            <div className='flex flex-col gap-2 flex-2'>
            <div className='bg-blue-50 flex-1 rounded-lg p-2'>
              <h3>Safe & Secure</h3>
            <p>We've got some extra safety and security features to help employers and employees keep their money safe and secure. The tech team at zenpay that all our clients money is in safe hands.</p>
            </div>
            <div className='bg-blue-50 flex-1 rounded-lg p-2'>
              <h3>Transparency</h3>
              <p>
              We've got some extra safety and security features to help employers and employees keep their money safe and secure. The tech team at zenpay that all our clients money is in safe hands.
              </p>
            </div>
            </div>
          </article>

          
          <article className='flex mt-6 gap-3'>
          {/* third box */}
          <div className='flex flex-col gap-2 flex-2'>
            <div className='bg-blue-50 flex-1 rounded-lg p-2'>
              <h3>Speed</h3>
              <p>We've got some extra safety and security features to help employers and employees keep their money safe and secure. The tech team at zenpay that all our clients money is in safe hands.</p>
            </div>
            <div className='bg-blue-50 flex-1 rounded-lg p-2'>
              <h3>Experience</h3>
              <p>We've got some extra safety and security features to help employers and employees keep their money safe and secure. The tech team at zenpay that all our clients money is in safe hands.</p>
            </div>
          </div>
            {/* fourth box */}
            <div className='bg-blue-100 items-center justify-center flex-3'>
              <img src="/third.png" alt="Integration" />
              <h3>Effortless Integration</h3>
              <p>Zeepay seamlessly integrates with your existing financial systems and tools. From invoicing to payroll, our platform works in harmony with your business, providing a hassle-free experience that saves you time and effort.</p>
            </div>
          </article>
        </section>

        {/* THIRD SECTION */}

        <section className='bg-blue-50 p-8'>
          <h1>How It Works</h1>
          <article className='flex gap-3'>  
          <div className='rounded flex flex-col gap-2'>
            <img src="/fourth.png" alt="fourth-pic" />
            <p className='text-sm bg-blue-100 p-1 rounded w-fit'>Step 1</p>
            <h3 className='font-semibold'>Easy Sign Up</h3>
            <p className='text-sm text-gray-500'>Create your account in seconds and unlock all the features waiting for you. Start exploring today!</p>
          </div>
          <div className='rounded flex flex-col gap-2'>
            <img src="/fifth.png" alt="fifth-pic" />
            <p className='text-sm bg-blue-100 p-1 rounded w-fit'>Step 2</p>
            <h3 className='font-semibold'>Link Your Bank Account</h3>
            <p className='text-sm text-gray-500'>Connect your bank account in just a few clicks for fast, secure access to all your financial features.</p>
          </div>
          <div className='rounded flex flex-col gap-2'>
            <img src="/sixth.png" alt="sixth-pic" />
            <p className='text-sm bg-blue-100 p-1 rounded w-fit'>Step 3</p>
            <h3 className='font-semibold'>Begin Your Transactions</h3>
            <p className='text-sm text-gray-500'>Seamless, secure transactions at your fingertips. Start now and simplify your financial journey.</p>
          </div>
          </article>
        </section>

    {/* FOURTH SECTION */}
        <section>
          <h1 className='text-xl text-center font-semibold m-6'>Customer reviews about Zeepay</h1>
          <article className='flex'>
            <div className='text-gray-300 text-sm [mask-image:linear-gradient(to_left,black,transparent)] p-2 flex-2'>
              "Zeepay is my go-to app for all payments. Whether I’m paying bills or transferring money to friends, it’s super convenient and secure! The app has taken the hassle out of managing my finances, and I love the easy interface that keeps everything organized."
            </div>
            <div className='bg-blue-50 text-sm p-4 rounded-lg text-left flex-3'>
              "Zeepay makes online payments a breeze! It's fast, reliable, and so easy to use. I handle all my transactions with just a few taps, whether I’m paying for groceries, services, or sending money to friends. Zeepay truly simplifies my day-to-day payments."
              <p className='text-center m-3'>Priya K., Small Business Owner</p>
            </div>
            <div className='text-gray-300 text-sm [mask-image:linear-gradient(to_left,black,transparent)] p-2 flex-2'>
              “With Zeepay, sending and receiving money has never been simpler. The app is intuitive, and transactions are instant, which means no more waiting! Whether I’m transferring funds to family or paying bills, Zeepay has made it quick and convenient every time."
            </div>
          </article>
        </section>

      {/* FIFTH SECTION */}
        <section className='bg-blue-50 p-8 flex gap-3'>
          <article className='flex-1'>
          <h1 className='text-xl font-semibold mb-6'>Frequently asked questions</h1>
          <p className='text-sm'>Find quick solutions and helpful tips for using Zeepay. We’ve compiled answers to the most frequently asked questions right here.</p>
          <button className='bg-blue-500 text-white px-4 py-2 rounded-md mt-3 text-sm'>Contact support</button>
          </article>

          <article className='flex flex-col flex-1 gap-4'>
            <div className='bg-white'>
              <details>
                <summary>
              <h2 className='font-semibold'>What is Zeepay?</h2>
                </summary>
             <p>Zeepay is a secure, user-friendly online payment app that allows users to send and receive money, pay bills, and manage transactions effortlessly.</p>
              </details>
            </div>

            <div className='bg-white'>
              <details>
                <summary>
              <h2 className='font-semibold'>Contact support</h2>
                </summary>
              <p>Need help? Our support team is here to assist you with any questions or issues you may have.</p>
              </details>
            </div>

            <div className='bg-white'>
              <details>
                <summary>
              <h2 className='font-semibold'>How do I sign up for Zeepay?</h2>
                </summary>
              <p>Sign up in just a few minutes by downloading the app or visiting our website. Create an account and link your bank account to get started.</p>
              </details>
            </div>
            <div className='bg-white'>
              <details>
                <summary>
              <h2 className='font-semibold'>Is Zeepay safe to use?</h2>
                </summary>
              <p>Yes, Zeepay uses industry-standard encryption and security protocols to protect your financial information. Your transactions are secure with us.</p>
              </details>
            </div>

            <div className='bg-white'>
              <details>
                <summary>
              <h2 className='font-semibold'>What payment methods does Zeepay support?</h2>
                </summary>
              <p>We support all major debit and credit cards, as well as bank transfers. You can also use digital wallets like PayPal for added convenience.</p>
              </details>
            </div>

            <div className='bg-white'>
              <details>
                <summary>
              <h2 className='font-semibold'>Can I pay bills using Zeepay?</h2>
                </summary>
              <p>Yes, you can easily pay bills such as utilities, rent, subscriptions, and more directly through the app. Just select the biller and enter the amount.</p>
              </details>
            </div>
          </article>
        </section>

        {/* SIXTH SECTION */}
      <section className='flex flex-col justify-center items-center gap-3 bg-purple-950 p-12'>
        <div>
          <img src="/logo.png" alt="logo" />
        </div>
        <h1 className='text-4xl text-white font-bold'><span className='block'>Get Started with</span> <span className='block text-center'>Zeepay Today</span></h1>
        <p className='text-sm text-white'>Experience seamless, secure transactions at your fingertips. Sign up now and simplify your payments with just a few taps!</p>
        <button className='text-blue-500 bg-white px-4 py-2 rounded-md'>Get started now</button>
      </section>

      {/* SEVENTH SECTION */}
      <section>
        <article className='flex gap-3'>
          <div>
            <div className='flex gap-1'>
              <img src="/logo.png" alt="logo" width={25} /> Zeepay
            </div>
            <p className='text-sm flex-2 text-gray-500'>Find quick solutions and helpful tips for using Zeepay. We’ve compiled answers to the most frequently asked questions right here.</p>
          </div>
          <div>
            <p className='font-semibold'>About</p>
            <div className='flex flex-col flex-1'>
            <a href="#" className='text-sm text-gray-500'>Our story</a>
            <a href="#" className='text-sm text-gray-500'>Careers</a>
            <a href="#" className='text-sm text-gray-500'>Blog</a>
            <a href="#" className='text-sm text-gray-500'>Contact Us</a>
            </div>
          </div>
          <div>
            <p className='font-semibold'>Resources</p>
            <div className='flex flex-col flex-1'>
            <a href="#" className='text-sm text-gray-500'>Help center</a>
            <a href="#" className='text-sm text-gray-500'>API Documentation</a>
            <a href="#" className='text-sm text-gray-500'>Community</a>
            <a href="#" className='text-sm text-gray-500'>Partner</a>
            </div>
          </div>
          <div>
            <p className='font-semibold'>Products</p>
            <div className='flex flex-col flex-1'>
            <a href="#" className='text-sm text-gray-500'>For Personal</a>
            <a href="#" className='text-sm text-gray-500'>For Business</a>
            <a href="#" className='text-sm text-gray-500'>Personal solutions</a>
            <a href="#" className='text-sm text-gray-500'>Imaginations</a>
            </div>
          </div>
          <div>
            <p className='font-semibold'>Support</p>
            <div className='flex flex-col flex-1'>
            <a href="#" className='text-sm text-gray-500'>Customer support</a>
            <a href="#" className='text-sm text-gray-500'>FAQ</a>
            <a href="#" className='text-sm text-gray-500'>Report a problem</a>
            <a href="#" className='text-sm text-gray-500'>Security & Policy</a>
            </div>
          </div>
        </article>
      </section>

    </div>
  )
}

export default Homepage

/* 
Zeepay
About 
Resources
Products
Support
Our story
Help Center
For Personal
Customer Support
Careers
API Documentation
For Business
FAQ
Blog
Community
Payment Solutions
Report a Problem
Contact Us
Partners
Integrations
Security & Privacy
Privacy Policy
Cookie Policy
Legal
2023 Zeepay Financial Services
*/