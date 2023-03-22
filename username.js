const form = document.querySelector('form');
const username = document.querySelector('#username');
const names = ['acorn', 'aeroplane', 'agenda', 'alarm', 'album', 'almond', 'amphibian', 'anchor', 'angel', 'animal', 'ant', 'apple', 'aquarium', 'arm', 'arrow', 'ashes', 'ashtray', 'atom', 'avocado', 'axe', 'backflip', 'bag', 'ball', 'banana', 'bank', 'beach', 'bed', 'bell', 'best', 'bike', 'bird', 'book', 'bot', 'bottle', 'boy', 'bread', 'bridge', 'brush', 'butterfly', 'button', 'camo', 'candle', 'car', 'cash', 'cat', 'cell', 'cellphone', 'chalk', 'cheese', 'chicken', 'chocolate', 'city', 'close', 'cloud', 'coffee', 'computer', 'cookie', 'cross', 'crow', 'cup', 'dance', 'data', 'day', 'degree', 'design', 'desk', 'diamond', 'dinner', 'dog', 'doll', 'doom', 'dot', 'dough', 'dove', 'dream', 'dress', 'driver', 'drum', 'drunk', 'duck', 'eagle', 'ear', 'east', 'echo', 'editor', 'egg', 'element', 'elephant', 'elevation', 'elf', 'emoticon', 'emotion', 'engine', 'era', 'eternal', 'event', 'evo', 'ex', 'expert', 'eye', 'face', 'fame', 'fan', 'feather', 'finger', 'fire', 'fish', 'flag', 'flame', 'floor', 'fog', 'food', 'foot', 'fountain', 'fox', 'fresh', 'friend', 'frog', 'fruit', 'fur', 'gadget', 'garden', 'geek', 'ghost', 'gift', 'ginger', 'giraffe', 'globe', 'glue', 'goat', 'goggles', 'goose', 'gown', 'grape', 'grave', 'grin', 'guest', 'guitar', 'gum', 'gust', 'hand', 'happiness', 'hard', 'harmony', 'hate', 'hazard', 'head', 'heart', 'heaven', 'heavy', 'hell', 'history', 'hit', 'home', 'hope', 'hot', 'hour', 'hug', 'huge', 'human', 'ice', 'igloo', 'iguana', 'impression', 'inch', 'income', 'indigo', 'ingredient', 'ink', 'insect', 'insurance', 'interest', 'interview', 'invitation', 'iron', 'island', 'issue', 'item', 'ivory', 'ivy', 'jacket', 'jam', 'jar', 'jaw', 'jeans', 'jelly', 'jerk', 'jerky', 'jesus', 'jingle', 'jinx', 'job', 'jog', 'joint', 'joke', 'joy', 'judge', 'juice', 'jump', 'jungle', 'kabuki', 'kangaroo', 'karaoke', 'kawaii', 'kayak', 'keeper', 'kekw', 'kelp', 'ketchup', 'key', 'kick', 'kill', 'killer', 'kindness', 'king', 'kingdom', 'kit', 'kitten', 'knob', 'knot', 'latest', 'lavendry', 'law', 'lazy', 'leader', 'leaf', 'lemon', 'liberty', 'lighthouse', 'lily', 'line', 'lion', 'lips', 'lit', 'little', 'lock', 'love', 'low', 'lucky', 'lunar', 'machine', 'man', 'matrix', 'member', 'memory', 'message', 'mewtwo', 'military', 'milk', 'milky way', 'mocking', 'money', 'month', 'mood', 'moon', 'mother', 'mouse', 'movie', 'music', 'mute', 'nail', 'nanny', 'napkin', 'navy', 'neck', 'nectar', 'needle', 'nest', 'nickel', 'night', 'ninja', 'nitro', 'noise', 'nomad', 'noodle', 'nose', 'novel', 'nugget', 'number', 'nut', 'oak', 'oasis', 'obelisk', 'ocean', 'octopus', 'off', 'ointment', 'olive', 'onion', 'opera', 'opps', 'orange', 'orchid', 'organ', 'otter', 'ounce', 'outlet', 'oven', 'owl', 'oyster', 'pack', 'paintbrush', 'pawn', 'peaky', 'pepper', 'person', 'phone', 'piano', 'picture', 'pikachu', 'pike', 'pizza', 'player', 'police', 'potato', 'pride', 'project', 'puzzle', 'pyramid', 'qi', 'quack', 'quaint', 'quake', 'quality', 'quarrel', 'quarry', 'quartz', 'quayage', 'queen', 'queer', 'quell', 'quench', 'quick', 'quiet', 'quiver', 'quiz', 'quote', 'qwerty', 'rabbit', 'rain', 'rainbow', 'ram', 'ranch', 'rare', 'rat', 'ravenous', 'razor', 'refrigerator', 'rest', 'reward', 'rib', 'rice', 'rift', 'ring', 'risk', 'ritual', 'road', 'rosemary', 'sad', 'salty', 'sand', 'sassy', 'saw', 'sea', 'seed', 'serious', 'shield', 'shot', 'skill', 'sky', 'soap', 'socks', 'soda', 'star', 'stone', 'street', 'sugar', 'sun', 'teacher', 'tear', 'technician', 'terrible', 'thor', 'tiger', 'tipsy', 'tired', 'tongue', 'towel', 'train', 'trash', 'tree', 'troll', 'tropic', 'truck', 'tsunami', 'tulip', 'tuna', 'turtle', 'ufo', 'ugly', 'ultimate', 'ultra', 'umbrella', 'uncle', 'undefined', 'unicorn', 'unit', 'universe', 'up', 'upset', 'urban', 'urge', 'useful', 'user', 'usher', 'utopia', 'uwu', 'uzi', 'vaccine', 'vacuum', 'valid', 'vampire', 'van', 'vase', 'vegetable', 'vehicle', 'vein', 'versatile', 'vibrant', 'vine', 'violent', 'virtual', 'virus', 'vision', 'vodka', 'volcano', 'vulnerable', 'vulture', 'wall', 'wanted', 'war', 'warm', 'wasted', 'water', 'wave', 'way', 'weasel', 'weight', 'western', 'wild', 'wind', 'winner', 'wish', 'wood', 'word', 'worker', 'world', 'worm', 'x', 'x-', 'x-axis', 'x-ray', 'xanthophyll', 'xbox', 'xclusive', 'xd', 'xenolith', 'xenon', 'xl', 'xmas', 'xmax', 'xoxo', 'xs', 'xv', 'xxl', 'xxs', 'xxx', 'xylophone', 'yacht', 'yak', 'yardstick', 'yarn', 'yawn', 'yeah', 'year', 'yelling', 'yeoman', 'yeti', 'yielding', 'ynw', 'yo', 'yoda', 'yoga', 'yolk', 'young', 'yuck', 'yummies', 'yummy', 'zap', 'zeal', 'zealot', 'zebra', 'zenith', 'zephyr', 'zero', 'zest', 'zigzag', 'zinc', 'zip', 'zipper', 'zodiac', 'zombie', 'zone', 'zoo', 'zoom', 'zorro', 'zucchini', 'zulu'];
const colors = ['amaranth', 'amber', 'amethyst', 'apricot', 'aqua', 'aquamarine', 'azure', 'beige', 'black', 'blue', 'blush', 'bronze', 'brown', 'chocolate', 'coffee', 'copper', 'coral', 'crimson', 'cyan', 'emerald', 'fuchsia', 'gold', 'gray', 'green', 'harlequin', 'indigo', 'ivory', 'jade', 'lavender', 'lime', 'magenta', 'maroon', 'moccasin', 'olive', 'orange', 'peach', 'pink', 'plum', 'purple', 'red', 'rose', 'salmon', 'sapphire', 'scarlet', 'silver', 'tan', 'teal', 'tomato', 'turquoise', 'violet', 'white', 'yellow'];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const characters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '{', '}', '[', ']', '|', ':', ';', '"', '<', '>', '.', '?', '/', '~'];

function generateUsername(length, filters) {
  let result = '';
  for (let i = 0; i < length; i++) {
    const filterIndex = Math.floor(Math.random() * filters.length);
    const filter = filters[filterIndex];
    const wordIndex = Math.floor(Math.random() * filter.length);
    const word = filter[wordIndex];
    result += word;
  }
  return result;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const length = parseInt(form.querySelector('#length').value);
  const namesCheckbox = document.querySelector('#names');
  const colorsCheckbox = document.querySelector('#colors');
  const numbersCheckbox = document.querySelector('#numbers');
  const charactersCheckbox = document.querySelector('#characters');
  const filters = [];
  if (namesCheckbox.checked) {
    filters.push(names);
  }
  if (colorsCheckbox.checked) {
    filters.push(colors);
  }
  if (numbersCheckbox.checked) {
    filters.push(numbers);
  }
  if (charactersCheckbox.checked) {
    filters.push(characters);
  }
  if (length <= 0) {
    username.textContent = 'Erreur : La longueur du pseudo doit être supérieure à 0.';
  } else {
    const result = generateUsername(length, filters);
    username.textContent = result;
  }
});
