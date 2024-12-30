const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    
    getModel: function () {
      return this._model;
    },
  
    setModel: function (newValue) {
      this._model = newValue;
    },
  
    getEnergyLevel: function () {
      return this._energyLevel;
    },
  
    setEnergyLevel: function (newValue) {
      if (typeof newValue !== 'number') {
        return; 
      }
  
      this._energyLevel = newValue;
    }
  };
  
  // bad practice
  // console.log(robot._model);
  // robot._model = 123;
  
  // good practice via getters and setters
  // console.log(robot.getModel());
  // robot.setModel(123);
  
  robot.setEnergyLevel('foo');
  robot.setEnergyLevel(123);
  console.log(robot.getEnergyLevel());
  