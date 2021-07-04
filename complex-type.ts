const years: number[] = [2019, 2020, 2021];
years.push(2022);
years.push(2023, 2024);
const first = years[0];

const smalls = [
  "小動物",
  "小型車",
  "小論文"
];
const [smallAnimal, smallCar, essay] = smalls;
console.log(smallAnimal, smallCar, essay);
// 小動物 小型車 小論文
const [, ...other] = smalls;
console.log(other);
// [ '小型車', '小論文' ]

var iterable = ["小金井", "小淵沢", "小矢部"];
for (const [i, value] of iterable.entries()) {
  console.log(i, value);
}
// 0 小金井
// 1 小淵沢
// 2 小矢部

for (const value of iterable) {
  console.log(value);
}
// 小金井
// 小淵沢
// 小矢部

// 読み込み専用専用の配列を定義
const a: readonly number[] = [1, 2, 3];
const b = [1, 2, 3] as const;


interface Monster {
  name: string
  ,hp: number
  ,mp: number
}

const slime: Monster = {
  name: 'スライム'
  ,hp: 50
  ,mp: 20
}
console.log(slime.name, slime.hp, slime.mp);
const {name, hp, mp} = slime;
console.log(name, hp, mp);
const slimeCopy = {...slime};
console.log(slimeCopy);

const attack = {
  tackle: -10
}

const tackleSlime = {...slime, ...attack};
console.log(tackleSlime);

const map = new Map<string, string>([
  ["喰い断", "一翻"],
  ["七対子", "二翻"],
  ["混一色", "三翻"],
  ["国士無双", "役満"]
]);

for (const [key, value] of map) {
  console.log(`${key} : ${value}`);
}
