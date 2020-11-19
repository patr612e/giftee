var tags = ['Birthday', 'Graduation', 'Girl', 'Teenager', 'Teen', 'Boys', 'Christmas', 'Wedding', 'Girlfriend', 'Boyfriend', 'Fathers day'];
var search = document.getElementsByClassName('search-input')[0],
    label = document.getElementsByClassName('search-label')[0],
    tagsContainer = document.querySelector('#search-input-tags');

const searchSuggestions = ()=>{
  search.oninput = function() {
    suggest();
  }
  
  function suggest() {
  let currentSearch = [];
    if (search.value == '') {
      label.classList.add('hidden')
      label.innerHTML = "";
      return false;
    }
    for (var i = 0; i < tags.length; i++) {
      if (tags[i].toLowerCase().indexOf(search.value.toLowerCase()) == 0) {
        suggestion = tags[i];
        currentSearch.push(tags[i]);
      }
    }
    if(currentSearch.length == 0){
      label.classList.add('hidden');
      return false;
    }
    label.classList.remove('hidden');
    label.innerHTML = currentSearch.join(" <br>");
  }
};
  
const addTagsToSearch = ()=>{
  let btn = event.target;
  tagsContainer.insertAdjacentHTML('beforeend', `<button>${btn.textContent}</button>`);
  search.style.paddingLeft = `${tagsContainer.offsetWidth}px`;
};
const removeTagsFromSearch = ()=>{
  // let aTags = document.querySelectorAll('#search-input-tags button');
  // console.log(aTags);
};

  searchSuggestions();
  removeTagsFromSearch();
  // addTagsToSearch();

  search.addEventListener('keydown', function (event) {
    if (event.keyCode == 8 && search.value == '') {
      let aTags = document.querySelectorAll('#search-input-tags button');
      if(! aTags.length == 0){
        aTags[aTags.length - 1].remove();
        search.style.paddingLeft = `${tagsContainer.offsetWidth}px`;
      }
        // Call event.preventDefault() to stop the character before the cursor
        // from being deleted. Remove this line if you don't want to do that.
        // event.preventDefault();
    }
});

search.addEventListener("keyup", function(event) {
  if (event.keyCode === 13 && search.value.length > 0) {
    tagsContainer.insertAdjacentHTML('beforeend', `<button>${search.value}</button>`);
    search.style.paddingLeft = `${tagsContainer.offsetWidth}px`;
    search.value = '';
    // Cancel the default action, if needed
    event.preventDefault();
  }
});