for (let current = 20; ; current = current + 1) {
    if (current % 7 === 0) {
      console.log(current);
      break;
    }
  }

  /**
   * Having an array of names:
   * 
   * const names = [
   *   'Pau',
   *   'Jose',
   *   'Albert',
   *   'Antonio',
   *   'Vicky',
   *   'Lu',
   *   'Montse',
   *   'Patri',
   *   'Manolo',
   *   'Marc',
   *   'Luis',
   *   'Carles',
   *   'Manel'
   * ];
   * 
   * Create a function 'findNameIndex', which terates until it finds the target name:
   * 
   * function findNameIndex(targetName) {
   *   // your code here...
   *   
   *   return index;
   * }
   */