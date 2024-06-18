import Image from "next/image";
import styles from "./page.css";
import  Header  from "./components/header/page";
import Footer from "./components/footer/page"
import Accordion from "./components/Accordian/page";

export default function Home() {
  return (
    <div>
      <div className="family-image">
        <Header/>
        <div className="body">
          <div className="welcome">
            <p>WELCOME TO SKY  FINANCIAL</p>
          </div>
          <div className="heading">
                <h1>Life&apos;s a Journey, Fly Confidently with our Protection.</h1>
          </div>
          <div className="content">
              <p>At Sky Financial, we specialize in providing comprehensive life insurance and annuity options tailored to meet the unique needs of individuals across all age groups and income levels. As a licensed provider in all 50 states, we are dedicated to helping clients nationwide secure their financial futures with innovative insurance solutions.<br/> Explore our website to learn more about our products and how we can help you achieve peace of mind and financial security.</p>
             
          </div>
          <div className="getintouch">
            <div classsName="getinmsg">
               <p>Get in touch</p>
            </div>
            <div className="arrow">
               
            </div>
          </div>
       </div>
      </div>
      <div className="body-content">
        <div className="hero">
           <div className="hero-img">
              <img src="/hero-img.svg" alt="animation-photos"/>
           </div>
           <div className="hero-content">
             <p className="hero-msg">WHO WE ARE?</p>
             
             <p>Your Trusted Insurance Partner.</p>
             <p>Sky Financial is a leading provider of life insurance and annuity solutions nationwide. With years of experience helping clients achieve financial security, we have earned a reputation for excellence and reliability in the insurance industry.<br/>Our dedicated team of agents is committed to providing personalized service and innovative solutions tailored to meet the unique needs of each client. We understand that every individual&aposs financial situation is different, and we take the time to listen and recommend the best options for your needs and goals.<br/>At Sky Financial, we are passionate about helping our clients secure their financial futures and enjoy peace of mind knowing that their loved ones are protected.</p>
           </div>
        </div>
      </div>
      <div className="chart">
        <div className="chart-border"></div>
        <div className="boxes">
          <div className="box-one">
            <img src="/Annuities.svg" alt="annuities-logo"/>
            <p className="heading-one">ANNUTIES</p>  
            <p className="heading-two">Secure Your Retirement</p>
            <p className="p-one">
                  Planning for retirement is a crucial step in achieving
                  long-term financial security. Annuities offer a reliable way
                  to generate guaranteed income for life, ensuring that you can
                  enjoy your retirement years with confidence.
                </p>
                <p className="p-two">
                  At Sky Financial, we specialize in annuity products tailored
                  to the needs of high net worth individuals. Our exclusive
                  offerings provide competitive returns and tax advantages,
                  allowing you to maximize your retirement savings and enjoy a
                  worry-free future.
                </p>
                <p className="p-three">
                  Whether you&apos;re looking for immediate income or a deferred
                  annuity to supplement your retirement savings, our team of
                  experts will help you navigate the options and find the right
                  solution for your needs.
                </p> 
          </div>
          <div className="box-two">
          <img src="/lifeinsurance.svg" alt="lifeinsurance-logo"/>
          <p className="heading-one">Life Insurance</p>
          <p className="heading-two">Protecting What Matters Most</p>
                <p className="p-one">
                Comprehensive Coverage for Peace of Mind:<br/>
                Our life insurance plans offer robust protection, 
                ensuring you and your family can face life&apos;s uncertainties with confidence.
                </p>
                <p className="p-two">
                Whether you&apos;re a young family just starting out or a retiree looking to leave a legacy,
                 our experienced agents will work closely with you to understand your needs and goals, 
                 and recommend a policy that fits your budget and lifestyle.
                </p>
                <p className="p-three">
                With Sky Financial, you can rest assured that your loved ones will be taken care of no matter what the future holds.
                </p>
          </div>
          <div className="box-three">
          <img src="/taxbenefit.svg" alt="tax-logo"/>
          <p className="heading-one">Tax Benefit Programs</p>
          <p className="heading-two">Maximize Your Savings</p>
                <p className="p-one">
                   Life insurance and annuities offer significant tax benefits that can help you maximize your savings and
                   minimize your tax liability. With life insurance, the death benefit is typically paid out to your 
                   beneficiaries tax-free, providing them with financial security without the burden of taxes.
                </p>
                <p className="p-two">
                  Similarly, annuities offer tax-deferred growth, meaning you won&apos;t pay taxes on your
                  earnings until you start receiving income. This allows your retirement savings to 
                  grow faster and gives you more control over when you pay taxes.
                </p>
                <p className="p-three">
                  At Sky Financial, we can help you take advantage of these tax benefit programs and
                  create a comprehensive financial strategy that minimizes your tax 
                  liability while maximizing your savings potential.
                </p>
          </div>
        </div>
      </div>
      <div className="form-sec">
        <div className="form-msg">
          <p className="msg-blue">GET STARTED TODAY</p>
          <h1>Ready to take the next step <br/>
            towards financial security?</h1>
          <p className="form-msg-para">
          Contact Sky Financial today to schedule a consultation with one of our<br/>
          experienced agents. We&apos;re here to answer your questions, address your <br/>
          concerns, and help you find the perfect insurance solutions for your needs
          </p>
        </div>
        <div className="form">
          <div className="firstline">
              <div className="subform">
                <div className="input-Name">
                     <img src="/user.svg" />
                </div>
                <div className="line"></div>
                <div className="input-grp">
                  <input placeholder="Name"
                  type="text"
                  // value="Name"
                  className="input"/>
                </div>
              </div>
              <div className="subform">
                <div className="input-Name">
                     <img src="/user.svg" />
                </div>
                <div className="line"></div>
                <div className="input-grp">
                  <input placeholder="Subject"
                  type="text"
                  // value="Subject"
                  className="input"/>
                </div>
              </div>
          </div>
          <div className="secondline">
          <div className="subform">
                <div className="input-Name">
                     <img src="/formmail.svg" />
                </div>
                <div className="line"></div>
                <div className="input-grp">
                  <input placeholder="E-mail"
                  type="text"
                  // value="E-mail"
                  className="input"/>
                </div>
              </div>
              <div className="subform">
                <div className="input-Name">
                     <img src="/formcall.svg" />
                </div>
                <div className="line"></div>
                <div className="input-grp">
                  <input placeholder="Phone"
                  type="text"
                  // value="Phone"
                  className="input"/>
                </div>
              </div>
          </div>
          <div className="input-form-msg">
             <div  className="inputgrp">
              <textarea  placeholder="Message"
              type="text"
              value="Message"
              
              className="input-msg"/>
             </div>

          </div>
          <div className="form-gettouch">
            <button>Get in touch</button>
          </div>


                
        </div>
      </div>
      <div className="question-sec">
        <div className="accordian">
        {/* <Accordion/> */}
        <Accordion
              title="How much life insurance do I actually need?"
              content={
                <div className="accordion-content">
                  <p>
                    Determining your life insurance needs depends on various
                    factors like your income, debts, and future expenses.
                  </p>
                  <p>
                    A general rule of thumb is to aim for coverage that&apos;s 5-10
                    times your annual income.
                  </p>
                  <p>
                    owever, it&apos;s crucial to consider your specific
                    circumstances, such as outstanding debts, education expenses
                    for dependents, and future financial goals
                  </p>
                  <p>
                    Consulting with our financial advisor can help tailor a
                    policy that adequately protects your loved ones and aligns
                    with your long-term plans.
                  </p>
                </div>
              }
            />
            <Accordion
              title="How can I be sure I&apos;m getting the best rates?"
              content={
                <div className="accordion-content">
                  <p>
                    At our agency, ensuring you get the best rates is our
                    priority.
                  </p>
                  <p>
                    We leverage our extensive network and expertise to scout for
                    the most competitive offers tailored to your needs.
                  </p>
                  <p>
                    Our transparent approach means you&apos;ll always know you&apos;re
                    getting the best deal available.
                  </p>
                  <p>
                    We continuously monitor the market to keep your rates
                    optimized. Trust in our commitment to securing your
                    financial future at the most favourable terms.
                  </p>
                </div>
              }
            />
            <Accordion
              title="How long does it take to get approved for life insurance coverage?"
              content={
                <div className="accordion-content">
                  <p>
                    The approval process for life insurance coverage typically
                    ranges from a few days to several weeks.
                  </p>
                  <p>
                    Factors such as the type of policy, your health, and the
                    insurer&apos;underwriting process influence the timeline.
                  </p>
                  <p>
                    Generally, simpler policies like term life insurance may be
                    approved more quickly, while complex policies or those
                    requiring medical exams may take longer.
                  </p>
                  <p>
                    Rest assured, we strive to expedite the process while
                    ensuring thoroughness to provide you with the best coverage
                    efficiently.
                  </p>
                </div>
              }
            />
            <Accordion
              title="What happens if I outlive the term of my life insurance policy?"
              content={
                <div className="accordion-content">
                  <p>
                    If you outlive the term of your life insurance policy, there
                    are several options available.
                  </p>
                  <p>
                    You can choose to renew the policy, convert it to a
                    permanent life insurance policy if available, or simply let
                    it expire.
                  </p>
                  <p>
                    It&apos;s important to review your options with your insurance
                    provider to determine the best course of action based on
                    your current needs and financial situation.
                  </p>
                  <p>
                    Additionally, some policies may offer the option to receive
                    a pay-out of the premiums paid, though this varies depending
                    on the terms of your policy.
                  </p>
                </div>
              }
            />
            <Accordion
              title="How can I ensure my life insurance policy adequately protects my loved ones?"
              content={
                <div className="accordion-content">
                  <p>
                    To ensure your life insurance adequately protects your loved
                    ones, start by assessing your family&apos;s financial needs and
                    future obligations.
                  </p>
                  <p>
                    Consider factors like mortgage payments, education expenses,
                    and living costs.
                  </p>
                  <p>
                    Next, work closely with our expert advisors to tailor a
                    policy that aligns with your unique circumstances and
                    provides sufficient coverage.
                  </p>
                  <p>
                    Regularly review and update your policy to accommodate any
                    changes in your life situation.
                  </p>
                  <p>
                    Rest assured, our commitment to personalized guidance
                    ensures your loved ones are safeguarded against life&apos;s
                    uncertainties.
                  </p>
                </div>
              }
            />
        </div>
        <div className="question-content">
         <div className="question-msg">
           <p>FREQUENTLY ASKED QUESTIONS</p>
         </div>
         <div className="question-para">
           <p> Get the Answers You Need.</p>
           <p>Have questions about life insurance? Explore our FAQs for clear,<br/>
                concise answers to help you make informed decisions about your<br/>
                coverage options.</p>
         </div>
         <div className="manimg">
            <img src="/man-img.svg"/>
         </div>
        </div>

      </div>
      <div  className="Footer">
        <Footer/>
      </div>
      
    </div>
  );

}

