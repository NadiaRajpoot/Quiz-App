export const topicsData = [
  {
    subjectId: "react",
    topics: [
      {
        id: "hooks",
        name: "Hooks",
        mcqs: [
          {
            question: "What is a Hook in React?",
            options: [
              "A new way to use state",
              "A CSS class",
              "A type of component",
              "None of the above",
            ],
            answer: "A new way to use state",
          },
          {
            question:
              "Which Hook is used to manage state in a function component?",
            options: ["useContext", "useReducer", "useState", "useEffect"],
            answer: "useState",
          },
          {
            question: "Can you use multiple Hooks in a single component?",
            options: ["Yes", "No"],
            answer: "Yes",
          },
          {
            question: "What does useEffect Hook do?",
            options: [
              "Manage component state",
              "Perform side effects in function components",
              "Handle component lifecycle methods",
              "None of the above",
            ],
            answer: "Perform side effects in function components",
          },
          {
            question: "Which Hook is used to handle context in React?",
            options: ["useContext", "useReducer", "useState", "useEffect"],
            answer: "useContext",
          },
          {
            question: "When is the cleanup function used in useEffect?",
            options: [
              "Before every re-render",
              "After every re-render",
              "Only on component unmount",
              "None of the above",
            ],
            answer: "Before every re-render",
          },
          {
            question: "How can you optimize performance with Hooks?",
            options: [
              "Using useMemo and useCallback",
              "Using only useState",
              "Avoiding Hooks completely",
              "None of the above",
            ],
            answer: "Using useMemo and useCallback",
          },
          {
            question: "What is the default value of a state in useState?",
            options: [
              "undefined",
              "null",
              "An empty object",
              "Depends on the initial value provided",
            ],
            answer: "Depends on the initial value provided",
          },
          {
            question: "Can you use Hooks inside loops or conditions?",
            options: ["Yes", "No"],
            answer: "No",
          },
          {
            question: "What is a custom Hook?",
            options: [
              "A Hook that is defined by the user",
              "A built-in Hook",
              "A function that does not use Hooks",
              "None of the above",
            ],
            answer: "A Hook that is defined by the user",
          },
        ],
      },
      {
        id: "context",
        name: "Context",
        mcqs: [
          {
            question: "What is React Context?",
            options: [
              "A way to pass data through the component tree",
              "A Hook",
              "A lifecycle method",
              "None of the above",
            ],
            answer: "A way to pass data through the component tree",
          },
          {
            question: "How do you create a Context?",
            options: [
              "useContext()",
              "createContext()",
              "React.createContext()",
              "Both b and c",
            ],
            answer: "Both b and c",
          },
          {
            question: "What does Context.Provider do?",
            options: [
              "It provides data to components",
              "It consumes data from Context",
              "It manages component state",
              "None of the above",
            ],
            answer: "It provides data to components",
          },
          {
            question:
              "Can you consume multiple Contexts in a single component?",
            options: ["Yes", "No"],
            answer: "Yes",
          },
          {
            question: "What is the purpose of Context.Consumer?",
            options: [
              "To access the context value",
              "To create a context",
              "To provide a context",
              "None of the above",
            ],
            answer: "To access the context value",
          },
          {
            question: "When should you use React Context?",
            options: [
              "For passing data through the component tree without props",
              "For managing state in large applications",
              "Only for small applications",
              "None of the above",
            ],
            answer: "For passing data through the component tree without props",
          },
          {
            question: "Can Context be used with Hooks?",
            options: ["Yes", "No"],
            answer: "Yes",
          },
          {
            question: "How do you update the Context value?",
            options: [
              "By using setState()",
              "By wrapping the component with Context.Provider",
              "By passing a new value to Context.Provider",
              "None of the above",
            ],
            answer: "By passing a new value to Context.Provider",
          },
          {
            question: "What is the default value of a Context?",
            options: [
              "undefined",
              "null",
              "The value passed to createContext()",
              "None of the above",
            ],
            answer: "The value passed to createContext()",
          },
          {
            question: "Can you use Context without a Provider?",
            options: [
              "Yes, but it will return the default value",
              "No",
              "Yes, and it will throw an error",
              "None of the above",
            ],
            answer: "Yes, but it will return the default value",
          },
        ],
      },

      {
        id: "redux",
        name: "Redux",
        mcqs: [
          {
            question:
              'Redux offer a solution of storing all your application state in one place called a "____________"',
            options: ["Storage", "Save", "Store", "Bank"],
            answer: "store",
          },
          {
            question:
              "The function that takes the current state and an action, and returns the next state is called a ____________.",
            options: ["Reducer", "Dispatcher", "Store", "Middleware"],
            answer: "Reducer",
          },
          {
            question:
              "In Redux, to update the state, you need to dispatch an ____________.",
            options: ["Update", "Action", "Event", "Change"],
            answer: "Action",
          },
          {
            question: "Which method do you use to create a Redux store?",
            options: ["makeStore", "initStore", "createStore", "buildStore"],
            answer: "createStore",
          },
          {
            question: "Middleware in Redux is used to handle ____________.",
            options: [
              "Synchronous logic",
              "Asynchronous logic",
              "Reducers",
              "State updates",
            ],
            answer: "Asynchronous logic",
          },
          {
            question: "Which of the following is NOT a principle of Redux?",
            options: [
              "Single source of truth",
              "State is read-only",
              "Changes are made with pure functions",
              "Multiple sources of truth",
            ],
            answer: "Multiple sources of truth",
          },
          {
            question: "The store in Redux can be accessed using ____________.",
            options: [
              "getState()",
              "fetchState()",
              "retrieveState()",
              "obtainState()",
            ],
            answer: "getState()",
          },
          {
            question:
              "The connect function in React-Redux is used to ____________.",
            options: [
              "Connect components to the Redux store",
              "Connect reducers to actions",
              "Connect actions to the store",
              "Connect the store to the backend",
            ],
            answer: "Connect components to the Redux store",
          },
          {
            question: "In Redux, action creators are used to ____________.",
            options: [
              "Create reducers",
              "Create actions",
              "Create the store",
              "Create middleware",
            ],
            answer: "Create actions",
          },
          {
            question:
              "To combine multiple reducers in Redux, you use ____________.",
            options: [
              "combineReducers",
              "mergeReducers",
              "joinReducers",
              "attachReducers",
            ],
            answer: "combineReducers",
          },
          {
            question:
              "The method used to subscribe to state changes in a Redux store is ____________.",
            options: ["addListener", "listen", "subscribe", "onChange"],
            answer: "subscribe",
          },
          {
            question:
              "To initialize the Redux store in a React application, you wrap the root component with ____________.",
            options: [
              "Provider",
              "StoreProvider",
              "StateProvider",
              "RootProvider",
            ],
            answer: "Provider",
          },
          {
            question:
              "Which hook is used to dispatch actions in a functional React component?",
            options: ["useAction", "useDispatch", "useReducer", "useStore"],
            answer: "useDispatch",
          },
          {
            question:
              "In Redux, to select a specific piece of state from the store, you use ____________.",
            options: ["useSelector", "useSelect", "useStore", "useState"],
            answer: "useSelector",
          },
          {
            question:
              "How do you apply middleware like redux-thunk or redux-saga to a Redux store?",
            options: [
              "applyMiddleware",
              "useMiddleware",
              "attachMiddleware",
              "addMiddleware",
            ],
            answer: "applyMiddleware",
          },
        ],
      },
      {
        id: "router",
        name: "React Router",
        mcqs: [
          {
            question:
              "What is the primary purpose of React Router in a React application?",
            options: [
              "To manage state",
              "To handle routing and navigation",
              "To manage components",
              "To handle forms",
            ],
            answer: "To handle routing and navigation",
          },
          {
            question:
              "Which command is used to install react-router-dom in a React application?",
            options: [
              "npm install react-router",
              "npm install react-router-native",
              "npm install react-router-dom --save",
              "npm install react-router-app",
            ],
            answer: "npm install react-router-dom --save",
          },
          {
            question:
              "Which component is used for handling dynamic URLs in React Router?",
            options: [
              "StaticRouter",
              "HashRouter",
              "BrowserRouter",
              "MemoryRouter",
            ],
            answer: "BrowserRouter",
          },
          {
            question:
              "In React Router, which component is used to create navigation links?",
            options: ["Link", "NavLink", "Anchor", "RouterLink"],
            answer: "Link",
          },
          {
            question:
              "What is the difference between <Link> and <NavLink> in React Router?",
            options: [
              "<Link> allows navigation, <NavLink> does not",
              "<NavLink> provides styling capabilities for active links",
              "<NavLink> does not support dynamic routing",
              "There is no difference",
            ],
            answer: "<NavLink> provides styling capabilities for active links",
          },
          {
            question:
              "Which hook is used to access URL parameters in a functional component?",
            options: [
              "useParams",
              "useRouteMatch",
              "useLocation",
              "useHistory",
            ],
            answer: "useParams",
          },
          {
            question:
              "What will happen if you try to navigate to a route that does not exist in a React Router application?",
            options: [
              "The app will crash",
              "It will redirect to the home page",
              "A 404 Not Found component will be rendered",
              "Nothing will happen",
            ],
            answer: "A 404 Not Found component will be rendered",
          },
          {
            question:
              "What is the purpose of the <Redirect> component in React Router?",
            options: [
              "To handle 404 errors",
              "To navigate to another route programmatically",
              "To redirect to another route",
              "To style active links",
            ],
            answer: "To redirect to another route",
          },
        ],
      },
      {
        id: "jsx",
        name: "JSX",
        mcqs: [
          {
            question: "What does JSX stand for in React?",
            options: [
              "JavaScript XML",
              "JavaScript Extension",
              "Java Syntax Extension",
              "JavaScript X",
            ],
            answer: "JavaScript XML",
          },
          {
            question: "Which of the following is true about JSX?",
            options: [
              "It is a syntax extension for JavaScript",
              "It must be converted to JavaScript before browsers can read it",
              "Both of the above",
              "None of the above",
            ],
            answer: "Both of the above",
          },
          {
            question: "How do you embed JavaScript expressions inside JSX?",
            options: [
              "Using curly braces {}",
              'Using double quotes ""',
              "Using parentheses ()",
              "Using square brackets []",
            ],
            answer: "Using curly braces {}",
          },
          {
            question: "Which of the following is a valid JSX element?",
            options: [
              "<div> Hello World </div>",
              "<div> Hello World </>",
              "<div> Hello World <div>",
              "<div> Hello World </div/>",
            ],
            answer: "<div> Hello World </div>",
          },
          {
            question: "In JSX, how do you add a class to a HTML element?",
            options: ["className", "class", "classname", "Class"],
            answer: "className",
          },
          {
            question:
              "Which of the following is the correct way to comment in JSX?",
            options: [
              "// This is a comment",
              "<!-- This is a comment -->",
              "{/* This is a comment */}",
              "/* This is a comment */",
            ],
            answer: "{/* This is a comment */}",
          },
          {
            question: "How do you render an array of items in JSX?",
            options: [
              "Using a for loop",
              "Using map() method",
              "Using a while loop",
              "Using forEach() method",
            ],
            answer: "Using map() method",
          },
          {
            question: "How do you handle inline styles in JSX?",
            options: [
              "Using a string of CSS rules",
              "Using an object with camelCased properties",
              "Using an array of styles",
              "Using a separate CSS file",
            ],
            answer: "Using an object with camelCased properties",
          },
          {
            question: "Which of the following is not a valid JSX attribute?",
            options: ["onClick", "data-value", "aria-label", "for"],
            answer: "for",
          },
          {
            question:
              "What is the correct way to conditionally render a component in JSX?",
            options: [
              "Using if-else statements",
              "Using switch statements",
              "Using ternary operators",
              "All of the above",
            ],
            answer: "Using ternary operators",
          },
          {
            question: "What does Babel do with JSX code?",
            options: [
              "Converts it into HTML",
              "Converts it into JavaScript",
              "Converts it into CSS",
              "Converts it into XML",
            ],
            answer: "Converts it into JavaScript",
          },
          {
            question: "How do you pass props to a component in JSX?",
            options: [
              "Using the props keyword",
              "Using HTML attributes",
              "Using context",
              "Using a separate props file",
            ],
            answer: "Using HTML attributes",
          },
          {
            question:
              "What will happen if you try to return multiple elements from a component without a wrapping element in JSX?",
            options: [
              "It will throw an error",
              "It will work as expected",
              "It will render only the first element",
              "It will render only the last element",
            ],
            answer: "It will throw an error",
          },
          {
            question: "What is the correct way to use fragments in JSX?",
            options: [
              "<div></div>",
              "<Fragment></Fragment>",
              "<></>",
              "<React.Fragment></React.Fragment>",
            ],
            answer: "<React.Fragment></React.Fragment>",
          },
          {
            question: "How do you handle events in JSX?",
            options: [
              "Using lowercase event names",
              "Using camelCase event names",
              "Using uppercase event names",
              "Using PascalCase event names",
            ],
            answer: "Using camelCase event names",
          },
        ],
      },
    ],
  },
  //  ---------------------------JavaScipt--------------------------
  {
    subjectId: "js",
    topics: [
      {
        id: "es6",
        name: "ES6",
        mcqs: [
          {
            question: "What is ES6?",
            options: [
              "A new JavaScript standard",
              "A CSS library",
              "A version of HTML",
              "None of the above",
            ],
            answer: "A new JavaScript standard",
          },
          {
            question: "Which feature was introduced in ES6?",
            options: [
              "Arrow functions",
              "Async/await",
              "Promises",
              "All of the above",
            ],
            answer: "All of the above",
          },
          {
            question: "How do you declare a variable in ES6?",
            options: ["var", "let", "const", "Both b and c"],
            answer: "Both b and c",
          },
          {
            question: "What is the purpose of the spread operator?",
            options: [
              "To spread elements of an array",
              "To copy properties of an object",
              "To spread arguments in a function",
              "All of the above",
            ],
            answer: "All of the above",
          },
          {
            question: "Which symbol is used for template literals?",
            options: ["$", "#", "`", "@"],
            answer: "`",
          },
          {
            question: "How do you define a class in ES6?",
            options: [
              "class MyClass {}",
              "function MyClass() {}",
              "MyClass = {}",
              "None of the above",
            ],
            answer: "class MyClass {}",
          },
          {
            question: "What is the use of the 'import' keyword?",
            options: [
              "To import modules",
              "To import styles",
              "To import images",
              "None of the above",
            ],
            answer: "To import modules",
          },
          {
            question: "Which method is used to create a promise?",
            options: [
              "Promise.resolve()",
              "new Promise()",
              "Promise.create()",
              "None of the above",
            ],
            answer: "new Promise()",
          },
          {
            question: "What is destructuring?",
            options: [
              "Extracting values from arrays or objects",
              "Destructing an object",
              "Destroying an array",
              "None of the above",
            ],
            answer: "Extracting values from arrays or objects",
          },
          {
            question: "How do you create a default parameter in a function?",
            options: [
              "function myFunc(param = 'default')",
              "function myFunc(param)",
              "function myFunc = 'default'",
              "None of the above",
            ],
            answer: "function myFunc(param = 'default')",
          },
        ],
      },
      {
        id: "async",
        name: "Asynchronous JavaScript",
        mcqs: [
          {
            question: "What does AJAX stand for?",
            options: [
              "Asynchronous JavaScript and XML",
              "Asynchronous JavaScript and XHTML",
              "Asynchronous JSON and XML",
              "Asynchronous JSON and XHTML",
            ],
            answer: "Asynchronous JavaScript and XML",
          },
          {
            question:
              "Which of the following methods is used to make an asynchronous HTTP request?",
            options: [
              "fetch()",
              "setTimeout()",
              "setInterval()",
              "JSON.parse()",
            ],
            answer: "fetch()",
          },
          {
            question: "How do you handle a promise in JavaScript?",
            options: ["then()", "catch()", "finally()", "All of the above"],
            answer: "All of the above",
          },
          {
            question: "What is the purpose of the async keyword in JavaScript?",
            options: [
              "To make a function asynchronous",
              "To declare an asynchronous variable",
              "To pause the execution of a function",
              "To handle errors in an asynchronous function",
            ],
            answer: "To make a function asynchronous",
          },
          {
            question: "What is the purpose of the await keyword in JavaScript?",
            options: [
              "To wait for a promise to resolve",
              "To make a function asynchronous",
              "To catch errors in an asynchronous function",
              "To declare an asynchronous variable",
            ],
            answer: "To wait for a promise to resolve",
          },
          {
            question: "Which of the following is true about Promises?",
            options: [
              "They represent the eventual completion (or failure) of an asynchronous operation",
              "They have three states: pending, fulfilled, and rejected",
              "They can be chained using then() and catch() methods",
              "All of the above",
            ],
            answer: "All of the above",
          },
          {
            question:
              "What is the correct syntax to use the fetch API to make a GET request?",
            options: [
              "fetch('url')",
              "fetch.get('url')",
              "fetch({ method: 'GET', url: 'url' })",
              "fetch({ url: 'url' })",
            ],
            answer: "fetch('url')",
          },
          {
            question:
              "How do you convert a JavaScript object to a JSON string?",
            options: [
              "JSON.stringify()",
              "JSON.parse()",
              "JSON.convert()",
              "JSON.objectify()",
            ],
            answer: "JSON.stringify()",
          },
          {
            question:
              "Which of the following is used to handle errors in asynchronous operations?",
            options: [
              "try...catch",
              "finally",
              "try...catch...finally",
              "All of the above",
            ],
            answer: "All of the above",
          },
          {
            question: "What is the purpose of the Promise.all() method?",
            options: [
              "To wait for multiple promises to resolve",
              "To handle errors in multiple promises",
              "To chain multiple promises",
              "To create a new promise",
            ],
            answer: "To wait for multiple promises to resolve",
          },
          {
            question: "How do you create a new promise in JavaScript?",
            options: [
              "new Promise((resolve, reject) => { ... })",
              "Promise.create((resolve, reject) => { ... })",
              "Promise.new((resolve, reject) => { ... })",
              "new Promise.create((resolve, reject) => { ... })",
            ],
            answer: "new Promise((resolve, reject) => { ... })",
          },
          {
            question:
              'What is the output of the following code?\n\nconsole.log("Start");\nsetTimeout(() => { console.log("Middle"); }, 0);\nconsole.log("End");',
            options: [
              "Start Middle End",
              "Start End Middle",
              "Middle Start End",
              "End Start Middle",
            ],
            answer: "Start End Middle",
          },
          {
            question:
              "Which of the following is a feature of the async/await syntax?",
            options: [
              "It makes asynchronous code look and behave like synchronous code",
              "It is built on top of promises",
              "It can only be used inside functions marked with the async keyword",
              "All of the above",
            ],
            answer: "All of the above",
          },
          {
            question:
              "Which method would you use to run an asynchronous function after a delay?",
            options: [
              "setTimeout()",
              "setInterval()",
              "setImmediate()",
              "process.nextTick()",
            ],
            answer: "setTimeout()",
          },
          {
            question:
              "What is the difference between microtasks and macrotasks in JavaScript?",
            options: [
              "Microtasks are executed before macrotasks",
              "Macrotasks are executed before microtasks",
              "They are executed in parallel",
              "There is no difference",
            ],
            answer: "Microtasks",
          },
        ],
      },
      {
        id: "dom",
        name: "DOM Manipulation",
        mcqs: [
          {
            question: "What does DOM stand for?",
            options: [
              "Document Object Model",
              "Data Object Model",
              "Document Orientation Model",
              "Data Orientation Model",
            ],
            answer: "Document Object Model",
          },
          {
            question:
              "Which method is used to select an element by its ID in JavaScript?",
            options: [
              "getElementByClass",
              "getElementById",
              "getElementByTag",
              "querySelector",
            ],
            answer: "getElementById",
          },
          {
            question: "How do you create a new HTML element in the DOM?",
            options: [
              "document.createElement()",
              "document.newElement()",
              "document.addElement()",
              "document.makeElement()",
            ],
            answer: "document.createElement()",
          },
          {
            question: "Which method is used to remove an element from the DOM?",
            options: [
              "removeChild()",
              "deleteChild()",
              "removeElement()",
              "deleteElement()",
            ],
            answer: "removeChild()",
          },
          {
            question:
              "How do you add a new child element to an existing element?",
            options: [
              "appendChild()",
              "addChild()",
              "insertChild()",
              "createChild()",
            ],
            answer: "appendChild()",
          },
          {
            question:
              "Which property is used to change the text content of an HTML element?",
            options: ["innerHTML", "innerText", "textContent", "textNode"],
            answer: "textContent",
          },
          {
            question:
              "What is the correct syntax to add a class to an HTML element?",
            options: [
              "element.addClass('className')",
              "element.classList.add('className')",
              "element.className.add('className')",
              "element.class.add('className')",
            ],
            answer: "element.classList.add('className')",
          },
          {
            question: "How do you listen for an event on an HTML element?",
            options: [
              "element.addEventListener('event', function)",
              "element.on('event', function)",
              "element.listenEvent('event', function)",
              "element.triggerEvent('event', function)",
            ],
            answer: "element.addEventListener('event', function)",
          },
          {
            question:
              "Which method can be used to get all elements of a specific class?",
            options: [
              "document.getElementsByClassName('className')",
              "document.querySelectorAll('.className')",
              "document.getElementByClass('className')",
              "Both document.getElementsByClassName() and document.querySelectorAll()",
            ],
            answer:
              "Both document.getElementsByClassName() and document.querySelectorAll()",
          },
          {
            question:
              "How can you change the attribute value of an HTML element?",
            options: [
              "element.setAttribute('attribute', 'value')",
              "element.changeAttribute('attribute', 'value')",
              "element.updateAttribute('attribute', 'value')",
              "element.modifyAttribute('attribute', 'value')",
            ],
            answer: "element.setAttribute('attribute', 'value')",
          },
          {
            question:
              "What is the method to prevent the default action of an event in JavaScript?",
            options: [
              "event.stopDefault()",
              "event.preventDefault()",
              "event.prevent()",
              "event.stopAction()",
            ],
            answer: "event.preventDefault()",
          },
          {
            question:
              "Which property would you use to change the style of an HTML element dynamically?",
            options: [
              "element.style",
              "element.css",
              "element.className",
              "element.classList",
            ],
            answer: "element.style",
          },
          {
            question:
              "How do you find the parent element of a specific HTML element?",
            options: [
              "element.parentElement",
              "element.parent",
              "element.getParent()",
              "element.getParentElement()",
            ],
            answer: "element.parentElement",
          },
          {
            question:
              "Which method is used to insert an element before another element?",
            options: [
              "insertBefore()",
              "appendBefore()",
              "insertPrior()",
              "appendPrior()",
            ],
            answer: "insertBefore()",
          },
          {
            question: "How do you clone an HTML element in the DOM?",
            options: [
              "element.clone()",
              "element.copy()",
              "element.cloneNode()",
              "element.copyNode()",
            ],
            answer: "element.cloneNode()",
          },
        ],
      },
      {
        id: "functions",
        name: "Functions",
        mcqs: [
          {
            question: "What is a function in JavaScript?",
            options: [
              "A block of code designed to perform a particular task",
              "A variable that holds multiple values",
              "An object with properties and methods",
              "A special kind of loop",
            ],
            answer: "A block of code designed to perform a particular task",
          },
          {
            question: "How do you define a function in JavaScript?",
            options: [
              "function:myFunction() {}",
              "def myFunction() {}",
              "function myFunction() {}",
              "func myFunction() {}",
            ],
            answer: "function myFunction() {}",
          },
          {
            question:
              'How do you call a function named "myFunction" in JavaScript?',
            options: [
              "myFunction();",
              "call myFunction();",
              "run myFunction();",
              "execute myFunction();",
            ],
            answer: "myFunction();",
          },
          {
            question:
              "What is the keyword used to return a value from a function?",
            options: ["get", "return", "yield", "output"],
            answer: "return",
          },
          {
            question: "How can you pass a parameter to a function?",
            options: [
              "function myFunction(param) {}",
              "function myFunction {param} {}",
              "function myFunction[param] {}",
              "function myFunction<param> {}",
            ],
            answer: "function myFunction(param) {}",
          },
          {
            question: "What is an anonymous function in JavaScript?",
            options: [
              "A function without a name",
              "A function without parameters",
              "A function without a return value",
              "A function that is not used",
            ],
            answer: "A function without a name",
          },
          {
            question: "Which of the following is a self-invoking function?",
            options: [
              "function() {}();",
              "(function() {})();",
              "function() {}();",
              "(function() {}();",
            ],
            answer: "(function() {})();",
          },
          {
            question: "What is a callback function?",
            options: [
              "A function that calls itself",
              "A function passed as an argument to another function",
              "A function that is never called",
              "A function that returns another function",
            ],
            answer: "A function passed as an argument to another function",
          },
          {
            question: "How do you declare a function expression?",
            options: [
              "let myFunction = function() {};",
              "function myFunction() {};",
              "let function myFunction() {};",
              "myFunction function() {};",
            ],
            answer: "let myFunction = function() {};",
          },
          {
            question: "What is an arrow function in JavaScript?",
            options: [
              "A function defined using the => syntax",
              "A function that always returns a value",
              "A function with no parameters",
              "A function that does not use the return keyword",
            ],
            answer: "A function defined using the => syntax",
          },
          {
            question:
              "How do you declare a default parameter value in a function?",
            options: [
              "function myFunction(param = value) {}",
              "function myFunction = (param value) {}",
              "function myFunction(value = param) {}",
              "function myFunction(param := value) {}",
            ],
            answer: "function myFunction(param = value) {}",
          },
          {
            question: 'What is the "arguments" object in JavaScript functions?',
            options: [
              "An array-like object accessible inside functions that contains the values of the arguments passed to that function",
              "A reference to the global object",
              "A method to pass arguments to a function",
              "An error handler",
            ],
            answer:
              "An array-like object accessible inside functions that contains the values of the arguments passed to that function",
          },
          {
            question:
              "Which of the following statements is true about function hoisting in JavaScript?",
            options: [
              "Function declarations are hoisted to the top of their scope",
              "Function expressions are hoisted to the top of their scope",
              "Both function declarations and function expressions are hoisted to the top of their scope",
              "Neither function declarations nor function expressions are hoisted",
            ],
            answer:
              "Function declarations are hoisted to the top of their scope",
          },
          {
            question: 'What does the "this" keyword refer to in a function?',
            options: [
              "The global object",
              "The object that called the function",
              "The function itself",
              "A local variable",
            ],
            answer: "The object that called the function",
          },
          {
            question:
              "How do you create an immediately invoked function expression (IIFE)?",
            options: [
              "(function() {})();",
              "function() {}();",
              "(function() {});",
              "function() {}();",
            ],
            answer: "(function() {})();",
          },
        ],
      },
      {
        id: "events",
        name: "Event Handling",
        mcqs: [
          {
            question: "What is an event in JavaScript?",
            options: [
              "An action or occurrence that happens in the browser",
              "A variable declaration",
              "A function execution",
              "An object creation",
            ],
            answer: "An action or occurrence that happens in the browser",
          },
          {
            question:
              "Which method is used to attach an event handler to an element?",
            options: [
              "addEventListener()",
              "attachEvent()",
              "onEvent()",
              "bindEvent()",
            ],
            answer: "addEventListener()",
          },
          {
            question:
              "What is the purpose of the event object in an event handler?",
            options: [
              "To provide information about the event that occurred",
              "To store the state of the document",
              "To manage the DOM elements",
              "To define global variables",
            ],
            answer: "To provide information about the event that occurred",
          },
          {
            question: "How do you prevent the default action of an event?",
            options: [
              "event.preventDefault()",
              "event.stopPropagation()",
              "event.stopImmediatePropagation()",
              "event.cancel()",
            ],
            answer: "event.preventDefault()",
          },
          {
            question: "Which method can be used to remove an event listener?",
            options: [
              "removeEventListener()",
              "detachEvent()",
              "offEvent()",
              "unbindEvent()",
            ],
            answer: "removeEventListener()",
          },
          {
            question:
              "How do you handle an event for a specific element in JavaScript?",
            options: [
              "element.addEventListener('event', handlerFunction)",
              "element.onEvent('event', handlerFunction)",
              "element.handleEvent('event', handlerFunction)",
              "element.bindEvent('event', handlerFunction)",
            ],
            answer: "element.addEventListener('event', handlerFunction)",
          },
          {
            question: "What does event.target refer to in an event handler?",
            options: [
              "The element that triggered the event",
              "The parent element of the event",
              "The document object",
              "The global object",
            ],
            answer: "The element that triggered the event",
          },
          {
            question: "Which event is fired when a user clicks on an element?",
            options: ["click", "mouseover", "focus", "submit"],
            answer: "click",
          },
          {
            question:
              "How can you handle multiple events for a single element?",
            options: [
              "By using multiple addEventListener() calls",
              "By using multiple onEvent() handlers",
              "By chaining event handlers",
              "By defining a single handler for all events",
            ],
            answer: "By using multiple addEventListener() calls",
          },
          {
            question: "What is event delegation?",
            options: [
              "A technique where a single event listener is added to a parent element to manage events for multiple child elements",
              "A method to bind events directly to multiple elements",
              "A way to delay the execution of events",
              "A strategy for removing events from the DOM",
            ],
            answer:
              "A technique where a single event listener is added to a parent element to manage events for multiple child elements",
          },
          {
            question:
              "What is the difference between event bubbling and event capturing?",
            options: [
              "Event bubbling starts from the target element and bubbles up to the root, while event capturing starts from the root and captures down to the target element",
              "Event bubbling captures events from the root, while event capturing bubbles events up to the root",
              "Event bubbling and event capturing are the same",
              "Event bubbling is used for capturing events, and event capturing is used for bubbling events",
            ],
            answer:
              "Event bubbling starts from the target element and bubbles up to the root, while event capturing starts from the root and captures down to the target element",
          },
          {
            question:
              "Which method can be used to stop the propagation of an event?",
            options: [
              "event.stopPropagation()",
              "event.preventDefault()",
              "event.cancel()",
              "event.stopImmediatePropagation()",
            ],
            answer: "event.stopPropagation()",
          },
          {
            question:
              "How can you use an event handler to handle a keyboard event?",
            options: [
              "element.addEventListener('keydown', handlerFunction)",
              "element.addEventListener('keypress', handlerFunction)",
              "element.addEventListener('keyup', handlerFunction)",
              "All of the above",
            ],
            answer: "All of the above",
          },
          {
            question:
              "What is the purpose of the event.currentTarget property?",
            options: [
              "It refers to the element to which the event handler is attached",
              "It refers to the element that triggered the event",
              "It refers to the root element of the event",
              "It refers to the element where the event was originally dispatched",
            ],
            answer:
              "It refers to the element to which the event handler is attached",
          },
          {
            question: "How do you access the key code of a keypress event?",
            options: [
              "event.keyCode",
              "event.code",
              "event.which",
              "event.key",
            ],
            answer: "event.keyCode",
          },
        ],
      },
    ],
  },
  //-------------------------------Python--------------------------
  {
    subjectId: "py",
    topics: [
      {
        id: "basics",
        name: "Python Basics",
        mcqs: [
          {
            question: "What is the correct file extension for Python files?",
            options: [".py", ".python", ".pyt", ".pyth"],
            answer: ".py",
          },
          {
            question: 'How do you print "Hello, World!" in Python?',
            options: [
              'print("Hello, World!")',
              'echo "Hello, World!"',
              'printf("Hello, World!")',
              'console.log("Hello, World!")',
            ],
            answer: 'print("Hello, World!")',
          },
          {
            question:
              "Which of the following is a valid variable name in Python?",
            options: ["my_var", "my-var", "my var", "my@var"],
            answer: "my_var",
          },
          {
            question:
              "What data type is the result of the expression 5/2 in Python 3?",
            options: ["Integer", "Float", "String", "Complex"],
            answer: "Float",
          },
          {
            question:
              "Which of the following keywords is used to define a function in Python?",
            options: ["def", "function", "fun", "define"],
            answer: "def",
          },
          {
            question: "How do you create a list in Python?",
            options: [
              "my_list = []",
              "my_list = ()",
              "my_list = {}",
              "my_list = //",
            ],
            answer: "my_list = []",
          },
          {
            question:
              "Which method can be used to add an item to the end of a list in Python?",
            options: ["append()", "add()", "insert()", "extend()"],
            answer: "append()",
          },
          {
            question: "How do you comment a single line in Python?",
            options: [
              "# This is a comment",
              "// This is a comment",
              "/* This is a comment */",
              "<!-- This is a comment -->",
            ],
            answer: "# This is a comment",
          },
          {
            question:
              "What will be the output of the following code: `print(type(5))`?",
            options: [
              "<class 'int'>",
              "<class 'float'>",
              "<class 'str'>",
              "<class 'list'>",
            ],
            answer: "<class 'int'>",
          },
          {
            question: "Which operator is used for exponentiation in Python?",
            options: ["**", "^", "%", "//"],
            answer: "**",
          },
          {
            question:
              'What will be the result of the expression "hello" * 3 in Python?',
            options: ["hellohellohello", "hellohello", "hello3", "3hello"],
            answer: "hellohellohello",
          },
          {
            question: "How do you handle exceptions in Python?",
            options: [
              "try...except",
              "catch...finally",
              "error...handle",
              "try...catch",
            ],
            answer: "try...except",
          },
          {
            question:
              "Which function is used to get the length of a list in Python?",
            options: ["len()", "length()", "size()", "count()"],
            answer: "len()",
          },
          {
            question: 'How do you import a module named "math" in Python?',
            options: [
              "import math",
              "include math",
              "require math",
              "using math",
            ],
            answer: "import math",
          },
          {
            question: "What does the `pass` statement do in Python?",
            options: [
              "It acts as a placeholder for future code",
              "It exits the loop",
              "It throws an exception",
              "It skips the current iteration",
            ],
            answer: "It acts as a placeholder for future code",
          },
        ],
      },
      {
        id: "oop",
        name: "Object-Oriented Programming",
        mcqs: [
          {
            question:
              "What is the main principle of Object-Oriented Programming (OOP)?",
            options: [
              "Encapsulation, Inheritance, Polymorphism, and Abstraction",
              "Modularity, Functions, Classes, and Methods",
              "Variables, Operators, Conditionals, and Loops",
              "Inheritance, Recursion, Compilation, and Execution",
            ],
            answer: "Encapsulation, Inheritance, Polymorphism, and Abstraction",
          },
          {
            question: "How do you define a class in Python?",
            options: [
              "class ClassName:",
              "define class ClassName:",
              "create class ClassName:",
              "class ClassName()",
            ],
            answer: "class ClassName:",
          },
          {
            question: "Which method is used to initialize an object in Python?",
            options: ["__init__()", "initialize()", "start()", "setup()"],
            answer: "__init__()",
          },
          {
            question: "What does encapsulation refer to in OOP?",
            options: [
              "The bundling of data with methods that operate on the data",
              "The ability to use a subclass in place of a superclass",
              "The ability to create multiple methods with the same name but different parameters",
              "The process of defining a new class based on an existing class",
            ],
            answer:
              "The bundling of data with methods that operate on the data",
          },
          {
            question: "How do you create a subclass in Python?",
            options: [
              "class SubclassName(SuperclassName):",
              "class SubclassName extends SuperclassName:",
              "class SubclassName implements SuperclassName:",
              "class SubclassName inherits SuperclassName:",
            ],
            answer: "class SubclassName(SuperclassName):",
          },
          {
            question: "What is polymorphism in OOP?",
            options: [
              "The ability to use a single method name for different types of operations",
              "The process of hiding the internal state of an object",
              "The concept of creating a new class from an existing class",
              "The ability to create methods with the same name but different parameters",
            ],
            answer:
              "The ability to use a single method name for different types of operations",
          },
          {
            question:
              "Which keyword is used to call a method from the parent class?",
            options: ["super", "base", "parent", "self"],
            answer: "super",
          },
          {
            question: "How do you create an instance of a class in Python?",
            options: [
              "object = ClassName()",
              "object = new ClassName()",
              "object = create ClassName()",
              "object = ClassName.new()",
            ],
            answer: "object = ClassName()",
          },
          {
            question: "What is an abstract class?",
            options: [
              "A class that cannot be instantiated and is designed to be subclassed",
              "A class that can be used directly to create objects",
              "A class that contains only static methods",
              "A class that does not have any methods",
            ],
            answer:
              "A class that cannot be instantiated and is designed to be subclassed",
          },
          {
            question: "What is method overriding?",
            options: [
              "Providing a new implementation for a method inherited from a superclass",
              "Creating multiple methods with the same name but different parameters",
              "Creating methods that are not inherited by subclasses",
              "Using a method in a class without defining it",
            ],
            answer:
              "Providing a new implementation for a method inherited from a superclass",
          },
          {
            question:
              "Which of the following is an example of data abstraction in Python?",
            options: [
              "Using getter and setter methods to access private attributes",
              "Using inheritance to create a subclass",
              "Using multiple methods with the same name",
              "Using the super keyword to access parent class methods",
            ],
            answer:
              "Using getter and setter methods to access private attributes",
          },
          {
            question: "What is multiple inheritance?",
            options: [
              "A class that is derived from more than one base class",
              "A class that can have multiple instances",
              "A class that can inherit from only one base class",
              "A class that inherits attributes and methods from another class",
            ],
            answer: "A class that is derived from more than one base class",
          },
          {
            question:
              "Which method is used to represent an object as a string in Python?",
            options: [
              "__str__()",
              "__repr__()",
              "__display__()",
              "__format__()",
            ],
            answer: "__str__()",
          },
          {
            question: "How do you access a class variable in Python?",
            options: [
              "ClassName.variable",
              "self.variable",
              "object.variable",
              "variable.ClassName",
            ],
            answer: "ClassName.variable",
          },
          {
            question: 'What does the term "self" refer to in Python classes?',
            options: [
              "The instance of the class",
              "The class itself",
              "A variable in the class",
              "A method of the class",
            ],
            answer: "The instance of the class",
          },
        ],
      },
      {
        id: "web",
        name: "Web Development with Flask",
        mcqs: [
          {
            question: "What is Flask?",
            options: [
              "A lightweight web framework for Python",
              "A JavaScript library for building user interfaces",
              "A database management system",
              "A tool for managing Python packages",
            ],
            answer: "A lightweight web framework for Python",
          },
          {
            question: "How do you create a new Flask application?",
            options: [
              "app = Flask(__name__)",
              "Flask.app()",
              "Flask.create_app()",
              "new Flask()",
            ],
            answer: "app = Flask(__name__)",
          },
          {
            question: "Which method is used to define a route in Flask?",
            options: [
              "@app.route()",
              "app.add_route()",
              "app.define_route()",
              "route()",
            ],
            answer: "@app.route()",
          },
          {
            question:
              "What is the default port for a Flask development server?",
            options: ["5000", "8000", "3000", "8080"],
            answer: "5000",
          },
          {
            question: "How do you start a Flask development server?",
            options: [
              "flask run",
              "python app.py",
              "flask start",
              "python flask.py",
            ],
            answer: "flask run",
          },
          {
            question:
              "What is the purpose of the `render_template` function in Flask?",
            options: [
              "To render HTML templates",
              "To handle form submissions",
              "To connect to a database",
              "To manage application configurations",
            ],
            answer: "To render HTML templates",
          },
          {
            question: "How do you pass data from a Flask route to a template?",
            options: [
              "By using `render_template` with keyword arguments",
              "By setting global variables",
              "By modifying the Flask configuration",
              "By using `app.add_data()`",
            ],
            answer: "By using `render_template` with keyword arguments",
          },
          {
            question:
              "What is the purpose of the `@app.route()` decorator in Flask?",
            options: [
              "To map URLs to view functions",
              "To create database models",
              "To manage application settings",
              "To handle HTTP methods",
            ],
            answer: "To map URLs to view functions",
          },
          {
            question:
              "How do you access form data submitted via a POST request in Flask?",
            options: [
              "request.form",
              "request.data",
              "request.json",
              "request.get()",
            ],
            answer: "request.form",
          },
          {
            question: "Which Flask object is used to handle HTTP requests?",
            options: ["request", "response", "app", "view"],
            answer: "request",
          },
          {
            question: "What is the purpose of the `flash` function in Flask?",
            options: [
              "To display temporary messages to users",
              "To handle user authentication",
              "To manage application errors",
              "To create database entries",
            ],
            answer: "To display temporary messages to users",
          },
          {
            question: "How do you create a blueprint in Flask?",
            options: [
              "By using `Blueprint` class",
              "By using `create_blueprint()` method",
              "By using `register_blueprint()` method",
              "By using `Blueprint.create()`",
            ],
            answer: "By using `Blueprint` class",
          },
          {
            question:
              "Which function is used to redirect a user to a different URL in Flask?",
            options: ["redirect()", "navigate()", "url_for()", "forward()"],
            answer: "redirect()",
          },
          {
            question: "What does the `url_for` function do in Flask?",
            options: [
              "Generates a URL for a given endpoint",
              "Fetches a URL from the configuration",
              "Redirects to a specified URL",
              "Creates a new route",
            ],
            answer: "Generates a URL for a given endpoint",
          },
          {
            question: "How do you handle errors in Flask?",
            options: [
              "By using error handlers with `@app.errorhandler`",
              "By using try-except blocks in routes",
              "By setting error codes in configuration",
              "By defining custom error pages in templates",
            ],
            answer: "By using error handlers with `@app.errorhandler`",
          },
        ],
      },
      {
        id: "data",
        name: "Data Analysis with Pandas",
        mcqs: [
          {
            question: "What is Pandas primarily used for?",
            options: [
              "Data manipulation and analysis in Python",
              "Data visualization in Python",
              "Machine learning in Python",
              "Web development in Python",
            ],
            answer: "Data manipulation and analysis in Python",
          },
          {
            question: "How do you import the Pandas library in Python?",
            options: [
              "import pandas as pd",
              "import pandas",
              "from pandas import *",
              "import pd as pandas",
            ],
            answer: "import pandas as pd",
          },
          {
            question:
              "Which Pandas function is used to read a CSV file into a DataFrame?",
            options: [
              "pd.read_csv()",
              "pd.load_csv()",
              "pd.import_csv()",
              "pd.open_csv()",
            ],
            answer: "pd.read_csv()",
          },
          {
            question:
              "What method is used to display the first 5 rows of a DataFrame?",
            options: ["df.head()", "df.first()", "df.top()", "df.preview()"],
            answer: "df.head()",
          },
          {
            question: "How can you get summary statistics of a DataFrame?",
            options: [
              "df.describe()",
              "df.summary()",
              "df.stats()",
              "df.info()",
            ],
            answer: "df.describe()",
          },
          {
            question:
              "Which method is used to drop missing values from a DataFrame?",
            options: [
              "df.dropna()",
              "df.remove_na()",
              "df.drop_missing()",
              "df.clean()",
            ],
            answer: "df.dropna()",
          },
          {
            question: "How do you select a specific column in a DataFrame?",
            options: [
              "df['column_name']",
              "df.column_name",
              "df.get('column_name')",
              "df.select('column_name')",
            ],
            answer: "df['column_name']",
          },
          {
            question:
              "Which method is used to sort a DataFrame by a specific column?",
            options: [
              "df.sort_values()",
              "df.order_by()",
              "df.sort()",
              "df.arrange()",
            ],
            answer: "df.sort_values()",
          },
          {
            question:
              "How can you group data by a column and calculate the mean of each group?",
            options: [
              "df.groupby('column_name').mean()",
              "df.group_by('column_name').average()",
              "df.aggregate('column_name').mean()",
              "df.split('column_name').mean()",
            ],
            answer: "df.groupby('column_name').mean()",
          },
          {
            question:
              "What function is used to merge two DataFrames on a common column?",
            options: ["pd.merge()", "pd.concat()", "pd.join()", "pd.combine()"],
            answer: "pd.merge()",
          },
          {
            question: "Which method is used to pivot a DataFrame?",
            options: [
              "df.pivot()",
              "df.pivot_table()",
              "df.transform()",
              "df.reshape()",
            ],
            answer: "df.pivot_table()",
          },
          {
            question:
              "How do you set the index of a DataFrame to a specific column?",
            options: [
              "df.set_index('column_name')",
              "df.index('column_name')",
              "df.assign_index('column_name')",
              "df.set('column_name')",
            ],
            answer: "df.set_index('column_name')",
          },
          {
            question:
              "What is the function used to remove duplicate rows from a DataFrame?",
            options: [
              "df.drop_duplicates()",
              "df.remove_duplicates()",
              "df.unique()",
              "df.clean_duplicates()",
            ],
            answer: "df.drop_duplicates()",
          },
          {
            question:
              "Which method is used to apply a function along an axis of a DataFrame?",
            options: [
              "df.apply()",
              "df.map()",
              "df.transform()",
              "df.operate()",
            ],
            answer: "df.apply()",
          },
          {
            question: "How can you save a DataFrame to a CSV file?",
            options: [
              "df.to_csv('file_name.csv')",
              "df.save_csv('file_name.csv')",
              "df.write_csv('file_name.csv')",
              "df.export_csv('file_name.csv')",
            ],
            answer: "df.to_csv('file_name.csv')",
          },
        ],
      },
      {
        id: "ml",
        name: "Machine Learning with scikit-learn",
        mcqs: [
          {
            question: "What is scikit-learn?",
            options: [
              "A machine learning library for Python",
              "A data visualization library for Python",
              "A web development framework for Python",
              "A data manipulation library for Python",
            ],
            answer: "A machine learning library for Python",
          },
          {
            question:
              "Which function is used to load a dataset in scikit-learn?",
            options: [
              "datasets.load_*()",
              "datasets.get_*()",
              "datasets.fetch_*()",
              "datasets.retrieve_*()",
            ],
            answer: "datasets.load_*()",
          },
          {
            question:
              "How do you split data into training and testing sets using scikit-learn?",
            options: [
              "train_test_split()",
              "split_train_test()",
              "train_test()",
              "data_split()",
            ],
            answer: "train_test_split()",
          },
          {
            question:
              "What is the default scoring metric for classification models in scikit-learn?",
            options: ["Accuracy", "Precision", "Recall", "F1 Score"],
            answer: "Accuracy",
          },
          {
            question:
              "Which scikit-learn function is used to create a linear regression model?",
            options: [
              "LinearRegression()",
              "LogisticRegression()",
              "DecisionTree()",
              "SVR()",
            ],
            answer: "LinearRegression()",
          },
          {
            question:
              "How can you evaluate the performance of a classification model in scikit-learn?",
            options: [
              "Using metrics such as accuracy, precision, recall, and F1 score",
              "Using mean squared error (MSE) and R-squared",
              "Using cross-validation only",
              "Using feature importance only",
            ],
            answer:
              "Using metrics such as accuracy, precision, recall, and F1 score",
          },
          {
            question:
              "Which method is used to fit a model to the training data in scikit-learn?",
            options: ["fit()", "train()", "learn()", "apply()"],
            answer: "fit()",
          },
          {
            question:
              "What is the purpose of the `predict` method in scikit-learn?",
            options: [
              "To make predictions on new data based on the trained model",
              "To evaluate the model performance",
              "To visualize the model",
              "To preprocess the data",
            ],
            answer:
              "To make predictions on new data based on the trained model",
          },
          {
            question: "How do you standardize features using scikit-learn?",
            options: [
              "Using StandardScaler()",
              "Using MinMaxScaler()",
              "Using Normalizer()",
              "Using RobustScaler()",
            ],
            answer: "Using StandardScaler()",
          },
          {
            question:
              "Which function is used to perform cross-validation in scikit-learn?",
            options: [
              "cross_val_score()",
              "validate()",
              "score_cv()",
              "cross_validate()",
            ],
            answer: "cross_val_score()",
          },
          {
            question: "What is the purpose of `GridSearchCV` in scikit-learn?",
            options: [
              "To find the best hyperparameters for a model",
              "To split data into training and testing sets",
              "To evaluate the model performance",
              "To visualize the data",
            ],
            answer: "To find the best hyperparameters for a model",
          },
          {
            question:
              "How do you handle missing values in a dataset using scikit-learn?",
            options: [
              "Using SimpleImputer()",
              "Using fillna()",
              "Using dropna()",
              "Using impute()",
            ],
            answer: "Using SimpleImputer()",
          },
          {
            question:
              "Which algorithm in scikit-learn is used for classification tasks?",
            options: [
              "KNeighborsClassifier()",
              "KMeans()",
              "SVR()",
              "LinearRegression()",
            ],
            answer: "KNeighborsClassifier()",
          },
          {
            question:
              "How can you evaluate the importance of features in a model?",
            options: [
              "Using feature_importances_ attribute",
              "Using coefficients_ attribute",
              "Using scores_ attribute",
              "Using predictions_ attribute",
            ],
            answer: "Using feature_importances_ attribute",
          },
          {
            question:
              "Which function is used to create a decision tree classifier in scikit-learn?",
            options: [
              "DecisionTreeClassifier()",
              "DecisionTreeRegressor()",
              "DecisionTree()",
              "TreeClassifier()",
            ],
            answer: "DecisionTreeClassifier()",
          },
        ],
      },
    ],
  },
  //---------------------------General Knowledge--------------------
  {
    subjectId: "gk",
    topics: [
      {
        id: "history",
        name: "History",
        mcqs: [
          {
            question: "Who is considered the founder of Pakistan?",
            options: [
              "Muhammad Ali Jinnah",
              "Allama Iqbal",
              "Liaquat Ali Khan",
              "Zulfikar Ali Bhutto",
            ],
            answer: "Muhammad Ali Jinnah",
          },
          {
            question:
              "In which year did Pakistan gain independence from British rule?",
            options: ["1947", "1950", "1965", "1971"],
            answer: "1947",
          },
          {
            question:
              "What was the primary reason for the creation of Pakistan?",
            options: [
              "Religious differences",
              "Economic opportunities",
              "Political instability",
              "Colonial oppression",
            ],
            answer: "Religious differences",
          },
          {
            question:
              "What was the first capital of Pakistan after its independence?",
            options: ["Karachi", "Lahore", "Islamabad", "Rawalpindi"],
            answer: "Karachi",
          },
          {
            question:
              "Which event led to the secession of East Pakistan and the creation of Bangladesh in 1971?",
            options: [
              "The Bangladesh Liberation War",
              "The Indo-Pakistani War of 1965",
              "The Simla Agreement",
              "The Tashkent Agreement",
            ],
            answer: "The Bangladesh Liberation War",
          },
          {
            question: "Who was the first President of Pakistan?",
            options: [
              "Major General Iskander Mirza",
              "Ayub Khan",
              "Zulfikar Ali Bhutto",
              "Pervez Musharraf",
            ],
            answer: "Major General Iskander Mirza",
          },
          {
            question:
              "Which political party played a significant role in the creation of Pakistan?",
            options: [
              "All India Muslim League",
              "Indian National Congress",
              "Communist Party of India",
              "Hindu Mahasabha",
            ],
            answer: "All India Muslim League",
          },
          {
            question:
              "What is the name of the movement that aimed for the creation of a separate Muslim state in India?",
            options: [
              "Pakistan Movement",
              "Quit India Movement",
              "Non-Cooperation Movement",
              "Civil Disobedience Movement",
            ],
            answer: "Pakistan Movement",
          },
          {
            question:
              "Which agreement marked the end of the Indo-Pakistani War of 1965?",
            options: [
              "Tashkent Agreement",
              "Simla Agreement",
              "Lahore Declaration",
              "Rawalpindi Agreement",
            ],
            answer: "Tashkent Agreement",
          },
          {
            question: "Who was the first female Prime Minister of Pakistan?",
            options: [
              "Benazir Bhutto",
              "Fatima Jinnah",
              "Hina Rabbani Khar",
              "Sherry Rehman",
            ],
            answer: "Benazir Bhutto",
          },
          {
            question:
              "What was the main objective of the One Unit Scheme introduced in Pakistan?",
            options: [
              "To merge the provinces of West Pakistan into a single unit",
              "To promote economic development",
              "To decentralize administrative power",
              "To enhance military capabilities",
            ],
            answer:
              "To merge the provinces of West Pakistan into a single unit",
          },
          {
            question:
              "Which constitution first introduced the concept of a federal parliamentary republic in Pakistan?",
            options: [
              "1973 Constitution",
              "1956 Constitution",
              "1962 Constitution",
              "1947 Constitution",
            ],
            answer: "1973 Constitution",
          },
          {
            question:
              "Who was the leader of the Pakistan Peoples Party (PPP) during the 1970s?",
            options: [
              "Zulfikar Ali Bhutto",
              "Benazir Bhutto",
              "Fazal-ur-Rehman",
              "Nawaz Sharif",
            ],
            answer: "Zulfikar Ali Bhutto",
          },
          {
            question:
              "What was the name of the military operation conducted in 1971 that led to the independence of Bangladesh?",
            options: [
              "Operation Searchlight",
              "Operation Blitz",
              "Operation Thunderbolt",
              "Operation Cyclone",
            ],
            answer: "Operation Searchlight",
          },
          {
            question:
              "Which city is known as the cultural capital of Pakistan?",
            options: ["Lahore", "Karachi", "Islamabad", "Rawalpindi"],
            answer: "Lahore",
          },
        ],
      },
      {
        id: "geography",
        name: "Geography",
        mcqs: [
          {
            question: "What is the largest desert in the world?",
            options: ["Sahara", "Gobi", "Kalahari", "Antarctic Desert"],
            answer: "Antarctic Desert",
          },
          {
            question: "Which river is the longest in the world?",
            options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
            answer: "Nile",
          },
          {
            question: "Which country has the most number of time zones?",
            options: ["Russia", "United States", "China", "Brazil"],
            answer: "Russia",
          },
          {
            question: "What is the smallest country in the world by land area?",
            options: ["Vatican City", "Monaco", "San Marino", "Liechtenstein"],
            answer: "Vatican City",
          },
          {
            question: "Which mountain range separates Europe from Asia?",
            options: ["Ural Mountains", "Himalayas", "Andes", "Rockies"],
            answer: "Ural Mountains",
          },
          {
            question: "What is the capital of Australia?",
            options: ["Canberra", "Sydney", "Melbourne", "Brisbane"],
            answer: "Canberra",
          },
          {
            question: "Which ocean is the largest in the world?",
            options: [
              "Pacific Ocean",
              "Atlantic Ocean",
              "Indian Ocean",
              "Arctic Ocean",
            ],
            answer: "Pacific Ocean",
          },
          {
            question: "Which country is known as the Land of the Rising Sun?",
            options: ["Japan", "China", "South Korea", "Thailand"],
            answer: "Japan",
          },
          {
            question: "What is the largest island in the world?",
            options: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
            answer: "Greenland",
          },
          {
            question: "Which continent is known as the Dark Continent?",
            options: ["Africa", "Asia", "South America", "Australia"],
            answer: "Africa",
          },
          {
            question: "Which country is the largest by land area?",
            options: ["Russia", "Canada", "United States", "China"],
            answer: "Russia",
          },
          {
            question:
              "What is the name of the line that divides the Earth into the Northern and Southern Hemispheres?",
            options: [
              "Equator",
              "Prime Meridian",
              "Tropic of Cancer",
              "Tropic of Capricorn",
            ],
            answer: "Equator",
          },
          {
            question: "Which river is known as the “Yellow River” in China?",
            options: [
              "Yellow River",
              "Yangtze River",
              "Mekong River",
              "Pearl River",
            ],
            answer: "Yellow River",
          },
          {
            question: "Which desert is located in northern Africa?",
            options: [
              "Sahara Desert",
              "Gobi Desert",
              "Karakum Desert",
              "Patagonian Desert",
            ],
            answer: "Sahara Desert",
          },
          {
            question:
              "Which two countries share the longest international border?",
            options: [
              "United States and Canada",
              "Russia and China",
              "Brazil and Argentina",
              "India and Bangladesh",
            ],
            answer: "United States and Canada",
          },
        ],
      },
      {
        id: "science",
        name: "Science",
        mcqs: [
          {
            question: "What is the chemical symbol for water?",
            options: ["H2O", "CO2", "O2", "NaCl"],
            answer: "H2O",
          },
          {
            question: "Which planet is known as the Red Planet?",
            options: ["Mars", "Venus", "Jupiter", "Saturn"],
            answer: "Mars",
          },
          {
            question: "What is the powerhouse of the cell?",
            options: [
              "Mitochondria",
              "Nucleus",
              "Ribosome",
              "Endoplasmic Reticulum",
            ],
            answer: "Mitochondria",
          },
          {
            question: "What is the basic unit of life?",
            options: ["Cell", "Tissue", "Organ", "System"],
            answer: "Cell",
          },
          {
            question: "Which element is most abundant in the Earth’s crust?",
            options: ["Oxygen", "Silicon", "Aluminum", "Iron"],
            answer: "Oxygen",
          },
          {
            question: "What is the chemical formula for table salt?",
            options: ["NaCl", "KCl", "MgCl2", "CaCO3"],
            answer: "NaCl",
          },
          {
            question: "What is the speed of light in a vacuum?",
            options: [
              "299,792 km/s",
              "150,000 km/s",
              "500,000 km/s",
              "100,000 km/s",
            ],
            answer: "299,792 km/s",
          },
          {
            question:
              "Which organ in the human body is responsible for pumping blood?",
            options: ["Heart", "Lungs", "Liver", "Kidneys"],
            answer: "Heart",
          },
          {
            question: "What gas do plants primarily use for photosynthesis?",
            options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
            answer: "Carbon Dioxide",
          },
          {
            question: "Who is known as the father of modern physics?",
            options: [
              "Albert Einstein",
              "Isaac Newton",
              "Galileo Galilei",
              "Niels Bohr",
            ],
            answer: "Albert Einstein",
          },
          {
            question: "What is the most common gas in the Earth’s atmosphere?",
            options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Argon"],
            answer: "Nitrogen",
          },
          {
            question: "What is the process by which plants make their food?",
            options: [
              "Photosynthesis",
              "Respiration",
              "Transpiration",
              "Digestion",
            ],
            answer: "Photosynthesis",
          },
          {
            question: "What is the main function of white blood cells?",
            options: [
              "Fight infection",
              "Carry oxygen",
              "Clot blood",
              "Transport nutrients",
            ],
            answer: "Fight infection",
          },
          {
            question: "Which planet in our solar system has the most moons?",
            options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
            answer: "Saturn",
          },
          {
            question: "What is the center of an atom called?",
            options: ["Nucleus", "Electron", "Proton", "Neutron"],
            answer: "Nucleus",
          },
          {
            question: "What type of energy is stored in food?",
            options: [
              "Chemical Energy",
              "Kinetic Energy",
              "Potential Energy",
              "Thermal Energy",
            ],
            answer: "Chemical Energy",
          },
        ],
      },
      {
        id: "sports",
        name: "Sports",
        mcqs: [
          {
            question: "Which country won the FIFA World Cup in 2018?",
            options: ["France", "Croatia", "Germany", "Brazil"],
            answer: "France",
          },
          {
            question: "How many players are there in a standard soccer team?",
            options: ["11", "7", "9", "13"],
            answer: "11",
          },
          {
            question: "In which sport would you perform a slam dunk?",
            options: ["Basketball", "Volleyball", "Tennis", "Football"],
            answer: "Basketball",
          },
          {
            question: "Which Olympic sport is known as the “gentleman’s game”?",
            options: ["Cricket", "Tennis", "Golf", "Rugby"],
            answer: "Cricket",
          },
          {
            question:
              "Who holds the record for the most home runs in Major League Baseball?",
            options: [
              "Barry Bonds",
              "Hank Aaron",
              "Babe Ruth",
              "Alex Rodriguez",
            ],
            answer: "Barry Bonds",
          },
          {
            question: "Which country is known for the sport of sumo wrestling?",
            options: ["Japan", "China", "Korea", "Mongolia"],
            answer: "Japan",
          },
          {
            question: "What is the standard distance of a marathon race?",
            options: [
              "42.195 kilometers",
              "21.097 kilometers",
              "10 kilometers",
              "50 kilometers",
            ],
            answer: "42.195 kilometers",
          },
          {
            question:
              "In which sport would you use a racket to hit a shuttlecock?",
            options: ["Badminton", "Tennis", "Squash", "Table Tennis"],
            answer: "Badminton",
          },
          {
            question:
              "What is the maximum number of players on a rugby union team?",
            options: ["15", "11", "7", "13"],
            answer: "15",
          },
          {
            question: "Which swimmer has won the most Olympic gold medals?",
            options: [
              "Michael Phelps",
              "Mark Spitz",
              "Ian Thorpe",
              "Ryan Lochte",
            ],
            answer: "Michael Phelps",
          },
          {
            question: "What is the term for a score of zero in tennis?",
            options: ["Love", "Fault", "Deuce", "Break"],
            answer: "Love",
          },
          {
            question:
              "Which team won the NBA Championship in the 2022-2023 season?",
            options: [
              "Denver Nuggets",
              "Golden State Warriors",
              "Miami Heat",
              "Boston Celtics",
            ],
            answer: "Denver Nuggets",
          },
          {
            question:
              "In which sport do players use a cue stick to hit balls on a table?",
            options: ["Billiards", "Darts", "Golf", "Bowling"],
            answer: "Billiards",
          },
          {
            question:
              "Which country is known for hosting the Tour de France cycling race?",
            options: ["France", "Spain", "Italy", "Belgium"],
            answer: "France",
          },
          {
            question:
              "What is the name of the trophy awarded to the winner of the Super Bowl?",
            options: [
              "Lombardi Trophy",
              "Stanley Cup",
              "World Series Trophy",
              "Heisman Trophy",
            ],
            answer: "Lombardi Trophy",
          },
        ],
      },
      {
        id: "politics",
        name: "Politics",
        mcqs: [
          {
            question: "Who was the first President of Pakistan?",
            options: [
              "Major General Iskander Mirza",
              "Ayub Khan",
              "Zulfikar Ali Bhutto",
              "Muhammad Ali Jinnah",
            ],
            answer: "Major General Iskander Mirza",
          },
          {
            question: "Which political party did Benazir Bhutto lead?",
            options: [
              "Pakistan Peoples Party",
              "Pakistan Muslim League (N)",
              "Jamaat-e-Islami",
              "Pakistan Tehreek-e-Insaf",
            ],
            answer: "Pakistan Peoples Party",
          },
          {
            question: "In which year did Pakistan gain independence?",
            options: ["1947", "1956", "1965", "1971"],
            answer: "1947",
          },
          {
            question: "Who was the founder of Pakistan?",
            options: [
              "Muhammad Ali Jinnah",
              "Liaquat Ali Khan",
              "Zulfikar Ali Bhutto",
              "Ayub Khan",
            ],
            answer: "Muhammad Ali Jinnah",
          },
          {
            question:
              "Which Pakistani Prime Minister was dismissed by President Ayub Khan in 1958?",
            options: [
              "Feroz Khan Noon",
              "Liaquat Ali Khan",
              "Zulfikar Ali Bhutto",
              "Nawaz Sharif",
            ],
            answer: "Feroz Khan Noon",
          },
          {
            question:
              "Which party won the majority in the 2018 General Elections?",
            options: [
              "Pakistan Tehreek-e-Insaf",
              "Pakistan Muslim League (N)",
              "Pakistan Peoples Party",
              "Jamaat-e-Islami",
            ],
            answer: "Pakistan Tehreek-e-Insaf",
          },
          {
            question: "What is the highest legislative body in Pakistan?",
            options: [
              "The National Assembly",
              "The Senate",
              "The Supreme Court",
              "The Provincial Assemblies",
            ],
            answer: "The National Assembly",
          },
          {
            question:
              "Who served as the Chief Martial Law Administrator of Pakistan in 1977?",
            options: [
              "Zia-ul-Haq",
              "Ayub Khan",
              "Pervez Musharraf",
              "Yahya Khan",
            ],
            answer: "Zia-ul-Haq",
          },
          {
            question:
              'Which amendment to the Constitution of Pakistan introduced the concept of "Devolution of Power" to local governments?',
            options: [
              "18th Amendment",
              "19th Amendment",
              "20th Amendment",
              "21st Amendment",
            ],
            answer: "18th Amendment",
          },
          {
            question:
              'Which political leader was known for the slogan "Roti, Kapra aur Makaan"?',
            options: [
              "Zulfikar Ali Bhutto",
              "Benazir Bhutto",
              "Nawaz Sharif",
              "Imran Khan",
            ],
            answer: "Zulfikar Ali Bhutto",
          },
          {
            question: "Who was the President of Pakistan before Arif Alvi?",
            options: [
              "Mamnoon Hussain",
              "Asif Ali Zardari",
              "Pervez Musharraf",
              "Farooq Leghari",
            ],
            answer: "Mamnoon Hussain",
          },
          {
            question:
              "What is the maximum term limit for the Prime Minister of Pakistan?",
            options: ["5 years", "4 years", "6 years", "7 years"],
            answer: "5 years",
          },
          {
            question: "Which city is the capital of Pakistan?",
            options: ["Islamabad", "Karachi", "Lahore", "Rawalpindi"],
            answer: "Islamabad",
          },
          {
            question:
              "Which Pakistani leader was the first female Prime Minister in the Muslim world?",
            options: [
              "Benazir Bhutto",
              "Fatima Jinnah",
              "Asma Jahangir",
              "Hina Rabbani Khar",
            ],
            answer: "Benazir Bhutto",
          },
          {
            question:
              "Which body is responsible for the appointment of judges to the Supreme Court of Pakistan?",
            options: [
              "The Judicial Commission",
              "The National Assembly",
              "The Senate",
              "The President of Pakistan",
            ],
            answer: "The Judicial Commission",
          },
          {
            question:
              "Which political leader founded the Pakistan Tehreek-e-Insaf (PTI) party?",
            options: [
              "Imran Khan",
              "Shahbaz Sharif",
              "Zulfikar Ali Bhutto",
              "Asif Ali Zardari",
            ],
            answer: "Imran Khan",
          },
        ],
      },
    ],
  },
  //--------------------------gatsby-------------------
  {
    subjectId: "gatsby",
    topics: [
      {
        id: "setup",
        name: "Setup and Installation",
        mcqs: [
          {
            question:
              "What is the command to create a new Gatsby site using the Gatsby CLI?",
            options: [
              "gatsby new [site-name]",
              "gatsby create [site-name]",
              "gatsby init [site-name]",
              "gatsby start [site-name]",
            ],
            answer: "gatsby new [site-name]",
          },
          {
            question:
              "Which command is used to start a Gatsby development server?",
            options: [
              "gatsby develop",
              "gatsby start",
              "gatsby serve",
              "gatsby build",
            ],
            answer: "gatsby develop",
          },
          {
            question:
              "What file is used to configure the site metadata in Gatsby?",
            options: [
              "gatsby-config.js",
              "gatsby-node.js",
              "gatsby-browser.js",
              "gatsby-ssr.js",
            ],
            answer: "gatsby-config.js",
          },
          {
            question:
              "Which command is used to build a production version of your Gatsby site?",
            options: [
              "gatsby build",
              "gatsby deploy",
              "gatsby compile",
              "gatsby generate",
            ],
            answer: "gatsby build",
          },
          {
            question:
              "To install Gatsby CLI globally, which command should you use?",
            options: [
              "npm install -g gatsby-cli",
              "yarn add gatsby-cli",
              "npm install gatsby-cli",
              "yarn global add gatsby",
            ],
            answer: "npm install -g gatsby-cli",
          },
          {
            question:
              "Which file is used to customize the server-side rendering process in Gatsby?",
            options: [
              "gatsby-ssr.js",
              "gatsby-node.js",
              "gatsby-config.js",
              "gatsby-browser.js",
            ],
            answer: "gatsby-ssr.js",
          },
          {
            question: "How do you upgrade Gatsby to the latest version?",
            options: [
              "npm install gatsby@latest",
              "yarn upgrade gatsby",
              "npm update gatsby",
              "yarn add gatsby@latest",
            ],
            answer: "npm install gatsby@latest",
          },
          {
            question: "What is the purpose of the `gatsby-node.js` file?",
            options: [
              "To create and modify pages and nodes in Gatsby",
              "To configure site metadata",
              "To define global styles",
              "To manage plugins",
            ],
            answer: "To create and modify pages and nodes in Gatsby",
          },
          {
            question:
              "Which directory contains the default files and configuration for a Gatsby project?",
            options: ["src", "public", "node_modules", "static"],
            answer: "src",
          },
          {
            question:
              "Which Gatsby plugin can be used to manage site metadata?",
            options: [
              "gatsby-plugin-react-helmet",
              "gatsby-plugin-sitemap",
              "gatsby-plugin-sharp",
              "gatsby-transformer-sharp",
            ],
            answer: "gatsby-plugin-react-helmet",
          },
        ],
      },
      {
        id: "plugins",
        name: "Plugins",
        mcqs: [
          {
            question: "Which file do you use to configure Gatsby plugins?",
            options: [
              "gatsby-config.js",
              "gatsby-node.js",
              "gatsby-browser.js",
              "gatsby-ssr.js",
            ],
            answer: "gatsby-config.js",
          },
          {
            question: "Which Gatsby plugin is used for image optimization?",
            options: [
              "gatsby-plugin-sharp",
              "gatsby-plugin-image",
              "gatsby-transformer-sharp",
              "gatsby-plugin-react-helmet",
            ],
            answer: "gatsby-plugin-sharp",
          },
          {
            question: "What does the `gatsby-plugin-react-helmet` plugin do?",
            options: [
              "Manages the HTML head with React Helmet",
              "Transforms Markdown files into HTML",
              "Optimizes images for faster load times",
              "Adds support for GraphQL queries",
            ],
            answer: "Manages the HTML head with React Helmet",
          },
          {
            question:
              "Which plugin is used to source data from a WordPress site?",
            options: [
              "gatsby-source-wordpress",
              "gatsby-source-contentful",
              "gatsby-source-filesystem",
              "gatsby-source-mongodb",
            ],
            answer: "gatsby-source-wordpress",
          },
          {
            question:
              "To add a sitemap to a Gatsby site, which plugin should you use?",
            options: [
              "gatsby-plugin-sitemap",
              "gatsby-plugin-manifest",
              "gatsby-plugin-offline",
              "gatsby-plugin-robots-txt",
            ],
            answer: "gatsby-plugin-sitemap",
          },
          {
            question:
              "Which plugin provides support for Progressive Web App (PWA) features?",
            options: [
              "gatsby-plugin-offline",
              "gatsby-plugin-pwa",
              "gatsby-plugin-manifest",
              "gatsby-plugin-webp",
            ],
            answer: "gatsby-plugin-offline",
          },
          {
            question:
              "What is the purpose of the `gatsby-transformer-json` plugin?",
            options: [
              "Transforms JSON files into GraphQL nodes",
              "Transforms Markdown files into HTML",
              "Optimizes images for faster load times",
              "Manages the HTML head with React Helmet",
            ],
            answer: "Transforms JSON files into GraphQL nodes",
          },
          {
            question:
              "Which plugin is used to enable TypeScript support in Gatsby?",
            options: [
              "gatsby-plugin-typescript",
              "gatsby-plugin-ts",
              "gatsby-plugin-sass",
              "gatsby-plugin-flow",
            ],
            answer: "gatsby-plugin-typescript",
          },
          {
            question:
              "To use environment variables in Gatsby, which plugin should be used?",
            options: [
              "gatsby-plugin-env-variables",
              "gatsby-plugin-dotenv",
              "gatsby-plugin-react-env",
              "gatsby-plugin-config",
            ],
            answer: "gatsby-plugin-env-variables",
          },
          {
            question:
              "Which Gatsby plugin is used to create a manifest file for a web app?",
            options: [
              "gatsby-plugin-manifest",
              "gatsby-plugin-pwa",
              "gatsby-plugin-offline",
              "gatsby-plugin-webp",
            ],
            answer: "gatsby-plugin-manifest",
          },
        ],
      },
      {
        id: "graphql",
        name: "GraphQL",
        mcqs: [
          {
            question: "What is the primary purpose of GraphQL?",
            options: [
              "To provide a flexible and efficient way to query and manipulate data",
              "To manage relational databases",
              "To create and manage REST APIs",
              "To generate static websites",
            ],
            answer:
              "To provide a flexible and efficient way to query and manipulate data",
          },
          {
            question: 'In GraphQL, what is a "query"?',
            options: [
              "A request to retrieve data from the server",
              "A way to modify data on the server",
              "A subscription to receive real-time updates",
              "A method to authenticate users",
            ],
            answer: "A request to retrieve data from the server",
          },
          {
            question: 'What is a "mutation" in GraphQL?',
            options: [
              "A request to modify data on the server",
              "A way to retrieve multiple data types",
              "A subscription for real-time updates",
              "A mechanism for error handling",
            ],
            answer: "A request to modify data on the server",
          },
          {
            question:
              "How does GraphQL handle relationships between different types of data?",
            options: [
              "By allowing nested queries and field selection",
              "By using separate endpoints for each relationship",
              "By storing relationships in a relational database",
              "By creating static links between data types",
            ],
            answer: "By allowing nested queries and field selection",
          },
          {
            question: 'What is a "resolver" in GraphQL?',
            options: [
              "A function that processes and returns the data for a GraphQL query",
              "A tool for generating GraphQL schemas",
              "A method for authenticating GraphQL requests",
              "A library for optimizing GraphQL queries",
            ],
            answer:
              "A function that processes and returns the data for a GraphQL query",
          },
          {
            question: "What is the purpose of the `schema` in GraphQL?",
            options: [
              "To define the types and relationships of data in the API",
              "To handle authentication and authorization",
              "To manage data storage and retrieval",
              "To format and validate API responses",
            ],
            answer: "To define the types and relationships of data in the API",
          },
          {
            question:
              "How does GraphQL differ from REST in terms of fetching data?",
            options: [
              "GraphQL allows clients to specify exactly what data they need, whereas REST requires multiple endpoints for different data",
              "REST allows clients to specify exactly what data they need, whereas GraphQL uses multiple endpoints",
              "GraphQL uses caching for data retrieval, whereas REST does not",
              "REST allows nested data queries, whereas GraphQL does not",
            ],
            answer:
              "GraphQL allows clients to specify exactly what data they need, whereas REST requires multiple endpoints for different data",
          },
          {
            question: 'What is an "alias" in GraphQL?',
            options: [
              "A way to rename fields in a query for disambiguation",
              "A tool for optimizing GraphQL performance",
              "A method for defining new data types",
              "A library for integrating GraphQL with REST APIs",
            ],
            answer: "A way to rename fields in a query for disambiguation",
          },
          {
            question: 'What is the purpose of a GraphQL "subscription"?',
            options: [
              "To receive real-time updates when data changes",
              "To retrieve data from multiple sources",
              "To perform batch operations on data",
              "To authenticate and authorize users",
            ],
            answer: "To receive real-time updates when data changes",
          },
          {
            question:
              "Which language is commonly used to write GraphQL schemas?",
            options: [
              "GraphQL Schema Definition Language (SDL)",
              "JSON Schema",
              "SQL",
              "XML Schema",
            ],
            answer: "GraphQL Schema Definition Language (SDL)",
          },
        ],
      },
      {
        id: "themes",
        name: "Themes",
        mcqs: [
          {
            question: "What is the purpose of a theme in web development?",
            options: [
              "To provide a consistent visual design and layout across a website or application",
              "To manage user authentication and authorization",
              "To handle server-side data processing",
              "To optimize database queries and storage",
            ],
            answer:
              "To provide a consistent visual design and layout across a website or application",
          },
          {
            question: 'In CSS, what is a "theme" typically composed of?',
            options: [
              "A set of color schemes, typography, and layout styles",
              "Database schema and server-side logic",
              "API endpoints and request methods",
              "Authentication protocols and user roles",
            ],
            answer: "A set of color schemes, typography, and layout styles",
          },
          {
            question:
              "Which file or files are commonly used to define a theme in a web application?",
            options: [
              "CSS or SCSS files",
              "JavaScript files",
              "HTML files",
              "JSON configuration files",
            ],
            answer: "CSS or SCSS files",
          },
          {
            question: 'What is a "dark theme" in web design?',
            options: [
              "A color scheme with dark background and light text",
              "A layout with minimal graphics and animations",
              "A design focused on high contrast colors",
              "A theme that only uses black and white colors",
            ],
            answer: "A color scheme with dark background and light text",
          },
          {
            question:
              "How can themes be dynamically switched in a web application?",
            options: [
              "By applying different CSS classes or stylesheets based on user preference or system settings",
              "By changing the HTML structure of the page",
              "By modifying server-side scripts and databases",
              "By using different API endpoints for each theme",
            ],
            answer:
              "By applying different CSS classes or stylesheets based on user preference or system settings",
          },
          {
            question:
              "Which preprocessor is commonly used to enhance theme management in CSS?",
            options: ["Sass (SCSS)", "Less", "Stylus", "All of the above"],
            answer: "All of the above",
          },
          {
            question: "In WordPress, where are themes typically stored?",
            options: [
              "In the `wp-content/themes` directory",
              "In the `wp-admin/themes` directory",
              "In the `wp-includes/themes` directory",
              "In the root directory of the WordPress installation",
            ],
            answer: "In the `wp-content/themes` directory",
          },
          {
            question:
              'What is the role of a "theme provider" in React applications?',
            options: [
              "To supply theme-related data and styles to the entire application via context",
              "To handle API requests and data fetching",
              "To manage user authentication and session",
              "To handle routing and navigation",
            ],
            answer:
              "To supply theme-related data and styles to the entire application via context",
          },
          {
            question:
              "Which CSS feature allows for the creation of reusable theme variables?",
            options: [
              "CSS Custom Properties (variables)",
              "CSS Grid Layout",
              "CSS Flexbox",
              "CSS Transitions",
            ],
            answer: "CSS Custom Properties (variables)",
          },
          {
            question: 'What is a "theme switcher" in a web application?',
            options: [
              "A feature that allows users to toggle between different themes",
              "A tool for optimizing theme performance",
              "A script for managing theme dependencies",
              "A library for creating responsive themes",
            ],
            answer:
              "A feature that allows users to toggle between different themes",
          },
        ],
      },
      {
        id: "deployment",
        name: "Deployment",
        mcqs: [
          {
            question:
              'What does "deployment" refer to in software development?',
            options: [
              "The process of making a software application available for use",
              "The design and planning of software features",
              "The testing and debugging of software",
              "The creation and management of software documentation",
            ],
            answer:
              "The process of making a software application available for use",
          },
          {
            question:
              "Which of the following is a common deployment method for web applications?",
            options: [
              "Using a cloud hosting service",
              "Installing software on local servers",
              "Running applications from a local machine",
              "All of the above",
            ],
            answer: "All of the above",
          },
          {
            question:
              "What is Continuous Integration (CI) in the context of deployment?",
            options: [
              "A practice of frequently merging code changes into a shared repository and running automated tests",
              "A method of manually deploying software updates",
              "A process of generating documentation for the application",
              "A technique for designing user interfaces",
            ],
            answer:
              "A practice of frequently merging code changes into a shared repository and running automated tests",
          },
          {
            question: "What does Continuous Deployment (CD) involve?",
            options: [
              "Automatically deploying every change that passes automated tests to production",
              "Manually deploying updates to production servers",
              "Only deploying major releases to production",
              "Testing code changes in a staging environment before deployment",
            ],
            answer:
              "Automatically deploying every change that passes automated tests to production",
          },
          {
            question: 'What is a "deployment pipeline"?',
            options: [
              "A series of automated steps that build, test, and deploy software",
              "A method for manually deploying software updates",
              "A tool for creating and managing software documentation",
              "A strategy for managing software version control",
            ],
            answer:
              "A series of automated steps that build, test, and deploy software",
          },
          {
            question:
              "Which tool is commonly used for containerizing applications to simplify deployment?",
            options: ["Docker", "Jenkins", "Git", "Kubernetes"],
            answer: "Docker",
          },
          {
            question: 'What is the purpose of a "blue-green deployment"?',
            options: [
              "To minimize downtime and reduce risk by having two identical production environments",
              "To deploy changes in a staging environment before going live",
              "To automatically roll back to a previous version if a new release fails",
              "To perform load balancing across multiple servers",
            ],
            answer:
              "To minimize downtime and reduce risk by having two identical production environments",
          },
          {
            question:
              "Which of the following is a common deployment strategy for web applications?",
            options: [
              "Rolling update",
              "Canary release",
              "Feature toggle",
              "All of the above",
            ],
            answer: "All of the above",
          },
          {
            question: 'What is a "deployment artifact"?',
            options: [
              "The package or bundle of files created for deployment to a server or cloud environment",
              "The documentation produced during the development process",
              "The source code before it is compiled",
              "The logs generated during the deployment process",
            ],
            answer:
              "The package or bundle of files created for deployment to a server or cloud environment",
          },
          {
            question:
              "Which configuration management tool is commonly used for automating the deployment process?",
            options: ["Ansible", "JIRA", "Slack", "Trello"],
            answer: "Ansible",
          },
        ],
      },
    ],
  },

  //--------------------------------Angular-----------------------
  {
    subjectId: "angular",
    topics: [
      {
        id: "cli",
        name: "Angular CLI",
        mcqs: [
          {
            question: "What does Angular CLI stand for?",
            options: [
              "Command Line Interface",
              "Component Library Interface",
              "Code Language Interface",
              "Code Level Integration",
            ],
            answer: "Command Line Interface",
          },
          {
            question: "What is the primary purpose of Angular CLI?",
            options: [
              "To streamline the process of creating, managing, and deploying Angular applications",
              "To provide a graphical user interface for Angular applications",
              "To handle database management in Angular applications",
              "To optimize Angular code for performance improvements",
            ],
            answer:
              "To streamline the process of creating, managing, and deploying Angular applications",
          },
          {
            question:
              "Which command is used to create a new Angular project using Angular CLI?",
            options: ["ng new", "ng create", "ng init", "ng start"],
            answer: "ng new",
          },
          {
            question:
              "How do you serve an Angular application using Angular CLI?",
            options: ["ng serve", "ng start", "ng run", "ng build"],
            answer: "ng serve",
          },
          {
            question:
              "Which command is used to generate a new Angular component?",
            options: [
              "ng generate component",
              "ng add component",
              "ng create component",
              "ng build component",
            ],
            answer: "ng generate component",
          },
          {
            question: "What is the purpose of the `ng build` command?",
            options: [
              "To compile the Angular application into static files for deployment",
              "To serve the application on a local development server",
              "To generate new Angular modules",
              "To run unit tests for the application",
            ],
            answer:
              "To compile the Angular application into static files for deployment",
          },
          {
            question:
              "Which file contains configuration options for Angular CLI?",
            options: [
              "angular.json",
              "package.json",
              "tsconfig.json",
              "app.module.ts",
            ],
            answer: "angular.json",
          },
          {
            question: "How can you update Angular CLI to the latest version?",
            options: [
              "ng update @angular/cli",
              "npm update @angular/cli",
              "ng upgrade @angular/cli",
              "npm upgrade @angular/cli",
            ],
            answer: "ng update @angular/cli",
          },
          {
            question: "What does the `ng add` command do?",
            options: [
              "It adds and configures a new package or library to the Angular project",
              "It adds new Angular components",
              "It adds environment-specific configurations",
              "It adds routes to the Angular application",
            ],
            answer:
              "It adds and configures a new package or library to the Angular project",
          },
          {
            question:
              "Which command will you use to run unit tests in an Angular project?",
            options: ["ng test", "ng run", "ng check", "ng validate"],
            answer: "ng test",
          },
        ],
      },
      {
        id: "components",
        name: "Components",
        mcqs: [
          {
            question: "What is an Angular component?",
            options: [
              "A building block of an Angular application that controls a part of the user interface",
              "A service that manages the application state",
              "A module that handles routing in Angular",
              "A directive that modifies the behavior of elements",
            ],
            answer:
              "A building block of an Angular application that controls a part of the user interface",
          },
          {
            question: "Which decorator is used to define an Angular component?",
            options: ["@Component", "@Directive", "@NgModule", "@Service"],
            answer: "@Component",
          },
          {
            question:
              "What is the purpose of the `templateUrl` property in an Angular component?",
            options: [
              "To specify the path to the HTML template file for the component",
              "To define the styles for the component",
              "To inject services into the component",
              "To configure the component's routing",
            ],
            answer:
              "To specify the path to the HTML template file for the component",
          },
          {
            question:
              "What does the `selector` property in an Angular component do?",
            options: [
              "It defines the HTML tag or attribute used to reference the component in a template",
              "It specifies the CSS styles for the component",
              "It sets the path to the component's TypeScript file",
              "It configures the component's routing",
            ],
            answer:
              "It defines the HTML tag or attribute used to reference the component in a template",
          },
          {
            question:
              "Where should you define the styles for an Angular component?",
            options: [
              "In the `styles` or `styleUrls` property of the `@Component` decorator",
              "In the `template` property of the `@Component` decorator",
              "In the `ngOnInit` method of the component class",
              "In the `app.module.ts` file",
            ],
            answer:
              "In the `styles` or `styleUrls` property of the `@Component` decorator",
          },
          {
            question: "What is data binding in Angular components?",
            options: [
              "The process of synchronizing data between the component class and the template",
              "The method of connecting different components together",
              "The technique used to import external libraries into the component",
              "The way of handling events in Angular components",
            ],
            answer:
              "The process of synchronizing data between the component class and the template",
          },
          {
            question:
              "Which lifecycle hook is called after the Angular component has been initialized?",
            options: [
              "ngOnInit",
              "ngOnChanges",
              "ngAfterViewInit",
              "ngOnDestroy",
            ],
            answer: "ngOnInit",
          },
          {
            question:
              "How can you pass data from a parent component to a child component?",
            options: [
              "By using input properties decorated with `@Input`",
              "By using output properties decorated with `@Output`",
              "By using Angular services",
              "By configuring routing parameters",
            ],
            answer: "By using input properties decorated with `@Input`",
          },
          {
            question:
              "What is the purpose of the `@Output` decorator in Angular?",
            options: [
              "To define an event emitter that allows child components to send data to parent components",
              "To specify the path to the HTML template of the component",
              "To configure the component's routing",
              "To apply styles to the component",
            ],
            answer:
              "To define an event emitter that allows child components to send data to parent components",
          },
          {
            question:
              "How can you handle user input events in an Angular component?",
            options: [
              "By binding event handlers to DOM events using Angular’s event binding syntax",
              "By creating custom directives",
              "By defining methods in the service layer",
              "By configuring routing parameters",
            ],
            answer:
              "By binding event handlers to DOM events using Angular’s event binding syntax",
          },
          {
            question: "What is Angular’s component encapsulation?",
            options: [
              "The mechanism that keeps the component’s styles and template isolated from other components",
              "The process of defining component classes and their properties",
              "The technique of managing component dependencies",
              "The strategy for routing between different components",
            ],
            answer:
              "The mechanism that keeps the component’s styles and template isolated from other components",
          },
        ],
      },
      {
        id: "services",
        name: "Services and Dependency Injection",
        mcqs: [
          {
            question: "What is an Angular service?",
            options: [
              "A class that provides a specific functionality and can be shared across multiple components",
              "A component that manages the user interface",
              "A directive that manipulates the DOM",
              "A module that handles routing",
            ],
            answer:
              "A class that provides a specific functionality and can be shared across multiple components",
          },
          {
            question: "How do you provide a service in Angular?",
            options: [
              "By using the `providers` array in the `@NgModule` decorator or in the `@Component` decorator",
              "By directly importing the service into each component",
              "By defining the service in the `app.module.ts` file",
              "By using Angular’s `HttpClient` module",
            ],
            answer:
              "By using the `providers` array in the `@NgModule` decorator or in the `@Component` decorator",
          },
          {
            question: "What is Dependency Injection (DI) in Angular?",
            options: [
              "A design pattern that allows Angular to provide dependencies to components and services automatically",
              "A method of manually creating instances of components",
              "A technique for handling HTTP requests",
              "A way to manage the application’s state",
            ],
            answer:
              "A design pattern that allows Angular to provide dependencies to components and services automatically",
          },
          {
            question: "Which decorator is used to define an Angular service?",
            options: ["@Injectable", "@Component", "@NgModule", "@Directive"],
            answer: "@Injectable",
          },
          {
            question: "What does the `@Injectable` decorator do?",
            options: [
              "It marks a class as available to be injected as a dependency",
              "It defines the HTML template for a component",
              "It sets the styles for a component",
              "It configures the routing for a component",
            ],
            answer:
              "It marks a class as available to be injected as a dependency",
          },
          {
            question: "How do you inject a service into a component?",
            options: [
              "By including the service in the component’s constructor as a parameter",
              "By importing the service into the component’s module",
              "By adding the service to the component’s template",
              "By configuring the service in the `app.module.ts` file",
            ],
            answer:
              "By including the service in the component’s constructor as a parameter",
          },
          {
            question:
              "What is the purpose of the `providedIn` property in Angular services?",
            options: [
              "To specify where the service should be provided, such as in a specific module or in the root injector",
              "To define the service’s HTTP endpoints",
              "To configure the service’s dependency injection",
              "To apply styles to the service",
            ],
            answer:
              "To specify where the service should be provided, such as in a specific module or in the root injector",
          },
          {
            question: "What is a singleton service in Angular?",
            options: [
              "A service that is instantiated only once during the application’s lifetime",
              "A service that can be instantiated multiple times",
              "A service that only handles HTTP requests",
              "A service that only provides data to components",
            ],
            answer:
              "A service that is instantiated only once during the application’s lifetime",
          },
          {
            question: "How can you make a service available application-wide?",
            options: [
              "By providing the service in the `root` injector using `@Injectable({ providedIn: 'root' })`",
              "By including the service in the `providers` array of every component",
              "By declaring the service in each module’s `providers` array",
              "By importing the service directly into each component",
            ],
            answer:
              "By providing the service in the `root` injector using `@Injectable({ providedIn: 'root' })`",
          },
          {
            question: "What is the role of Angular’s `HttpClient` service?",
            options: [
              "To perform HTTP requests and handle responses",
              "To manage the component lifecycle",
              "To provide data binding between the model and view",
              "To configure routing between components",
            ],
            answer: "To perform HTTP requests and handle responses",
          },
        ],
      },
      {
        id: "routing",
        name: "Routing",
        mcqs: [
          {
            question: "What is Angular Routing used for?",
            options: [
              "Navigating between different views or components within an application",
              "Managing the state of an application",
              "Handling user inputs in forms",
              "Creating custom directives",
            ],
            answer:
              "Navigating between different views or components within an application",
          },
          {
            question:
              "Which Angular module is essential for setting up routing?",
            options: [
              "RouterModule",
              "FormsModule",
              "HttpClientModule",
              "ReactiveFormsModule",
            ],
            answer: "RouterModule",
          },
          {
            question: "How do you define a route in Angular?",
            options: [
              "By configuring the `Routes` array in the `RouterModule`",
              "By using the `@Route` decorator in the component",
              "By defining routes in the `app.component.ts` file",
              "By importing routes from an external file",
            ],
            answer: "By configuring the `Routes` array in the `RouterModule`",
          },
          {
            question: "What is the purpose of the `RouterOutlet` directive?",
            options: [
              "To mark where routed components should be displayed in the view",
              "To manage the navigation between different components",
              "To create nested routes",
              "To bind data between components",
            ],
            answer:
              "To mark where routed components should be displayed in the view",
          },
          {
            question: "How do you set up a default route in Angular?",
            options: [
              "By using an empty path `path: ''` in the `Routes` array",
              "By configuring the `RouterModule` with a default path",
              "By using the `redirectTo` property in the `Routes` array",
              "By defining a `defaultRoute` property in the `app.module.ts` file",
            ],
            answer: "By using an empty path `path: ''` in the `Routes` array",
          },
          {
            question: "What is a route guard in Angular?",
            options: [
              "A service that can control navigation to and from routes based on certain conditions",
              "A component that handles user authentication",
              "A directive that manipulates route parameters",
              "A module that manages the routing configuration",
            ],
            answer:
              "A service that can control navigation to and from routes based on certain conditions",
          },
          {
            question:
              "Which route guard can be used to prevent a user from navigating away from a route?",
            options: [
              "CanDeactivateGuard",
              "CanActivateGuard",
              "ResolveGuard",
              "AuthGuard",
            ],
            answer: "CanDeactivateGuard",
          },
          {
            question: "How do you define child routes in Angular?",
            options: [
              "By adding a `children` property to the parent route configuration",
              "By using nested `RouterOutlet` directives",
              "By defining separate `Routes` arrays for each child route",
              "By importing child routes into the parent component",
            ],
            answer:
              "By adding a `children` property to the parent route configuration",
          },
          {
            question: "What is the role of the `RouterLink` directive?",
            options: [
              "To link to a different route or view within the application",
              "To handle the visibility of route components",
              "To manage route guards",
              "To create dynamic routes",
            ],
            answer:
              "To link to a different route or view within the application",
          },
          {
            question:
              "What is the purpose of the `navigate` method in Angular’s `Router` service?",
            options: [
              "To programmatically navigate to a different route",
              "To define the route configuration",
              "To initialize route guards",
              "To set up routing modules",
            ],
            answer: "To programmatically navigate to a different route",
          },
        ],
      },
      {
        id: "forms",
        name: "Forms",
        mcqs: [
          {
            question: "What are the two main types of forms in Angular?",
            options: [
              "Reactive Forms and Template-driven Forms",
              "Dynamic Forms and Static Forms",
              "Simple Forms and Complex Forms",
              "Custom Forms and Built-in Forms",
            ],
            answer: "Reactive Forms and Template-driven Forms",
          },
          {
            question:
              "Which Angular module is required for using reactive forms?",
            options: [
              "ReactiveFormsModule",
              "FormsModule",
              "HttpClientModule",
              "CommonModule",
            ],
            answer: "ReactiveFormsModule",
          },
          {
            question: "How do you create a form control in a reactive form?",
            options: [
              "By using the `FormControl` class",
              "By using the `ngModel` directive",
              "By using the `FormGroup` class",
              "By using the `FormBuilder` service",
            ],
            answer: "By using the `FormControl` class",
          },
          {
            question:
              "What is the purpose of the `FormGroup` class in reactive forms?",
            options: [
              "To group multiple form controls together",
              "To create a single form control",
              "To handle form validation",
              "To manage form submission",
            ],
            answer: "To group multiple form controls together",
          },
          {
            question:
              "Which directive is used to bind a form control to an HTML input element in a template-driven form?",
            options: ["ngModel", "formControl", "formGroup", "formControlName"],
            answer: "ngModel",
          },
          {
            question: "How do you validate a form control in a reactive form?",
            options: [
              "By using validators provided by Angular such as `Validators.required`",
              "By adding validation attributes directly to the HTML input element",
              "By using the `ngModel` directive with validation options",
              "By creating custom validation directives",
            ],
            answer:
              "By using validators provided by Angular such as `Validators.required`",
          },
          {
            question: "What is the purpose of the `FormBuilder` service?",
            options: [
              "To simplify the creation of form controls and form groups",
              "To handle form submission",
              "To validate form data",
              "To bind form controls to HTML elements",
            ],
            answer: "To simplify the creation of form controls and form groups",
          },
          {
            question:
              "Which property of a form control is used to check if the control has been touched by the user?",
            options: ["touched", "dirty", "valid", "pristine"],
            answer: "touched",
          },
          {
            question:
              "What is the purpose of the `formControlName` directive in a reactive form?",
            options: [
              "To bind a specific form control to an HTML element",
              "To define a form control",
              "To validate a form control",
              "To group multiple form controls",
            ],
            answer: "To bind a specific form control to an HTML element",
          },
          {
            question: "How can you handle form submission in Angular?",
            options: [
              "By using the `(ngSubmit)` event binding",
              "By using the `submit` event of the form element",
              "By using the `onSubmit` method in the component",
              "By using the `ngModel` directive with a submit function",
            ],
            answer: "By using the `(ngSubmit)` event binding",
          },
        ],
      },
    ],
  },

  //------------------------------------Django------------------------
  {
    subjectId: "django",
    topics: [
      {
        id: "models",
        name: "Models",
        mcqs: [
          {
            question: "What is the primary purpose of a model in Django?",
            options: [
              "To define the structure of your database tables",
              "To handle HTTP requests",
              "To render HTML templates",
              "To manage static files",
            ],
            answer: "To define the structure of your database tables",
          },
          {
            question:
              "Which class do you need to inherit from to create a Django model?",
            options: [
              "models.Model",
              "models.Base",
              "models.Entity",
              "models.Database",
            ],
            answer: "models.Model",
          },
          {
            question:
              "What is the default primary key field for Django models?",
            options: [
              "An auto-incrementing integer field",
              "A UUID field",
              "A character field",
              "A date field",
            ],
            answer: "An auto-incrementing integer field",
          },
          {
            question:
              "How do you define a string representation of a Django model?",
            options: [
              "By overriding the `__str__` method",
              "By defining a `display` method",
              "By setting the `name` attribute",
              "By configuring the `verbose_name` property",
            ],
            answer: "By overriding the `__str__` method",
          },
          {
            question:
              "Which field type in Django is used for storing text data?",
            options: ["TextField", "CharField", "IntegerField", "DateField"],
            answer: "TextField",
          },
          {
            question:
              "How can you create a one-to-many relationship in Django models?",
            options: [
              "By using a `ForeignKey` field",
              "By using a `OneToOneField`",
              "By using a `ManyToManyField`",
              "By using a `RelatedField`",
            ],
            answer: "By using a `ForeignKey` field",
          },
          {
            question:
              "What is the purpose of the `Meta` class in Django models?",
            options: [
              "To provide metadata about the model such as ordering and verbose names",
              "To define the model fields",
              "To manage database migrations",
              "To handle model validation",
            ],
            answer:
              "To provide metadata about the model such as ordering and verbose names",
          },
          {
            question:
              "How do you create a many-to-many relationship in Django models?",
            options: [
              "By using a `ManyToManyField`",
              "By using a `ForeignKey`",
              "By using a `OneToOneField`",
              "By using a `ManyToOneField`",
            ],
            answer: "By using a `ManyToManyField`",
          },
          {
            question:
              "What is the purpose of the `save` method in Django models?",
            options: [
              "To save changes to the database",
              "To validate model fields",
              "To create database migrations",
              "To delete records from the database",
            ],
            answer: "To save changes to the database",
          },
          {
            question:
              "How can you specify the order in which model instances should be returned from a query?",
            options: [
              "By defining the `ordering` attribute in the `Meta` class",
              "By using the `order_by` method in the query",
              "By setting the `default_order` attribute in the model",
              "By using the `sort` method on the queryset",
            ],
            answer: "By defining the `ordering` attribute in the `Meta` class",
          },
        ],
      },
      {
        id: "views",
        name: "Views",
        mcqs: [
          {
            question: "What is the main purpose of a view in Django?",
            options: [
              "To handle HTTP requests and return HTTP responses",
              "To define the structure of the database tables",
              "To manage user authentication",
              "To render static files",
            ],
            answer: "To handle HTTP requests and return HTTP responses",
          },
          {
            question:
              "Which function-based view decorator is used to ensure that a view requires a user to be logged in?",
            options: [
              "login_required",
              "permission_required",
              "user_passes_test",
              "csrf_exempt",
            ],
            answer: "login_required",
          },
          {
            question:
              "What is the primary difference between function-based views (FBVs) and class-based views (CBVs) in Django?",
            options: [
              "FBVs are simple functions, while CBVs are classes that provide more features and reusable components",
              "FBVs handle multiple requests, while CBVs handle single requests",
              "FBVs are used for static files, while CBVs are used for dynamic content",
              "FBVs are for read operations, while CBVs are for write operations",
            ],
            answer:
              "FBVs are simple functions, while CBVs are classes that provide more features and reusable components",
          },
          {
            question:
              "Which method in a class-based view handles GET requests?",
            options: ["get", "post", "put", "delete"],
            answer: "get",
          },
          {
            question:
              "How can you pass context data to a template from a view?",
            options: [
              "By using the `context` parameter in the `render` function",
              "By setting the `context` attribute in the view",
              "By using `get_context_data` method in class-based views",
              "By defining `context` in the model",
            ],
            answer: "By using the `context` parameter in the `render` function",
          },
          {
            question:
              "Which Django view function is used to render a template with a given context?",
            options: ["render", "response", "template", "context"],
            answer: "render",
          },
          {
            question: "How do you create a URL route for a Django view?",
            options: [
              "By defining a URL pattern in the `urls.py` file",
              "By setting the `url` attribute in the view",
              "By adding a URL pattern to the `views.py` file",
              "By using the `reverse` function",
            ],
            answer: "By defining a URL pattern in the `urls.py` file",
          },
          {
            question:
              "What is the purpose of the `get_object_or_404` function in Django views?",
            options: [
              "To retrieve an object or raise a 404 error if the object is not found",
              "To create a new object if it does not exist",
              "To delete an object from the database",
              "To update an existing object",
            ],
            answer:
              "To retrieve an object or raise a 404 error if the object is not found",
          },
          {
            question:
              "What is the purpose of the `post` method in a class-based view?",
            options: [
              "To handle POST requests",
              "To handle GET requests",
              "To handle PUT requests",
              "To handle DELETE requests",
            ],
            answer: "To handle POST requests",
          },
          {
            question: "How can you return a JSON response from a Django view?",
            options: [
              "By using the `JsonResponse` class",
              "By using the `HttpResponse` class with `content_type` set to `application/json`",
              "By using the `render` function with JSON data",
              "By using the `HttpResponse` class with JSON data",
            ],
            answer: "By using the `JsonResponse` class",
          },
        ],
      },
      {
        id: "templates",
        name: "Templates",
        mcqs: [
          {
            question: "What is the primary purpose of Django templates?",
            options: [
              "To render HTML dynamically using data from views",
              "To define the structure of the database tables",
              "To handle HTTP requests and responses",
              "To manage user authentication",
            ],
            answer: "To render HTML dynamically using data from views",
          },
          {
            question:
              "Which template tag is used to include another template within the current template?",
            options: [
              "{% include %}",
              "{% extend %}",
              "{% block %}",
              "{% render %}",
            ],
            answer: "{% include %}",
          },
          {
            question:
              "How can you define a block of content that can be overridden in child templates?",
            options: [
              "{% block %}",
              "{% include %}",
              "{% extends %}",
              "{% with %}",
            ],
            answer: "{% block %}",
          },
          {
            question:
              "What is the purpose of the `{% extends %}` template tag?",
            options: [
              "To inherit from a parent template",
              "To include another template",
              "To define a block of content",
              "To set context variables",
            ],
            answer: "To inherit from a parent template",
          },
          {
            question:
              "Which filter would you use to convert a string to uppercase in a Django template?",
            options: ["uppercase", "upper", "capitalize", "title"],
            answer: "upper",
          },
          {
            question:
              "How do you access a variable passed from a view in a Django template?",
            options: [
              "Using double curly braces, e.g., {{ variable_name }}",
              "Using single curly braces, e.g., { variable_name }",
              "Using square brackets, e.g., [variable_name]",
              "Using parentheses, e.g., (variable_name)",
            ],
            answer: "Using double curly braces, e.g., {{ variable_name }}",
          },
          {
            question:
              "Which template tag is used to handle conditional logic in Django templates?",
            options: ["{% if %}", "{% for %}", "{% include %}", "{% block %}"],
            answer: "{% if %}",
          },
          {
            question: "How can you loop through a list in a Django template?",
            options: [
              "Using the `{% for %}` template tag",
              "Using the `{% loop %}` template tag",
              "Using the `{% while %}` template tag",
              "Using the `{% each %}` template tag",
            ],
            answer: "Using the `{% for %}` template tag",
          },
          {
            question: "What is the purpose of the `{% with %}` template tag?",
            options: [
              "To define a block of variables with a specific scope",
              "To include another template",
              "To extend a parent template",
              "To handle conditional logic",
            ],
            answer: "To define a block of variables with a specific scope",
          },
          {
            question:
              "How do you pass context variables from a view to a template in Django?",
            options: [
              "By using the `context` parameter in the `render` function",
              "By setting the `context` attribute in the template",
              "By defining variables in the template file",
              "By using the `request` object directly in the template",
            ],
            answer: "By using the `context` parameter in the `render` function",
          },
        ],
      },
      {
        id: "admin",
        name: "Admin Interface",
        mcqs: [
          {
            question:
              "What is the primary purpose of Django’s admin interface?",
            options: [
              "To provide a web-based interface for managing application data",
              "To handle HTTP requests and responses",
              "To define the structure of the database tables",
              "To render HTML templates",
            ],
            answer:
              "To provide a web-based interface for managing application data",
          },
          {
            question:
              "Which Django command is used to create a superuser for accessing the admin interface?",
            options: [
              "python manage.py createsuperuser",
              "python manage.py adminuser",
              "python manage.py startsuperuser",
              "python manage.py makemigrations",
            ],
            answer: "python manage.py createsuperuser",
          },
          {
            question:
              "Which method should be overridden to customize the list display in the Django admin interface?",
            options: [
              "list_display",
              "list_filter",
              "search_fields",
              "ordering",
            ],
            answer: "list_display",
          },
          {
            question:
              "How can you register a model to appear in the Django admin interface?",
            options: [
              "By using the `admin.site.register()` function",
              "By including the model in the `models.py` file",
              "By using the `admin.register()` decorator",
              "By modifying the `views.py` file",
            ],
            answer: "By using the `admin.site.register()` function",
          },
          {
            question:
              "Which Django admin class is used to customize the form used for adding and editing objects?",
            options: ["ModelAdmin", "AdminForm", "ModelForm", "AdminModel"],
            answer: "ModelAdmin",
          },
          {
            question:
              "How can you specify which fields are editable in the Django admin interface?",
            options: [
              "By using the `fields` attribute in `ModelAdmin`",
              "By defining the `editable` attribute in the model",
              "By setting the `form` attribute in the view",
              "By using the `read_only_fields` attribute in `ModelAdmin`",
            ],
            answer: "By using the `fields` attribute in `ModelAdmin`",
          },
          {
            question:
              "Which attribute of `ModelAdmin` allows you to add search functionality to the admin interface?",
            options: [
              "search_fields",
              "list_display",
              "list_filter",
              "ordering",
            ],
            answer: "search_fields",
          },
          {
            question:
              "What is the purpose of the `list_filter` attribute in `ModelAdmin`?",
            options: [
              "To add filters to the admin list view",
              "To customize the search fields",
              "To control the display order of items",
              "To define the fields shown in the form",
            ],
            answer: "To add filters to the admin list view",
          },
          {
            question:
              "Which Django class is used to create custom forms for the admin interface?",
            options: ["ModelForm", "AdminForm", "Form", "ModelAdmin"],
            answer: "ModelForm",
          },
          {
            question:
              "How can you prevent a model from being editable in the Django admin interface?",
            options: [
              "By using the `readonly_fields` attribute in `ModelAdmin`",
              "By setting the `editable` attribute in the model",
              "By removing the model from `admin.site.register()`",
              "By using the `disabled` attribute in the form",
            ],
            answer: "By using the `readonly_fields` attribute in `ModelAdmin`",
          },
        ],
      },
      {
        id: "deployment",
        name: "Deployment",
        mcqs: [
          {
            question:
              "Which Django command is used to collect static files for deployment?",
            options: [
              "python manage.py collectstatic",
              "python manage.py collectfiles",
              "python manage.py staticfiles",
              "python manage.py deploystatic",
            ],
            answer: "python manage.py collectstatic",
          },
          {
            question:
              "Which setting in Django specifies the allowed hosts for your application in production?",
            options: ["ALLOWED_HOSTS", "HOSTS", "ALLOWED_IPS", "SECURE_HOSTS"],
            answer: "ALLOWED_HOSTS",
          },
          {
            question:
              "What is the purpose of using a WSGI server in Django deployment?",
            options: [
              "To interface between your Django application and the web server",
              "To manage the database schema",
              "To handle static file collection",
              "To run Django’s development server",
            ],
            answer:
              "To interface between your Django application and the web server",
          },
          {
            question:
              "Which WSGI server is commonly used for deploying Django applications?",
            options: ["Gunicorn", "Nginx", "Apache", "SQLite"],
            answer: "Gunicorn",
          },
          {
            question:
              "Which web server is commonly used in conjunction with Gunicorn for serving Django applications?",
            options: ["Nginx", "Apache", "IIS", "Lighttpd"],
            answer: "Nginx",
          },
          {
            question:
              "What is the purpose of setting `DEBUG = False` in Django settings for production?",
            options: [
              "To disable detailed error pages and improve security",
              "To enable Django’s debugging tools",
              "To increase logging verbosity",
              "To optimize database queries",
            ],
            answer: "To disable detailed error pages and improve security",
          },
          {
            question:
              "Which Django setting should be configured to use a production-ready database?",
            options: [
              "DATABASES",
              "DATABASE_ENGINE",
              "DB_CONNECTION",
              "PROD_DATABASE",
            ],
            answer: "DATABASES",
          },
          {
            question:
              "How can you securely manage secret keys and configuration settings in Django for production?",
            options: [
              "By using environment variables or a secrets management tool",
              "By hardcoding them in the `settings.py` file",
              "By storing them in a text file in the project directory",
              "By committing them to version control",
            ],
            answer:
              "By using environment variables or a secrets management tool",
          },
          {
            question:
              "Which setting should you configure to ensure that Django serves static files correctly in production?",
            options: [
              "STATIC_ROOT",
              "STATICFILES_DIRS",
              "STATIC_URL",
              "MEDIA_ROOT",
            ],
            answer: "STATIC_ROOT",
          },
          {
            question:
              "Which tool is often used for database migrations in Django deployment?",
            options: [
              "django-admin migrate",
              "python manage.py makemigrations",
              "python manage.py migrate",
              "django-admin migrate --apply",
            ],
            answer: "python manage.py migrate",
          },
        ],
      },
    ],
  },
  //-----------------------------Css-------------------------------
  {
    subjectId: "css",
    topics: [
      {
        id: "selectors",
        name: "Selectors",
        mcqs: [
          {
            question:
              "Which CSS selector targets all `<p>` elements within a `<div>` element?",
            options: ["div p", "p div", "div > p", "p > div"],
            answer: "div p",
          },
          {
            question:
              'How do you select an element with the class name "example"?',
            options: [".example", "#example", "example", "div.example"],
            answer: ".example",
          },
          {
            question: "What does the `:hover` pseudo-class selector do?",
            options: [
              "Styles an element when the mouse is over it",
              "Styles an element when it is clicked",
              "Styles the first child of an element",
              "Styles an element that has focus",
            ],
            answer: "Styles an element when the mouse is over it",
          },
          {
            question: 'Which selector targets an element with the ID "header"?',
            options: ["#header", ".header", "header", "div#header"],
            answer: "#header",
          },
          {
            question:
              'How can you select all `<input>` elements of type "text"?',
            options: [
              "input[type='text']",
              "input.text",
              "input[type=text]",
              "input.text[type='text']",
            ],
            answer: "input[type='text']",
          },
          {
            question: "What is the purpose of the `:nth-child()` selector?",
            options: [
              "Selects elements based on their position in a parent element",
              "Selects the first child of an element",
              "Selects elements based on their class",
              "Selects elements with a specific attribute",
            ],
            answer:
              "Selects elements based on their position in a parent element",
          },
          {
            question:
              "Which selector is used to style only the first `<li>` element in a list?",
            options: [
              "li:first-child",
              "li:first-of-type",
              "ul:first-child",
              "li:first",
            ],
            answer: "li:first-child",
          },
          {
            question:
              'How do you select elements with both class "active" and class "highlight"?',
            options: [
              ".active.highlight",
              ".active .highlight",
              "#active.highlight",
              ".active, .highlight",
            ],
            answer: ".active.highlight",
          },
          {
            question: "What does the `*` (universal) selector do?",
            options: [
              "Selects all elements",
              "Selects all elements with a specific attribute",
              "Selects all child elements",
              "Selects all elements with a specific class",
            ],
            answer: "Selects all elements",
          },
          {
            question:
              "How do you select all direct child elements of a `<div>`?",
            options: ["div > *", "div *", "div + *", "div ~ *"],
            answer: "div > *",
          },
        ],
      },
      {
        id: "flexbox",
        name: "Flexbox",
        mcqs: [
          {
            question:
              "Which CSS property defines the container as a flex container?",
            options: [
              "display: flex",
              "flex: container",
              "container: flex",
              "display: inline-flex",
            ],
            answer: "display: flex",
          },
          {
            question:
              "What is the default value of the `flex-direction` property?",
            options: ["row", "column", "row-reverse", "column-reverse"],
            answer: "row",
          },
          {
            question:
              "Which property defines the alignment of flex items along the main axis?",
            options: [
              "justify-content",
              "align-items",
              "align-content",
              "flex-align",
            ],
            answer: "justify-content",
          },
          {
            question:
              "What does the `align-items` property do in a flex container?",
            options: [
              "Aligns flex items along the cross axis",
              "Aligns flex items along the main axis",
              "Sets the spacing between flex items",
              "Defines the flex item order",
            ],
            answer: "Aligns flex items along the cross axis",
          },
          {
            question:
              "Which property controls the space between flex items on the main axis?",
            options: [
              "justify-content",
              "align-items",
              "align-content",
              "flex-gap",
            ],
            answer: "justify-content",
          },
          {
            question:
              "How do you specify the flex item to grow to fill the available space?",
            options: [
              "flex-grow: 1",
              "flex-shrink: 1",
              "flex-basis: 1",
              "flex: auto",
            ],
            answer: "flex-grow: 1",
          },
          {
            question: "What is the purpose of the `flex-wrap` property?",
            options: [
              "Controls whether flex items should wrap onto multiple lines",
              "Aligns flex items along the cross axis",
              "Specifies the order of flex items",
              "Sets the alignment of the flex container itself",
            ],
            answer:
              "Controls whether flex items should wrap onto multiple lines",
          },
          {
            question:
              "Which value of `flex-wrap` makes flex items not wrap and stay in a single line?",
            options: ["nowrap", "wrap", "wrap-reverse", "auto"],
            answer: "nowrap",
          },
          {
            question:
              "How can you center a flex item horizontally within its flex container?",
            options: [
              "justify-content: center",
              "align-items: center",
              "align-content: center",
              "flex-align: center",
            ],
            answer: "justify-content: center",
          },
          {
            question: "What is the effect of the `flex-basis` property?",
            options: [
              "Defines the initial size of a flex item before space distribution",
              "Determines the maximum size of a flex item",
              "Controls the alignment of flex items",
              "Specifies the order of flex items",
            ],
            answer:
              "Defines the initial size of a flex item before space distribution",
          },
        ],
      },
      {
        id: "grid",
        name: "Grid",
        mcqs: [
          {
            question:
              "Which property defines the container as a grid container?",
            options: [
              "display: grid",
              "grid: container",
              "container: grid",
              "display: inline-grid",
            ],
            answer: "display: grid",
          },
          {
            question:
              "What is the default value of the `grid-template-columns` property?",
            options: [
              "auto",
              "1fr",
              "repeat(auto-fill, minmax(0, 1fr))",
              "none",
            ],
            answer: "none",
          },
          {
            question:
              "Which property specifies the number of rows in a grid container?",
            options: [
              "grid-template-rows",
              "grid-rows",
              "rows-template",
              "grid-template-columns",
            ],
            answer: "grid-template-rows",
          },
          {
            question:
              "How can you create a grid with two columns of equal width?",
            options: [
              "grid-template-columns: 1fr 1fr",
              "grid-template-columns: auto auto",
              "grid-columns: 50% 50%",
              "grid-template: 1fr 1fr",
            ],
            answer: "grid-template-columns: 1fr 1fr",
          },
          {
            question: "What does the `grid-area` property do?",
            options: [
              "Defines a named grid area",
              "Specifies the size of the grid items",
              "Controls the alignment of grid items",
              "Sets the gap between grid items",
            ],
            answer: "Defines a named grid area",
          },
          {
            question:
              "Which property sets the gap between rows and columns in a grid container?",
            options: ["grid-gap", "gap", "grid-spacing", "grid-gap-size"],
            answer: "gap",
          },
          {
            question: "What is the effect of the `grid-column` property?",
            options: [
              "Specifies the span of a grid item across columns",
              "Defines the number of columns in a grid",
              "Controls the alignment of grid items within columns",
              "Sets the size of columns",
            ],
            answer: "Specifies the span of a grid item across columns",
          },
          {
            question:
              "How do you center a grid item both horizontally and vertically within its grid cell?",
            options: [
              "justify-self: center; align-self: center",
              "justify-items: center; align-items: center",
              "justify-content: center; align-content: center",
              "grid-align: center",
            ],
            answer: "justify-self: center; align-self: center",
          },
          {
            question:
              "Which value of `grid-auto-flow` will place items in rows, filling in each row before moving to the next?",
            options: ["row", "column", "dense", "auto"],
            answer: "row",
          },
          {
            question:
              "What is the purpose of the `grid-template-areas` property?",
            options: [
              "Defines named grid areas and their layout",
              "Sets the size of each grid area",
              "Controls the order of grid items",
              "Specifies the gaps between grid areas",
            ],
            answer: "Defines named grid areas and their layout",
          },
        ],
      },
      {
        id: "animations",
        name: "Animations",
        mcqs: [
          {
            question:
              "Which property is used to define the keyframes for an animation?",
            options: [
              "@keyframes",
              "animation-keyframes",
              "@animation",
              "animation-frames",
            ],
            answer: "@keyframes",
          },
          {
            question:
              "What is the default value of the `animation-duration` property?",
            options: ["0s", "1s", "2s", "infinite"],
            answer: "0s",
          },
          {
            question:
              "Which property controls the delay before an animation starts?",
            options: [
              "animation-delay",
              "animation-start",
              "animation-wait",
              "animation-pause",
            ],
            answer: "animation-delay",
          },
          {
            question: "How can you make an animation repeat indefinitely?",
            options: [
              "animation-iteration-count: infinite",
              "animation-repeat: infinite",
              "animation-duration: repeat",
              "animation-cycle: infinite",
            ],
            answer: "animation-iteration-count: infinite",
          },
          {
            question:
              "Which property is used to set the number of times an animation should play?",
            options: [
              "animation-iteration-count",
              "animation-play-count",
              "animation-repeat",
              "animation-cycles",
            ],
            answer: "animation-iteration-count",
          },
          {
            question:
              "What does the `animation-timing-function` property control?",
            options: [
              "The speed curve of the animation",
              "The delay before the animation starts",
              "The duration of the animation",
              "The number of times the animation repeats",
            ],
            answer: "The speed curve of the animation",
          },
          {
            question:
              "How do you specify that an animation should not affect the element’s properties outside of its keyframes?",
            options: [
              "animation-fill-mode: forwards",
              "animation-fill-mode: backward",
              "animation-fill-mode: none",
              "animation-fill-mode: both",
            ],
            answer: "animation-fill-mode: none",
          },
          {
            question:
              "Which value of the `animation-fill-mode` property ensures that the element will retain the styles defined in the last keyframe after the animation ends?",
            options: ["forwards", "backwards", "both", "none"],
            answer: "forwards",
          },
          {
            question: "What does the `animation-name` property do?",
            options: [
              "Specifies the name of the @keyframes animation to be applied",
              "Defines the duration of the animation",
              "Sets the delay before the animation starts",
              "Controls the number of times the animation will repeat",
            ],
            answer:
              "Specifies the name of the @keyframes animation to be applied",
          },
          {
            question:
              "Which shorthand property can be used to define multiple animation properties at once?",
            options: [
              "animation",
              "animation-set",
              "animation-properties",
              "animate",
            ],
            answer: "animation",
          },
          {
            question:
              "How can you control the speed at which an animation progresses?",
            options: [
              "animation-timing-function",
              "animation-duration",
              "animation-delay",
              "animation-speed",
            ],
            answer: "animation-timing-function",
          },
        ],
      },
      {
        id: "responsive",
        name: "Responsive Design",
        mcqs: [
          {
            question:
              "Which meta tag is commonly used to ensure proper scaling and viewport behavior on mobile devices?",
            options: [
              "<meta name='viewport' content='width=device-width, initial-scale=1'>",
              "<meta name='viewport' content='width=device-width'>",
              "<meta name='viewport' content='initial-scale=1'>",
              "<meta name='viewport' content='user-scalable=yes'>",
            ],
            answer:
              "<meta name='viewport' content='width=device-width, initial-scale=1'>",
          },
          {
            question:
              "Which CSS media query feature is used to target different screen widths?",
            options: ["width", "height", "device-width", "orientation"],
            answer: "width",
          },
          {
            question: "What is the purpose of the `@media` rule in CSS?",
            options: [
              "To apply different styles based on device characteristics",
              "To define keyframes for animations",
              "To set the default font size for the page",
              "To include external CSS stylesheets",
            ],
            answer: "To apply different styles based on device characteristics",
          },
          {
            question:
              "Which CSS property is often used in conjunction with media queries to adjust the layout for different screen sizes?",
            options: ["flex", "grid", "float", "position"],
            answer: "flex",
          },
          {
            question:
              "How can you hide an element on small screens but show it on larger screens using media queries?",
            options: [
              "Use `display: none` for small screens and `display: block` for larger screens",
              "Use `visibility: hidden` for small screens and `visibility: visible` for larger screens",
              "Use `opacity: 0` for small screens and `opacity: 1` for larger screens",
              "Use `position: absolute` for small screens and `position: static` for larger screens",
            ],
            answer:
              "Use `display: none` for small screens and `display: block` for larger screens",
          },
          {
            question:
              "What does the `flex-wrap` property control in a flex container?",
            options: [
              "Whether flex items should wrap onto multiple lines",
              "The direction of the flex items",
              "The alignment of the flex container",
              "The size of the flex items",
            ],
            answer: "Whether flex items should wrap onto multiple lines",
          },
          {
            question:
              "Which property is used to set the layout of a grid container in a responsive design?",
            options: [
              "grid-template-columns",
              "grid-auto-flow",
              "grid-gap",
              "grid-template-areas",
            ],
            answer: "grid-template-columns",
          },
          {
            question:
              "What does the `min-width` media feature do in a media query?",
            options: [
              "Applies styles if the viewport width is at least the specified value",
              "Applies styles if the viewport width is less than the specified value",
              "Applies styles based on the minimum width of the screen's height",
              "Applies styles if the viewport width is exactly the specified value",
            ],
            answer:
              "Applies styles if the viewport width is at least the specified value",
          },
          {
            question:
              "How can you ensure that images resize responsively to fit their container?",
            options: [
              "Use `max-width: 100%`",
              "Use `width: 100%`",
              "Use `height: auto`",
              "Use `flex: 1`",
            ],
            answer: "Use `max-width: 100%`",
          },
          {
            question:
              "What is a common technique to create a responsive navigation menu?",
            options: [
              "Using a hamburger menu with media queries",
              "Using fixed widths for menu items",
              "Using absolute positioning for menu items",
              "Using a grid layout for menu items",
            ],
            answer: "Using a hamburger menu with media queries",
          },
          {
            question:
              "Which layout system provides a flexible and responsive layout structure for a web page?",
            options: ["Flexbox", "Float", "Position", "Table"],
            answer: "Flexbox",
          },
        ],
      },
    ],
  },
  //---------------------Kotlin-------------
  {
    subjectId: "kotlin",
    topics: [
      {
        id: "basics",
        name: "Kotlin Basics",
        mcqs: [
          {
            question: "Which keyword is used to declare a variable in Kotlin?",
            options: ["var", "let", "const", "val"],
            answer: "val",
          },
          {
            question:
              "What is the default visibility modifier for a class in Kotlin?",
            options: ["public", "private", "protected", "internal"],
            answer: "public",
          },
          {
            question: "How do you define a function in Kotlin?",
            options: [
              "fun functionName() { }",
              "def functionName() { }",
              "function functionName() { }",
              "method functionName() { }",
            ],
            answer: "fun functionName() { }",
          },
          {
            question: "Which keyword is used to define a constant in Kotlin?",
            options: ["const", "val", "let", "var"],
            answer: "val",
          },
          {
            question:
              "What is the Kotlin syntax for creating a single-line comment?",
            options: [
              "// comment",
              "# comment",
              "/* comment */",
              "<!-- comment -->",
            ],
            answer: "// comment",
          },
          {
            question:
              "Which function is used to print output to the console in Kotlin?",
            options: ["println()", "print()", "log()", "echo()"],
            answer: "println()",
          },
          {
            question: "How do you define a nullable variable in Kotlin?",
            options: [
              "var variableName: Type? = value",
              "var variableName: Type = value?",
              "var variableName: Type! = value",
              "var variableName: Type = value",
            ],
            answer: "var variableName: Type? = value",
          },
          {
            question: "Which keyword is used to create a class in Kotlin?",
            options: ["class", "create", "object", "type"],
            answer: "class",
          },
          {
            question:
              "What does the `data` keyword signify when used in Kotlin?",
            options: [
              "A class is used to hold data",
              "A function is used to process data",
              "A variable is used to store data",
              "An interface is used to define data",
            ],
            answer: "A class is used to hold data",
          },
          {
            question:
              "What is the correct way to declare an immutable list in Kotlin?",
            options: [
              "val listName = listOf()",
              "var listName = arrayListOf()",
              "val listName = mutableListOf()",
              "var listName = list()",
            ],
            answer: "val listName = listOf()",
          },
        ],
      },
      {
        id: "coroutines",
        name: "Coroutines",
        mcqs: [
          {
            question: "What is a coroutine in Kotlin?",
            options: [
              "A lightweight thread for asynchronous programming",
              "A type of class",
              "A data structure",
              "A function for database operations",
            ],
            answer: "A lightweight thread for asynchronous programming",
          },
          {
            question: "Which function is used to start a coroutine in Kotlin?",
            options: ["launch", "start", "run", "create"],
            answer: "launch",
          },
          {
            question:
              "What is the purpose of the `suspend` keyword in Kotlin coroutines?",
            options: [
              "To mark a function that can be paused and resumed",
              "To create a new coroutine",
              "To indicate a blocking operation",
              "To define a coroutine scope",
            ],
            answer: "To mark a function that can be paused and resumed",
          },
          {
            question:
              "Which library provides the core functionality for coroutines in Kotlin?",
            options: [
              "kotlinx.coroutines",
              "kotlinx.async",
              "kotlin.concurrent",
              "kotlin.coroutines",
            ],
            answer: "kotlinx.coroutines",
          },
          {
            question:
              "What does the `withContext` function do in Kotlin coroutines?",
            options: [
              "It switches the coroutine context",
              "It creates a new coroutine",
              "It suspends the coroutine",
              "It cancels the coroutine",
            ],
            answer: "It switches the coroutine context",
          },
          {
            question:
              "Which function is used to wait for the result of a coroutine in Kotlin?",
            options: ["await", "join", "wait", "get"],
            answer: "await",
          },
          {
            question:
              "What is the purpose of the `CoroutineScope` in Kotlin coroutines?",
            options: [
              "To manage the lifecycle of coroutines",
              "To define the execution context",
              "To create new coroutines",
              "To suspend the execution of coroutines",
            ],
            answer: "To manage the lifecycle of coroutines",
          },
          {
            question: "What is the function of `async` in Kotlin coroutines?",
            options: [
              "To start a coroutine that returns a result",
              "To create a new coroutine scope",
              "To suspend the execution of a coroutine",
              "To wait for a coroutine to complete",
            ],
            answer: "To start a coroutine that returns a result",
          },
          {
            question: "What is the main benefit of using coroutines in Kotlin?",
            options: [
              "Simplified asynchronous programming",
              "Increased performance of synchronous operations",
              "Automatic memory management",
              "Enhanced object-oriented features",
            ],
            answer: "Simplified asynchronous programming",
          },
          {
            question:
              "What keyword is used to handle exceptions in coroutines?",
            options: ["try/catch", "catch", "handle", "error"],
            answer: "try/catch",
          },
        ],
      },
      {
        id: "android",
        name: "Android Development",
        mcqs: [
          {
            question:
              "Which file is used to declare permissions for an Android application?",
            options: [
              "AndroidManifest.xml",
              "app.gradle",
              "config.xml",
              "build.gradle",
            ],
            answer: "AndroidManifest.xml",
          },
          {
            question:
              "What is the primary layout file for an Android activity?",
            options: [
              "activity_main.xml",
              "main_activity.xml",
              "layout.xml",
              "activity.xml",
            ],
            answer: "activity_main.xml",
          },
          {
            question:
              "Which method is called when an Android activity is created?",
            options: ["onCreate()", "onStart()", "onResume()", "onPause()"],
            answer: "onCreate()",
          },
          {
            question: "What is the purpose of the `Intent` class in Android?",
            options: [
              "To start activities and pass data between them",
              "To define the layout of an activity",
              "To manage the application's settings",
              "To handle user input",
            ],
            answer: "To start activities and pass data between them",
          },
          {
            question: "What is the use of `RecyclerView` in Android?",
            options: [
              "To display a large set of data efficiently",
              "To manage the lifecycle of activities",
              "To handle background tasks",
              "To display static content",
            ],
            answer: "To display a large set of data efficiently",
          },
          {
            question:
              "Which component is responsible for managing background tasks in Android?",
            options: [
              "Service",
              "Activity",
              "BroadcastReceiver",
              "ContentProvider",
            ],
            answer: "Service",
          },
          {
            question: "How do you handle user interactions in Android?",
            options: [
              "Using event listeners",
              "By defining custom methods",
              "Through data binding",
              "By configuring AndroidManifest.xml",
            ],
            answer: "Using event listeners",
          },
          {
            question: "What is the purpose of `SharedPreferences` in Android?",
            options: [
              "To store simple key-value pairs of data",
              "To handle complex database operations",
              "To manage network operations",
              "To store large files",
            ],
            answer: "To store simple key-value pairs of data",
          },
          {
            question:
              "Which file is used to define the dependencies for an Android project?",
            options: [
              "build.gradle",
              "AndroidManifest.xml",
              "settings.gradle",
              "gradle.properties",
            ],
            answer: "build.gradle",
          },
          {
            question: "What is the function of `Android Studio`?",
            options: [
              "It is an Integrated Development Environment (IDE) for Android development",
              "It is a database management system",
              "It is a version control system",
              "It is a graphical design tool",
            ],
            answer:
              "It is an Integrated Development Environment (IDE) for Android development",
          },
        ],
      },
      {
        id: "dsl",
        name: "DSL",
        mcqs: [
          {
            question: "What is a Domain-Specific Language (DSL)?",
            options: [
              "A language designed to solve problems within a specific domain",
              "A general-purpose programming language",
              "A language used only for system programming",
              "A language for designing user interfaces",
            ],
            answer:
              "A language designed to solve problems within a specific domain",
          },
          {
            question: "Which of the following is a characteristic of a DSL?",
            options: [
              "It is specialized for a particular application area",
              "It can be used for any type of programming task",
              "It is typically used for low-level system programming",
              "It is designed to replace general-purpose languages",
            ],
            answer: "It is specialized for a particular application area",
          },
          {
            question: "Which of the following is an example of a DSL?",
            options: ["SQL", "JavaScript", "Python", "C++"],
            answer: "SQL",
          },
          {
            question: "What is the primary benefit of using a DSL?",
            options: [
              "Increased productivity and clarity in a specific domain",
              "Broader application to multiple domains",
              "Enhanced performance in system-level operations",
              "Greater compatibility with general-purpose languages",
            ],
            answer: "Increased productivity and clarity in a specific domain",
          },
          {
            question: "Which DSL is commonly used for web styling?",
            options: ["CSS", "SQL", "HTML", "JavaScript"],
            answer: "CSS",
          },
          {
            question:
              "How does a DSL differ from a general-purpose programming language?",
            options: [
              "A DSL is tailored for a specific problem domain, whereas a general-purpose language is more versatile",
              "A DSL is less efficient than a general-purpose language",
              "A DSL cannot be used for programming tasks outside its domain",
              "A general-purpose language is more specialized than a DSL",
            ],
            answer:
              "A DSL is tailored for a specific problem domain, whereas a general-purpose language is more versatile",
          },
          {
            question:
              "What is one of the key considerations when designing a DSL?",
            options: [
              "The DSL should be easy to learn and use for its intended domain",
              "The DSL should support all general-purpose programming features",
              "The DSL should be compatible with multiple programming languages",
              "The DSL should be highly complex to handle diverse tasks",
            ],
            answer:
              "The DSL should be easy to learn and use for its intended domain",
          },
          {
            question: "Which of the following is a use case for a DSL?",
            options: [
              "Database query language",
              "System-level programming",
              "Game development",
              "Operating system design",
            ],
            answer: "Database query language",
          },
          {
            question: 'What role do "embedded DSLs" play in programming?',
            options: [
              "They are DSLs that are integrated into a host language to provide domain-specific functionality",
              "They are standalone languages designed from scratch",
              "They are general-purpose languages with added domain-specific features",
              "They are used exclusively for system-level tasks",
            ],
            answer:
              "They are DSLs that are integrated into a host language to provide domain-specific functionality",
          },
          {
            question:
              "Which of the following is NOT typically a feature of a DSL?",
            options: [
              "Broad applicability across various domains",
              "High-level abstraction for domain-specific tasks",
              "Specialized syntax and semantics for a particular domain",
              "Simplified problem-solving within its domain",
            ],
            answer: "Broad applicability across various domains",
          },
        ],
      },
      {
        id: "testing",
        name: "Testing",
        mcqs: [
          {
            question:
              "Which testing framework is commonly used for unit testing in Kotlin?",
            options: ["JUnit", "NUnit", "xUnit", "RSpec"],
            answer: "JUnit",
          },
          {
            question: "What is the purpose of the @Test annotation in Kotlin?",
            options: [
              "To mark a function as a test case",
              "To define a test suite",
              "To skip a test case",
              "To create a test class",
            ],
            answer: "To mark a function as a test case",
          },
          {
            question:
              "Which Kotlin testing framework provides built-in support for assertions?",
            options: ["AssertJ", "JUnit", "KotlinTest", "Mockito"],
            answer: "KotlinTest",
          },
          {
            question: "What is the primary use of Mockito in Kotlin testing?",
            options: [
              "To create mock objects for unit tests",
              "To perform integration testing",
              "To handle UI testing",
              "To measure code coverage",
            ],
            answer: "To create mock objects for unit tests",
          },
          {
            question:
              "Which annotation in JUnit 5 is used to indicate that a method should be executed before each test?",
            options: ["@BeforeEach", "@BeforeTest", "@Setup", "@Before"],
            answer: "@BeforeEach",
          },
          {
            question: "How can you test coroutines in Kotlin?",
            options: [
              "By using the runBlocking function and CoroutineTest library",
              "By writing synchronous tests",
              "By using traditional threading mechanisms",
              "By disabling coroutines during testing",
            ],
            answer:
              "By using the runBlocking function and CoroutineTest library",
          },
          {
            question:
              "Which Kotlin library is designed for property-based testing?",
            options: ["KotlinTest", "Spek", "QuickCheck", "MockK"],
            answer: "KotlinTest",
          },
          {
            question:
              "What does the @MockK annotation do in the MockK library?",
            options: [
              "It creates a mock instance of a class or interface",
              "It defines a test case",
              "It specifies a testing configuration",
              "It runs a test suite",
            ],
            answer: "It creates a mock instance of a class or interface",
          },
          {
            question:
              "Which method in JUnit is used to assert that a value is true?",
            options: [
              "assertTrue()",
              "assertEquals()",
              "assertNotNull()",
              "assertSame()",
            ],
            answer: "assertTrue()",
          },
          {
            question:
              "What is the purpose of using the @ParameterizedTest annotation in JUnit 5?",
            options: [
              "To run a test method multiple times with different arguments",
              "To define a group of related tests",
              "To measure the performance of tests",
              "To skip tests based on conditions",
            ],
            answer:
              "To run a test method multiple times with different arguments",
          },
        ],
      },
    ],
  },
  {
    subjectId: "laravel",
    topics: [
      {
        id: "installation",
        name: "Installation",
        mcqs: [
          {
            question: "Which command is used to create a new Laravel project?",
            options: [
              "laravel new project-name",
              "composer create-project --prefer-dist laravel/laravel project-name",
              "php artisan new project-name",
              "npm install laravel project-name",
            ],
            answer:
              "composer create-project --prefer-dist laravel/laravel project-name",
          },
          {
            question:
              "What is the recommended way to install Laravel using Composer?",
            options: [
              "composer install laravel/laravel",
              "composer create-project --prefer-dist laravel/laravel",
              "composer add laravel/laravel",
              "composer require laravel/laravel",
            ],
            answer: "composer create-project --prefer-dist laravel/laravel",
          },
          {
            question:
              "Which command should be run to update Laravel to the latest version?",
            options: [
              "composer update",
              "php artisan update",
              "laravel update",
              "composer upgrade",
            ],
            answer: "composer update",
          },
          {
            question:
              "What is the purpose of the `.env` file in a Laravel installation?",
            options: [
              "To configure environment-specific variables and settings",
              "To define application routes",
              "To manage database migrations",
              "To store application views",
            ],
            answer: "To configure environment-specific variables and settings",
          },
          {
            question:
              "After installing Laravel, which command can you use to start the development server?",
            options: [
              "php artisan serve",
              "php start-server",
              "laravel serve",
              "composer serve",
            ],
            answer: "php artisan serve",
          },
          {
            question:
              "Which PHP extension is required for Laravel to run properly?",
            options: ["pdo_mysql", "pdo_pgsql", "pdo_sqlite", "pdo_sqlsrv"],
            answer: "pdo_mysql",
          },
          {
            question:
              'What should you do if you encounter the "Application key is not set" error after installing Laravel?',
            options: [
              "Run `php artisan key:generate`",
              "Modify the `.env` file manually",
              "Reinstall Laravel",
              "Run `composer update`",
            ],
            answer: "Run `php artisan key:generate`",
          },
          {
            question:
              "Which file contains the application configuration settings in Laravel?",
            options: [
              ".env",
              "config/app.php",
              "routes/web.php",
              "bootstrap/app.php",
            ],
            answer: "config/app.php",
          },
          {
            question:
              "To set up a new Laravel project, what command is used to clone the Laravel repository from GitHub?",
            options: [
              "git clone https://github.com/laravel/laravel.git",
              "git pull origin master",
              "composer create-project --prefer-dist laravel/laravel",
              "git clone https://github.com/laravel/laravel.git project-name",
            ],
            answer: "git clone https://github.com/laravel/laravel.git",
          },
          {
            question:
              "Which command can you use to check the Laravel version installed in your project?",
            options: [
              "php artisan --version",
              "php artisan version",
              "laravel --version",
              "composer show laravel/laravel",
            ],
            answer: "php artisan --version",
          },
        ],
      },
      {
        id: "routing",
        name: "Routing",
        mcqs: [
          {
            question: "Which method is used to define a route in Laravel?",
            options: [
              "Route::define",
              "Route::add",
              "Route::get",
              "Route::create",
            ],
            answer: "Route::get",
          },
          {
            question:
              "What is the default route file for web routes in a Laravel application?",
            options: ["api.php", "web.php", "routes.php", "app.php"],
            answer: "web.php",
          },
          {
            question: "Which route method is used to handle POST requests?",
            options: [
              "Route::post",
              "Route::put",
              "Route::delete",
              "Route::patch",
            ],
            answer: "Route::post",
          },
          {
            question:
              "How do you define a route that handles multiple HTTP methods?",
            options: [
              "Route::match(['get', 'post'], '/url', 'Controller@method')",
              "Route::any('/url', 'Controller@method')",
              "Route::multi(['get', 'post'], '/url', 'Controller@method')",
              "Route::methods(['get', 'post'], '/url', 'Controller@method')",
            ],
            answer:
              "Route::match(['get', 'post'], '/url', 'Controller@method')",
          },
          {
            question: "How do you pass parameters to a route in Laravel?",
            options: [
              "Route::get('/user/{id}', 'UserController@show')",
              "Route::get('/user?id={id}', 'UserController@show')",
              "Route::get('/user/:id', 'UserController@show')",
              "Route::get('/user?{id}', 'UserController@show')",
            ],
            answer: "Route::get('/user/{id}', 'UserController@show')",
          },
          {
            question:
              "Which method is used to generate a URL for a named route?",
            options: ["url()", "route()", "path()", "link()"],
            answer: "route()",
          },
          {
            question:
              "How can you define a route that uses a controller method?",
            options: [
              "Route::get('/path', 'Controller@method')",
              "Route::controller('/path', 'Controller@method')",
              "Route::action('/path', 'Controller@method')",
              "Route::method('/path', 'Controller@method')",
            ],
            answer: "Route::get('/path', 'Controller@method')",
          },
          {
            question: "What is the purpose of route middleware in Laravel?",
            options: [
              "To handle HTTP requests before they reach the controller",
              "To define route parameters",
              "To specify the HTTP methods for routes",
              "To generate route URLs",
            ],
            answer: "To handle HTTP requests before they reach the controller",
          },
          {
            question:
              "How do you group routes with a common prefix in Laravel?",
            options: [
              "Route::prefix('admin')->group(function () { ... })",
              "Route::group(['prefix' => 'admin'], function () { ... })",
              "Route::prefix('admin', function () { ... })",
              "Route::group(['prefix' => 'admin'], function () { ... });",
            ],
            answer: "Route::group(['prefix' => 'admin'], function () { ... })",
          },
          {
            question:
              "How do you define a route that is accessible only to authenticated users?",
            options: [
              "Route::middleware('auth')->group(function () { ... })",
              "Route::auth(function () { ... })",
              "Route::middleware('auth')->routes(function () { ... })",
              "Route::auth()->group(function () { ... })",
            ],
            answer: "Route::middleware('auth')->group(function () { ... })",
          },
          {
            question: "What is the purpose of route model binding in Laravel?",
            options: [
              "To automatically resolve route parameters to model instances",
              "To bind middleware to routes",
              "To define custom route names",
              "To group routes together",
            ],
            answer:
              "To automatically resolve route parameters to model instances",
          },
        ],
      },
      {
        id: "controllers",
        name: "Controllers",
        mcqs: [
          {
            question:
              "What is the default location for controllers in a Laravel application?",
            options: [
              "app/Controllers",
              "app/Http/Controllers",
              "app/Http/Handlers",
              "app/Http/Managers",
            ],
            answer: "app/Http/Controllers",
          },
          {
            question:
              "How do you create a new controller using the Artisan command-line tool?",
            options: [
              "php artisan make:controller ControllerName",
              "php artisan create:controller ControllerName",
              "php artisan generate:controller ControllerName",
              "php artisan controller:make ControllerName",
            ],
            answer: "php artisan make:controller ControllerName",
          },
          {
            question:
              "What is the purpose of the `__construct` method in a Laravel controller?",
            options: [
              "To initialize properties and middleware for the controller",
              "To handle HTTP requests",
              "To define routes for the controller",
              "To render views",
            ],
            answer:
              "To initialize properties and middleware for the controller",
          },
          {
            question:
              "How do you define a method in a controller that handles a GET request?",
            options: [
              "public function methodName() { ... }",
              "public function methodName(Request $request) { ... }",
              "public function methodName() { return view('viewName'); }",
              "public function methodName() { return redirect('/route'); }",
            ],
            answer: "public function methodName() { ... }",
          },
          {
            question:
              "What is the purpose of the `resource` method when defining routes?",
            options: [
              "To automatically create routes for a controller with RESTful actions",
              "To define a single route for a controller",
              "To group multiple routes under a common prefix",
              "To apply middleware to a set of routes",
            ],
            answer:
              "To automatically create routes for a controller with RESTful actions",
          },
          {
            question:
              "How can you access the request data within a controller method?",
            options: [
              "$request->input('key')",
              "$this->input('key')",
              "$request->get('key')",
              "$this->get('key')",
            ],
            answer: "$request->input('key')",
          },
          {
            question:
              "What is the purpose of the `middleware` method in a controller?",
            options: [
              "To assign middleware to specific controller methods",
              "To define routes for the controller",
              "To handle HTTP responses",
              "To initialize controller properties",
            ],
            answer: "To assign middleware to specific controller methods",
          },
          {
            question:
              "How do you return a JSON response from a controller method?",
            options: [
              "return response()->json(['key' => 'value']);",
              "return json_encode(['key' => 'value']);",
              "return ['key' => 'value'];",
              "return new JsonResponse(['key' => 'value']);",
            ],
            answer: "return response()->json(['key' => 'value']);",
          },
          {
            question:
              "How do you handle form submissions in a Laravel controller?",
            options: [
              "By creating a method that receives form data via POST",
              "By creating a GET request method for the form",
              "By defining form validation rules in the view",
              "By using route middleware",
            ],
            answer: "By creating a method that receives form data via POST",
          },
          {
            question:
              "How can you use dependency injection in a Laravel controller?",
            options: [
              "By type-hinting dependencies in the controller method",
              "By using static methods to create dependencies",
              "By manually instantiating dependencies within the method",
              "By using global helpers",
            ],
            answer: "By type-hinting dependencies in the controller method",
          },
          {
            question:
              "What is the purpose of the `__invoke` method in a Laravel controller?",
            options: [
              "To allow the controller to be used as a single-action controller",
              "To handle HTTP requests for a specific route",
              "To initialize controller properties",
              "To define middleware for the controller",
            ],
            answer:
              "To allow the controller to be used as a single-action controller",
          },
        ],
      },
      {
        id: "models",
        name: "Models",
        mcqs: [
          {
            question:
              "What is the default location for Eloquent models in a Laravel application?",
            options: [
              "app/Models",
              "app/Eloquent",
              "app/Http/Models",
              "app/Http/Eloquent",
            ],
            answer: "app/Models",
          },
          {
            question:
              "How do you create a new Eloquent model using the Artisan command-line tool?",
            options: [
              "php artisan make:model ModelName",
              "php artisan create:model ModelName",
              "php artisan generate:model ModelName",
              "php artisan model:make ModelName",
            ],
            answer: "php artisan make:model ModelName",
          },
          {
            question:
              "What is the purpose of the `$fillable` property in an Eloquent model?",
            options: [
              "To specify which attributes should be mass assignable",
              "To define which attributes are hidden from JSON responses",
              "To specify which attributes should be cast to native types",
              "To define relationships with other models",
            ],
            answer: "To specify which attributes should be mass assignable",
          },
          {
            question:
              "How do you define a one-to-many relationship in Eloquent?",
            options: [
              "public function relationshipName() { return $this->hasMany(RelatedModel::class); }",
              "public function relationshipName() { return $this->belongsTo(RelatedModel::class); }",
              "public function relationshipName() { return $this->hasOne(RelatedModel::class); }",
              "public function relationshipName() { return $this->belongsToMany(RelatedModel::class); }",
            ],
            answer:
              "public function relationshipName() { return $this->hasMany(RelatedModel::class); }",
          },
          {
            question:
              "What is the purpose of the `protected $table` property in an Eloquent model?",
            options: [
              "To specify the database table associated with the model",
              "To define the primary key of the table",
              "To set the attributes that are mass assignable",
              "To define relationships with other models",
            ],
            answer: "To specify the database table associated with the model",
          },
          {
            question:
              "How can you define a model that does not use timestamps?",
            options: [
              "By setting `public $timestamps = false;` in the model",
              "By using the `timestamps()` method in the model",
              "By setting `protected $timestamps = false;` in the model",
              "By disabling timestamps in the database configuration",
            ],
            answer: "By setting `public $timestamps = false;` in the model",
          },
          {
            question:
              "How do you retrieve all records from a model in Eloquent?",
            options: [
              "$model->all();",
              "$model->get();",
              "$model->fetch();",
              "$model->select();",
            ],
            answer: "$model->all();",
          },
          {
            question:
              "What method would you use to define a many-to-many relationship in Eloquent?",
            options: [
              "public function relationshipName() { return $this->belongsToMany(RelatedModel::class); }",
              "public function relationshipName() { return $this->hasMany(RelatedModel::class); }",
              "public function relationshipName() { return $this->hasOne(RelatedModel::class); }",
              "public function relationshipName() { return $this->belongsTo(RelatedModel::class); }",
            ],
            answer:
              "public function relationshipName() { return $this->belongsToMany(RelatedModel::class); }",
          },
          {
            question: "How do you set a primary key for an Eloquent model?",
            options: [
              "By defining `protected $primaryKey = 'key_name';` in the model",
              "By setting `public $primaryKey = 'key_name';` in the model",
              "By using the `setPrimaryKey('key_name')` method in the model",
              "By defining the primary key in the database migration",
            ],
            answer:
              "By defining `protected $primaryKey = 'key_name';` in the model",
          },
          {
            question:
              "How can you access the related model in a one-to-many relationship?",
            options: [
              "$model->relatedModel;",
              "$model->relatedModel()->get();",
              "$model->relatedModel()->first();",
              "$model->relatedModel()->all();",
            ],
            answer: "$model->relatedModel;",
          },
        ],
      },
      {
        id: "views",
        name: "Views",
        mcqs: [
          {
            question: "Where are Laravel views typically stored?",
            options: [
              "resources/views",
              "app/views",
              "public/views",
              "storage/views",
            ],
            answer: "resources/views",
          },
          {
            question:
              "Which Blade directive is used to include another view within a view?",
            options: ["@include", "@extend", "@yield", "@section"],
            answer: "@include",
          },
          {
            question:
              "How do you pass data from a controller to a view in Laravel?",
            options: [
              "$view->with('key', 'value');",
              "return view('view_name', ['key' => 'value']);",
              "$view->data('key', 'value');",
              "return view('view_name')->data('key', 'value');",
            ],
            answer: "return view('view_name', ['key' => 'value']);",
          },
          {
            question:
              "Which Blade directive is used to define a section in a layout?",
            options: ["@section", "@define", "@block", "@section"],
            answer: "@section",
          },
          {
            question: "How do you extend a layout in a Blade view?",
            options: [
              "@extends('layout_name')",
              "@include('layout_name')",
              "@use('layout_name')",
              "@template('layout_name')",
            ],
            answer: "@extends('layout_name')",
          },
          {
            question:
              "What is the purpose of the `@yield` directive in Laravel Blade?",
            options: [
              "To define a section that can be filled by a child view",
              "To include another view within the current view",
              "To display a variable passed to the view",
              "To extend a layout in the current view",
            ],
            answer: "To define a section that can be filled by a child view",
          },
          {
            question: "How can you display a variable in a Blade view?",
            options: [
              "{{ $variable }}",
              "{!! $variable !!}",
              "{ $variable }",
              "{{ $variable }}",
            ],
            answer: "{{ $variable }}",
          },
          {
            question:
              "Which Blade directive is used for conditional statements?",
            options: ["@if", "@when", "@case", "@check"],
            answer: "@if",
          },
          {
            question: "How can you loop through an array in a Blade view?",
            options: [
              "@foreach ($array as $item)",
              "@loop ($array as $item)",
              "@forEach ($array as $item)",
              "@each ($array as $item)",
            ],
            answer: "@foreach ($array as $item)",
          },
          {
            question:
              "How do you handle form submissions and old input data in Laravel views?",
            options: [
              "Use the `old('input_name')` function to repopulate the form fields",
              "Use the `input('input_name')` function to repopulate the form fields",
              "Use the `request('input_name')` function to repopulate the form fields",
              "Use the `session('input_name')` function to repopulate the form fields",
            ],
            answer:
              "Use the `old('input_name')` function to repopulate the form fields",
          },
          {
            question:
              "What is the purpose of the `@include` directive in Blade?",
            options: [
              "To include another view file within the current view",
              "To extend a layout in the current view",
              "To define a section in the layout",
              "To output a variable value",
            ],
            answer: "To include another view file within the current view",
          },
        ],
      },
    ],
  },
];
