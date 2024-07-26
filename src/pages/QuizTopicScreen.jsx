import React from "react";
import { quizTopics } from "../content/QuizTopics";
import { useNavigate } from "react-router-dom";

const QuizTopicScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-10/12 m-auto mt-14 items-center justify-center">
      <div className="flex flex-col gap-2">
        <h1 className="md:text-3xl text-xl font-bold">
          WELCOME TO <span className="text-purple-950 ">QUIZZY QUEST</span>
        </h1>
        <div className="text-center text-base md:text-xl font-semibold ">
          Select topic below to start your Quiz.
        </div>
      </div>
      <div>
        <div className="grid md:grid-cols-4 grid-cols-2 mt-8 md:gap-8 gap-6">
          {quizTopics.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => navigate(`/subjects/${item.id}/topics`)}
                className="flex gap-2 border border-gray-300 rounded-lg md:p-4  p-2 cursor-pointer hover:border-purple-950"
              >
                <img src={item.icon} alt="" />
                <span className="content-center font-bold text-slate-700 ">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuizTopicScreen;
