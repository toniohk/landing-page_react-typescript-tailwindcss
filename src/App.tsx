import React from 'react';

import logo from './assets/img/vital-logo.png';
import section_01 from './assets/img/section-01.jpg';
import section_02 from './assets/img/section-02.jpg';
import section_03 from './assets/img/section-03.jpg';
import section_04 from './assets/img/section-04.jpg';
import section_05 from './assets/img/section-05.jpg';
import section_06 from './assets/img/section-06.jpg';
import section_07 from './assets/img/section-07.jpg';
import section_08_01 from './assets/img/section-08_01.jpg';
import section_08_02 from './assets/img/section-08_02.jpg';
import section_08_03 from './assets/img/section-08_03.jpg';
import section_08_04 from './assets/img/section-08_04.jpg';
import company_icon_01 from './assets/img/company-icon-01.png';
import company_icon_02 from './assets/img/company-icon-02.png';
import company_icon_03 from './assets/img/company-icon-03.png';
import company_icon_04 from './assets/img/company-icon-04.png';
import company_icon_05 from './assets/img/company-icon-05.png';
import company_icon_06 from './assets/img/company-icon-06.png';
import facebook from './assets/img/icon/facebook.png';
import twitter from './assets/img/icon/twitter.png';
import instagram from './assets/img/icon/instagram.png';
import linkedin from './assets/img/icon/linkedin.png';
import company from './assets/img/icon/company.png';

function App() {
  return (
    <div id="top" className="flex flex-col w-full items-center justify-center bg-white">
      <div className="flex flex-col md:flex-row items-center justify-center container mt-64 md:mt-98 lg:mt-114 xl:mt-128">
        <img src={logo} alt="logo" className="h-48 md:h-40 lg:h-58 xl:h-72" />
        <div className="ml-12 lg:ml-28 xl:ml-44 mt-24 md:mt-0">
          <p className="text-16 md:text-18 lg:text-24 xl:text-32 font-normal leading-20 md:leading-24 lg:leading-32 xl:leading-42 uppercase gradient-text">The credit card that pays you to</p>
          <p className="text-16 md:text-18 lg:text-24 xl:text-32 font-normal leading-20 md:leading-24 lg:leading-32 xl:leading-42 uppercase">share and spend responsibly</p>
        </div>
      </div>
      <div className="w-full mt-24 lg:mt-30">
        <img src={section_01} alt="section_01" className="w-full" />
      </div>
      <div className="md:flex items-start justify-center container mt-12 md:mt-28 lg:mt-52 xl:mt-70">
        <div className="flex-3">
          <p className="text-24 lg:text-32 xl:text-48 font-normal leading-32 lg:leading-42 xl:leading-64 uppercase gradient-text">Invite Friends,</p>
          <p className="text-24 lg:text-32 xl:text-48 font-normal leading-32 lg:leading-42 xl:leading-64 uppercase">Earn Cash Forever</p>
        </div>
        <div className="flex-4">
          <p className="text-20 font-normal font-content text-gray-200 leading-30 lg:leading-36 uppercase">Network as usual using your VITAL  referral link. Earn serious passive income.  Share the link, get points when friends sign up and get approved.</p>
          <a className="text-16 font-normal font-content text-blue-100 leading-30 lg:leading-36 xl:float-right" href="#top" rel="noreferrer">{'Learn more about referrals >'}</a>
        </div>
      </div>
      <div className="w-full mt-30 md:mt-40 lg:mt-50 xl:mt-60">
        <img src={section_02} alt="section_02" className="w-full" />
      </div>
      <div className="w-full mt-236 relative">
        <img src={section_03} alt="section_03" className="w-full" />
        <div className="w-1/2 hidden md:block absolute right-0 top-0 px-0 px-60 lg:px-100 xl:px-140 mt-50 lg:mt-60 xl:mt-100 2xl:mt-200">
          <p className="text-32 xl:text-42 2xl:text-48 font-normal leading-32 lg:leading-42 xl:leading-64 uppercase gradient-text">Build Better Credit,</p>
          <p className="text-32 xl:text-42 2xl:text-48 font-normal leading-32 lg:leading-42 xl:leading-64 uppercase">Get Cash</p>
          <p className="text-20 font-normal font-content text-gray-200 leading-30 lg:leading-36 uppercase">Build your best-ever credit health with personalized tools and updates. As you tone a healthier score, we celebrate your success with cash rewards.</p>
          <a className="text-16 font-normal font-content text-blue-100 leading-30 lg:leading-36 mt-30" href="#top" rel="noreferrer">{'Learn more about credit rewards >'}</a>
        </div>
      </div>
      <div className="container flex md:hidden flex-col items-start justify-center mt-30">
        <p className="text-32 xl:text-48 font-normal leading-32 lg:leading-42 xl:leading-64 uppercase gradient-text">Build Better Credit,</p>
        <p className="text-32 xl:text-48 font-normal leading-32 lg:leading-42 xl:leading-64 uppercase">Get Cash</p>
        <p className="text-20 font-normal font-content text-gray-200 leading-30 lg:leading-36 uppercase">Build your best-ever credit health with personalized tools and updates. As you tone a healthier score, we celebrate your success with cash rewards.</p>
        <a className="text-16 font-normal font-content text-blue-100 leading-30 lg:leading-36 mt-30" href="#top" rel="noreferrer">{'Learn more about credit rewards >'}</a>
      </div>
      <div className="w-full relative">
        <img src={section_04} alt="section_04" className="w-full" />
        <div className="w-1/2 hidden md:block absolute left-0 top-0 px-0 px-60 lg:px-100 xl:px-140 mt-50 lg:mt-60 xl:mt-100 2xl:mt-200">
          <p className="text-32 xl:text-42 2xl:text-48 font-normal leading-32 lg:leading-42 xl:leading-64 uppercase gradient-text">1.5% Cashback</p>
          <p className="text-32 xl:text-42 2xl:text-48 font-normal leading-32 lg:leading-42 xl:leading-64 uppercase">on All purchases</p>
          <p className="text-20 font-normal font-content text-gray-200 leading-30 lg:leading-36 uppercase">Get even more with referrals. Unlock 2% or 3% cashback on a recurring basis with 5 or 10 approved signups during the rewards period. The clock resets every 3 months.</p>
          <a className="text-16 font-normal font-content text-blue-100 leading-30 lg:leading-36 mt-30" href="#top" rel="noreferrer">{'Learn more about cashback >'}</a>
        </div>
      </div>
      <div className="container flex md:hidden flex-col items-start justify-center mt-30">
        <p className="text-32 xl:text-48 font-normal leading-32 lg:leading-42 xl:leading-64 uppercase gradient-text">1.5% Cashback</p>
        <p className="text-32 xl:text-48 font-normal leading-32 lg:leading-42 xl:leading-64 uppercase">on All purchases</p>
        <p className="text-20 font-normal font-content text-gray-200 leading-30 lg:leading-36 uppercase">Get even more with referrals. Unlock 2% or 3% cashback on a recurring basis with 5 or 10 approved signups during the rewards period. The clock resets every 3 months.</p>
        <a className="text-16 font-normal font-content text-blue-100 leading-30 lg:leading-36 mt-30" href="#top" rel="noreferrer">{'Learn more about cashback >'}</a>
      </div>
      <div className="flex flex-col items-center justify-center container">
        <div className="flex items-center">
          <p className="text-24 lg:text-32 xl:text-48 font-normal leading-32 lg:leading-42 xl:leading-64 uppercase gradient-text mr-16">Empowered</p>
          <p className="text-24 lg:text-32 xl:text-48 font-normal leading-32 lg:leading-42 xl:leading-64 uppercase">finance tracking</p>
        </div>
        <p className="text-20 font-normal font-content text-gray-200 leading-30 lg:leading-36 uppercase mt-24">Real-time notifications to review card activity, manage payments, track spending, and more.</p>
        <a className="text-16 font-normal font-content text-blue-100 leading-30 lg:leading-36 mt-8 mt-30" href="#top" rel="noreferrer">{'Learn more about  finance tracking >'}</a>
      </div>
      <div className="w-full mt-50 md:mt-60 lg:mt-80 xl:mt-100">
        <img src={section_05} alt="section_05" className="w-full" />
      </div>
      <div className="w-full relative">
        <img src={section_06} alt="section_06" className="w-full" />
        <div className="w-1/2 hidden md:block absolute left-0 top-0 px-0 px-60 lg:px-100 xl:px-140 mt-50 lg:mt-60 xl:mt-100 2xl:mt-200">
          <p className="text-32 xl:text-42 2xl:text-48 font-normal leading-32 lg:leading-42 xl:leading-64 uppercase gradient-text">Easy digital access </p>
          <p className="text-32 xl:text-42 2xl:text-48 font-normal leading-32 lg:leading-42 xl:leading-64 uppercase">Fully customized experience</p>
          <p className="text-20 font-normal font-content text-gray-200 leading-30 lg:leading-36 uppercase">Replace cards Schedule Payments manage notifications personalize credit alerts Freeze Cards And more</p>
          <a className="text-16 font-normal font-content text-blue-100 leading-30 lg:leading-36 mt-30" href="#top" rel="noreferrer">{'Lear more about digital tools >'}</a>
        </div>
      </div>
      <div className="container flex md:hidden flex-col items-start justify-center mt-30">
        <p className="text-32 xl:text-48 font-normal leading-32 lg:leading-42 xl:leading-64 uppercase gradient-text">Easy digital access </p>
        <p className="text-32 xl:text-48 font-normal leading-32 lg:leading-42 xl:leading-64 uppercase">Fully customized experience</p>
        <p className="text-20 font-normal font-content text-gray-200 leading-30 lg:leading-36 uppercase">Replace cards Schedule Payments manage notifications personalize credit alerts Freeze Cards And more</p>
        <a className="text-16 font-normal font-content text-blue-100 leading-30 lg:leading-36 mt-30" href="#top" rel="noreferrer">{'Lear more about digital tools >'}</a>
      </div>
      <div className="flex flex-col items-center justify-center container">
        <p className="text-24 lg:text-32 xl:text-48 font-normal leading-32 lg:leading-42 xl:leading-64 uppercase gradient-text mt-24">welcome to your future</p>
        <p className="text-24 font-normal text-gray-300 leading-32 uppercase mt-8">be there first for all tomorrow has to offer</p>
      </div>
      <div className="w-full">
        <img src={section_07} alt="section_07" className="w-full" />
      </div>
      <div className="flex flex-col items-center justify-center container">
        <p className="text-24 lg:text-32 xl:text-48 font-normal leading-32 lg:leading-42 xl:leading-64 uppercase gradient-text">Access mastercard World Elite</p>
        <p className="text-24 font-normal text-gray-300 leading-32 uppercase mt-24">VITAL Card gives YOU access to the highest tier</p>
        <p className="text-24 font-normal text-gray-300 leading-32 uppercase mt-8">of MasterCard’s World Card services:</p>
      </div>
      <div className="container mt-50 md:mt-60 lg:mt-80 xl:mt-100 md:grid grid-cols-4 gap-4">
        <div className="flex flex-col items-center justify-between">
          <div className="flex justify-start">
            <div className="w-6 h-14 rounded-md bg-blue-200 my-6 lg:my-10 mr-6" />
            <p className="text-14 font-normal text-gray-300 leading-30 lg:leading-36 uppercase">zero liability protection</p>
          </div>
          <img src={section_08_01} alt="section_08_01" className="w-full mt-20 xl:mt-32" />
        </div>
        <div className="flex flex-col items-center justify-between">
          <div className="flex justify-start">
            <div className="w-6 h-14 rounded-md bg-blue-200 my-6 lg:my-10 mr-6" />
            <p className="text-14 font-normal text-gray-300 leading-30 lg:leading-36 uppercase">ID and cell phone protection</p>
          </div>
          <img src={section_08_02} alt="section_08_02" className="w-full mt-20 xl:mt-32" />
        </div>
        <div className="flex flex-col items-center justify-between">
          <div className="flex justify-start">
            <div className="w-6 h-14 rounded-md bg-blue-200 my-6 lg:my-10 mr-6" />
            <p className="text-14 font-normal text-gray-300 leading-30 lg:leading-36 uppercase">Global emergency services</p>
          </div>
          <img src={section_08_03} alt="section_08_03" className="w-full mt-20 xl:mt-32" />
        </div>
        <div className="flex flex-col items-center justify-between">
          <div className="flex justify-start">
            <div className="w-6 h-14 rounded-md bg-blue-200 my-6 lg:my-10 mr-6" />
            <p className="text-14 font-normal text-gray-300 leading-30 lg:leading-36 uppercase">Concierge and travel perks</p>
          </div>
          <img src={section_08_04} alt="section_08_04" className="w-full mt-20 xl:mt-32" />
        </div>
      </div>
      <div className="hidden xl:flex items-center justify-between container pt-60 lg:pt-80 xl:pt-102 pb-70 lg:pb-86 xl:pb-112">
        <img src={company_icon_01} alt="company_icon_01" />
        <img src={company_icon_02} alt="company_icon_02" />
        <img src={company_icon_03} alt="company_icon_03" />
        <img src={company_icon_04} alt="company_icon_04" />
        <img src={company_icon_05} alt="company_icon_05" />
        <img src={company_icon_06} alt="company_icon_06" />
      </div>
      <div className="block xl:hidden flex container pt-60 lg:pt-80 xl:pt-102 pb-70 lg:pb-86 xl:pb-112">
        <div className="flex">
          <div className="flex-1 flex items-center justify-center">
            <img src={company_icon_01} alt="company_icon_01" />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img src={company_icon_02} alt="company_icon_02" />
          </div>
        </div>
        <div className="flex">
          <div className="flex-1 flex items-center justify-center">
            <img src={company_icon_03} alt="company_icon_03" />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img src={company_icon_04} alt="company_icon_04" />
          </div>
        </div>
        <div className="flex">
          <div className="flex-1 flex items-center justify-center">
            <img src={company_icon_05} alt="company_icon_05" />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img src={company_icon_06} alt="company_icon_06" />
          </div>
        </div>
      </div>
      <footer className="w-full flex items-center justify-center bg-gray-500 pt-50 pb-66">
        <div className="lg:flex items-start justify-center container">
          <div className="flex-2 flex">
            <div className="flex-1 flex md:hidden lg:flex flex-col">
              <a className="text-white text-16 font-normal font-content leading-20" href="#top" rel="noreferrer">About</a>
              <a className="text-white text-16 font-normal font-content leading-20 mt-32" href="#top" rel="noreferrer">Sharing Guide</a>
              <a className="text-white text-16 font-normal font-content leading-20 mt-32" href="#top" rel="noreferrer">Help Center</a>
            </div>
            <div className="flex-1 flex md:hidden lg:flex flex-col">
              <a className="text-white text-16 font-normal font-content leading-20" href="#top" rel="noreferrer">Terms of Service</a>
              <a className="text-white text-16 font-normal font-content leading-20 mt-32" href="#top" rel="noreferrer">Privacy Policy</a>
              <a className="text-white text-16 font-normal font-content leading-20 mt-32" href="#top" rel="noreferrer">Careers</a>
            </div>
          </div>
          <div className="hidden md:flex lg:hidden items-center justify-center">
            <div className="flex-1 flex flex-col">
              <a className="text-white text-16 font-normal font-content leading-20" href="#top" rel="noreferrer">About</a>
              <a className="text-white text-16 font-normal font-content leading-20 mt-32" href="#top" rel="noreferrer">Sharing Guide</a>
            </div>
            <div className="flex-1 flex flex-col">
              <a className="text-white text-16 font-normal font-content leading-20" href="#top" rel="noreferrer">Terms of Service</a>
              <a className="text-white text-16 font-normal font-content leading-20 mt-32" href="#top" rel="noreferrer">Privacy Policy</a>
            </div>
            <div className="flex-1 flex flex-col">
              <a className="text-white text-16 font-normal font-content leading-20" href="#top" rel="noreferrer">Help Center</a>
              <a className="text-white text-16 font-normal font-content leading-20 mt-32" href="#top" rel="noreferrer">Careers</a>
            </div>
          </div>
          <div className="flex-3">
            <div className="md:flex items-start justify-center">
              <div className="flex-2 flex lg:pr-20 mt-30 lg:mt-0">
                <div className="flex-1 flex flex-col">
                  <a className="text-white text-16 font-normal font-content leading-20" href="#top" rel="noreferrer">Customer Support</a>
                  <a className="text-white text-16 font-normal font-content leading-20 mt-32" href="#top" rel="noreferrer">support@vitalcard.com</a>
                </div>
                <div className="flex-1 flex flex-col">
                  <a className="text-white text-16 font-normal font-content leading-20" href="#top" rel="noreferrer">Media Inquiries</a>
                  <a className="text-white text-16 font-normal font-content leading-20 mt-32" href="#top" rel="noreferrer">press@vitalcard.com</a>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-start mt-40 lg:mt-0">
                <a href="#top" rel="noreferrer" className="mr-12"><img src={facebook} alt="facebook-button" /></a>
                <a href="#top" rel="noreferrer" className="mr-12"><img src={twitter} alt="twitter-button" /></a>
                <a href="#top" rel="noreferrer" className="mr-12"><img src={instagram} alt="instagram-button" /></a>
                <a href="#top" rel="noreferrer" className="mr-12"><img src={linkedin} alt="linkedin-button" /></a>
              </div>
            </div>
            <div className="lg:flex items-start justify-center mt-40 lg:mt-50">
              <div className="flex-2 flex justify-start lg:pr-20">
                <div className="flex items-center justify-center bg-blue-300 w-24 h-20 rounded-full mr-12">
                  <img src={company} alt="company" />
                </div>
                <p className="text-white text-16 font-normal font-content leading-20">
                  {'VITAL credit cards are issued by Evolve Bank & Trust, Member FDIC. © 2021 VITAL Card, Inc'}
                </p>
              </div>
              <div className="flex-1 flex justify-start mt-24 lg:mt-0">
                <p className="text-gray-100 text-12 font-normal font-content leading-16">Copyright © VITAL Card. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
