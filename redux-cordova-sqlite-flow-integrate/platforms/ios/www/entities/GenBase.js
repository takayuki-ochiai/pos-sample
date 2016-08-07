import { Record } from 'immutable';

/**
 * すべてのRecordの基底クラスです。
 */
export default class GenBase extends Record {
  constructor(defaultValues, name) {
    const RecordTypeBase = super(defaultValues, name);

    class RecordType extends RecordTypeBase {
      static get actions() {
        throw new TypeError('actionsゲッターを実装している必要があります。実装したメソッド内では親のactionsゲッターを呼ばないでください');
      }
      get actions() {
        throw new TypeError('actionsゲッターを実装している必要があります。実装したメソッド内では親のactionsゲッターを呼ばないでください');
      }
      addSelf() {
        return {
          type: this.actions.ADD,
          record: this,
        };
      }
      updateSelf() {
        return {
          type: this.actions.UPDATE,
          record: this,
        };
      }
      removeSelf() {
        return {
          type: this.actions.REMOVE,
          record: this,
        };
      }
    }
    // RecordType.prototype.actions = () => {
    //   throw new TypeError('ACTIONSゲッターを実装している必要があります。実装したメソッド内では親のACTIONSゲッターを呼ばないでください');
    // };
    //
    // RecordType.prototype.addAction = function addAction() {
    //   return this.actions().ADD;
    // };
    // RecordType.prototype.updateAction = () => (this.actions().UPDATE);
    // RecordType.prototype.removeAction = () => (this.actions().REMOVE);
    return RecordType;
  }
  // get actions() {
  //   throw new TypeError('ACTIONSゲッターを実装している必要があります。実装したメソッド内では親のACTIONSゲッターを呼ばないでください');
  // }
  //
  // get addAction() {
  //   return this.actions().ADD;
  // }
  //
  // get updateAction() {
  //   return this.actions().UPDATE;
  // }
  //
  // get removeAction() {
  //   return this.actions().REMOVE;
  // }
}
