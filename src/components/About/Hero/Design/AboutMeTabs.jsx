import React, { useState } from 'react';

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full p-4">
      <div className="flex space-x-0 lg:space-x-4 xl:space-x-4 text-[0.75rem] lg:text-base xl:text-base">
        <button
          className={`px-4 py-2 focus:outline-none ${
            activeTab === 0
              ? 'border-b-4 border-purple-600 text-bg-n-5 font-semibold'
              : 'text-white hover:text-purple-600'
          }`}
          onClick={() => setActiveTab(0)}
        >
          Tennis
        </button>
        <button
          className={`px-4 py-2 focus:outline-none ${
            activeTab === 1
              ? 'border-b-4 border-purple-600 text-bg-n-5 font-semibold'
              : 'text-white hover:text-purple-600'
          }`}
          onClick={() => setActiveTab(1)}
        >
          Karate
        </button>
        <button
          className={`px-4 py-2 focus:outline-none ${
            activeTab === 2
              ? 'border-b-4 border-purple-600 text-bg-n-5 font-semibold'
              : 'text-white hover:text-purple-600'
          }`}
          onClick={() => setActiveTab(2)}
        >
          Athletics
        </button>
        <button
          className={`px-4 py-2 focus:outline-none ${
            activeTab === 3
              ? 'border-b-4 border-purple-600 text-bg-n-5 font-semibold'
              : 'text-white hover:text-purple-600'
          }`}
          onClick={() => setActiveTab(3)}
        >
          Experience
        </button>
      </div>
      <div className="mt-4 flex flex-col items-center">
        {activeTab === 0 && (
          <div>
            <h2 className="font-semibold text-[0.65rem] lg:text-base xl:text-base mb-4 text-center text-purple-200">ISSSA & BISSA Tennis Awards</h2>
            <div className="flex flex-col items-center space-y-2 lg:space-y-4 xl:space-y-4 w-[40rem] text-[0.55rem] lg:text-base xl:text-base">
              <p>ISSSA Tennis Championships, 2018 - Bronze Medal (Under 19 Singles)</p>
              <p>ISSSA Beginners Tennis Tournament, 2018 - Silver Medal (Under 19 Singles)</p>
              <p>BISSA Tennis National team qualifiers, 2019 - 4th (Singles)</p>
              <p>ISSSA Tennis Championships, 2019 - Silver Medal (Under 14 Doubles)</p>
              <p>ISSSA Tennis Championships, 2019 - Gold Medal (Under 14 Singles)</p>
              <p>ISSSA Tennis Championships, 2020 - Bronze Medal (Under 18 Singles)</p>
              <p>ISSSA Schools Tennis Cup, 2023 - Silver Medal (Under 19 Singles)</p>
              <p>ISSSA Schools Tennis Cup, 2023 - Silver Medal (Under 19 Mixed Doubles)</p>
              <p>ISSSA Schools Tennis Cup, 2023 - Silver Medal (Under 19 Doubles)</p>
              <p>ISSSA Tennis Singles Championships, 2023 - Bronze Medal (Under 19 Singles)</p>
              <p>ISSSA Tennis Doubles Championships, 2023 - Gold Medal (Under 19 Doubles)</p>
              </div>
              <h2 className="font-semibold my-5 text-center text-purple-200 text-[0.65rem] lg:text-base xl:text-base">ISSSA & BISSA Tennis Awards</h2>
              <div className="flex flex-col items-center space-y-2 lg:space-y-4 xl:space-y-4 w-[40rem] text-[0.55rem] lg:text-base xl:text-base">
              <p>BTA Notwane Open Tournament, 2016 - Gold Medal (Under 10 Doubles)</p>
              <p>BTA Francistown Junior Open, 2019 - Gold Medal (Under 16 Doubles)</p>
              <p>BTA Francistown Junior Open, 2019 - Gold Medal (Under 16 Singles)</p>
              <p>BTA Serowe Open, 2019 - Gold Medal (Under 18 Doubles)</p>
              <p>BTA Serowe Open, 2019 - Bronze Medal (Under 18 Singles)</p>
              <p>BTA Francistown Open, 2019 - Silver Medal (Under 14 Singles)</p>
            </div>
          </div>
        )}
        {activeTab === 1 && (
          <div>
            <h1 className="font-bold text-lg lg:text-2xl xl:text-2xl my-10 text-center text-purple-800">Black belt hayashi ha shito ryu karateka</h1>
            <div className="flex flex-col items-center space-y-6 w-[20rem] lg:w-[30rem] xl:w-[30rem]">
              <h2 className="font-bold text-md text-purple-200">All Styles Karate Development & Elite Championships in Pretoria, South Africa (2013) - age category: 7-9 years</h2>
                <p>Kata - Gold Medal</p>
                <p>Kumite - Bronze medal</p>
                <p>Participation medal</p>
              <h2 className="font-bold text-md text-purple-200">All Styles Karate Development & Elite Championships in Pretoria, South Africa (2014) - age category: 7-9 years for Kata and 8/9 for Kumite</h2>
                <p>Kata - Gold medal</p>
                <p>Kumite - Bronze medal</p>
                <p>Participation medal</p>
              <h2 className="font-bold text-md text-purple-200">Other Tournaments</h2>
                <p>Jwaneng Karate Open, 2013 - Bronze medal (Kata)</p>
                <p>Botswana Karate Association (BOKA) national team selection Championship (under 15) - 3rd</p>
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div className="flex flex-col items-center space-y-4 w-[20rem] lg:w-[40rem] xl:w-[40rem]">
            <h2 className="font-semibold my-5 text-center text-purple-200">Baobab Primary School</h2>
              <p>Baobab's Inter House Competitions, 2015 - Position 3 (Under 10 long jump)</p>
              <p>Baobab's Inter House Competitions, 2015 - Position 1 (Under 10 high jump)</p>
              <p>Baobab's Inter House Competitions, 2017 - Position 1 (Under 12 high jump)</p>
              <p>Baobab's Inter House Competitions, 2017 - Position 2 (Under 12 long jump)</p>
            <h2 className="font-semibold my-5 text-center text-purple-200">Legae Academy</h2>
              <p>Legae Academy's Inter House Events, 2019 - Position 2 (Under 15 high jump)</p>
              <p>Legae Academy's Inter House Events, 2022 - Position 3 (Under 19 high jump)</p>
              <p>Legae's Inter House Events, 2023 - Position 2 (Under 19 800m)</p>
              <p>Legae's Inter House Events, 2023 - Position 1 (4 x 400m)</p>
              <p>Legae's Inter House Events, 2023 - Position 5 (Under 19 high jump)</p>
              <p>Legae Academy's Inter House Events, 2023 - Position 7 (Under 19 200m)</p>
              <p>ISSSA Athletics Tournament, 2019 - Reserve for under 15 high jump</p>
          </div>
        )}
        {activeTab === 3 && (
            <div className="flex flex-col text-center space-y-4 w-[20rem] lg:w-[35rem] xl:w-[35rem]">
              <h2 className="font-semibold text-center text-purple-200">BothoHacks</h2>
              <p>Participated in my first ever hackathon</p>
              <p>Collaborated with 3 other university students as a highschooler</p>
              <p>Utilised an Arduino Uno R3 as well as Html, Css & Javascript</p>
              <p>Built a greenhouse monitoring system that sent sensory data to a website</p>
              <p>Placed 2nd and recieved $220</p>
              <h2 className="font-semibold text-center text-purple-200">Botswana-Baylor Children’s Clinical Center of Excellence</h2>
              <p>Provided mathematics tutoring to five students living with special health conditions.</p>
              <p>Ensured all tutored students achieved an A in their mathematics JCE exams.</p>
              <p>Collaborated with healthcare professionals to support holistic educational and personal development.</p>
              <h2 className="font-semibold text-center text-purple-200">African Havens Botswana</h2>
              <p>Tutored students schooling at Tshwaragano Primary school</p>
              <p>Tutored English and mathematics to 15 different students studying the PSLE syllabus.</p>
              <p>Organized activities during our sessions that helped relieve students with the pressure of exams.</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default TabsComponent;
