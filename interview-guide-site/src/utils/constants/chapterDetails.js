const chapterDetails = [
    {
      id: 1,
      title: 'HTML Essentials',
      sections: [
        {
          title: 'Introduction to HTML',
          content: 'HTML is the building block for web pages. You might think of HTML as the skeleton that gives structure to all the web pages.',
          code: '<!DOCTYPE html>\n<html>\n<head>\n<title>Page Title</title>\n</head>\n<body>\n<h1>This is a Heading</h1>\n<p>This is a paragraph.</p>\n</body>\n</html>'
        },
        {
          title: 'HTML Tags and Elements',
          content: 'HTML is composed of elements and tags that format and structure the webpage. Each tag has a specific purpose, such as <p> for paragraphs and <div> for sections.',
          code: '<p>This is a paragraph.</p>\n<div>This is a section.</div>'
        },
        {
          title: 'Attributes in HTML',
          content: 'HTML elements can have attributes that provide additional information about how the elements should behave or be displayed.',
          code: '<img src="image.jpg" alt="Example Image">\n<a href="https://www.example.com">Visit Example.com</a>'
        }
      ]
    },
    {
      id: 2,
      title: 'Advanced CSS',
      sections: [
        {
          title: 'CSS Flexbox',
          content: 'Flexbox is a CSS3 layout model that allows items in a container to be aligned and distributed in an efficient way, even when their size is unknown or dynamic.',
          code: 'display: flex;\njustify-content: center;\nalign-items: center;'
        },
        {
          title: 'CSS Grid',
          content: 'CSS Grid Layout is a two-dimensional layout system for the web. It allows you to create complex layouts easily and consistently across browsers.',
          code: 'display: grid;\ngrid-template-columns: repeat(3, 1fr);\ngrid-gap: 10px;'
        },
        {
          title: 'CSS Animations',
          content: 'CSS animations make it possible to animate transitions from one CSS style configuration to another.',
          code: '@keyframes example {\n  from {background-color: red;}\n  to {background-color: yellow;}\n}\n\n.div {\n  animation-name: example;\n  animation-duration: 4s;\n}'
        }
      ]
    },
    {
      id: 3,
      title: 'JavaScript Fundamentals',
      sections: [
        {
          title: 'Understanding Variables',
          content: 'Variables are used to store data values. JavaScript uses var, let, and const for variable declarations.',
          code: 'let age = 25;\nconst name = "John";'
        },
        {
          title: 'Functions in JavaScript',
          content: 'Functions are one of the fundamental building blocks in JavaScript. A function is a set of statements that performs a task or calculates a value.',
          code: 'function greet() {\n  console.log("Hello World!");\n}'
        },
        {
          title: 'JavaScript Arrays',
          content: 'Arrays are used to store multiple values in a single variable. They are objects that can contain any type of data.',
          code: 'let fruits = ["Apple", "Banana", "Cherry"];'
        }
      ]
    },
    {
      id: 4,
      title: 'React from Scratch',
      sections: [
        {
          title: 'Introduction to React',
          content: 'React is a JavaScript library for building user interfaces. It lets you create reusable UI components.',
          code: 'import React from "react";\nfunction App() {\n  return <h1>Hello, React!</h1>;\n}'
        },
        {
          title: 'Component Lifecycle',
          content: 'Understanding the component lifecycle is key to managing state and side effects in your React applications.',
          code: 'componentDidMount() {\n  console.log("Component mounted");\n}'
        },
        {
          title: 'Hooks in React',
          content: 'Hooks are a new addition in React 16.8 that allow you to use state and other React features without writing a class.',
          code: 'import { useState } from "react";\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>Click me</button>\n    </div>\n  );\n}'
        }
      ]
    },
    {
      id: 5,
      title: 'State Management',
      sections: [
        {
          title: 'Using the Context API',
          content: 'The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.',
          code: 'const MyContext = React.createContext(defaultValue);'
        },
        {
          title: 'Redux for State Management',
          content: 'Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments, and are easy to test.',
          code: 'const reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case "INCREMENT":\n      return state + 1;\n    default:\n      return state;\n  }\n};\n\nconst store = createStore(reducer);'
        }
      ]
    }
  ];
  
  export default chapterDetails;
  