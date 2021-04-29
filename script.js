var arrObjects = [{
        name: 'John',
        email: 'example@google.com'
    },
    {
        name: 'Ivan',
        email: 'example2@google.com'
    },
    {
        name: 'Bill',
        email: 'example3@google.com'
    },
    {
        name: 'Oleg',
        email: 'example4@google.com'
    },
    {
        name: 'Anna',
        email: 'example5@google.com'
    }
];

var chooseNum = prompt('Please, enter number from 1 to 5');
alert(arrObjects[chooseNum - 1].name + ' ' + arrObjects[chooseNum - 1].email + ' ');