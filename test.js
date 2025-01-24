import React from 'react';

// Array containing all test questions
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
        questionText: 'Какой максимальный лимит дополнительных баллов может дать судья без согласования?',
        answerOptions: [
            { answerText: '2.4 балла', isCorrect: false },
            { answerText: '2.8 балла', isCorrect: true },
            { answerText: '3.0 балла', isCorrect: false },
            { answerText: '3.5 балла', isCorrect: false },
        ],
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
    },
    {
        questionText: 'Если игрок получил 3 фола и после этого попал в "угадайку" с 3 игроками, то он:',
        answerOptions: [
            { answerText: 'получает 30 секунд', isCorrect: false },
            { answerText: 'получает минуту', isCorrect: true },
            { answerText: 'не имеет права слова', isCorrect: false },
            { answerText: 'не получает дополнительные балы от судьи', isCorrect: false },
        ],
    },
    {
        questionText: 'Если ночью мафия совершила "отстрел" игрока, который был удалён за нарушение, совершённое после того, как завершилось голосование предыдущего дня, но до того, как Судья начал отсчитывать отстрел, то в этом случае:',
        answerOptions: [
            { answerText: 'Днём голосование отменяется, судья утром объявляет: "Игрок был удалён, в городе промах"', isCorrect: false },
            { answerText: 'Днём голосование проводится, судья утром объявляет: "Игрок был убит и удалён"', isCorrect: true },
        ],
    },
    {
        questionText: 'Каков лимит общей суммы дополнительных баллов, которые игроки могут получить от Судьи?',
        answerOptions: [
            { answerText: '2,4 баллов для игроков победившей команды и 0,6 из проигравшей', isCorrect: false },
            { answerText: '2,2 балла в сумме, вне зависимости от команд', isCorrect: false },
            { answerText: '2,8 баллов в сумме, 3 по согласованию с ГСом, 3,5 по согласованию с СК, вне зависимости от команд', isCorrect: true },
            { answerText: '1,8 баллов для игроков победившей команды и 0,9 из проигравшей', isCorrect: false },
        ],
    },
    {
        questionText: 'Сколько игроков могут получить дополнительные баллы от Судьи?',
        answerOptions: [
            { answerText: 'Два игрока из победившей команды и один из проигравшей', isCorrect: false },
            { answerText: 'До трёх игроков, вне зависимости от команд', isCorrect: false },
            { answerText: 'До пяти игроков, вне зависимости от команд, шесть игроков по согласованию с ГС', isCorrect: true },
            { answerText: 'До шести игроков, вне зависимости от команд', isCorrect: false },
        ],
    },
    {
        questionText: 'В каких случаях игрок должен закончить свою речь?',
        answerOptions: [
            { answerText: 'По истечении отведённой минуты', isCorrect: true },
            { answerText: 'При получении третьего фола во время речи', isCorrect: false },
            { answerText: 'При дисквалификации игрока', isCorrect: true },
            { answerText: 'После слова «СПАСИБО», сказанного в контексте завершения речи', isCorrect: true },
        ],
        multipleCorrect: true
    },
    {
        questionText: 'Какое наказание следует за фразу "Если бы я был чёрным, я бы никогда не отстрелил в первую ночь игрока из своего города!"?',
        answerOptions: [
            { answerText: 'Фол', isCorrect: false },
            { answerText: 'Дисквалификация', isCorrect: false },
            { answerText: 'Победа противоположной команды', isCorrect: false },
            { answerText: 'Никаких санкций', isCorrect: true },
        ],
    },
    {
        questionText: 'Должен ли Судья засчитать голос игрока, который поставил голос на стол во время произнесения слов "Кто голосует за игрока", и убрал руку до озвучивания номера?',
        answerOptions: [
            { answerText: 'Голос засчитывается', isCorrect: false },
            { answerText: 'Голос не засчитывается', isCorrect: true },
        ],
    },
    {
        questionText: 'Сколько времени имеет Дон или Шериф "ночью" для выполнения проверки?',
        answerOptions: [
            { answerText: '5 секунд', isCorrect: false },
            { answerText: '10 секунд', isCorrect: false },
            { answerText: '20 секунд', isCorrect: true },
            { answerText: 'Судья должен дождаться, пока игрок не сделает проверку', isCorrect: false },
        ],
    },
    {
        questionText: 'Какое наказание следует если игрок говорит: "Я тебя очень прошу, умоляю, послушай сейчас внимательно мои аргументы!"?',
        answerOptions: [
            { answerText: 'Фол', isCorrect: false },
            { answerText: 'Дисквалификация', isCorrect: false },
            { answerText: 'Победа противоположной команды', isCorrect: true },
            { answerText: 'Никаких санкций', isCorrect: false },
        ],
    },
    {
        questionText: 'В какой ситуации наступает ничья?',
        answerOptions: [
            { answerText: 'Никто не покинул игру в течение периода: день – ночь – день – ночь – день, после завершения третьего дня', isCorrect: false },
            { answerText: 'Никто не покинул игру в течение периода: ночь – день – ночь – день – ночь – день, после завершения третьего дня', isCorrect: true },
            { answerText: 'Никто не покинул игру в течение периода: день – ночь – день – ночь – день – ночь, после третьей ночи', isCorrect: false },
        ],
    }
];

const PracticeTest = () => {
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [showScore, setShowScore] = React.useState(false);
    const [score, setScore] = React.useState(0);
    const [userAnswers, setUserAnswers] = React.useState([]);
    const [selectedAnswers, setSelectedAnswers] = React.useState([]);

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
            selectedAnswers: [...selectedAnswers],
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
            <h3 className="text-xl font-bold mb-4">Обзор ошибок:</h3>
            {questions.map((question, qIndex) => {
                const userAnswer = userAnswers[qIndex];
                if (!userAnswer || userAnswer.isCorrect) return null;

                return (
                    <div key={qIndex} className="mb-6 p-4 bg-gray-50 rounded-lg shadow">
                        <p className="font-semibold mb-2">
                            Вопрос {qIndex + 1}: {question.questionText}
                        </p>
                        <div className="ml-4">
                            {question.answerOptions.map((option, aIndex) => {
                                const isSelected = question.multipleCorrect 
                                    ? userAnswer.selectedAnswers[aIndex]
                                    : aIndex === userAnswer.selectedAnswers[0];
                                
                                return (
                                    <div 
                                        key={aIndex} 
                                        className={`mb-2 ${
                                            option.isCorrect 
                                                ? 'text-green-600' 
                                                : isSelected 
                                                    ? 'text-red-600'
                                                    : 'text-gray-600'
                                        }`}
                                    >
                                        {question.multipleCorrect ? '☐' : '○'} {option.answerText}
                                        {isSelected && !option.isCorrect && ' ← Ваш неверный ответ'}
                                        {option.isCorrect && ' ✓ Правильный ответ'}
                                    </div>
                                );
                            })}
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
};

export default PracticeTest;
