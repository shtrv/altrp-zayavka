const data = {
    "year": 2024,
    "months": [
        {
            "month": 1,
            "days": "1,2,3,4,5,6,7,8,13,14,20,21,27,28"
        },
        {
            "month": 2,
            "days": "3,4,10,11,17,18,22*,23,24,25"
        },
        {
            "month": 3,
            "days": "2,3,7*,8,9,10,16,17,23,24,30,31"
        },
        {
            "month": 4,
            "days": "6,7,13,14,20,21,28,29+,30+"
        },
        {
            "month": 5,
            "days": "1,4,5,8*,9,10+,11,12,18,19,25,26"
        },
        {
            "month": 6,
            "days": "1,2,8,9,11*,12,15,16,22,23,29,30"
        },
        {
            "month": 7,
            "days": "6,7,13,14,20,21,27,28"
        },
        {
            "month": 8,
            "days": "3,4,10,11,17,18,24,25,31"
        },
        {
            "month": 9,
            "days": "1,7,8,14,15,21,22,28,29"
        },
        {
            "month": 10,
            "days": "5,6,12,13,19,20,26,27"
        },
        {
            "month": 11,
            "days": "2*,3,4,9,10,16,17,23,24,30"
        },
        {
            "month": 12,
            "days": "1,7,8,14,15,21,22,29,30+,31+"
        }
    ],
    "transitions": [
        {
            "from": "04.27",
            "to": "04.29"
        },
        {
            "from": "11.02",
            "to": "04.30"
        },
        {
            "from": "01.06",
            "to": "05.10"
        },
        {
            "from": "12.28",
            "to": "12.30"
        },
        {
            "from": "01.07",
            "to": "12.31"
        }
    ],
    "statistic": {
        "workdays": 248,
        "holidays": 118,
        "hours40": 1979,
        "hours36": 1780.6000000000001,
        "hours24": 1185.3999999999999
    }
};

function formatMonth(month, year) {
    return month < 10 ? '0${month}' : '${month}';
}

function formatDay(day) {
    // Remove any trailing "+"
    return day.replace(/\+$/, '');
}

function convertToDatabaseDate(month, day, year) {
    return '${year}-${formatMonth(month)}-${formatDay(day)}';
}

const dates = [];

data.months.forEach((monthData) => {
    const { month, days } = monthData;
    const daysArray = days.split(',').map((d) => d.trim());
    daysArray.forEach((day) => {
        if (!day.includes('*')) {
            dates.push(convertToDatabaseDate(month, day, data.year));
        }
    });
});

console.log(dates);