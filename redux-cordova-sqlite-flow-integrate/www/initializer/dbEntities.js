// import Category from '../entities/category';
// スキーマ定義自体はdeviceReady前に可能。
// DBを開いたりスキーマを反映させるのはdeviceReady以後になる
export const CagegoryDbEntity = persistence.define('Category', {
  name: 'TEXT',
  metaData: 'JSON',
});

CagegoryDbEntity.index('name', { unique: true });
// CagegoryDbEntity.recordClass = Category;

// const allCategory = Category.all().list(categories => {
//   categories.forEach(category => {
//     persistence.remove(category);
//     persistence.flush();
//   });
// });

// console.log(allCategory);

// インデックスをつける
// Category.index('name', { unique: true });
// Category.index(['name', 'metaData'], {unique:true});
// 新規登録
// const newcategory1 = new Category({ name: "My category2" });
// newcategory1.metaData = { rating: 6 };
// persistence.add(newcategory1);
// const newcategory2 = new Category({ name: "My category1" });
// newcategory2.metaData = { rating: 5 };
// persistence.add(newcategory2);
// persistence.flush();
// 条件付きで取得
// Category.findBy(persistence, null, 'name', 'My category6 update!!!', category => {
//   console.log(category);
//   // 更新したいときはEntityの値を書き換えてflushすればよい
//   console.log('update!');
//   // category.name = 'My category6 update!!!';
//   // persistence.flush();
//   // 削除する
//   persistence.remove(category);
//   persistence.flush();
// });
