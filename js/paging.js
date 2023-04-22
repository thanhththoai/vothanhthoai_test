// Paging 6
let thisPage = 1 ;
  let limit = 6;
  let list = document.querySelectorAll('.media_list .media_list-item');

  function loadItem() {
    let beginGet = limit * (thisPage -1);
    let endGet = limit * thisPage -1;
    list.forEach((item, key) => {
      if(key >= beginGet && key <= endGet) {
          item.style.display = 'block';
      }
      else {
        item.style.display = 'none';
      }
    } )
    listPage();
  }
  loadItem();
  function listPage(){
    let count = Math.ceil(list.length / limit );
    document.querySelector('.listPage').innerHTML = '';
    if(thisPage != 1) {
      let prev = document.createElement('li');
      prev.innerText = '<';
      prev.setAttribute('onclick', "changePage(" + (thisPage -1) + ")");
      document.querySelector('.listPage').appendChild(prev);
    }
    for (i=1; i <=count; i++) {
      let newPage = document.createElement('li');
      newPage.innerText = i;
      if( i == thisPage) {
        newPage.classList.add('active');
      }
      newPage.setAttribute('onclick', "changePage(" + i + ")");
      document.querySelector('.listPage').appendChild(newPage);
    }
    if(thisPage != count) {
      let next = document.createElement('li');
      next.innerText = '>';
      next.setAttribute('onclick', "changePage(" + (thisPage +1) + ")");
      document.querySelector('.listPage').appendChild(next);
    }
  }
  function changePage(i) {
    thisPage = i;
    loadItem();
  }

  // Paging 5

  let thisPage1 = 1 ;
  let limit1= 5;
  let list1 = document.querySelectorAll('.notification_list .notification_content');

  function loadItem1() {
    let beginGet1 = limit1* (thisPage1 -1);
    let endGet1 = limit1* thisPage1 -1;
    list1.forEach((item, key) => {
      if(key >= beginGet1 && key <= endGet1) {
          item.style.display = 'block';
      }
      else {
        item.style.display = 'none';
      }
    } )
    listPage1();
  }
  loadItem1();
  function listPage1(){
    let count = Math.ceil(list1.length / limit1);
    document.querySelector('.listPage1').innerHTML = '';
    for (i=1; i <=count; i++) {
      let newPage1 = document.createElement('li');
      newPage1.innerText = i;
      if( i == thisPage1) {
        newPage1.classList.add('active');
      }
      newPage1.setAttribute('onclick', "changePage1(" + i + ")");
      document.querySelector('.listPage1').appendChild(newPage1);
    }
  }
  function changePage1(i) {
    thisPage1 = i;
    loadItem1();
  }

 