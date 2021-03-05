import * as admin from "firebase-admin";
import { firestore } from "firebase-admin";

// サービスアカウントのキーを追加
const serviceAccount = require(`./keys/service_key.json`);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// script starts from here
(async function () {
  await addUsers();
})();

async function addUsers() {
  const userDataList = [
    { name: "taro", gender: "male", group: 1 },
    { name: "hanako", gender: "female", group: 2 },
    { name: "toshiro", gender: "male", group: 2 },
    { name: "keiko", gender: "female", group: 2 },
    { name: "taka", gender: "male", group: 3 },
    { name: "hina", gender: "female", group: 3 },
  ];

  for await (const userData of userDataList) {
    var ref = firestore().collection("class");
    await ref.add(userData);
  }
}
