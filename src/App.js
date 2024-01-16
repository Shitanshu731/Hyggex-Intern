import "./App.css";
import { useState } from "react";

function App() {
  const [isPara, setisPara] = useState(false);
  const [isPara1, setisPara1] = useState(false);
  const [isPara2, setisPara2] = useState(false);
  const [isQuestion, setisQuestion] = useState(true);
  const increasePara = () => {
    setisPara(!isPara);
  };
  const increasePara1 = () => {
    setisPara1(!isPara1);
  };
  const increasePara2 = () => {
    setisPara2(!isPara2);
  };
  const toggleQuestion = () => {
    setisQuestion(!isQuestion);
  };
  
  return (
    <>
      <div className="px-28 pt-4 ">
        <div className="flex justify-between items-center">
          <img
            src="https://images.freecreatives.com/wp-content/uploads/2015/04/logo033.png"
            width="150px"
            height="300px"
          />
          <ul className="flex gap-4 items-center">
            <li className = "cursor-pointer text-[19px] font-semibold">Home</li>
            <li className = "cursor-pointer text-[19px] font-semibold">Dashboard</li>
            <li className = "cursor-pointer text-[19px] font-semibold">Contact</li>
            <li className = "cursor-pointer text-[19px] font-semibold">FAQ</li>
            <li className="bg-gradient-to-r from-[#2183ef] to-[#061b92] px-10 py-2 rounded-[20px] text-white cursor-pointer ">
              Login
            </li>
          </ul>
        </div>
        <div className="mt-14 flex items-center gap-2 ">
          <li className="list-none font-bold">
            <img className="cursor-pointer"
              src="https://static.vecteezy.com/system/resources/previews/000/425/085/original/house-icon-vector-illustration.jpg"
              width="37px"
            />
          </li>
          <li className="list-none font-bold">
            <img
              src="https://www.svgrepo.com/show/43287/right-arrow.svg"
              width="15px"
            />
          </li>
          <li className="list-none font-bold cursor-pointer text-slate-300">FlashCard</li>
          <li className="list-none font-bold">
            <img
              src="https://www.svgrepo.com/show/43287/right-arrow.svg"
              width="15px"
            />
          </li>
          <li className="list-none font-bold cursor-pointer text-slate-300">Mathematics</li>
          <li className="list-none font-bold">
            <img
              src="https://www.svgrepo.com/show/43287/right-arrow.svg"
              width="15px"
            />
          </li>
          <li className="list-none text-[#1141a3] font-bold cursor-pointer">
            Relation and Functions
          </li>
        </div>
        <div className="mt-12">
          <h1 className="text-[37px] font-semibold text-[#1141a3] cursor-pointer">
            Relations And Functions (Mathematics)
          </h1>
        </div>
        <div className="mt-10 ">
          <ul className="mx-[27%] flex gap-20 ">
            <li className="text-[25px] font-semibold cursor-pointer text-[#1141a3] underline underline-offset-8">Study</li>
            <li className="text-[25px] font-semibold cursor-pointer text-slate-300">Quiz</li>
            <li className="text-[25px] font-semibold cursor-pointer text-slate-300">Test</li>
            <li className="text-[25px] font-semibold cursor-pointer text-slate-300">Game</li>
            <li className="text-[25px] font-semibold cursor-pointer text-slate-300">Others</li>
          </ul>
        </div>
        {isQuestion ? 
        <div className="mt-8  bg-gradient-to-r from-[#2183ef] to-[#061b92] w-[750px] h-96 ml-[20%] rounded-[19px] duration-500" onClick = {toggleQuestion}>
          <div className="flex justify-between p-8">
            <img  className="cursor-pointer"
              src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-bulb-vector-icon-white-transparent-background-png-image_5249047.jpg"
              width="25px"
            />
            <img className="cursor-pointer"
              src="https://clipground.com/images/sound-icon-white-png-1.png"
              width="25px"
            />
          </div>
          <h1 className="text-white ml-[240px] mt-20 text-[32px] font-bold">
            9 + 6 + 7x - 2x - 3
          </h1>
        </div>
        :
        <div className="mt-8  bg-gradient-to-r from-[#091f4b] to-[#2d87b6] w-[750px] h-96 ml-[20%] rounded-[19px] duration-700 rotate-180" onClick = {toggleQuestion}>
          <div className="flex justify-between p-8">
            <img className="rotate-180 mt-72 cursor-pointer" 
              src="https://clipground.com/images/sound-icon-white-png-1.png"
              width="25px"
            />
            <img className="rotate-180 mt-72 cursor-pointer"
              src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-bulb-vector-icon-white-transparent-background-png-image_5249047.jpg"
              width="25px"
            />
          </div>
          <h1 className="text-white mr-[310px] -mt-56 text-[32px] font-bold rotate-180">
            5x + 13
          </h1>
          
        </div>
        }
        <div className="ml-[300px] mt-10 flex justify-between w-[700px] items-center">
          <img
            src="https://clipground.com/images/refresh-icon-clipart.png"
            width="50px"
          />
          <div className="flex items-center justify-between gap-3">
            <li className="list-none bg-gradient-to-r from-[#2183ef] to-[#061b92] rounded-full p-4">
              <img
                className="rotate-180"
                src="https://www.svgrepo.com/show/43287/right-arrow.svg"
                width="40px"
              />
            </li>
            <li className="list-none text-xl text-black font-bold p-2">
              01/10
            </li>
            <li className="list-none bg-gradient-to-r from-[#2183ef] to-[#061b92] rounded-full p-4 ">
              <img
                className=""
                src="https://www.svgrepo.com/show/43287/right-arrow.svg"
                width="40px"
                height="10px"
              />
            </li>
          </div>
          <img
            src="https://clipground.com/images/fullscreen-logo-3.jpg"
            width="90px"
          />
        </div>
        <div className="flex items-center mt-8 justify-between">
          <div className="flex items-center gap-3">
            <li className="rounded-[50%] list-none border-2 shadow-lg border-black"><img src="https://images.freecreatives.com/wp-content/uploads/2015/04/logo033.png" width = "70px" alt="logo" /></li>
            <div className="flex flex-col">
              <p className="font-semibold text-slate-300">Published by</p>
              <h1 className="text-[28px] font-semibold text-[#1141a3]">
                Hygge
                <span className="text-[#213864] font-extrabold text-[30px]">
                  X
                </span>
              </h1>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <img
              className="w-12 cursor-pointer"
              src="https://w7.pngwing.com/pngs/216/79/png-transparent-computer-icons-symbol-addition-plus-and-minus-signs-plus-miscellaneous-logo-plus.png"
              width="20px"
            />
            <p className="text-[30px] font-semibold text-[#1141a3] cursor-pointer">
              CreateFlashboard
            </p>
          </div>
        </div>
        <div className="mt-20 mb-40">
          <h1 className="font-bold text-[35px] text-[#1141a3]">FAQ</h1>
          <div className="mt-9 flex flex-col gap-5">
            <div
              className="w-[790px]  p-4 rounded-lg border-2 border-[#1141a3]"
              onClick={increasePara}
            >
              <div className="flex justify-between">
                <p className="font-bold text-xl duration-100">
                  Can eduation flashcard be used for all age groups?
                </p>
                {isPara ? (
                  <img
                    className="-rotate-90 duration-300 cursor-pointer"
                    src="https://www.svgrepo.com/show/43287/right-arrow.svg"
                    width="26px"
                  />
                ) : (
                  <img
                    className="rotate-90 duration-300 cursor-pointer"
                    src="https://www.svgrepo.com/show/43287/right-arrow.svg"
                    width="26px"
                  />
                )}
              </div>
              {isPara && (
                <p className="duration-100 font-semibold mt-6">
                  Yes,eduation flashcards can be tailored to different age
                  groups and learning levels.There are flashcard designed for
                  preschoolers,elementary school students,and even for
                  college,level and adult learners.
                </p>
              )}
            </div>
            <div
              className="w-[790px]  p-4 rounded-lg border-2 border-[#1141a3]"
              onClick={increasePara1}
            >
              <div className="flex justify-between">
                <p className="font-bold text-xl duration-100">
                  How do education flashcards wrok?
                </p>
                {isPara1 ? (
                  <img
                    className="-rotate-90 duration-300 cursor-pointer"
                    src="https://www.svgrepo.com/show/43287/right-arrow.svg"
                    width="26px"
                  />
                ) : (
                  <img
                    className="rotate-90 duration-300 cursor-pointer"
                    src="https://www.svgrepo.com/show/43287/right-arrow.svg"
                    width="26px"
                  />
                )}
              </div>
              {isPara1 && (
                <p className="duration-100 font-semibold mt-6">
                  Education flashcards work by presenting a question or prompt
                  on one side and the corresponding answer or information the
                  other.Users can review the cards repeatedly,reinforcing their
                  memory and enhancing learning through repitition.
                </p>
              )}
            </div>
            <div
              className="w-[790px]  p-4 rounded-lg border-2 duration-300 border-[#1141a3]"
              onClick={increasePara2}
            >
              <div className="flex justify-between">
                <p className="font-bold text-xl duration-100">
                  Can eduation flashcards be used for test preparation?
                </p>
                {isPara2 ? (
                  <img
                    className="-rotate-90 duration-300 cursor-pointer"
                    src="https://www.svgrepo.com/show/43287/right-arrow.svg"
                    width="26px"
                  />
                ) : (
                  <img
                    className="rotate-90 duration-300 cursor-pointer"
                    src="https://www.svgrepo.com/show/43287/right-arrow.svg"
                    width="26px"
                  />
                )}
              </div>
              {isPara2 && (
                <p className="duration-100 font-semibold mt-6">
                  Absolutely Flashcards are excellent tool for test preparation
                  , allowing students to review kay,concepts,terms, and
                  facts.They provide a quick and focused way to reinforce
                  knowledge before exams.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
