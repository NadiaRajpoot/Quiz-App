import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { topicsData } from "../content/SubjectTopics";
import ScoreContext from "../ScoreContext";
import { ThemeContext } from "../ThemeContext";
const TopicsPage = () => {
  const {darktheme} = useContext(ThemeContext);
  const { setScore } = useContext(ScoreContext);
  useEffect(() => {
    setScore(0);
  }, []);
  const { subjectId } = useParams();
  const subject = topicsData.find((topic) => topic.subjectId === subjectId);

  if (!subject) {
    return <div className="container mx-auto p-4">Subject not found.</div>;
  }

  const subjectTopics = subject.topics || [];

  return (
    <div className="max-w-[70%] mt-10 mx-auto p-4">
      <h1
        className={`text-3xl font-bold ${
          darktheme ? "text-white" : "text-purple-950"
        } uppercase text-center mb-10`}
      >
        Select a Topic
      </h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {subjectTopics.map((topic, index) => (
          <Link
            key={topic.id}
            to={`/subjects/${subjectId}/topics/${topic.id}/test`}
            className="block p-4 bg-green-500 text-white rounded shadow-lg hover:bg-green-700"
          >
            {`${index + 1}) `}
            {topic.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopicsPage;
