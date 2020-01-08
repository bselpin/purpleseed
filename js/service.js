var cardNum = 1
var btns = document.getElementsByClassName('tab-btn')
var tabs = document.getElementsByClassName('tab')

for(var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function(e) {
        console.log(e)
    })
}


function liftCard() {

}

function removeCard() {

}

console.log(tabs[0].firstElementChild.children)


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