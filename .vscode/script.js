window.onload = function () {

    var excuses = {
        who: ["The dog", "The shark", "The mailman", "My bird"],
        action: ["ate", "peed", "crushed", "broke"],
        what: ["my phone", "my homework", "the car",],
        when: ["before the class", "when I was sleeping", "while I was esxciting", "during my lunch", "while I was praying"]
    };


    function randomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    const createExcuse = () => {
        let excuse = `${getRandomElement(excuseParts.who)} ${getRandomElement(excuseParts.action)} ${getRandomElement(excuseParts.what)} ${getRandomElement(excuseParts.when)}.`;
return excuse;
    };


};