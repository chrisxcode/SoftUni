function solve (heroes) {

    let final = [];

    let heroesArray = heroes
    .map(hero => hero.split(` / `))
    .forEach(hero => {
        let newHero = {};
        newHero.name = hero[0];
        newHero.level = Number(hero[1]);
        hero[2] === undefined ? newHero.items = [] : newHero.items = hero[2].split(`, `);
        final.push(newHero);
    })

    return JSON.stringify(final);
}
