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


    </div>
  )
}

export default Homepage

/* 
Experience the convenience of making multiple payments with one app.
🇮🇳

INR
You send
We've got some extra safety and security features to help employers and employees keep their money safe and secure. The tech team at zenpay that all our clients money is in safe hands.
200
USD
Recipient will get
47.58
Send money
🇺🇸
Multi Currency Support

Handle all your payments seamlessly across different currencies with Zeepay. Whether it’s for personal or business needs, our app empowers you to manage transactions efficiently, ensuring you stay organized and in control of your global financial operations.
We've got some extra safety and security features to help employers and employees keep their money safe and secure. The tech team at zenpay that all our clients money is in safe hands.
Speed
Experience
Effortless Integration

Zeepay seamlessly integrates with your existing financial systems and tools. From invoicing to payroll, our platform works in harmony with your business, providing a hassle-free experience that saves you time and effort.
*/