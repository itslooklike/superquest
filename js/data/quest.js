export const initialGame = {
  level: 0,
  lives: 3,
  time: 0
};

export const setLives = (game, lives) => {
  if (lives < 0) {
    throw new RangeError(`Can't set negative lives`);
  }
  game = Object.assign({}, game);
  game.lives = lives;
  return game;
};

export const tick = (game) => {
  game = Object.assign({}, game);
  game.time++;
  return game;
};

export const getLevel = (num, data = quest) => data[`level-${num}`];

export const nextLevel = (state, data = quest) => {
  const next = state.level + 1;
  if (!getLevel(next, data)) {
    throw new RangeError(`Can't find level ${next}`);
  }
  state = Object.assign({}, state);
  state.level = next;
  return state;
};

const LEFT = `LEFT`;
const RIGHT = `RIGHT`;
const JUMP = `JUMP`;
const ONE = `1`;
const TWO = `2`;
const THREE = `3`;
const FOUR = `4`;

export const Action = {
  LEFT, RIGHT, JUMP, ONE, TWO, THREE, FOUR
};

export const Result = {
  DIE: `die`,
  NOOP: `noop`,
  NEXT: `next`,
  WIN: `win`
};

export const quest = {
  'level-0': {
    text: `Вас зовут Луиджи Марио, вы водопроводчик, но сейчас перед вами стоит очень важная миссия — спасти принцессу 
    Грибного Королевства Тоадстул Пич. Её похитил злой повелитель черепах Боузер и вы отправились в Грибное Королевство, 
    чтобы победить Боузера и освободить принцессу. Вы отправляетесь в первый замок, но, чтобы в него попасть нужно 
    преодолеть несколько препятствий. Вы стоите посреди на одной из равнин Грибного Королевства и видите как на вас 
    стремительно несется хмурый гриб вашего роста. Нужно срочно что-то предпринять`,
    answers: {
      [LEFT]: {
        result: Result.DIE,
        description: `Вы побежите влево, от гриба`
      },
      [RIGHT]: {
        result: Result.NEXT,
        description: `Вы побежите вправо, прямо на гриб`
      },
      [JUMP]: {
        result: Result.DIE,
        description: `Вы прыгнете вверх`
      }
    }
  }
};
