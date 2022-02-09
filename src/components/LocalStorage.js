export default class LocalStorage {
  /**
   *  Method that allows to add an element to the localStorage container
   *
   * @param {String} key is a key of the value we want to add
   * @param {String} value is a value we want to add
   */
  static set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.log(e);
    }
  }

  /**
   *  Method that allows to get an element from the localStorage container
   *
   * @param {String} key is a key of the value we want to get
   * @return {String} the current value associated with the given key, or null if the given key does not exist.
   */
  static get(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.log(e);
    }
    return null;
  }

  /**
   *  Method that allows to remove an element from the localStorage container
   *
   * @param {String} key is a key of the value we want to remove
   */
  static remove(key) {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.log(e);
    }
  }
}
