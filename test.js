// Questions array
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
        questionText: 'Во время заключительной минуты игрок говорит: "Если бы я был чёрным, я бы никогда не отстрелил в первую ночь игрока из своего города!" Какое наказание за это следует?',
        answerOptions: [
            { answerText: 'Фол', isCorrect: false },
            { answerText: 'Дисквалификация', isCorrect: false },
            { answerText: 'Победа противоположной команды', isCorrect: true },
            { answerText: 'Предупреждение', isCorrect: false },
        ],
    },
    {
        questionText: 'Во время дневного обсуждения игрок говорит: "Я тебя очень прошу, умоляю, послушай сейчас внимательно мои аргументы!". Какое наказание за это следует?',
        answerOptions: [
            { answerText: 'Фол', isCorrect: false },
            { answerText: 'Дисквалификация', isCorrect: false },
            { answerText: 'Победа противоположной команды', isCorrect: false },
            { answerText: 'Никаких санкций', isCorrect: true },
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
        questionText: 'В каких случаях игрок должен закончить свою речь (т.е. его речь считается законченной и он не может говорить дальше)? Укажите все верные варианты:',
        answerOptions: [
            { answerText: 'По истечении отведённой минуты', isCorrect: true },
            { answerText: 'При дисквалификации игрока', isCorrect: true },
            { answerText: 'При вставании игрока со стула', isCorrect: true },
            { answerText: 'При получении третьего фола во время речи', isCorrect: false },
            { answerText: 'После того, как игрок просто замолчал, кивнув Судье, что он закончил', isCorrect: false },
            { answerText: 'После слова «СПАСИБО», сказанного в контексте завершения речи', isCorrect: true },
            { answerText: 'После любого употребления слова «СПАСИБО»', isCorrect: false },
            { answerText: 'После слова «ПАС», сказанного в контексте завершения речи', isCorrect: true },
            { answerText: 'После любого употребления слова «ПАС»', isCorrect: false },
            { answerText: 'После слов «У МЕНЯ ВСЁ»', isCorrect: false },
            { answerText: 'После слов «Если игрок не был удалён, он обязан договорить минуту до конца»', isCorrect: false },
        ],
        multipleCorrect: true
    },
    {
        questionText: 'Игрок хлопает в ладоши, чтобы этим привлечь к себе внимание говорящего игрока. Ваши действия?',
        answerOptions: [
            { answerText: 'Не применять никаких санкций', isCorrect: false },
            { answerText: 'Поставить игроку фол в случае жалобы со стороны говорящего игрока', isCorrect: false },
            { answerText: 'Поставить игроку фол за хлопки в ладоши', isCorrect: true },
            { answerText: 'Дисквалифицировать игрока', isCorrect: false },
            { answerText: 'Сделать игроку устное предупреждение', isCorrect: false },
        ],
    },
    {
        questionText: 'Если после "перестрелки" между игроками №2 и №5 большинство проголосовало за их подъём, и после этого игрок №2 был дисквалифицирован, то в этом случае:',
        answerOptions: [
            { answerText: 'Игрок №5 остается в игре', isCorrect: false },
            { answerText: 'Игрок №5 покидает игру по голосованию, на следующий день голосование отменяется', isCorrect: false },
            { answerText: 'Игрок №5 покидает игру по голосованию, на следующий день голосование проводится', isCorrect: true },
        ],
    },
    {
        questionText: 'Какую экипировку игроку запрещено использовать в игре? Укажите все верные варианты:',
        answerOptions: [
            { answerText: 'Экипировку, которая не соответствует установленному дресс-коду', isCorrect: false },
            { answerText: 'Экипировку, которая не прошла сертификацию у Главного судьи', isCorrect: false },
            { answerText: 'Экипировку с символикой других федереаций игры мафия', isCorrect: false },
            { answerText: 'Экипировку, дающую незаслуженное преимущество перед игроками', isCorrect: true },
            { answerText: 'Экипировку, представляющую опасность для игроков', isCorrect: true },
            { answerText: 'Экипировку, которая не нравится Судье по этическим соображениям', isCorrect: false },
            { answerText: 'Экипировку, оскорбляющую кого-либо из игроков или зрителей', isCorrect: true },
            { answerText: 'Можно использовать любую экипировку', isCorrect: false },
        ],
        multipleCorrect: true
    },
    {
        questionText: 'Какие формулировки выставления игрока №3 на голосование являются корректными (т.е. кандидатура должна быть принята)? Укажите все верные варианты:',
        answerOptions: [
            { answerText: 'Хочу выставить игрока номер три', isCorrect: false },
            { answerText: 'Выставляю третьего игрока', isCorrect: true },
            { answerText: 'Я выставлю игрока номер три', isCorrect: false },
            { answerText: 'Я выставляю игрока номер три', isCorrect: true },
            { answerText: 'Выставьте игрока номер три', isCorrect: false },
            { answerText: 'Выставляю три', isCorrect: true },
            { answerText: 'Прошу выставить игрока номер три', isCorrect: false },
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
        questionText: 'Во время голосования против очередной кандидатуры игрок, ранее не голосовавший, совершает стук кулаком сбоку стола, чтобы запутать игроков. Ваши действия:',
        answerOptions: [
            { answerText: 'Засчитать это как голос', isCorrect: false },
            { answerText: 'Поставить игроку фол и засчитать это как голос', isCorrect: false },
            { answerText: 'Поставить игроку фол и не засчитывать голос', isCorrect: false },
            { answerText: 'Дисквалифицировать игрока', isCorrect: true },
            { answerText: 'Поставить игроку фол и провести голосование заново', isCorrect: false },
        ],
    },
     {
        questionText: 'На голосовании за игрока № 3 проголосовали 4 игрока, один из которых поставил руку вместе со словом "спасибо" или "стоп". Ваши действия?',
        answerOptions: [
            { answerText: 'Засчитать 3 голоса, продолжить голосование', isCorrect: false },
            { answerText: 'Засчитать 4 голоса, продолжить голосование', isCorrect: false },
            { answerText: 'Засчитать 3 голоса, пояснив какой именно голос не принят', isCorrect: true },
            { answerText: 'Засчитать 3 голоса, поставить фол игроку, который поставил руку вместе со словом "спасибо" или "стоп"', isCorrect: false },
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
            { answerText: 'День', isCorrect: true },
            { answerText: 'Ночь', isCorrect: true },
            { answerText: 'Утро', isCorrect: false },
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
            { answerText: 'Днём голосование отменяется, судья утром объявляет: "Игрок был удалён, в городе промах"', isCorrect: true },
            { answerText: 'Днём голосование проводится, судья утром объявляет: "Игрок был убит и удалён"', isCorrect: false },
        ],
    },
    {
        questionText: 'Каков лимит общей суммы дополнительных баллов, которые игроки могут получить от Судьи?',
        answerOptions: [
            { answerText: '2,4 баллов для игроков победившей команды и 0,6 из проигравшей', isCorrect: false },
            { answerText: '2,2 балла в сумме, вне зависимости от команд', isCorrect: false },
            { answerText: '2,8 балла в сумме или 3,5 по согласованию с ГСом, неограничено по согласованию с СК, вне зависимости от команд', isCorrect: true },
            { answerText: '1,8 баллов для игроков победившей команды и 0,9 из проигравшей', isCorrect: false },
            { answerText: '2,8 балла в сумме, вне зависимости от команд', isCorrect: false },
            { answerText: '2,8 баллов в сумме для всех игроков, 3,5 в сумме при условии, что один из игроков получил 1 и более баллов', isCorrect: false },
            { answerText: '2,8 баллов в сумме, 3 по согласованию с ГСом, 3,5 по согласованию с СК, вне зависимости от команд', isCorrect: false },
            { answerText: '2,4 балла победившей команде, 1,5 баллов', isCorrect: false },
        ],
    },
    {
        questionText: 'Сколько игроков могут получить дополнительные баллы от Судьи?',
        answerOptions: [
            { answerText: 'Два игрока из победившей команды и один из проигравшей', isCorrect: false },
            { answerText: 'До трёх игроков, вне зависимости от команд', isCorrect: false },
            { answerText: 'До пяти игроков, вне зависимости от команд, шесть игроков по согласованию с ГС', isCorrect: false },
            { answerText: 'До шести игроков, вне зависимости от команд', isCorrect: false },
            { answerText: 'До пяти игроков, вне зависимости от команд, не ограничено игроков по согласованию с ГС', isCorrect: true },
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
        questionText: 'Какие из перечисленных нарушений караются дисквалификацией?',
        answerOptions: [
            { answerText: 'Голосование ладонью, локтем или пальцем', isCorrect: true },
            { answerText: 'Прикосновения к другому игроку во время дневного обсуждения', isCorrect: false },
            { answerText: 'Непроизвольное подглядывание во время ночи', isCorrect: true },
            { answerText: 'Нецензурная лексика', isCorrect: true },
            { answerText: 'Активные стуки по игровому столу во время дневного обсуждения', isCorrect: false },
            { answerText: 'Ночные выкрики и разговоры', isCorrect: true },
            { answerText: 'Попытка подкупа или его аналога с целью влияния на игру', isCorrect: false },
            { answerText: 'Получение подсказки от зрителей', isCorrect: false },
            { answerText: 'Ночные подсказки жестами Дону или Шерифу', isCorrect: true },
            { answerText: 'Апеллирование к неигровым этическим или религиозным ценностям с целью влияния на исход голосования или доказывания роли во время дневного обсуждения или голосования', isCorrect: true },
            { answerText: 'Сокрытие речевой информации путём её озвучивания на иностранном языке во время дневного обсуждения или голосования', isCorrect: true },
            { answerText: 'Жестикуляция и призывы в фазе голосования', isCorrect: false },
            { answerText: 'Отвлекающая жестикуляция во время дневного обсуждения', isCorrect: false },
            { answerText: 'Шёпот, мычания во время дневного обсуждения', isCorrect: false },
            { answerText: 'Оскорбление игроков, зрителей или судей', isCorrect: true },
            { answerText: 'Прикосновение к другому игроку во время ночи', isCorrect: true },
            { answerText: 'Игрок заплакал во время дневного обсуждения или голосования', isCorrect: true },
            { answerText: 'Грубое неэтичное поведение', isCorrect: false },
            { answerText: 'Попытка проголосовать против нескольких кандидатур', isCorrect: false },
            { answerText: 'Использование слова "суицид" в игровом контексте ("дон просто суицид совершил дав меня красным")', isCorrect: true },
            { answerText: 'Шепот на ухо другому игроку во время дневного обсуждения или голосования, явно скрываемый от судей и большинства игроков', isCorrect: true },
            { answerText: 'Использование слова "самоубийство" в игровом контексте ("он меня дал красной проверкой. Если он дон - то он просто самоубийца."', isCorrect: false },
            { answerText: 'Во время игровой фазы "День" игрок не снял маску с лица после предупреждения от Судьи', isCorrect: false },
        ],
        multipleCorrect: true
    },
    {
        questionText: 'За какие из перечисленных нарушений присуждается победа противоположной команды:',
        answerOptions: [
            { answerText:  'Ночные подсказки жестами Дону или Шерифу', isCorrect: false },
            { answerText:  'Шепот на ухо другому игроку во время дневного обсуждения или голосования, явно скрываемый от судей и большинства игроков', isCorrect: false },
            { answerText:  'Клятва, пари или их аналоги', isCorrect: true },
            { answerText:  'Попытка подкупа или его аналога с целью влияния на игру', isCorrect: true },
            { answerText:  'Шериф заплакал во время дневного обсуждения или голосования', isCorrect: false },
            { answerText:  'Жестикуляция под столом или за спинами игроков', isCorrect: false },
            { answerText:  'Непроизвольное подглядывание во время ночи', isCorrect: false },
            { answerText:  'Апеллирование к ночным звукам и шорохам', isCorrect: false },
            { answerText:  'Доказывание игроком, "вскрывшимся" шерифом, своей роли с помощью уникальной “ночной” информации', isCorrect: true },
            { answerText:  'Получение подсказки от зрителей', isCorrect: true },
            { answerText:  'Использование угрозы или шантажа с целью влияния на игру', isCorrect: true },
            { answerText:  'Апеллирование к неигровым этическим или религиозным ценностям с целью влияния на исход голосования или доказывания роли во время дневного обсуждения или голосования', isCorrect: false },
        ],
        multipleCorrect: true
    },
    {
        questionText: 'В какой ситуации наступает ничья?',
        answerOptions: [
            { answerText: 'Никто не покинул игру в течение периода: день – ночь – день – ночь – день, после завершения третьего дня', isCorrect: false },
            { answerText: 'Никто не покинул игру в течение периода: ночь – день – ночь – день – ночь – день, после завершения третьего дня', isCorrect: false },
            { answerText: 'Никто не покинул игру в течение периода: день – ночь – день – ночь – день – ночь, после третьей ночи', isCorrect: true },
            { answerText: 'Чёрные промахнулись три раза подряд', isCorrect: false },
        ],
    }
];

// Add this before ReactDOM.render
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function PracticeTest() {
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [showScore, setShowScore] = React.useState(false);
    const [score, setScore] = React.useState(0);
    const [selectedAnswers, setSelectedAnswers] = React.useState([]);
    const [allAnswers, setAllAnswers] = React.useState([]);
    const [testStarted, setTestStarted] = React.useState(false);
    const [randomizedQuestions] = React.useState(() => shuffle([...questions]));

    React.useEffect(() => {
        if (currentQuestion < randomizedQuestions.length) {
            setSelectedAnswers(new Array(randomizedQuestions[currentQuestion].answerOptions.length).fill(false));
        }
    }, [currentQuestion]);

    const startTest = () => {
        setTestStarted(true);
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
        setSelectedAnswers([]);
        setAllAnswers([]);
    };

    const handleSkipQuestion = () => {
        const newAnswers = [...allAnswers];
        newAnswers[currentQuestion] = { skipped: true };
        setAllAnswers(newAnswers);
        
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < randomizedQuestions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    const handleAnswerOptionClick = (isCorrect, index) => {
        if (randomizedQuestions[currentQuestion].multipleCorrect) {
            const newSelectedAnswers = [...selectedAnswers];
            newSelectedAnswers[index] = !newSelectedAnswers[index];
            setSelectedAnswers(newSelectedAnswers);
        } else {
            const newAnswers = [...allAnswers];
            newAnswers[currentQuestion] = { selected: index, correct: isCorrect };
            setAllAnswers(newAnswers);

            if (isCorrect) setScore(score + 1);
            
            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < randomizedQuestions.length) {
                setCurrentQuestion(nextQuestion);
            } else {
                setShowScore(true);
            }
        }
    };

    const handleMultipleSubmit = () => {
        let isCorrect = true;
        randomizedQuestions[currentQuestion].answerOptions.forEach((option, idx) => {
            if ((option.isCorrect && !selectedAnswers[idx]) || 
                (!option.isCorrect && selectedAnswers[idx])) {
                isCorrect = false;
            }
        });

        const newAnswers = [...allAnswers];
        newAnswers[currentQuestion] = { selected: selectedAnswers, correct: isCorrect };
        setAllAnswers(newAnswers);

        if (isCorrect) setScore(score + 1);

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < randomizedQuestions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    const resetQuiz = () => {
        setTestStarted(false);
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
        setSelectedAnswers([]);
        setAllAnswers([]);
    };

    if (!testStarted) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen p-4">
                <h1 className="text-3xl font-bold mb-8">Тест по правилам игры Мафия</h1>
                <button 
                    onClick={startTest}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-xl"
                >
                    Начать тест
                </button>
            </div>
        );
    }

    if (showScore) {
        return (
            <div className="flex flex-col items-center p-4">
                <div className="text-2xl font-bold mb-4">
                    Результат: {score} из {randomizedQuestions.length} правильных ответов 
                    ({Math.round((score / randomizedQuestions.length) * 100)}%)
                    <div className="text-sm text-gray-600 mt-1">
                        Пропущено вопросов: {allAnswers.filter(a => a && a.skipped).length}
                    </div>
                </div>
                <button 
                    onClick={resetQuiz}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Пройти тест заново
                </button>
                <div className="mt-8 w-full">
                    <h3 className="text-xl font-bold mb-4">Обзор ошибок и пропущенных вопросов:</h3>
                    {randomizedQuestions.map((question, qIndex) => {
                        const answer = allAnswers[qIndex];
                        if (!answer || answer.correct) return null;

                        if (answer.skipped) {
                            return (
                                <div key={qIndex} className="mb-6 p-4 bg-yellow-50 rounded-lg">
                                    <p className="font-semibold mb-2">
                                        Вопрос {qIndex + 1}: {question.questionText}
                                    </p>
                                    <p className="text-yellow-600 mb-2">Вопрос был пропущен</p>
                                    <div className="ml-4">
                                        {question.answerOptions.map((option, aIndex) => (
                                            <div 
                                                key={aIndex} 
                                                className={`mb-1 ${option.isCorrect ? 'text-green-600' : ''}`}
                                            >
                                                {question.multipleCorrect ? '☐' : '○'} {option.answerText}
                                                {option.isCorrect && ' ✓ Правильный ответ'}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <div key={qIndex} className="mb-6 p-4 bg-gray-50 rounded-lg">
                                <p className="font-semibold mb-2">
                                    Вопрос {qIndex + 1}: {question.questionText}
                                </p>
                                <div className="ml-4">
                                    {question.answerOptions.map((option, aIndex) => {
                                        const isSelected = Array.isArray(answer.selected) 
                                            ? answer.selected[aIndex]
                                            : aIndex === answer.selected;

                                        return (
                                            <div 
                                                key={aIndex} 
                                                className={`mb-1 ${
                                                    option.isCorrect 
                                                        ? 'text-green-600' 
                                                        : isSelected 
                                                            ? 'text-red-600'
                                                            : ''
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
            </div>
        );
    }

    return (
        <div className="w-full max-w-2xl mx-auto p-4">
            <div className="mb-4">
                <div className="text-lg mb-2">
                    <span className="font-bold">Вопрос {currentQuestion + 1}</span>/{randomizedQuestions.length}
                </div>
                <div className="text-xl mb-4">{randomizedQuestions[currentQuestion].questionText}</div>
                {randomizedQuestions[currentQuestion].multipleCorrect && (
                    <div className="text-sm text-gray-600 mb-2">
                        Выберите все правильные варианты
                    </div>
                )}
            </div>
            <div className="flex flex-col gap-2">
                {randomizedQuestions[currentQuestion].answerOptions.map((answer, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswerOptionClick(answer.isCorrect, index)}
                        className={`bg-white border-2 ${
                            randomizedQuestions[currentQuestion].multipleCorrect 
                                ? selectedAnswers[index] ? 'border-blue-500' : 'border-gray-300'
                                : 'border-gray-300'
                        } hover:bg-gray-100 text-left p-3 rounded`}
                    >
                        <span className="mr-2">
                            {randomizedQuestions[currentQuestion].multipleCorrect ? 
                                (selectedAnswers[index] ? '☒' : '☐') : 
                                '○'}
                        </span>
                        {answer.answerText}
                    </button>
                ))}
            </div>
            <div className="flex gap-2 mt-4">
                {randomizedQuestions[currentQuestion].multipleCorrect && (
                    <button
                        onClick={handleMultipleSubmit}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Подтвердить ответ
                    </button>
                )}
                <button
                    onClick={handleSkipQuestion}
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                >
                    Пропустить вопрос
                </button>
            </div>
        </div>
    );
}

ReactDOM.render(
    <PracticeTest />,
    document.getElementById('root')
);
