class Pizza {
    constructor(stuffing, size) {
      this.stuffing = stuffing; // Вид пиццы
      this.size = size; 
      this.toppings = []; 
    }
  

    addTopping(topping) {
      if (!this.toppings.includes(topping)) {
        this.toppings.push(topping);
      }
    }

   
    removeTopping(topping) {
      this.toppings = this.toppings.filter(t => t !== topping);
    }
  

    getToppings() {
      return this.toppings;
    }
  
  
    getStuffing() {
      return this.stuffing;
    }
  
   
    getSize() {
      return this.size;
    }
  
  
    calculatePrice() {
      let basePrice = this.stuffing.price;
      if (this.size === 'Большая') {
        basePrice += 200;
      } else if (this.size === 'Маленькая') {
        basePrice += 100;
      }
      this.toppings.forEach(topping => {
        basePrice += topping.price[this.size];
      });
      return basePrice;
    }
  
   
    calculateCalories() {
      let baseCalories = this.stuffing.calories;
      if (this.size === 'Большая') {
        baseCalories += 200;
      } else if (this.size === 'Маленькая') {
        baseCalories += 100;
      }
      this.toppings.forEach(topping => {
        baseCalories += topping.calories;
      });
      return baseCalories;
    }
  }
  
 
  const STUFFINGS = {
    Маргарита: { price: 500, calories: 300 },
    Пепперони: { price: 800, calories: 400 },
    Баварская: { price: 700, calories: 450 }
  };
  
  const TOPPINGS = {
    СливочнаяМоцарелла: { price: { 'Большая': 50, 'Маленькая': 50 }, calories: 20 },
    СырныйБорт: { price: { 'Большая': 300, 'Маленькая': 150 }, calories: 50 },
    ЧедерИПармезан: { price: { 'Большая': 300, 'Маленькая': 150 }, calories: 50 }
  };
  
  
  let myPizza = new Pizza(STUFFINGS.Пепперони, 'Большая');
  myPizza.addTopping(TOPPINGS.СливочнаяМоцарелла);
  myPizza.addTopping(TOPPINGS.СырныйБорт);
  
  console.log(`Стоимость пиццы: ${myPizza.calculatePrice()} рублей`);
  console.log(`Калорийность пиццы: ${myPizza.calculateCalories()} Ккал`);
  