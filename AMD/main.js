require.config({
    paths:{
        "jquery":"jquery-2.1.1.min",
        "lodash":"lodash.core.min",
        "math":"math"
    }
})
require(['jquery','lodash','math'],function($,_,math){
    let arr = [1,2,3]
    let text = 'hello world'
    let newArr = _.concat(arr,text)
    console.log(newArr,'lodash的concat');
    $('#app').text('requirejs实现了AMD规范,并用jquery生成dom')
    console.log(math.add(1,2),'子定义amd规范的js add');
})