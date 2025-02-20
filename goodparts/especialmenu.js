const menu = {
    _meal: '',
    _price: 0,
  
    set meal(mealToCheck) {
      if (typeof mealToCheck === 'string') {
        this._meal = mealToCheck; 
      }
    },
  
    set price(priceToCheck) {
      if (typeof priceToCheck === 'number') {
        this._price = priceToCheck; 
      }
    },
  
    get todaySpecial() {
      if (this._meal && this._price) {
        return `¡El especial del día es ${this._meal} por $${this._price}!`;
      } else {
        return 'Meal or price was not set correctly!';
      }
    }
  };
  
  
  menu.meal = 'Roast';
  menu.price = 8;
  
  console.log(menu.todaySpecial);