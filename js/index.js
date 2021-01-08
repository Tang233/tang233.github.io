function switchPage(){
  let hash=location.hash;
  let currentPage=document.querySelector('.page-current');
  let targetPage;
  if(location.hash){
    targetPage = document.querySelector(hash);
  }else{
    //homepage
    targetPage = document.querySelectorAll('.page')[0];
  }
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
