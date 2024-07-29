import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { topicsData } from "../content/TopicQuiz";
import { useNavigate } from "react-router-dom";
import ScoreContext from "../ScoreContext";
import { ThemeContext } from "../ThemeContext";
const TestPages = () => {
  const { darktheme } = useContext(ThemeContext);
  const { score, setScore } = useContext(ScoreContext);
  const [answeredQuestions, setAnsweredQuestions] = useState({});
  useEffect(() => {
    setScore(0);
  }, []);
  const { subjectId, topicId } = useParams();
  const navigate = useNavigate();

  const topic = topicsData
    .find((subject) => subject.subjectId === subjectId)
    ?.topics.find((topic) => topic.id === topicId);

  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionChange = (questionId, option) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [questionId]: option,
    }));
    checkAns(questionId, option);
  };

  const checkAns = (questionId, option) => {
    const mcq = topic.mcqs.find((mcq) => mcq.question === questionId);
    if (mcq.answer === option && !answeredQuestions[questionId]) {
      setScore((prev) => prev + 1);
      setAnsweredQuestions((prev) => ({
        ...prev,
        [questionId]: true,
      }));
    }
  };

  if (!topic) {
    return <div>Topic not found</div>;
  }

  return (
    <div className={`${darktheme ? "bg-[#141C2E]" : "bg-gray-100"}`}>
      <div className="max-w-[70%] m-1 pt-10 mx-auto py-4  ">
        <h1
          className={`md:text-3xl text-xl font-bold   text-[#9333ea] uppercase text-center mb-10`}
        >
          Test Topic: {topic.name}
        </h1>
        <form>
          {topic.mcqs.map((mcq, index) => (
            <div key={index} className="mb-10">
              <p
                className={`font-semibold mb-4 text-lg md:text-2xl ${
                  darktheme ? "text-white" : "text-slate-700"
                } `}
              >
                {`${index + 1}) `}
                {mcq.question}
              </p>
              <div className="flex flex-col">
                {mcq.options.map((option, i) => (
                  <div
                    key={i}
                    className={`p-4 border rounded-lg mb-2 cursor-pointer ${
                      selectedOptions[mcq.question] === option
                        ? "bg-purple-400 text-white "
                        : darktheme
                        ? "bg-[#1f2937] text-white border border-white"
                        : "bg-white border-gray-300"
                    }`}
                    onClick={() => handleOptionChange(mcq.question, option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="my-4">
            <button
              onClick={() =>
                navigate(`/subjects/${subjectId}/topics/${topicId}/test/score`)
              }
              type="button"
              className="px-6 py-3 rounded-lg bg-purple-400 text-white text-lg font-bold "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TestPages;
