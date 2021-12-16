import React, {useState} from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from "react-router-dom";

export const Quiz = () => {
    let [quizCount, setQuizCount] = useState(0)
    let [countCorrectAnswer, setCountCorrectAnswer] = useState(0)
    const [result, setResult] = useState(false)

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
    }, {
        question: 
        '神心会空手の創設者・愚地独歩が持つ異名は「○○殺し」でしょう？',
        answers: [
        { 
            text: '熊',
            correct: false
        },{
            text: '虎',
            correct: true
        },{
            text: '人',
            correct: false
        },{
            text: '鮫',
            correct: false
        }
        ]
    }, {
        question: 
        '地下闘技場最大トーナメントで刃牙が決勝で戦った相手は？',
        answers: [
        { 
            text: '愚地独歩',
            correct: false
        },{
            text: 'ジャック・ハンマー',
            correct: true
        },{
            text: '烈海王',
            correct: false
        },{
            text: '渋川剛気',
            correct: false
        }
        ]
    }, {
        question: 
        '鎬昴昇の得意とする技の名前は？',
        answers: [
        { 
            text: '六波返し',
            correct: false
        },{
            text: 'マッハ突き',
            correct: false
        },{
            text: '握撃',
            correct: false
        },{
            text: '紐切り',
            correct: true
        }
        ]
    }, {
        question: 
        '北海道の奥地で刃牙と死闘を繰り広げた多重人格者「ガイア」、もう一人の人格の名前は？',
        answers: [
        { 
            text: 'ノムラ',
            correct: true
        },{
            text: 'ナカムラ',
            correct: false
        },{
            text: 'サトウ',
            correct: false
        },{
            text: 'ヨシダ',
            correct: false
        }
        ]
    }, {
        question: 
        '刃牙の父は勇次郎ですが、祖父の名はなんでしょう？',
        answers: [
        { 
            text: '勇一郎',
            correct: true
        },{
            text: '鬼一郎',
            correct: false
        },{
            text: '力（リキ）',
            correct: false
        },{
            text: '神一',
            correct: false
        }
        ]
    }, {
        question: 
        'グラップラー刃牙シリーズで刃牙が一番最初に戦ったのは誰？',
        answers: [
        { 
            text: '加藤清澄',
            correct: false
        },{
            text: '末堂厚',
            correct: true
        },{
            text: '本部以蔵',
            correct: false
        },{
            text: 'ゲリー・ストライダム',
            correct: false
        }
        ]
    }, {
        question: 
        '刃牙の彼女の本名は？',
        answers: [
        { 
            text: '松本梢江',
            correct: true
        },{
            text: '坂本梢江',
            correct: false
        },{
            text: '朱沢江珠',
            correct: false
        },{
            text: '佐藤梢江',
            correct: false
        }
        ]
    }, {
        question: 
        '次のうち、刃牙と血の繋がりがないのは誰？',
        answers: [
        { 
            text: '範馬勇次郎',
            correct: false
        },{
            text: '朱沢江珠',
            correct: false
        },{
            text: 'ジャック・ハンマー',
            correct: false
        },{
            text: '朱沢鋭一',
            correct: false
        }
        ]
    }
    ]

    // 正誤判定
    const handleAnswerQuestion = (a: {text: string, correct: boolean}) => {
        if(a.correct === true) {
          alert("正解！！")
          setCountCorrectAnswer(countCorrectAnswer + 1)
        } else if(a.correct === false) {
            alert("不正解！！"); 
        }
        
        const nextQuizId = quizCount + 1
        if(nextQuizId < quiz.length) {
            setQuizCount(quizCount + 1)
        } else {
            setResult(true)
        }
    }

    return(
        <div className="quiz">
            {result ? (
            <div className="resultIndex">
                <h1>結果発表！！！</h1>
                <h2>今回の正解数は．．．{quiz.length}問中、{countCorrectAnswer}問でした！</h2>
                <Button variant="contained" disableElevation>
                    <Link style={{ textDecoration: 'none', color: "white"}} to='/'>RETURN　TO　TOP</Link>
                </Button>
            </div>
            ) : (
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
                            }}
                        >
                            {a.text}
                        </Button>
                        ))}
                </div>
            </Box>
            )}
        
        </div>
        
    )
}
