import React, { useState } from 'react'

const Pricing = () => {
  const [active, setActive] = useState("monthly")

  return (
    <div>
      {/* Section 1 */}
      <section>
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
                transform: active === "monthly" ? "translateX(0)" : "translateX(100%)",
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
      </section>

      {/* Section 2 */}
      <section></section>

      {/* Section 3 */}
      <section></section>
    </div>
  )
}

export default Pricing