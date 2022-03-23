// =============================Khai báo biến====================
//=======Mảng 1======
var numList = [];
var tongSoDuong = 0;
var countSoDuong = 0;
var numMin;
var numListDuong = [];
var numDuongMin;
var numLastChan;
//=======Mảng 2=======
var numList2 = [];
var numListSoNguyen = [];
var countSoAm = 0;
var countSoDuong = 0;
var chenhLech = 0;

//====================================== Sự Kiện===========================
//Nhập Mảng
document.getElementById("btn-Nhap").onclick = function () {
    var num = document.getElementById("txtNum").value * 1;
    numList.push(num);
    document.getElementById("chuoi").innerHTML = numList;
}
//Xóa Mảng
document.getElementById("btn-Xoa").onclick = function () {
    numList = [];
    tongSoDuong = 0;
    countSoDuong = 0;
    numMin = null;
    numListDuong = [];
    numDuongMin = null;
    document.getElementById("chuoi").innerHTML = numList;
}
//Tính Tổng số Dương
document.getElementById("btn-TinhTongSoDuong").onclick = function () {
    //Tính tổng số Dương
    tinhTongSoDuong();
    document.getElementById("tongSoDuong").innerHTML = tongSoDuong;
}
//Đếm số Dương
document.getElementById("btn-DemSoDuong").onclick = function () {
    //Đếm số Dương
    demSoDuong();
    document.getElementById("countSoDuong").innerHTML = countSoDuong;
}
//Tìm số nhỏ
document.getElementById("btn-TimSoNho").onclick = function () {
    //Tìm số nhỏ nhất
    timMin();
    document.getElementById("soMin").innerHTML = numMin;
}
//Tìm Số dương nhỏ
document.getElementById("btn-TimSoDuongNho").onclick = function () {
    //Tìm số Dương nhỏ nhất
    mangDuong();
    timMinDuong();
    if (numDuongMin === undefined) {
        numDuongMin = "Mảng không có số Dương"
    }
    document.getElementById("soMinDuong").innerHTML = numDuongMin;
}
// Tìm số chẵn cuối cùng
document.getElementById("btn-TimLastChan").onclick = function () {
    // Tìm số chẵn cuối cùng
    numLastChan = -1;
    timLastChan();
    console.log(numLastChan);
}
// Đổi vị Trí
document.getElementById("btn-DoiViTri").onclick = function () {
    var viTri1 = document.getElementById("vitri1").value * 1;
    var viTri2 = document.getElementById("vitri2").value * 1;
    doiVitri(viTri1, viTri2);
    document.getElementById("chuoiMoi").innerHTML = numList;
}
// Sắp xếp tăng dần
document.getElementById("btn-SapXep").onclick = function () {
    sapViTri();
    document.getElementById("sapXep").innerHTML = numList;
}
//=========================================== MẢNG SỐ THỰC ==========================================
document.getElementById("btn-Nhap2").onclick = function () {
    var num2 = document.getElementById("txtNum2").value * 1;
    numList2.push(num2);
    document.getElementById("chuoi2").innerHTML = numList2;
}
document.getElementById("btn-TimSoNguyen").onclick = function () {
    numListSoNguyen = [];
    mangSoNguyen();
    document.getElementById("soNguyen").innerHTML = numListSoNguyen;
}
document.getElementById("btn-SoSanh").onclick = function () {
    // Đếm số âm số Dương
    var content = "";
    demSoAmDuong();
    console.log(countSoAm, countSoDuong)
    if (countSoAm < countSoDuong) {
        chenhLech = countSoDuong - countSoAm;
        content = "Trong mảng có Số Dương nhiều hơn Số Âm " + chenhLech + " số.";
    } else if (countSoAm > countSoDuong) {
        chenhLech = countSoAm - countSoDuong;
        content = "Trong mảng có Số Âm nhiều hơn Số Dương " + chenhLech + " số.";
    } else {
        content = "Trong mảng có sô Dương bằng số Âm";
   }
   document.getElementById("soSanh").innerHTML = content;
}
//=========================================== HÀM ====================================================
// Hàm Tính tổng số Dương
function tinhTongSoDuong() {
    for (var i = 0; i <= numList.length; i++) {
        if (numList[i] > 0) {
            tongSoDuong += numList[i]
        }
    }
}
// Hàm đếm Số Dương
function demSoDuong() {
    for (var i = 0; i < numList.length; i++) {
        if (numList[i] > 0) {
            countSoDuong++;
        }
    }
}
// Hàm tìm số nhỏ nhất
function timMin() {
    numMin = numList[0];
    for (var i = 1; i < numList.length; i++) {
        if (numMin > numList[i]) {
            numMin = numList[i];
        }
    }
}
//Hàm tìm Mảng Dương
function mangDuong() {
    for (var i = 0; i < numList.length; i++) {
        if (numList[i] > 0) {
            numListDuong.push(numList[i]);
        }
    }
}
//Hàm tìm số Dương nhỏ nhất
function timMinDuong() {
    numDuongMin = numListDuong[0];
    for (var i = 1; i < numListDuong.length; i++) {
        if (numListDuong[i] < numDuongMin) {
            numDuongMin = numListDuong[i]
        }
    }
}
//Hàm tìm số chẵn cuối cùng
function timLastChan() {
    for (var i = 0; i < numList.length; i++) {
        if (numList[i] % 2 === 0) {
            numLastChan = numList[i]
        }
    }
}
//Hàm đổi vị trí
function doiVitri(viTri1, viTri2) {
    var x = numList[viTri1];
    var y = numList[viTri2];
    numList[viTri1] = y;
    numList[viTri2] = x;
}
//Hàm sắp xếp vị trí
function sapViTri() {
    for (var i = 0; i <= numList.length; i++) {
        for (var j = i + 1; j <= numList.length; j++) {
            if (numList[i] > numList[j]) {
                var x = numList[i];
                var y = numList[j];
                numList[i] = y;
                numList[j] = x;
            }
        }
    }
}
// Hàm tìm số Nguyên
function mangSoNguyen() {
    for (var i = 0; i < numList2.length; i++) {
        if (numList2[i] % 1 === 0) {
            numListSoNguyen.push(numList2[i]);
        }
    }
}
// Hàm đếm số Âm và Dương
function demSoAmDuong() {
    for (var i = 0; i < numList2.length; i++) {
        if (numList2[i] < 0) {
            countSoAm += 1;
        } else if (numList2[i] > 0) {
            countSoDuong += 1;
        }
    }
}