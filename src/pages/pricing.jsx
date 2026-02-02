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
      `}</style>
      {/* Section 1 */}
      <section className='flex flex-col gap-12'>
        <article className='flex flex-col gap-3'>
        <h1 className='text-slate-950 font-semibold text-[60px] leading-[68px] tracking-[-0.03em] text-center'>
          Flexible plans for everyone
        </h1>
        <p className='text-slate-500 font-inter font-normal text-[18px] leading-[26px] tracking-[-0.03em] text-center'>
          Support small businesses with simple invoicing, powwerful 
          <span className='block'>integrations and cash flow management tools.</span>
        </p>
        <div className='flex flex-col items-center gap-2 mt-6'>
          <p className='font-normal text-[14px] leading-[22px] tracking-[-0.03em] text-center'>
            Get 50% off yearly plan 🤑
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
    </div>
  )
}

export default Pricing
