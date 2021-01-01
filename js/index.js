function switchPage(){
  var hash=location.hash;
  var currentPage=document.querySelector('.page-current');
  var targetPage = document.querySelector(hash);
  if(currentPage){
    currentPage.classList.remove('page-current');
  }
  if(targetPage){
    targetPage.classList.add('page-current');
  }else{
    // exception hash value: can jump to 404 not found page.
    var allPages = document.querySelectorAll('.page')
    allPages[0].classList.add('page-current')
  }
}

window.onload = switchPage;

window.onhashchange = switchPage
