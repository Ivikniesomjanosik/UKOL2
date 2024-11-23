const justFood = (peopleCount) => {
    
    const pricePerPerson = 500;
    
    const totalPrice = peopleCount * pricePerPerson;
    
    return `Catering od Just Food pro ${peopleCount} lidí za ${totalPrice} Kč`; 
};

const yourMama = (peopleCount) => {
    
    const pricePerPerson = 1500;

    const totalPrice = peopleCount * pricePerPerson;

    return `Catering od Your Mama pro ${peopleCount} lidí za ${totalPrice} Kč`;
};


const flavourHeaven = (peopleCount) => {
    
    const pricePerPerson = 3000;

    const totalPrice = peopleCount * pricePerPerson;

    return `Catering od Flavour Haven pro ${peopleCount} lidí za ${totalPrice} Kč`;
};


const createEvent = (eventName, peopleCount, cateringFunction) => {

    const cateringInfo = cateringFunction(peopleCount);
    
    return `Událost ${eventName} s ${cateringInfo}`;
};

document.body.innerHTML +=
`
<p>${createEvent("Inaugurace", 100, flavourHeaven)}</p>
<p>${createEvent("Svatba", 50, yourMama)}</p>
<p>${createEvent("Oslava narozenin", 200, justFood)}</p>
`
;
