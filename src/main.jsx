import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import QuizTopicScreen from "./pages/QuizTopicScreen.jsx";
import SubjectTopics from "./pages/SubjectTopics.jsx";
import TestPages from "./pages/TestPages.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<QuizTopicScreen />} />
      <Route path="subjects/:subjectId/topics" element={<SubjectTopics />} />
      <Route path="subjects/:subjectId/topics/:topicId/test" element={<TestPages />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
