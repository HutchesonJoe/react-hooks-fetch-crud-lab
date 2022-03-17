import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questionList, setQuestionList] = useState([])
  

  function handleAnswerChange(e){
    fetch(`http://localhost:4000/questions/${e.target.id}`,{
      method : "PATCH",
      headers : {
        "Content-Type": "application/json"
      },
      body : JSON.stringify({
        "correctIndex" : parseInt(e.target.value)
      })
    })
      .then(r=>r.json())
      .then(data=>{
        const thisQuestIndex = questionList.findIndex((question) => question.id === (data.id))
        questionList.splice(thisQuestIndex, 1, data)
        })
    }
    

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm setQuestionList={setQuestionList} 
      questionList={questionList}/> : <QuestionList questionList={questionList} setQuestionList={setQuestionList} handleAnswerChange={handleAnswerChange} />}
    </main>
  );
}

export default App;
