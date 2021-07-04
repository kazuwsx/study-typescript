let birthYear: number | string;
//numberかstring以外だとエラー
birthYear = 1997;
birthYear = '平成';

let favoriteFood: "A" | "B";
//文字列A・B以外だとエラー
favoriteFood = "A"

type PointRate = 8 | 10 | 20;
// 8,10,20以外だとエラー
let point: PointRate = 10;

let year: number | "昭和" | "平成";
// 数値か昭和、平成以外だとエラー
year = "平成";
year = 1997;
