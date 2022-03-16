import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({questionList, setQuestionList}) {
 

useEffect(()=>{
  fetch("http://localhost:4000/questions")
    .then((r)=>r.json())
    .then((data) => setQuestionList(data))
}, [])

function handleDelete(e){
    fetch(`http://localhost:4000/questions/${e.target.id}`,{
      method : 'DELETE',
      header : {
        "Content-Type": "application/json"
      }
    })
    const newQuestList = questionList.filter((question)=>question.id!==e.target.id);
    setQuestionList(newQuestList)
    
}

const thisQuestionList = questionList.map((question)=>{
  return(
    <QuestionItem question={question} id={question.id} key={question.id} handleDelete={handleDelete}/>
  )
})
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{thisQuestionList}</ul>
    </section>
  );
}

export default QuestionList;
