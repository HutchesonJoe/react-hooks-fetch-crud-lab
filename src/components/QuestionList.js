import React, {useEffect} from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({questionList, setQuestionList, handleAnswerChange}) {
 

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
   .then (r => {
     console.log(e.target.id)
    const newQuestList = questionList.filter((question) => {
      console.log(question.id, e.target.id)
      return question.id !== parseInt(e.target.id)
    });
    console.log(newQuestList)
    setQuestionList(newQuestList)
   })
}

const thisQuestionList = questionList.map((question)=>{
  return(
    <QuestionItem question={question} id={question.id} key={question.id} handleDelete={handleDelete} handleAnswerChange={handleAnswerChange}/>
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
