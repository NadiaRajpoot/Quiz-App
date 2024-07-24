import React from "react";
import { quizTopics } from "./QuizTopics";

const QuizTopicScreen = () => {
  return (
    <div className="flex flex-col w-10/12 m-auto mt-14 items-center justify-center">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">
          WELCOME TO <span className="text-purple-950 ">QUIZZY QUEST</span>
        </h1>
        <div className="text-center font-semibold text-xl">
          Select topic below to start your Quiz.
        </div>
      </div>
      <div>
        <div className="grid grid-cols-4 mt-8 gap-8">
          {quizTopics.map((item, index) => {
            return (
              <div key={index} className="flex gap-2 border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-purple-950">
                <img src={item.icon} alt="" />
                <span className="content-center font-bold text-slate-700 ">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
        <div className="my-8 w-14 m-auto">
          <button className="px-6 py-3 rounded-lg bg-purple-950 text-white text-lg font-bold">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizTopicScreen;
