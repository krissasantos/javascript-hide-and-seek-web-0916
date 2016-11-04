function getFirstSelector(selector){

     return document.querySelector(selector)
}
  // document.getElementById('app').querySelector('ul.ranked-list li')
function nestedTarget(){

        return document.getElementById('app').querySelector('div#nested div.target')

}


// Define a function increaseRankBy(n) that 
// increases the ranks in all of the .ranked-lists by n. 
// (You might need to make use of parseInt()

function increaseRankBy(n) {

  const list = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0;  i < list.length; i++){
    list[i].innerHTML = (parseInt(list[i].innerHTML) + n).toString()
  }

}

function deepestChild(){

  return document.getElementById('app').querySelector('div#grand-node div')

}
