import React from 'react';

const questions = [
    {
        questionText: 'При получении четвёртого фола игрок...',
        answerOptions: [
            { answerText: 'получает право на последнее слово', isCorrect: false },
            { answerText: 'немедленно покидает игру без последнего слова', isCorrect: true },
            { answerText: 'получает штраф, но продолжает игру', isCorrect: false },
            { answerText: 'может остаться в игре по решению судьи', isCorrect: false },
        ],
    },
    {
        questionText: 'Какое наказание следует за попытку подкупа или его аналога с целью влияния на игру?',
        answerOptions: [
            { answerText: 'Фол', isCorrect: false },
            { answerText: 'Дисквалификация', isCorrect: false },
            { answerText: 'Победа противоположной команды', isCorrect: true },
            { answerText: 'Предупреждение', isCorrect: false },
        ],
    },
    {
        questionText: 'За какие нарушения даётся фол?',
        answerOptions: [
            { answerText: 'Речь не в свою игровую минуту', isCorrect: true },
            { answerText: 'Использование излишней жестикуляции', isCorrect: true },
            { answerText: 'Дневные прикосновения', isCorrect: true },
            { answerText: 'Ночные подсказки', isCorrect: false },
        ],
        multipleCorrect: true
    },
    {
        questionText: 'Какой штраф получает игрок за дисквалификацию (удаление)?',
        answerOptions: [
            { answerText: '0.3 балла', isCorrect: false },
            { answerText: '0.5 балла', isCorrect: false },
            { answerText: '0.8 балла', isCorrect: true },
            { answerText: '1.0 балл', isCorrect: false },
        ],
    },
    {
        questionText: 'За что игрок может получить большой штраф (-0.5 балла)?',
        answerOptions: [
            { answerText: 'Шериф не вскрылся, и оставил эту информацию в качестве действительной, после чего красная команда проиграла', isCorrect: true },
            { answerText: 'Использование излишней жестикуляции', isCorrect: false },
            { answerText: 'Нарушение установленной формы голосования', isCorrect: false },
            { answerText: 'Игрок случайно покинул игровой стол своим голосованием, если его команда проиграла', isCorrect: true },
        ],
        multipleCorrect: true
    },
    {
        questionText: 'За что дается малый штраф (-0.3 балла)?',
        answerOptions: [
            { answerText: 'Красный игрок озвучил, что слышал ночью другого красного - если это негативно повлияло на игру', isCorrect: true },
            { answerText: 'Прикрывал черного и не откатил до момента наступления ночи перед критическим кругом', isCorrect: true },
            { answerText: 'Шериф не проснулся для проверки', isCorrect: true },
            { answerText: 'Использование нецензурной лексики', isCorrect: false },
        ],
        multipleCorrect: true
    },
    {
        questionText: 'Сколько дополнительных баллов получает красный игрок за троих названных "чёрных" игроков в "лучшем ходе"?',
        answerOptions: [
            { answerText: '0.5 балла', isCorrect: false },
            { answerText: '0.7 балла', isCorrect: true },
            { answerText: '0.8 балла', isCorrect: false },
            { answerText: '1.0 балл', isCorrect: false },
        ],
    },
    {
        questionText: 'В случае объявления ничьей...',
        answerOptions: [
            { answerText: 'Все игроки получают 0.3 балла', isCorrect: true },
            { answerText: 'Игроки получают малый штраф', isCorrect: true },
            { answerText: 'Игроки не получают дополнительные баллы от судьи', isCorrect: true },
            { answerText: 'Игроки получают большой штраф', isCorrect: false },
        ],
        multipleCorrect: true
    },
    {
        questionText: 'За что следует дисквалификация?',
        answerOptions: [
            { answerText: 'Ночные подсказки знаками Дону и Шерифу', isCorrect: true },
            { answerText: 'Непроизвольное подглядывание ночью', isCorrect: true },
            { answerText: 'Слёзы за игровым столом', isCorrect: true },
            { answerText: 'Стуки по игровому столу', isCorrect: false },
        ],
        multipleCorrect: true
    },
    {
        questionText: 'Какие фазы есть в игре?',
        answerOptions: [
            { answerText: 'День', isCorrect: false },
            { answerText: 'Ночь', isCorrect: true },
            { answerText: 'Утро', isCorrect: true },
            { answerText: 'Разгон', isCorrect: false },
            { answerText: 'Подведение итогов', isCorrect: false },
            { answerText: 'Открытие', isCorrect: false },
        ],
        multipleCorrect: true
    }
];

function PracticeTest() {
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [showScore, setShowScore] = React.useState(false);
    const [score, setScore] = React.useState(0);
    const [selectedAnswers, setSelectedAnswers] = React.useState([]);
    const [userAnswers, setUserAnswers] = React.useState([]);

    React.useEffect(() => {
        setSelectedAnswers(new Array(questions[currentQuestion].answerOptions.length).fill(false));
    }, [currentQuestion]);

    const handleAnswerButtonClick = (isCorrect, index) => {
        if (questions[currentQuestion].multipleCorrect) {
            const newSelectedAnswers = [...selectedAnswers];
            newSelectedAnswers[index] = !newSelectedAnswers[index];
            setSelectedAnswers(newSelectedAnswers);
        } else {
            const newUserAnswers = [...userAnswers];
            newUserAnswers[currentQuestion] = {
                selectedAnswers: [index],
                isCorrect: isCorrect
            };
            setUserAnswers(newUserAnswers);
            
            if (isCorrect) {
                setScore(score + 1);
            }
            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion);
            } else {
                setShowScore(true);
            }
        }
    };

    const handleMultipleAnswerSubmit = () => {
        const currentQuestionObj = questions[currentQuestion];
        let isAllCorrect = true;

        currentQuestionObj.answerOptions.forEach((answer, index) => {
            if ((answer.isCorrect && !selectedAnswers[index]) || 
                (!answer.isCorrect && selectedAnswers[index])) {
                isAllCorrect = false;
            }
        });

        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = {
            selectedAnswers: selectedAnswers,
            isCorrect: isAllCorrect
        };
        setUserAnswers(newUserAnswers);

        if (isAllCorrect) {
            setScore(score + 1);
        }
        
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    const restartTest = () => {
        setCurrentQuestion(0);
        setShowScore(false);
        setScore(0);
        setSelectedAnswers([]);
        setUserAnswers([]);
    };

    const ReviewSection = () => (
        <div className="mt-8 w-full">
            <h3 className="text-xl font-bold mb-4">Обзор ответов:</h3>
            {questions.map((question, qIndex) => {
                const userAnswer = userAnswers[qIndex];
                if (!userAnswer || userAnswer.isCorrect) return null;

                return (
                    <div key={qIndex} className="mb-6 p-4 bg-gray-50 rounded-lg">
                        <p className="font-semibold mb-2">
                            Вопрос {qIndex + 1}: {question.questionText}
                        </p>
                        <div className="ml-4">
                            {question.answerOptions.map((option, aIndex) => (
                                <div 
                                    key={aIndex} 
                                    className={`mb-1 ${
                                        question.multipleCorrect
                                            ? userAnswer.selectedAnswers[aIndex] 
                                                ? option.isCorrect 
                                                    ? 'text-green-600' 
                                                    : 'text-red-600'
                                                : option.isCorrect 
                                                    ? 'text-green-600'
                                                    : ''
                                            : aIndex === userAnswer.selectedAnswers[0]
                                                ? 'text-red-600'
                                                : option.isCorrect
                                                    ? 'text-green-600'
                                                    : ''
                                    }`}
                                >
                                    {question.multipleCorrect ? '☐' : '○'} {option.answerText}
                                    {((question.multipleCorrect && userAnswer.selectedAnswers[aIndex] && !option.isCorrect) ||
                                      (!question.multipleCorrect && aIndex === userAnswer.selectedAnswers[0] && !option.isCorrect)) && 
                                        ' ← Ваш ответ'}
                                    {option.isCorrect && ' ✓ Правильный ответ'}
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );

    return (
        <div className="flex flex-col items-center p-4 max-w-2xl mx-auto">
            {showScore ? (
                <div className="text-center w-full">
                    <h2 className="text-2xl font-bold mb-4">
                        Результат: {score} из {questions.length} правильных ответов 
                        ({Math.round((score / questions.length) * 100)}%)
                    </h2>
                    <button 
                        onClick={restartTest}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Пройти тест заново
                    </button>
                    {score < questions.length && <ReviewSection />}
                </div>
            ) : (
                <div className="w-full">
                    <div className="mb-4">
                        <div className="text-lg mb-2">
                            <span className="font-bold">Вопрос {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className="text-xl mb-4">{questions[currentQuestion].questionText}</div>
                        {questions[currentQuestion].multipleCorrect && (
                            <div className="text-sm text-gray-600 mb-2">
                                Выберите все правильные варианты
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswerButtonClick(answerOption.isCorrect, index)}
                                className={`bg-white border-2 ${
                                    questions[currentQuestion].multipleCorrect 
                                        ? selectedAnswers[index] ? 'border-blue-500' : 'border-gray-300'
                                        : 'border-gray-300'
                                } hover:bg-gray-100 text-left p-3 rounded flex items-center`}
                            >
                                <span className="mr-2">
                                    {questions[currentQuestion].multipleCorrect ? 
                                        (selectedAnswers[index] ? '☒' : '☐') : 
                                        '○'}
                                </span>
                                {answerOption.answerText}
                            </button>
                        ))}
                    </div>
                    {questions[currentQuestion].multipleCorrect && (
                        <button
                            onClick={handleMultipleAnswerSubmit}
                            className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Подтвердить ответ
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}

export default PracticeTest;
Last edited just now



