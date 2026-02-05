import React, { useState } from 'react'

const Pricing = () => {
  const [active, setActive] = useState("monthly")

  return (
    <div>
      {/* Custom bullet CSS */}
      <style>{`
        .custom-bullet-list {
          list-style: none;
          padding-left: 0;
        }
        .custom-bullet-list li {
          position: relative;
          padding-left: 32px;
          margin-bottom: 10px;
        }
        .custom-bullet-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 20px;
          height: 20px;
          background-image: url('bulletpoint.svg');
          background-size: contain;
          background-repeat: no-repeat;
          background-color: #fff; /* fallback for visibility */
          border-radius: 50%;
        }
        /* Center images in table cells */
        table td img {
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>
      {/* Section 1 */}
      <section className='flex flex-col gap-12'>
        <article className='flex flex-col gap-3'>
        <h1 className='text-slate-950 font-semibold text-[60px] leading-[68px] tracking-[-0.03em] text-center'>
          Flexible plans for everyone
        </h1>
        <p className='text-slate-500 font-inter font-normal text-[18px] leading-[26px] tracking-[-0.03em] text-center'>
          Support small businesses with simple invoicing, powerful 
          <span className='block'>integrations and cash flow management tools.</span>
        </p>
        <div className='flex flex-col items-center gap-2 mt-6'>
          <p className='font-normal text-[14px] leading-[22px] tracking-[-0.03em] text-center'>
            Get 50% off yearly plan &#x1F929;
          </p>
          {/* Toggle buttons with sliding background */}
          <div className="relative flex rounded-full bg-slate-100 w-[200px] overflow-hidden">
            {/* Sliding background */}
            <div
              className="absolute h-full w-1/2 bg-blue-500 rounded-full transition-transform duration-300 ease-in-out"
              style={{
                transform: active === "monthly" ? "translateX(0)" : "translateX(100%)"
              }}
              ></div>
            {/* Buttons */}
            <button
              onClick={() => setActive("monthly")}
              className={`relative z-10 w-1/2 p-3 text-center transition-colors duration-300 ${
                active === "monthly" ? "text-white" : "text-blue-500"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setActive("yearly")}
              className={`relative z-10 w-1/2 p-3 text-center transition-colors duration-300 ${
                active === "yearly" ? "text-white" : "text-blue-500"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>
      </article>
      
      <article className='flex flex-col w-full lg:flex-row justify-center items-center gap-10 lg:gap-24'>
        
        <div className='flex text-slate-500'>
          <div className='transform hover:scale-[1.025] bg-blue-50 flex flex-col gap-6 p-8 rounded-2xl'>
            <h3>Starter Plan</h3>
            <p> <span className='text-slate-950 font-semibold text-[40px] tracking-[-0.03em] text-left'>₹ 10 INR</span> <span className='text-b font-inter font-normal text-[18px] tracking-[-0.03em]'> per month</span></p>
            <ul className='custom-bullet-list'>
              <li>Real-Time Inventory Tracking</li>
              <li>Automated Purchase Orders</li>
              <li>Mobile Access</li>
              <li>Basic Reporting and Analytics</li>
              <li>Email Support</li>
            </ul>
            <button className="text-blue-500 bg-white px-6 py-3 rounded-lg mt-4 border border-blue-500">Start 14 days free trial &gt;</button>
          </div>
        </div>

        <div className='flex text-slate-500'>
          <div className='transform hover:scale-[1.025] bg-purple-950 text-white flex flex-col gap-6 p-8 rounded-2xl'>
            <h3>Pro Plan</h3>
            <p> <span className='text-slate-950 font-semibold text-[40px] tracking-[-0.03em] text-left'>₹ 100 INR</span> <span className='text-b font-inter font-normal text-[18px] tracking-[-0.03em]'> per month</span></p>
            <ul className='custom-bullet-list'>
              <li>What's in Starter Plan</li>
              <li>Unlimited purchase orders</li>
              <li>Real-time analytics</li>
              <li>Dedicated account manager</li>
              <li>Collaborative team workspace</li>
              <li>24/7 priority support</li>
            </ul>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg mt-4">Start 14 days free trial &gt;</button>
          </div>
        </div>

        <div className='flex text-slate-500'>
          <div className='transform hover:scale-[1.025] bg-blue-50 flex flex-col gap-6 p-8 rounded-2xl'>
            <h3>Enterprise Plan</h3>
            <p> <span className='text-slate-950 font-semibold text-[40px] tracking-[-0.03em] text-left'>₹ 550 INR</span> <span className='font-normal text-[18px] tracking-[-0.03em]'> per month</span></p>
            <p className='font-normal text-[18px] tracking-[-0.03em]'>Individual and small businesses.</p>
            <ul className='custom-bullet-list'>
              <li>Custom API integrations</li>
              <li>Advanced security</li>
              <li>Personalized training sessions</li>
              <li>Custom SLA</li>
              <li>24/7 priority support</li>
            </ul>
            <button className="text-blue-500 bg-white px-6 py-3 rounded-lg mt-4 border border-blue-500">Start 14 days free trial &gt;</button>
          </div>
        </div>

      </article>

      <article className='space-y-5'>
        <div>
          <p className='text-center'>Trusted by 500+ Companies</p>
        </div>

        <div className='flex gap-4 justify-evenly'>
            <img src="/zeepay-replica/patreon-logo.svg" className='opacity-80 [mask-image:linear-gradient(to_left,black,transparent)]' alt="patreon" width={40} />
            <img src="/zeepay-replica/Uber-Logo.svg" className='opacity-80' alt="uber" width={40}/>
            <img src="/zeepay-replica/shopify-logo.svg" className='opacity-80' alt="shopify" width={40} />
            <img src="/zeepay-replica/Visa-logo.svg" className='opacity-80' alt="visa" width={40}/>
            <img src="/zeepay-replica/patreon-logo.svg" className='opacity-80' alt="patreon" width={40} />
            <img src="/zeepay-replica/Uber-Logo.svg" className='opacity-80' alt="uber" width={40}/>
            <img src="/zeepay-replica/shopify-logo.svg" className='opacity-80' alt="shopify" width={40} />
            <img src="/zeepay-replica/Visa-logo.svg" className='opacity-80 [mask-image:linear-gradient(to_right,black,transparent)]' alt="visa" width={40}/>
        </div>
      </article>
      </section>

      <section className='bg-teal-50 mt-15'>
        <article className='text-center space-y-3'>
          <h2 className='font-semibold text-3xl'>Package Comaparison</h2>
          <p>Streamline Operations, Boost Productivity, and Drive Innovation with Our All-in-One Platform</p>
        </article>

        <article>
          {/* Table */}
          <table className='w-full mt-6 border-0 table-auto'>
            <thead>
              <tr className='bg-slate-200'> 
                <th className='border-0 font-bold border-slate-300 p-4 text-left'><span className='text-nowrap'>Features included</span>  in the plans</th>
                <th className='border-0 p-4 text-left text-nowrap bg-teal-100'><span className='block font-normal text-sm text-center text-slate-500'>Starter Plan</span><span className='block font-semibold text-center'>₹ 10 INR per month</span> </th>
                <th className='border-0 p-4 text-left text-nowrap bg-blue-950 text-white'><span className='block font-normal text-sm text-center'>Pro Plan</span><span className='block font-semibold text-center'>₹ 100 INR per month</span></th>
                <th className='border-0 p-4 text-left text-nowrap bg-teal-100'><span className='block font-normal text-sm text-center text-slate-500'>Enterprise Plan</span><span className='block font-semibold text-center'>₹ 550 INR per month</span></th>
              </tr>
            </thead>
            <tbody className='text-sm text-slate-500 [&>tr]:even:bg-teal-100 [&>tr]:odd:bg-transparent'>
              <tr>
                <td className='border-0 p-4'>Analytics & Reporting</td>
                <td className='border-0 p-4 text-center'>Standard Access</td>
                <td className='border-0 p-4 text-center'>Standard Access</td>
                <td className='border-0 p-4 text-center'>Advanced</td>
              </tr>
              <tr>
                <td className='border-0 p-4'>API Integration</td>
                <td className='border-0 p-4 text-center'><div><img src="bulletpoint.svg" alt="bullet point" width={15} height={15} /></div></td>
                <td className='border-0 p-4 text-center'><img src="bulletpoint.svg" alt="bullet point" width={15} height={15} /></td>
                <td className='border-0 p-4 text-center'><img src="bulletpoint.svg" alt="bullet point" width={15} height={15} /></td>
              </tr>
              <tr>
                <td className='border-0 p-4'>Onboarding & Training</td>
                <td className='border-0 p-4 text-center'>Basic Access</td>
                <td className='border-0 p-4 text-center'>Standard Access</td>
                <td className='border-0 p-4 text-center'>Advanced</td>
              </tr>
              <tr>
                <td className='border-0 p-4'>Customization Options</td>
                <td className='border-0 p-4 text-center'><img src="bulletpoint.svg" alt="bullet point" width={15} height={15} /></td>
                <td className='border-0 p-4 text-center'><img src="bulletpoint.svg" alt="bullet point" width={15} height={15} /></td>
                <td className='border-0 p-4 text-center'><img src="bulletpoint.svg" alt="bullet point" width={15} height={15} /></td>
              </tr >
              <tr>
                <td className='border-0 p-4'>Task Management</td>
                <td className='border-0 p-4 text-center'>Basic Access</td>
                <td className='border-0 p-4 text-center'>Standard Access</td>
                <td className='border-0 p-4 text-center'>Advanced</td>
              </tr>
              <tr>
                <td className='border-0 p-4'>Real-Time Inventory Tracking</td>
                <td className='border-0 p-4 text-center'><img src="bulletpoint.svg" style={{opacity: 0.3}} alt="bullet point" width={15} height={15} /></td>
                <td className='border-0 p-4 text-center'><img src="bulletpoint.svg" alt="bullet point" width={15} height={15} /></td>
                <td className='border-0 p-4 text-center'><img src="bulletpoint.svg" alt="bullet point" width={15} height={15} /></td>
              </tr>
              <tr>
                <td className='border-0 p-4'>Collaboration Tools</td>
                <td className='border-0 p-4 text-center'>Basic Access</td>
                <td className='border-0 p-4 text-center'>Standard Access</td>
                <td className='border-0 p-4 text-center'>Advanced</td>
              </tr>
              <tr>
                <td className='border-0 p-4'>Document Management</td>
                <td className='border-0 p-4 text-center'><img src="bulletpoint.svg" style={{opacity: 0.3}} alt="bullet point" width={15} height={15} /></td>
                <td className='border-0 p-4 text-center'><img src="bulletpoint.svg" alt="bullet point" width={15} height={15} /></td>
                <td className='border-0 p-4 text-center'><img src="bulletpoint.svg" alt="bullet point" width={15} height={15} /></td>
              </tr>
            </tbody>
          </table>
        </article>
      </section>

      <section className='mt-10'>
        <article className='space-y-8'>
          <h1 className='text-center font-semibold text-3xl'>Customer reviews about Zeepay</h1>
          <div className='flex justify-evenly gap-3'>
            <div className='[mask-image:linear-gradient(to_left,black,transparent)] p-4'>
              <p>"Zeepay is my go-to app for all payments. Whether I’m paying bills or transferring money to friends, it’s super convenient and secure! The app has taken the hassle out of managing my finances, and I love the easy interface that keeps everything organized."</p>
              <p><span className='font-semibold'>Priya K</span>, Small Business Owner</p>
            </div>
            <div className='bg-teal-100 p-4 rounded-lg'><p>"Zeepay makes online payments a breeze! It’s fast, reliable, and so easy to use. I handle all my transactions with just a few taps, whether I’m paying for groceries, services, or sending money to friends. Zeepay truly simplifies my day-to-day payments."</p>
            <p><span className='font-semibold'>Priya K</span>, Small Business Owner</p>
            </div>
            <div className='[mask-image:linear-gradient(to_right,black,transparent)] p-4'><p>“With Zeepay, sending and receiving money has never been simpler. The app is intuitive, and transactions are instant, which means no more waiting! Whether I’m transferring funds to family or paying bills, Zeepay has made it quick and convenient every time.</p>
            <p><span className='font-semibold'>Virat S</span>, Student</p>
            </div>
          </div>
        </article>

        <article className='bg-blue-950 text-white text-center p-10 mt-15 space-y-7'> 
          <div><img src="logo.svg" alt="Zeepay Logo" width={64} height={64} className='mx-auto' /></div>
          <h2 className='font-semibold text-5xl'>Get Started with <span className='block'> Zeepay Today</span></h2>
          <p>Experience seamless, secure transactions at your fingertips. Sign up now and simplify your payments with just a few taps!</p>
          <button className="bg-white text-blue-500 px-6 py-3 rounded-lg mt-4">Get Started now &gt;</button>
        </article>
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
  )
}
 
export default Pricing
