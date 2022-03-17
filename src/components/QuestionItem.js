import React from "react";

function QuestionItem({ question, handleDelete, handleAnswerChange }) {
  const { id, prompt, answers, correctIndex } = question;
  const theseAnswers = answers
  const options = theseAnswers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));



  return (
    <li key={id}>
      <h4>Question {question.id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleAnswerChange} id={id}>{options}</select>
      </label>
      <button id={question.id} onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
