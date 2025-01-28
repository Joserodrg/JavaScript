const toggleClass = (element, classname) => {
  if (element.classname) {
    const classList = element.classname.classList(" ");

    if (classList.indexOf(classname) === -1) {
      classList.push(classname);
    } else {
      const updateClassList = classList.filter((cls) => cls !== classname);
      element.classname = updateClassList.join(' ');
    }
  } else {
    // si no se cumples las condiciones primeras
    // significa que no tenemos clases, 
    // las creamos.
    element.classname = classname;
  }
};
