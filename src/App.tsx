import React, {useState} from 'react';
import './styles/App.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const App = () => {
  // モーダルの状態管理
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  // モーダルのスタイル定義
  // const style = {
  //   position: 'absolute' as 'absolute',
  //   top: '50%',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)',
  //   width: 400,
  //   bgcolor: 'background.paper',
  //   border: '2px solid #000',
  //   boxShadow: 24,
  //   p: 4,
  // };

  // 問題文と回答
  const quiz = {
    question: [
      '地下闘技場最大トーナメントにおいて、刃牙と戦っていないのは次のうち誰？',
    ],
    answer: [
      '花山薫',
      'ズール',
      'アンドレアス・リーガン',
      '猪狩完至'
    ],
    correct: ['花山薫']
  }

  // 正誤判定の関数定義
  const answerQuestion= () => {
    console.log(Object.keys(quiz.answer));
    
    if(quiz.answer[0] === quiz.correct[0]) {
        alert("正解！！")
    } else {
        alert("不正解！！"); 
    }
  }
  const answerQuestion1= () => {

    if(quiz.answer[1] === quiz.correct[0]) {
        alert("正解！！")
    } else {
      alert("不正解！！"); 
    }
  }
  const answerQuestion2= () => {

    if(quiz.answer[2] === quiz.correct[0]) {
      alert("正解！！")
    } else {
      alert("不正解！！"); 
    }
  }
  const answerQuestion3= () => {

    if(quiz.answer[3] === quiz.correct[0]) {
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
            <h1>Q: {quiz.question}</h1>
          <Button variant="outlined" size="large" onClick={() => {
            answerQuestion()
            // handleOpen()
          }}>
            {quiz.answer[0]}
          </Button>
          <Button variant="outlined" size="large" onClick={() => {
            answerQuestion1()
            // handleOpen()
          }}>
            {quiz.answer[1]}
          </Button>
          <Button variant="outlined" size="large" onClick={() => {
            answerQuestion2()
            // handleOpen()
          }}>
            {quiz.answer[2]}
          </Button>
          <Button variant="outlined" size="large" onClick={() => {
            answerQuestion3()
            // handleOpen()
          }}>
            {quiz.answer[3]}
          </Button>
          {/* <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
          </Modal> */}
        </div>
      </Box>
        {/* <BasicModal/> */}
    </div>
  );
}

export default App;
// ButtonSizes, BasicModal