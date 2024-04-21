import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './ExercisesDetail.module.css';

const exercisesData = [
  {
    id: 1,
    title: 'CSS Box Model',
    description: 'Understand how the CSS box model works.',
    difficulty: 'Easy',
    content: `
      <h3>What is the CSS Box Model?</h3>
      <p>The CSS Box Model is a fundamental concept in web design that defines how elements are sized and positioned on a web page. It consists of four main components: content area, padding, border, and margin.</p>
      
      <h3>Components of the Box Model</h3>
      <ol>
        <li><strong>Content Area:</strong> This is the area where the content (text, images, etc.) of an element is displayed.</li>
        <li><strong>Padding:</strong> This is the space between the content and the border of an element.</li>
        <li><strong>Border:</strong> This is the line that surrounds the padding and content area.</li>
        <li><strong>Margin:</strong> This is the space between the border of an element and the surrounding elements.</li>
      </ol>
      
      <h3>Exercises</h3>
      <ol>
        <li>Create a div with a width of 200px, a height of 100px, a padding of 20px, a border of 2px solid black, and a margin of 10px.</li>
        <li>Create a navigation bar with a list of links, each with a padding of 10px, a border of 1px solid gray, and a margin of 5px.</li>
        <li>Create a card component with an image, a title, and a description, each with appropriate padding, borders, and margins.</li>
      </ol>
    `,
  },
  {
    id: 2,
    title: 'Flexbox Layout',
    description: 'Create a layout using CSS Flexbox.',
    difficulty: 'Medium',
    content: `
      <h3>What is CSS Flexbox?</h3>
      <p>Flexbox is a powerful layout module in CSS that allows you to create flexible and responsive layouts. It makes it easier to align, distribute, and order items within a container.</p>
      
      <h3>Main Flexbox Properties</h3>
      <ul>
        <li><strong>display:</strong> flex | inline-flex</li>
        <li><strong>flex-direction:</strong> row | row-reverse | column | column-reverse</li>
        <li><strong>justify-content:</strong> flex-start | flex-end | center | space-between | space-around</li>
        <li><strong>align-items:</strong> flex-start | flex-end | center | baseline | stretch</li>
        <li><strong>flex-wrap:</strong> nowrap | wrap | wrap-reverse</li>
      </ul>
      
      <h3>Exercises</h3>
      <ol>
        <li>Create a navigation bar with horizontally aligned items using Flexbox.</li>
        <li>Create a card layout with images and text, where the cards wrap to the next line on smaller screens.</li>
        <li>Create a vertically centered layout with a header, main content area, and footer using Flexbox.</li>
      </ol>
    `,
  },
  {
    id: 3,
    title: 'React State',
    description: 'Manage state in a React component without hooks.',
    difficulty: 'Hard',
    content: `
      <h3>What is State in React?</h3>
      <p>State is an object that represents the internal data of a React component. When the state changes, React will re-render the component and its children with the new state data.</p>
      
      <h3>Managing State in Class Components</h3>
      <p>In class components, you can define state in the constructor and update it using the setState method.</p>
      
      <pre><code>
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      &lt;div&gt;
        &lt;h1&gt;Counter&lt;/h1&gt;
        &lt;p&gt;Count: {this.state.count}&lt;/p&gt;
        &lt;button onClick={this.incrementCount}&gt;Increment&lt;/button&gt;
      &lt;/div&gt;
    );
  }
}

export default Counter;
</code></pre>
      
      <h3>Exercises</h3>
      <ol>
        <li>Create a todo list application with the ability to add, remove, and mark tasks as complete using state.</li>
        <li>Create a form with multiple input fields and handle the form data using state.</li>
        <li>Create a simple game (e.g., tic-tac-toe) where the game state is managed in a React component.</li>
      </ol>
    `,
  },
];

const ExerciseDetail = () => {
  const { exerciseId } = useParams();
  const exercise = exercisesData.find((ex) => ex.id === parseInt(exerciseId));

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{exercise.title}</h1>
      <p className={styles.description}>{exercise.description}</p>
      <span className={`${styles.tag} ${styles[exercise.difficulty.toLowerCase()]}`}>
        {exercise.difficulty}
      </span>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: exercise.content }}
      />
    </div>
  );
};

export default ExerciseDetail;