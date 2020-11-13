// import "./styles.css";

// const onClickAdd = () => {
//   //テキストボックスの値を取得し、初期化する
//   const inputText = document.getElementById("add-text").value;
//   document.getElementById("add-text").value = "";

//   createIncompleteList(inputText);
// };

//   //未完了リストから指定の要素を削除
//   const deleteFromIncompleteList = (target) => {
//     document.getElementById("incompleate-list").removeChild(target);
//   };

//   //未完了リストに追加する関数
//   const createIncompleteList = () => {
//     //div生成
//     const div = document.createElement("div");
//     div.className = "list-row";

//     //liタグ
//     const li = document.createElement("li");
//     li.innerText = text;

//     //button(完了)タグ生成
//     const completeButton = document.createElement("button");
//     completeButton.innerText = "完了";
//     completeButton.addEventListener("click", () => {
//       //押された完了ボタンの親タグ(div)を未完了リストから削除
//       deleteFromIncompleteList(completeButton.parentNode);

//       //完了リストに追加する要素
//       const addTarget = completeButton.parentNode;

//       //TODO内容テキストを取得
//       const text = addTarget.firstElementChild.innerText;

//       //div以下を初期化
//       addTarget.textContent = null;

//       //liタグ生成
//       const li = document.createElement("li");
//       li.innerText = text;

//       //buttonタグ生成
//       const backButton = document.createElement("button");
//       backButton.innerText = "戻す";
//       backButton.addEventListener("click", () => {
//         //押された戻すボタンの親タグ(div)を完了リストから削除
//         const deleteTaget = backButton.parentNode;
//         document.getElementById("complete-list").removeChild(deleteTaget);

//         //テキスト取得
//         const text = backButton.parentNode.firstChild.innerText;
//         createIncompleteList(text);
//       });

//       //divタグの子要素に各要素を設定
//       addTarget.appendChild(li);
//       addTarget.appendChild(backButton);

//       //完了リストに追加
//       document.getElementById("cpmplete-list").appendChild(addTarget);
//     });

//     //button(削除)タグ生成
//     const deleteButton = document.createElement("button");
//     deleteButton.innerText = "削除";
//     deleteButton.addEventListener("click", () => {
//       //押された削除ボタンの親タグ(div)を未完了リストから削除
//       deleteFromIncompleteList(deleteButton.parentNode);
//     });

//     //divタグの子要素に各要素を設定
//     div.appendChild(li);
//     div.appendChild(completeButton);
//     div.appendChild(deleteButton);

//     //未完了リストに追加
//     document.getElementById("incompleate-list").appendChild(div);
//   };

// document
//   .getElementById("add-button")
//   .addEventListener("click", () => onClickAdd());

import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  //button（完了）タグ生成
  const completButton = document.createElement("button");
  completButton.innerText = "完了";
  completButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ（div）を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
    //完了リストに追加する要素
    const addTarget = completButton.parentNode;

    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //liタグを生成
    const li = document.createElement("li");
    li.innerText = text;

    //buttonダグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押し戻されたボタンの親タグ(div)を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button（削除）タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ（div）を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completButton);
  div.appendChild(deleteButton);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
