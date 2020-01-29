var content = document.getElementsByClassName('content')
var btns = document.getElementsByClassName('tab-btn')
var tabs = document.getElementsByClassName('tab')
var moTabs = document.getElementsByClassName('swiper-tabs-mobile')
var arrCards = ["card01", "card02", "card03"]

liftCard("card01")

for(var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function(e) {
        var id = e.target.id
        var containActive = e.target.classList.contains('active')
        
        if(containActive)  {
            // Do nothing
        } else {
            for(var j = 0; j < btns.length; j++){
               removeControl(j)

                if(id == j){
                    addControl(j)
                    cardControl(tabs[j].firstElementChild.children)
                }
            }
        }
    })
}

function addControl(num) {
    btns[num].classList.add('active')
    tabs[num].classList.add('active')
    moTabs[num].classList.add('active')
}

function removeControl(num) {
    btns[num].classList.remove('active')
    tabs[num].classList.remove('active')
    moTabs[num].classList.remove('active')
}

function cardControl(tabNum) {
    var firstList = tabNum[0].classList
    var isFirst = firstList.contains('active')
    if(!isFirst) {
        for(var i = 0; i < arrCards.length; i ++){
            if (arrCards[i] == firstList[1]){
                liftCard(arrCards[i])
            }else{
                downCard(arrCards[i])                
            }
        }
    }
}

function liftCard(card) {
    var cards = document.getElementsByClassName(card);
    setTimeout(function() {
        fnUpAndDownTrigger(cards, true, 100)
    }, 350)    
}

function downCard(card) {
    var cards = document.getElementsByClassName(card);
    fnUpAndDownTrigger(cards, false, 100)
}

function fnUpAndDownTrigger(param1, param2, param3){
    for (var i = 0; i < 4; i++) {
        (function (x) {
            setTimeout(function () {
                if(param2){
                    param1[x].classList.add('active')
                }else{
                    param1[x].classList.remove('active')
                }
            }, x * param3)
        })(i)
    }
}