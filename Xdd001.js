// ��ת�ַ�������
function reverse(s) {
    return s.split("").reverse().join("");
}

// ���ð�ť�ص�����
function revbtn() {
    var s = in1.value;
    ou1.innerText = reverse(s);		// ֱ��ͨ��id��ö���
}

// �����ť
function clrbtn() {
    in1.value = null;				// 
    in1.innerText = null;			// ֱ��ͨ��id��ö���
    ou1.innerText = null;			// 
}
