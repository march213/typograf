tests.push(['ru/other/pnone-number', [
    [' тел.: +74957397000', ' тел.: +7\u00A0495\u00A0739-70-00'],
    ['тел.: 812 5551234', 'тел.: (812)\u00A0555-12-34'],
    ['тел.: +7915178-22-12', 'тел.: +7\u00A0915\u00A0178-22-12'],
    ['телефон 495 555-1234', 'телефон 495\u00A0555-12-34'],
    ['моб. +79225551234', 'моб. +7\u00A0922\u00A0555-12-34'],
    ['Телефон: (4942)514172', 'Телефон: (49-42)\u00A051-41-72'],
    ['Телефон: (494533)2223', 'Телефон: (494-53)\u00A03-22-23'],
    ['ф. 84995551234', 'ф. 8\u00A0499\u00A0555-12-34'],
    ['тел. 3522255512', 'тел. (352-22)\u00A05-55-12'],
    ['тел. 3522255512\nф. 3522255513', 'тел. (352-22)\u00A05-55-12\nф. (352-22)\u00A05-55-13']
]]);
