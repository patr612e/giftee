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
  tagsContainer.insertAdjacentHTML('afterbegin', `<button>${btn.textContent}</button>`);
  search.style.paddingLeft = `${tagsContainer.offsetWidth}px`;
};

  searchSuggestions();
  // addTagsToSearch();