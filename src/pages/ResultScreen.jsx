import React, { useEffect } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { RxCrossCircled } from "react-icons/rx";
import { useContext } from "react";
import ScoreContext from "../ScoreContext";
import { NavLink } from "react-router-dom";

const ResultScreen = () => {
  const { score } = useContext(ScoreContext);
  useEffect(()=>{
    console.log("test score page")
  },[])
  return (
    <div className="md:w-6/12 w-10/12 mt-8 p-2 m-auto rounded-lg">
      <div className="flex flex-col gap-6 items-center justify-center">
        <h1 className=" text-4xl  text-slate-800">Quiz Result</h1>
        <div>
          {score * 10 > 30 ? (
            <FaCircleCheck size={90} color="green" />
          ) : (
            <RxCrossCircled size={90} color="red" />
          )}
        </div>
        <div className="font-semibold">
          {score * 10 > 30
            ? "Nice Job , You have Passed!"
            : "Try again, You have Failed!"}
        </div>
        <div className=" w-full flex  justify-center items-center gap-8  ">
          <div className="flex  md:w-4/12 w-full flex-col gap-2 justify-center items-center bg-gray-200  p-4">
            <div className="font-bold md:text-lg text-sm text-slate-800">
              YOUR SCORE
            </div>
            <div className="text-4xl">{score * 10}%</div>
            <div className="w-full h-[2px] bg-gray-300"></div>
            <div className="text-xs font-bold text-slate-800 ">
              PASSING SCORE : 100%
            </div>
          </div>
          <div className="flex md:w-4/12 w-full  flex-col gap-2 justify-center items-center bg-gray-200  p-4">
            <div className="font-bold md:text-lg text-sm text-slate-800">
              YOUR POINTS
            </div>
            <div className="text-4xl">{score}</div>
            <div className="w-full h-[2px] bg-gray-300"></div>
            <div className="text-xs font-bold text-slate-800 ">
              PASSING SCORE : 10
            </div>
          </div>
        </div>
        <NavLink to={"/"} className=" text-sm underline uppercase  text-slate-800">Retake Test</NavLink>
      </div>
    </div>
  );
};

export default ResultScreen;
