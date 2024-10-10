var excuses = {
    who: ["The dog", "The shark", "The mailman", "My bird"],
    action: ["ate", "peed", "crushed", "broke"],
    what: ["my phone", "my homework", "the car"],
    when: ["before the class", "when I was sleeping", "while I was exiting", "during my lunch", "while I was praying"]
};

function randomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const createExcuse = () => {
    let excuse = `${randomElement(excuses.who)} ${randomElement(excuses.action)} ${randomElement(excuses.what)} ${randomElement(excuses.when)}.`; // Usar comillas invertidas
    return excuse;
};

const excuseElement = document.getElementById("excuse");
excuseElement.textContent = createExcuse();
console.log(createExcuse());
