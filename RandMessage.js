const chooseHero = () => {
    return hero[Math.floor(Math.random() * hero.length)];
}

const chooseVillain = () => {
    return villain[Math.floor(Math.random() * villain.length)];
}

const villOrHero = () => {
    let choice = Math.floor(Math.random() * 2);
    if (choice == 0) {
        return chooseHero();
    }else {
        return chooseVillain();
    }
}

const chooseActionHero = () => {
    return actionHero[Math.floor(Math.random() * actionHero.length)];
}

const chooseActionVillain = () => {
    return actionVillain[Math.floor(Math.random() * actionVillain.length)];
}

const chooseLocation = () => {
    return locations[Math.floor(Math.random() * locations.length)];
}

const generateMessage = () => {
    let who = villOrHero();
    let action = '';
    let location = chooseLocation();

    if (hero.includes(who)) {
        action = chooseActionHero();
    } else {
        action = chooseActionVillain();
    }
    return (`Report: ${who} ${action} at ${location}!`);
}

const hero = ['Grog Strongjaw', 'Drizzt D\'Orden', 'Cattie-Brie', 'Bruenor Battlehammer', 'Percival DeRolo',
    'Elminster Aumar', 'Wulfgar', 'Laeral Silverhand', 'Minsc', 'Artemis Entreri'];

const villain = ['Raistlin Majere', 'Vecna', 'Lolth',  'Szass Tam', 'Orcus',
        'Tiamat', 'Bane', 'Manshoon', 'Delilah Briarwood', 'Cyric'];

const actionHero = ['defeated the orcs', 'saved the allied army', 'fooled the villains', 'conquered the enemy base', 'saved the day'];
const actionVillain = ['demolished the battlefield', 'consumed the souls of the innocent', `took ${chooseHero()} hostage`,
            'forever changed the landscape with tainted magic', 'smothered all signs of life'];

const locations = ['the city of Baldur\'s Gate', 'Icewind Dale', 'the Underdark', 'the city of Neverwinter', 'the ancient city of Myth Drannor',
        'the High Forest', 'the City of Splendors, Waterdeep', 'the Anaurock Desert', 'the Chult jungles', 'Hellgate Keep'];

console.log(generateMessage());