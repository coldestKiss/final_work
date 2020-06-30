    var input = document.querySelector('#content');
		
        var btn = document.querySelector('#btn');
        var todoList= document.querySelector('#todoList');
        var spans = document.querySelectorAll('#todoList span');


        btn.onclick = function(){
            //获取 input的内置
            var text = input.value;

            //创建li元素 并给li元素添加包裹 内容
            var li = document.createElement('li');
            li.innerText = text;
            var span = document.createElement('span');
            span.innerHTML = '&times;';
            li.appendChild(span);

            //把li元素添加到ul中
            todoList.appendChild(li);
        }    


        /*spans.forEach(function(span){
            span.onclick = function(){
                todoList.removeChild(this.parentNode)
            }
        })*/

        //委派方式绑定
        todoList.onclick = function(event) {
            if (event.target.nodeName === 'SPAN') {
                this.removeChild(event.target.parentNode);
            }
        }