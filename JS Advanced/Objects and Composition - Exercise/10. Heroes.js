function solve() {
    
    let obj = {
        mage: (name) => 
        {
            let newMage = 
            {
                name,
                health: 100,
                mana: 100,
                cast: (spell) => 
                {
                    newMage.mana--;
                    console.log(`${newMage.name} cast ${spell}`);
                }
            }

            return newMage;
        },
        fighter: (name) => 
        {
            let newFighter = 
            {
                name,
                health: 100,
                stamina: 100,
                fight: () => 
                {
                    newFighter.stamina--;
                    console.log(`${name} slashes at the foe!`);
                }
            }
            return newFighter;
        }
    };

return obj;

};
