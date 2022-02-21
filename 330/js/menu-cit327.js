const weekno = getWeeknum();


function createNav(array) {
  // create link list container element
  const container = document.getElementById(array);
  // create link list element
  let ul = "<ul>";
  // get list of files to create links for each week number
  array.forEach((array) => {
    ul += `<li><a href="${baseurl}${array.url}">${array.name}</a></li>`;
  });
  ul += "</ul>";
  console.log(`ul: ${ul}`);
  container.innerHTML = ul;
}
createNav(papers);
createNav(presentations);
