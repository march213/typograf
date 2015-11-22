tests.push(['common/nbsp/beforeShortLastNumber', [
    [
        'Сегодня я получил 5. И очень рад.',
        'Сегодня я получил\u00A05. И очень рад.',
        'ru'
    ],
    [
        'Сегодня я получил 5\nИ дальше продолжаю стих',
        'Сегодня я получил\u00A05\nИ дальше продолжаю стих',
        'ru'
    ],
    [
        'Сегодня я получил 5+',
        'Сегодня я получил\u00A05+',
        'ru'
    ],
    [
        'или 5-',
        'или\u00A05-',
        'ru'
    ],
    [
        'Доллар вырос на 1%.\nДоллар вырос на 2%.',
        'Доллар вырос на\u00A01%.\nДоллар вырос на\u00A02%.',
        'ru'
    ],
    [
        'Сегодня диагональ равна 5"',
        'Сегодня диагональ равна\u00A05"',
        'ru'
    ],
    [
        'Пять секунд некоторые пишут в виде 5\'',
        'Пять секунд некоторые пишут в виде\u00A05\'',
        'ru'
    ],
    [
        '"Справка 09"',
        '"Справка\u00A009"',
        'ru'
    ]
]]);
