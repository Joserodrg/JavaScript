const addClass = (element, className) => {
    const classList = element.className.split(' ');
  
    if (classList.indexOf(className) === -1) {
      classList.push(className);
    }
  
    element.className = classList.join(' ');
  }