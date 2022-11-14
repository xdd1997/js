// 反转字符串函数
function reverse(s) {
    return s.split("").reverse().join("");
}

// 配置按钮回调函数
function revbtn() {
    var s = in1.value;
    ou1.innerText = reverse(s);		// 直接通过id获得对象
}

// 清除按钮
function clrbtn() {
    in1.value = null;				// 
    in1.innerText = null;			// 直接通过id获得对象
    ou1.innerText = null;			// 
}
