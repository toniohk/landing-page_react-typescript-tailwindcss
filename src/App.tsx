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
    <div className="flex flex-col w-full items-center justify-center bg-white">
      <div className="sm:flex items-start justify-center container px-36 mt-64 sm:mt-98 md:mt-114 lg:mt-128">
        <img src={logo} alt="logo" className="h-48 sm:h-40 md:h-58 lg:h-72" />
        <div className="sm:ml-12 md:ml-28 lg:ml-44 mt-24 sm:mt-0">
          <p className="text-16 sm:text-18 md:text-24 lg:text-32 font-normal leading-20 sm:leading-24 md:leading-32 lg:leading-42 uppercase gradient-text">The credit card that pays you to</p>
          <p className="text-16 sm:text-18 md:text-24 lg:text-32 font-normal leading-20 sm:leading-24 md:leading-32 lg:leading-42 uppercase">share and spend responsibly</p>
        </div>
      </div>
      <div className="w-full mt-24 md:mt-30">
        <img src={section_01} alt="section_01" className="w-full" />
      </div>
      <div className="sm:flex items-center justify-center container px-36 mt-12 sm:mt-28 md:mt-52 lg:mt-70">
        <div className="flex-3">
          <p className="text-24 md:text-32 lg:text-48 font-normal leading-64 uppercase gradient-text">Invite Friends,</p>
          <p className="text-24 md:text-32 lg:text-48 font-normal leading-64 uppercase">Earn Cash Forever</p>
        </div>
        <div className="flex-4">
          <p className="text-20 font-normal font-content text-gray-200 leading-30 md:leading-36 uppercase">Network as usual using your VITAL  referral link. Earn serious passive income.  Share the link, get points when friends sign up and get approved.</p>
          <a className="text-16 font-normal font-content text-blue-100 leading-30 md:leading-36 lg:float-right" href="#" rel="noreferrer">{'Learn more about referrals >'}</a>
        </div>
      </div>
      <div className="w-full mt-30 sm:mt-40 md:mt-50 lg:mt-60">
        <img src={section_02} alt="section_02" className="w-full" />
      </div>
      <div className="w-full mt-236 relative">
        <img src={section_03} alt="section_03" className="w-full" />
      </div>
      <div className="w-full relative">
        <img src={section_04} alt="section_04" className="w-full" />
      </div>
      <div className="flex flex-col items-center justify-center container px-36">
        <div className="flex items-center">
          <p className="text-24 md:text-32 lg:text-48 font-normal leading-64 uppercase gradient-text mr-16">Empowered</p>
          <p className="text-24 md:text-32 lg:text-48 font-normal leading-64 uppercase">finance tracking</p>
        </div>
        <p className="text-20 font-normal font-content text-gray-200 leading-30 md:leading-36 uppercase mt-24">Real-time notifications to review card activity, manage payments, track spending, and more.</p>
        <a className="text-16 font-normal font-content text-blue-100 leading-30 md:leading-36 mt-8" href="#" rel="noreferrer">{'Learn more about  finance tracking >'}</a>
      </div>
      <div className="w-full mt-50 sm:mt-60 md:mt-80 lg:mt-100">
        <img src={section_05} alt="section_05" className="w-full" />
      </div>
      <div className="w-full relative">
        <img src={section_06} alt="section_06" className="w-full" />
      </div>
      <div className="flex flex-col items-center justify-center container px-36">
        <p className="text-24 md:text-32 lg:text-48 font-normal leading-64 uppercase gradient-text mt-24">welcome to your future</p>
        <p className="text-24 font-normal text-gray-300 leading-32 uppercase mt-8">be there first for all tomorrow has to offer</p>
      </div>
      <div className="w-full">
        <img src={section_07} alt="section_07" className="w-full" />
      </div>
      <div className="flex flex-col items-center justify-center container px-36">
        <p className="text-24 md:text-32 lg:text-48 font-normal leading-64 uppercase gradient-text">Access mastercard World Elite</p>
        <p className="text-24 font-normal text-gray-300 leading-32 uppercase mt-24">VITAL Card gives YOU access to the highest tier</p>
        <p className="text-24 font-normal text-gray-300 leading-32 uppercase mt-8">of MasterCard’s World Card services:</p>
      </div>
      <div className="container px-36 sm:mt-60 md:mt-80 lg:mt-100 sm:grid grid-cols-4 gap-4">
        <div className="flex flex-col items-center justify-between">
          <div className="flex justify-start">
            <div className="w-6 h-14 rounded-md bg-blue-200 my-6 md:my-10 mr-6" />
            <p className="text-14 font-normal text-gray-300 leading-30 md:leading-36 uppercase">zero liability protection</p>
          </div>
          <img src={section_08_01} alt="section_08_01" className="w-full mt-20 lg:mt-32" />
        </div>
        <div className="flex flex-col items-center justify-between">
          <div className="flex justify-start">
            <div className="w-6 h-14 rounded-md bg-blue-200 my-6 md:my-10 mr-6" />
            <p className="text-14 font-normal text-gray-300 leading-30 md:leading-36 uppercase">ID and cell phone protection</p>
          </div>
          <img src={section_08_02} alt="section_08_02" className="w-full mt-20 lg:mt-32" />
        </div>
        <div className="flex flex-col items-center justify-between">
          <div className="flex justify-start">
            <div className="w-6 h-14 rounded-md bg-blue-200 my-6 md:my-10 mr-6" />
            <p className="text-14 font-normal text-gray-300 leading-30 md:leading-36 uppercase">Global emergency services</p>
          </div>
          <img src={section_08_03} alt="section_08_03" className="w-full mt-20 lg:mt-32" />
        </div>
        <div className="flex flex-col items-center justify-between">
          <div className="flex justify-start">
            <div className="w-6 h-14 rounded-md bg-blue-200 my-6 md:my-10 mr-6" />
            <p className="text-14 font-normal text-gray-300 leading-30 md:leading-36 uppercase">Concierge and travel perks</p>
          </div>
          <img src={section_08_04} alt="section_08_04" className="w-full mt-20 lg:mt-32" />
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-between container px-36 pt-60 md:pt-80 lg:pt-102 pb-70 md:pb-86 lg:pb-112">
        <img src={company_icon_01} alt="company_icon_01" />
        <img src={company_icon_02} alt="company_icon_02" />
        <img src={company_icon_03} alt="company_icon_03" />
        <img src={company_icon_04} alt="company_icon_04" />
        <img src={company_icon_05} alt="company_icon_05" />
        <img src={company_icon_06} alt="company_icon_06" />
      </div>
      <div className="block lg:hidden flex container px-36 pt-60 md:pt-80 lg:pt-102 pb-70 md:pb-86 lg:pb-112">
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
        <div className="md:flex items-start justify-center container px-36">
          <div className="flex-1 flex sm:hidden md:flex md:flex flex-col">
            <a className="text-white text-16 font-normal font-content leading-20" href="#" rel="noreferrer">About</a>
            <a className="text-white text-16 font-normal font-content leading-20 mt-32" href="#" rel="noreferrer">Sharing Guide</a>
            <a className="text-white text-16 font-normal font-content leading-20 mt-32" href="#" rel="noreferrer">Help Center</a>
          </div>
          <div className="flex-1 flex sm:hidden md:flex flex-col">
            <a className="text-white text-16 font-normal font-content leading-20" href="#" rel="noreferrer">Terms of Service</a>
            <a className="text-white text-16 font-normal font-content leading-20 mt-32" href="#" rel="noreferrer">Privacy Policy</a>
            <a className="text-white text-16 font-normal font-content leading-20 mt-32" href="#" rel="noreferrer">Careers</a>
          </div>
          <div className="hidden sm:flex md:hidden items-center justify-center">
            <div className="flex-1">
              <a className="text-white text-16 font-normal font-content leading-20" href="#" rel="noreferrer">About</a>
              <a className="text-white text-16 font-normal font-content leading-20 mt-32" href="#" rel="noreferrer">Sharing Guide</a>
            </div>
            <div className="flex-1">
              <a className="text-white text-16 font-normal font-content leading-20" href="#" rel="noreferrer">Terms of Service</a>
              <a className="text-white text-16 font-normal font-content leading-20 mt-32" href="#" rel="noreferrer">Privacy Policy</a>
            </div>
            <div className="flex-1">
              <a className="text-white text-16 font-normal font-content leading-20" href="#" rel="noreferrer">Help Center</a>
              <a className="text-white text-16 font-normal font-content leading-20 mt-32" href="#" rel="noreferrer">Careers</a>
            </div>
          </div>
          <div className="flex-3">
            <div className="sm:flex items-start justify-center">
              <div className="flex-2 flex pr-20">
                <div className="flex-1 flex flex-col">
                  <a className="text-white text-16 font-normal font-content leading-20" href="#" rel="noreferrer">Customer Support</a>
                  <a className="text-white text-16 font-normal font-content leading-20 mt-32" href="#" rel="noreferrer">support@vitalcard.com</a>
                </div>
                <div className="flex-1 flex flex-col">
                  <a className="text-white text-16 font-normal font-content leading-20" href="#" rel="noreferrer">Media Inquiries</a>
                  <a className="text-white text-16 font-normal font-content leading-20 mt-32" href="#" rel="noreferrer">press@vitalcard.com</a>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-start mt-40 sm:mt-0">
                <a href="#" rel="noreferrer" className="mr-12"><img src={facebook} alt="facebook-button" /></a>
                <a href="#" rel="noreferrer" className="mr-12"><img src={twitter} alt="twitter-button" /></a>
                <a href="#" rel="noreferrer" className="mr-12"><img src={instagram} alt="instagram-button" /></a>
                <a href="#" rel="noreferrer" className="mr-12"><img src={linkedin} alt="linkedin-button" /></a>
              </div>
            </div>
            <div className="sm:flex items-start justify-center mt-40 sm:mt-50">
              <div className="flex-2 flex justify-start sm:pr-20">
                <div className="flex items-center justify-center bg-blue-300 w-20 h-20 rounded-full mr-12">
                  <img src={company} alt="company" />
                </div>
                <p className="text-white text-16 font-normal font-content leading-20">
                  {'VITAL credit cards are issued by Evolve Bank & Trust, Member FDIC. © 2021 VITAL Card, Inc'}
                </p>
              </div>
              <div className="flex-1 flex justify-start mt-24 sm:mt-0">
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
