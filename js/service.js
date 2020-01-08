var cardNum = 1
var btns = document.getElementsByClassName('tab-btn')
var tabs = document.getElementsByClassName('tab')

for(var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function(e) {
        var id = e.target.id
        var containActive = e.target.classList.contains('active')
        
        if(containActive)  {
            
        } else {
            for(var j = 0; j < btns.length; j ++){
                btns[j].classList.remove("active");

                if(id == j){
                    console.log(id);
                    e.target.classList.add('active')   
                    removeCard() 
                    liftCard(id)
                }
            }
            
            
        }
    })
}

// btns를 누르면 번호에 따라 같은 번호를 가진 탭의 liftCard를 실행시키고
// 다른 번호의 탭은 remove카드를 실행한다.
// 또한 btns 인덱싱에 active클래스를 붙이고 나머지 btns의 active는 삭제한다.

function liftCard(id, elem) {

}

function addClass(elem) {
    elem.classList.add('active')
}

function removeClass(elem) {
    elem.classList.remove('active')
}

function removeCard() {
    for(var i = 0; i < 4; i++) {
        // tabs[i].firstChild.children.classList.remove('active')
        console.log(tabs[i].children[0].children[0]);
    }
}


// var _gfnFindTag = gfnFindTag();
// function gfnFindTag() {

//     var result = null;
//     var nCount = 0;

//     var inner_func = function (_target, _sTagName) {
//         if (_target.nodeType === 1) {
//             var arrNodes = _target.childNodes;
//             if (result == null) {
//                 for (var i = 0; i < arrNodes.length; i++) {
//                     if (typeof arrNodes[i].tagName != "undefined") {
//                         if (arrNodes[i].tagName.toLowerCase() == _sTagName.toLowerCase()) {
//                             result = arrNodes[i];
//                         } else {
//                             if (result != null) {
//                                 break;
//                             } else {
//                                 _gfnFindTag(arrNodes[i], _sTagName);
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//         return result;
//     }
//     return inner_func;
// }

// function gfnFindTag_callback(target, callback) {
//     var lfnInnerCall = function () {
//         if (target.nodeType === 1) {
//             callback(target);
//             var arrNodes = target.childNodes;
//             for (var i = 0; i < arrNodes.length; i++) {
//                 gfnFindTag_callback(arrNodes[i], callback);
//             }
//         }
//     }
//     lfnInnerCall();
// }