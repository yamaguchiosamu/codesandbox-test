/**
 * const let 等の変数宣言
 */

// let val2 = "let変数";
// console.log(val2);

// //変数　letは上書きが可能  再宣言不可能
// val2　= "let変数上書き";
// console.log(val2);

// //定数　const は上書き　中身は変えれるぞ　再宣言不可

// const val4 = {
//   name: "nino",
//   age: 34,
// };
// console.log(val4);

// val4.name = "nakaji";
// console.log(val4);

// //配列

// const val5 =['nino','nakaji'];
// val5[0] = 'kyo';
// val5.push ("osa");
// console.log(val5);

// //テンプレート文字列
// const name = "nino";
// const age = 34;
// //用いた方法
// const message = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message);

//アロー関数　() = > {}
// //従来
// const func1 = function(str) {
//   return str;
// }
// console.log(func1("functionです"));
// //アロー関数　() = > {} 引数が１つの時は()省略可能
// // const func2 = (str) => {
// //   return str;
// // };
// // console.log(func2("function2です"));
// //処理が１行で終わるような時はreturn省略可能
// const func2 = (str) => str;
// console.log(func2("function2です"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

//分割代入
// const myProfile = {
//   name:"nino",
//   age:34,
// };
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);
// //分割代入すると
// const {name, age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// //分割代入　配列での場合
// const myProfile = ['nino', 34];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

// //デフォルト値　引数など
// const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん`);
// sayHello();

// //スプレット構文...
// //配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1); //配列の中身を順番に展開される

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// //スプレット構文...使うと
// sumFunc(...arr1);

// //まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// // 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4]; //arr4のコピー
// console.log(arr6)

// const arr7 = [...arr4, ...arr5];  //(4) [10, 20, 30, 40] が返ってくる
// console.log(arr7);

//mapやfilterを使った配列の処理
const nameArr = ["山本", "山口", "nino"];
//何番目の人が〜ですと書く時
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index　+1}番目は${nameArr[index]}です`);
// }

//mapを使用した配列の処理  3) ["山本", "山口", "nino"]
// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}`));

// //filter
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1 ;  //returnの後に条件式を書く （奇数）
// });
// console.log(newNumArr);　//(3) [1, 3, 5] が返ってくる

// //map 実践　(3) ["山本さん", "山口", "ninoさん"]
// const newNumArr = nameArr.map((name) => {
//   if (name === "山口"){
//     return name
//   }else {
//     return `${name}さん`
//   }
// });
// console.log(newNumArr);

//三項演算子 if else を1行で書く
// const val1 = 1 > 0 ? `tureです`　:`falseです`;
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString() ) //numに使える関数三桁区切り

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100 を超えています'　: '許容範囲内です';
// }
// console.log(checkSum(50, 60));

// && || の一般的な使用
// const fiag1 = true;
// const fiag2 = false;

// if (fiag1 || fiag2) {
//   console.log("1か2はtrueになります");
// }
// if (fiag1 && fiag2) {
//   console.log("1も2もtrueになります");
// }

// ||(パイプライン)は左側がfalseになる時右側を返す
// const num = null;　　//null=false
// const fee = num || "金額未設定です";
// console.log(fee);

//&&(アンバサンド)は左側がtrueならば右側を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
