// Data for character generation
const classes = ['Artificer', 'Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'];
const subclasses = {
    Artificer: ['Alchemist', 'Armorer', 'Artillerist', 'Battle Smith'],
    Barbarian: ['Berserker', 'Totem Warrior', 'Path of the Beast', 'Path of Wild Magic', 'Path of the Ancestrian Guarfian', 'Path of the Storm Herald', 'Path of the Zealot', 'Path of the BattleRager'],
    Bard: ['College of Lore', 'College of Valor', 'College of Creation', 'College of Eloquence', 'College of Glamour', 'College of Swords', 'College of Whispers',],
    Cleric: ['Life Domain', 'War Domain', 'Order Domain', 'Peace Domain', 'Twilight Domain', 'Forge Domain', 'Grave Domain'],
    Druid: ['Circle of the Land', 'Circle of the Moon', 'Cricle of Spores', 'Circle of Stars', 'Circle of Wildfire', 'Circle of Dreams', 'Circle of the Shepherd'],
    Fighter: ['Champion', 'Battle Master', 'Eldritch Knight', 'Psi Warrior', 'Rune Knight', 'Arcane Archer', 'Cavalier', 'Samurai'],
    Monk: ['Way of the Open Hand', 'Way of Shadow', 'Way of the Four Elements', 'Way of Mercy', 'Way of the Astral Self', 'Way of the Druken Master', 'Way of the Kensei', 'Way of the Sun Soul', 'Way of the Ascendant Dragon'],
    Paladin: ['Oath of Devotion', 'Oath of Vengeance', 'Oath of Glory', 'Oath of the Watchers', 'Oath of Conquest', 'Oath of Redemption'],
    Ranger: ['Hunter', 'Beast Master', 'Fey Wanderer', 'Swarmkeeper', 'Gloom Stalker', 'Horizon Walker', 'Monster Slayer', 'Drakewarden'],
    Rogue: ['Thief', 'Assassin', 'Arcane Trickster', 'Phantom', 'Soulknife', 'Inquisitive', 'Mastermind', 'Scout', 'Swashbuckler'],
    Sorcerer: ['Draconic Bloodline', 'Wild Magic', 'Aberrant Mind', 'Clockwork Soul', 'Divine Soul', 'Shadow Magic', 'Storm Sorcery'],
    Warlock: ['The Archfey', 'The Fiend', 'The Great Old One', 'The Fathomless', 'The Genie', 'The Celestial', 'The Hexblade'],
    Wizard: ['School of Evocation', 'School of Necromancy', 'Bladesinging', 'Order of Scribes', 'War Magic']
};
const races = ['Human', 'Elf', 'Dwarf', 'Halfling', 'Gnome', 'Half-Elf', 'Half-Orc', 'Tiefling', 'Aasimar', 'Firbolg',
 'Goliath', 'Dragonborn', 'Kenku', 'Lizardfolk', 'Tabaxi', 'Triton', 'Aarakocra', 'Bugbear', 'Centaur', 'Changeling', 'Deep Gnome', 
 'Duergar', 'Eladrin', 'Fairy', 'Genasi', 'Githyanki', 'Githzerai', 'Goblin', 'Harengon', 'Hobgoblin', 'Kobold', 'Minotaur', 
 'Orc', 'Satyr', 'Shadar-Kai', 'Shifter', 'Tortle', 'Yuan-Ti'];
const subraces = {
    Human: ['Normal', 'Variant'],
    Elf: ['High Elf', 'Wood Elf', 'Dark Elf/Drow', 'Sea Elf'],
    Dragonborn: ['Chromatic', 'Gem', 'Metallic'],
    Dwarf: ['Hill Dwarf', 'Mountain Dwarf'],
    Halfling: ['Lightfoot Halfling', 'Stout Halfling'],
    Gnome: ['Forest Gnome', 'Rock Gnome', 'Deep Gnome'],
    Aasimar: ['Scourge', 'Protector', 'Fallen'],
    Genasi: ['Air', 'Earth', 'Fire', 'Water'],
    Tiefling: ['Feral', 'Devils Tongue', 'Hellfire', 'Winged'],
};
const backgrounds = ['Acolyte', 'Charlatan', 'Criminal', 'Entertainer', 'Folk Hero', 'Guild Artisan', 'Hermit', 'Noble', 'Outlander', 'Sage', 'Sailor', 'Soldier', 'Urchin'];

// Function to randomly select an item from an array
const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

// Function to generate a character
const generateCharacter = () => {
    const selectedClass = getRandomItem(classes);
    const selectedSubclass = getRandomItem(subclasses[selectedClass]);
    const selectedRace = getRandomItem(races);
    // Check if the race has subraces defined and select one if available
    const selectedSubrace = subraces[selectedRace] && subraces[selectedRace].length > 0 ? getRandomItem(subraces[selectedRace]) : '';
    const selectedBackground = getRandomItem(backgrounds);

    // Displaying the generated character
    document.getElementById('class').textContent = `${selectedClass}`;
    document.getElementById('subclass').textContent = `${selectedSubclass}`;
    document.getElementById('race').textContent = `${selectedRace} ${selectedSubrace ? '(' + selectedSubrace + ')' : ''}`;
    document.getElementById('background').textContent = `${selectedBackground}`;
};

// Event listener for the generate button
document.getElementById('generateButton').addEventListener('click', generateCharacter);
