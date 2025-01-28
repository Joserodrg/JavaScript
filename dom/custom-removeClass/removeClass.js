const removeClass = (element, classname) => {
  if (element.className) {
    const classList = element.className.split(" ");

    const updateClassList = classList.filter((cls) => cls !== classname);
    element.className = updateClassList.join(" ");
  }
};
