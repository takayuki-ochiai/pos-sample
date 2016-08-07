import { Record } from 'immutable';

/**
 * すべてのRecordの基底クラスです。
 */
export default class GenBase extends Record {
  constructor(defaultValues, name) {
    const RecordTypeBase = super(defaultValues, name);

    class RecordType extends RecordTypeBase {
      static get actions() {
        throw new TypeError('staticでactionsゲッターを実装している必要があります。実装したメソッド内では親のactionsゲッターを呼ばないでください');
      }

      get actions() {
        throw new TypeError('actionsゲッターを実装している必要があります。実装したメソッド内では親のactionsゲッターを呼ばないでください');
      }

      createEntity() {
        throw new TypeError('createEntityを実装して下さい');
      }

      static setList(list) {
        return {
          type: this.actions.SET_LIST,
          list,
        };
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
    return RecordType;
  }
}
