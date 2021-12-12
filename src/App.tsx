import React, { useState } from 'react';
import './assets/App.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const App = () => {
  let [quizCount, setQuizCount] = useState(0)

  // 問題文と回答
  const quiz = [{
    question: 
      '地下闘技場最大トーナメントにおいて、刃牙と戦っていないのは次のうち誰？',
    answers: [
      { 
        text: '花山薫',
        correct: true
      },{
        text: 'ズール',
        correct: false
      },{
        text: 'アンドレアス・リーガン',
        correct: false
      },{
        text: '猪狩完至',
        correct: false
      }
    ]
  }, {
    question: 
      '刃牙が１３歳の頃、飛騨の山奥で戦った相手は？',
    answers: [
      { 
        text: '安藤　玲一',
        correct: false
      },{
        text: 'アナコンダ',
        correct: false
      },{
        text: '夜叉猿',
        correct: true
      },{
        text: '熊',
        correct: false
      }
    ]
  }
]



  // // 正誤判定の関数定義
  const handleAnswerQuestion = (a: {text: string, correct: boolean}) => {
    if(a.correct === true) {
      alert("正解！！")
    } else {
        alert("不正解！！"); 
    }
  }

  // 画面表示部分
  return (
    <div className="App">
        <Box sx={{ '& button': { m: 1 } }}>
        <div className="quizIndex">
            <h1>Q: {quiz[quizCount].question}</h1>
            {quiz[quizCount].answers.map((a) => (
              <Button             
              className="answerButton"
              variant="outlined"
              size="large"
              onClick={() => {
                handleAnswerQuestion(a)
                setQuizCount(quizCount + 1)
              }}
              >
                {a.text}
              </Button>
            ))}
        </div>
      </Box>
        
    </div>
  );
}

export default App;
