export const topicsData = [
    {
      subjectId: "react",
      topics: [
        { id: "hooks", name: "Hooks", mcqs: [
            { question: "What is a Hook in React?", options: ["A new way to use state", "A CSS class", "A type of component", "None of the above"], answer: "A new way to use state" },
            { question: "Which Hook is used to manage state in a function component?", options: ["useContext", "useReducer", "useState", "useEffect"], answer: "useState" },
            { question: "Can you use multiple Hooks in a single component?", options: ["Yes", "No"], answer: "Yes" },
            { question: "What does useEffect Hook do?", options: ["Manage component state", "Perform side effects in function components", "Handle component lifecycle methods", "None of the above"], answer: "Perform side effects in function components" },
            { question: "Which Hook is used to handle context in React?", options: ["useContext", "useReducer", "useState", "useEffect"], answer: "useContext" },
            { question: "When is the cleanup function used in useEffect?", options: ["Before every re-render", "After every re-render", "Only on component unmount", "None of the above"], answer: "Before every re-render" },
            { question: "How can you optimize performance with Hooks?", options: ["Using useMemo and useCallback", "Using only useState", "Avoiding Hooks completely", "None of the above"], answer: "Using useMemo and useCallback" },
            { question: "What is the default value of a state in useState?", options: ["undefined", "null", "An empty object", "Depends on the initial value provided"], answer: "Depends on the initial value provided" },
            { question: "Can you use Hooks inside loops or conditions?", options: ["Yes", "No"], answer: "No" },
            { question: "What is a custom Hook?", options: ["A Hook that is defined by the user", "A built-in Hook", "A function that does not use Hooks", "None of the above"], answer: "A Hook that is defined by the user" },
          ] 
        },
        { id: "context", name: "Context", mcqs: [
            { question: "What is React Context?", options: ["A way to pass data through the component tree", "A Hook", "A lifecycle method", "None of the above"], answer: "A way to pass data through the component tree" },
            { question: "How do you create a Context?", options: ["useContext()", "createContext()", "React.createContext()", "Both b and c"], answer: "Both b and c" },
            { question: "What does Context.Provider do?", options: ["It provides data to components", "It consumes data from Context", "It manages component state", "None of the above"], answer: "It provides data to components" },
            { question: "Can you consume multiple Contexts in a single component?", options: ["Yes", "No"], answer: "Yes" },
            { question: "What is the purpose of Context.Consumer?", options: ["To access the context value", "To create a context", "To provide a context", "None of the above"], answer: "To access the context value" },
            { question: "When should you use React Context?", options: ["For passing data through the component tree without props", "For managing state in large applications", "Only for small applications", "None of the above"], answer: "For passing data through the component tree without props" },
            { question: "Can Context be used with Hooks?", options: ["Yes", "No"], answer: "Yes" },
            { question: "How do you update the Context value?", options: ["By using setState()", "By wrapping the component with Context.Provider", "By passing a new value to Context.Provider", "None of the above"], answer: "By passing a new value to Context.Provider" },
            { question: "What is the default value of a Context?", options: ["undefined", "null", "The value passed to createContext()", "None of the above"], answer: "The value passed to createContext()" },
            { question: "Can you use Context without a Provider?", options: ["Yes, but it will return the default value", "No", "Yes, and it will throw an error", "None of the above"], answer: "Yes, but it will return the default value" },
          ] 
        },
        // Add other topics with their MCQs here
      ]
    },
    {
      subjectId: "js",
      topics: [
        { id: "es6", name: "ES6", mcqs: [
            { question: "What is ES6?", options: ["A new JavaScript standard", "A CSS library", "A version of HTML", "None of the above"], answer: "A new JavaScript standard" },
            { question: "Which feature was introduced in ES6?", options: ["Arrow functions", "Async/await", "Promises", "All of the above"], answer: "All of the above" },
            { question: "How do you declare a variable in ES6?", options: ["var", "let", "const", "Both b and c"], answer: "Both b and c" },
            { question: "What is the purpose of the spread operator?", options: ["To spread elements of an array", "To copy properties of an object", "To spread arguments in a function", "All of the above"], answer: "All of the above" },
            { question: "Which symbol is used for template literals?", options: ["$", "#", "`", "@"], answer: "`" },
            { question: "How do you define a class in ES6?", options: ["class MyClass {}", "function MyClass() {}", "MyClass = {}", "None of the above"], answer: "class MyClass {}" },
            { question: "What is the use of the 'import' keyword?", options: ["To import modules", "To import styles", "To import images", "None of the above"], answer: "To import modules" },
            { question: "Which method is used to create a promise?", options: ["Promise.resolve()", "new Promise()", "Promise.create()", "None of the above"], answer: "new Promise()" },
            { question: "What is destructuring?", options: ["Extracting values from arrays or objects", "Destructing an object", "Destroying an array", "None of the above"], answer: "Extracting values from arrays or objects" },
            { question: "How do you create a default parameter in a function?", options: ["function myFunc(param = 'default')", "function myFunc(param)", "function myFunc = 'default'", "None of the above"], answer: "function myFunc(param = 'default')" },
          ] 
        },
        // Add other topics with their MCQs here
      ]
    },
    // Add other subjects with their topics and MCQs here
  ];
  