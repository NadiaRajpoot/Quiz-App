import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { topicsData } from "../content/TopicQuiz";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import ScoreContext from "../ScoreContext";

const TestPages = () => {
  const { setScore } = useContext(ScoreContext);
  const [answeredQuestions, setAnsweredQuestions] = useState({});

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
  };

  const checkAns = (mcq, option) => {
    if (mcq.answer === option && !answeredQuestions[mcq.question]) {
      setScore((prev) => prev + 1);
      setAnsweredQuestions((prev) => ({
        ...prev,
        [mcq.question]: true,
      }));
    }
  };
  if (!topic) {
    return <div>Topic not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Test: {topic.name}</h1>
      <form>
        {topic.mcqs.map((mcq, index) => (
          <div key={index} className="mb-4">
            <p className="font-semibold mb-2">{mcq.question}</p>
            <div className="flex flex-col">
              {mcq.options.map((option, i) => (
                <label key={i} className="flex items-center mb-2">
                  <input
                    type="radio"
                    name={mcq.question}
                    value={option}
                    checked={selectedOptions[mcq.question] === option}
                    onChange={() => handleOptionChange(mcq.question, option)}
                    className="mr-2"
                    onClick={() => checkAns(mcq, option)}
                    required
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
        <button
          onClick={(subjectId, topicId) => {
            navigate(`/subjects/${subjectId}/topics/${topicId}/test/score`);
          }}
          type="submit"
          className="px-6 py-3 rounded-lg bg-purple-950 text-white text-lg font-bold mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TestPages;
