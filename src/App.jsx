import React, { useState } from 'react';
import './App.css';
import Card from './Card';

function App() {
  const [index, setIndex] = useState(0);

  const map = {
    0: {
      question: "What is the time complexity of quick sort?",
      answer: "O(n log n)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxRBNivGZL6pyadzgBAH1C1Wo6kbjMHfrHVg&s"
    },
    1: {
      question: "What is a binary search tree?",
      answer: "A tree data structure where left children are less and right children are greater",
      image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221215114732/bst-21.png"
    },
    2: {
      question: "What is the primary use of useEffect in React?",
      answer: "To perform side effects in function components",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPDnXdRkAFCd86Gj0co1DjTB-TXPHe5YpOnw&s"
    },
    3: {
      question: "What is a closure in JavaScript?",
      answer: "A function that remembers its lexical scope even when executed outside that scope",
      image: "https://cdn.sanity.io/images/3do82whm/next/a69e3ba2441d35dd1a7945e826064708f30c10a9-1000x667.jpg?w=720&h=480&fit=clip&auto=format"
    },
    4: {
      question: "What is the difference between a stack and a queue?",
      answer: "Stack is LIFO (Last In First Out), Queue is FIFO (First In First Out)",
      image: "https://gohighbrow.com/wp-content/uploads/2018/07/Computer-science-fundamentals_6.1.png"
    },
    5: {
      question: "What does HTTP stand for and what is its purpose?",
      answer: "HyperText Transfer Protocol, used for communication between web browsers and servers",
      image: "https://media.geeksforgeeks.org/wp-content/uploads/20240529150129/HTTP-.gif"
    },
    6: {
      question: "What is polymorphism in Object-Oriented Programming?",
      answer: "The ability of different objects to respond uniquely to the same method call",
      image: "https://scaler-topics-articles-md.s3.us-west-2.amazonaws.com/what-is-polymorphism-in-python.webp"
    },
    7: {
      question: "What is the purpose of a hash function in data structures?",
      answer: "To map input data of arbitrary size to fixed-size values, enabling fast data retrieval",
      image: "https://positiwise.com/blog/wp-content/uploads/2023/08/hash-function.png"
    },
    8: {
      question: "What is the difference between == and === in JavaScript?",
      answer: "== compares values with type coercion, === compares values without type coercion (strict equality)",
      image: "https://miro.medium.com/v2/resize:fit:1400/0*U-W_ByyqllbcKONA.png"
    },
    9: {
      question: "What is recursion in programming?",
      answer: "A function calling itself to solve smaller instances of the same problem",
      image: "https://miro.medium.com/v2/resize:fit:640/1*__jhoWXEa_INM44V5jx30w.jpeg"
    }
  };

  const increment = () => {
    if (index < Object.keys(map).length - 1) {
      setIndex(index + 1);
    }
  };

  const decrement = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <>
      <Card
        question={map[index].question}
        answer={map[index].answer}
        image={map[index].image}
      />

      <div className="button" style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={decrement}>⬅️</button>
        <button onClick={increment}>➡️</button>
      </div>
    </>
  );
}

export default App;
