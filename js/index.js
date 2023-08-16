document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.forEach(function (otherLink) {
                var icon = otherLink.querySelector('i.fa-solid');
                icon.classList.remove('fa-book-open');
                icon.classList.add('fa-book');
            });
            var icon = link.querySelector('i.fa-solid');
            if (icon.classList.contains('fa-book')) {
                icon.classList.remove('fa-book');
                icon.classList.add('fa-book-open');
            } else if (icon.classList.contains('fa-book-open')) {
                icon.classList.remove('fa-book-open');
                icon.classList.add('fa-book');
            }
        });
    });

    // Bài 1: Quản lý tuyển sinh
    document.getElementById('tuyenSinh').addEventListener('submit', function (event) {
        event.preventDefault();
        tuyenSinh();
    });

    // Bài 2: Viết chương trình Tính tiền điện
    document.getElementById('caculatorElec').addEventListener('submit', function (event) {
        event.preventDefault();
        caculatorElec();
    });

    // Bài 3: Viết chương trình Tính thuế thu nhập cá nhân
    document.getElementById('caculatorTax').addEventListener('submit', function (event) {
        event.preventDefault();
        caculatorTax();
    });

    // Bài 4: Viết chương trình Tính tiền cáp
    document.getElementById('caculatorMoney').addEventListener('submit', function (event) {
        event.preventDefault();
        caculatorMoney();
    });
});


// Bài 1 : Viết chương trình Quản lý tuyển sinh
    function tuyenSinh() {
    
        // B1: Lấy dữ liệu đầu vào
        const diemChuan = +document.getElementById('diemChuan').value;
        const khuVuc = document.getElementById('khuVuc').value;
        const doiTuong = document.getElementById('doiTuong').value;
        const diem1 = +document.getElementById('diem1').value;
        const diem2 = +document.getElementById('diem2').value;
        const diem3 = +document.getElementById('diem3').value;
        let result;
        
        // B2: Xử lý bài toán
        function diemKV(khuVuc)
        {
            if(khuVuc == 'kv0')
            {
                return 0;
            }
            else if(khuVuc == 'kvA')
            {
                return 2;
            }
            else if(khuVuc == 'kvB')
            {
                return 1;
            }
            else
            {
                return 0.5;
            }
        }
        function diemDT(doiTuong)
        {
            if(doiTuong == 'doiTuong0')
            {
                return 0;
            }
            else if(doiTuong == 'doiTuong1')
            {
                return 2.5;
            }
            else if(doiTuong == 'doiTuong2')
            {
                return 1.5;
            }
            else
            {
                return 1;
            }
        } 
        function tongDiem(diem1,diem2,diem3,diemKVValue,diemDTVValue)
        {
            if (diem1 === 0 || diem2 === 0 || diem3 === 0)
            {
                return 0;
            }
            else
            {
                return diem1 + diem2 + diem3 + diemKVValue + diemDTVValue;
            }    
        }
        const diemKVValue = +diemKV(khuVuc);
        const diemDTVValue = +diemDT(doiTuong);
        const tongDiemValue = +tongDiem(diem1,diem2,diem3,diemKVValue,diemDTVValue);
        function ketQua(tongDiemValue,diemChuan)
        {
            if (tongDiemValue >= diemChuan && tongDiemValue > 0) {
                return 'đậu' + '. Tổng điểm: ' + tongDiemValue;
            }
            else
            {
                if (tongDiemValue == 0)
                {
                    return 'rớt' + '. Do có điểm nhỏ hơn hoặc bằng 0';
                }
                else
                {
                    return 'rớt' + '. Tổng điểm: ' + tongDiemValue;
                }
            }
        }        
        const ketQuaValue=ketQua(tongDiemValue,diemChuan)

        // B3: Hiển thị kết quả
        document.getElementById('result').innerText = `👉Bạn đã ${ketQuaValue}`;
    }
// <--------------------------------------------------->


// Bài 2 : Viết chương trình Tính tiền điện

    function caculatorElec() {
    
        // B1: Lấy dữ liệu đầu vào

        const hoTen = document.getElementById('hoTen').value;
        const soKW = +document.getElementById('soKW').value;
        let result2;

        // B2: Xử lý bài toán
        function gettienDien(soKW)
        {
            if (soKW <= 50) {
                return soKW * 500;
            } else if (soKW <= 100) {
                return 50 * 500 + (soKW - 50) * 650;
            } else if (soKW <= 200) {
                return 50 * 500 + 50 * 650 + (soKW - 100) * 850;
            } else if (soKW <= 350) {
                return 50 * 500 + 50 * 650 + 100 * 850 + (soKW - 200) * 1100;
            } else {
                return 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKW-350) *1300;
            }
            
        }
        const tienDien = new Intl.NumberFormat('vn-VN').format(gettienDien(soKW));

        // B3: Hiển thị kết quả

        document.getElementById('result2').innerText = `👉 Họ tên: ${hoTen} . Tiền điện: ${tienDien} VNĐ`;
}
// <--------------------------------------------------->


// Bài 3 : Viết chương trình Tính thuế thu nhập cá nhân

function caculatorTax() {

    // b1: các dữ liệu đầu vào
    const hoTen2 = document.getElementById('hoTen2').value;
    const salary = +document.getElementById('salary').value;
    const numPer = +document.getElementById('numPer').value;
    let result3;

    // b2: xử lí bài toán

    function getSalaryTax(salary,numPer)
    {
        return salary - 4000000 - numPer*1600000 ;
    }
    const salaryTax = getSalaryTax(salary,numPer);
    function gettaxMoney(salaryTax)
    {
        if (salary <= 60000000) {
            return salaryTax*0.05;
        }
        else if (salary <= 120000000) {
            return 60000000*0.05 + (salaryTax-60000000)*0.1;
        }
        else if (salary <= 210000000) {
            return 60000000*0.05 + 60000000*0.1 + (salaryTax-120000000) *0.15 ;
        }
        else if (salary <= 384000000) {
            return 60000000*0.05 + 60000000*0.1 + 90000000 *0.15 +  (salaryTax-210000000)*0.2 ;
        }
        else if (salary <= 624000000) {
            return 60000000*0.05 + 60000000*0.1 + 90000000 *0.15 +  174000000*0.2 +  (salaryTax-384000000)*0.25;
        }
        else if (salary <= 960000000) {
            return 60000000*0.05 + 60000000*0.1 + 90000000 *0.15+  174000000*0.2 + 240000000*0.25 + (salaryTax-624000000)* 0.3;
        }
        else
        {
            return 60000000*0.05 + 60000000*0.1 + 90000000 *0.15 +  174000000*0.2 + 240000000*0.25 + 336000000* 0.3 + (salaryTax-960000000)* 0.35;
        }
    }
     const taxMoney = new Intl.NumberFormat('vn-VN').format(gettaxMoney(salaryTax));

    // b3 : các dữ liệu đầu ra

    document.getElementById('result3').innerText = `👉 Họ tên: ${hoTen2} . Tiền thuế thu nhập cá nhân: ${taxMoney} VNĐ`;
};

// // <--------------------------------------------------->


// // Bài 4 : Viết chương trình Tính tiền cáp

function changeLoaiKH()
    {
      var loaiKH = document.getElementById("loaiKH").value;
        if(loaiKH=="doanhNghiep")
        {
            document.getElementById('soKN').style.display = "inline-block";
        }
        else
        {
            document.getElementById('soKN').style.display = "none";
        }
    }
    
function caculatorMoney() {

    // b1: các dữ liệu đầu vào

    var loaiKH = document.getElementById("loaiKH").value;
    const maKH = document.getElementById("maKH").value;
    const kenhCC = +document.getElementById("kenhCC").value;
    const soKN = +document.getElementById("soKN").value;
    let result4;

    // b2: xử lí bài toán
    
    function getLoaiKH(loaiKH)
    {
        if (loaiKH == 'nhaDan')
        {
            return 1;
        }
        else
        {
            return 2;
        }
    }
    const loaiKHValue = getLoaiKH(loaiKH);

    
    function getKenhCC(kenhCC)
    {
        if(loaiKHValue == 1)
        {
            return 7.5*kenhCC;
        }
        else
        {
            return 50*kenhCC;
        }
    }
    const kenhCCValue = getKenhCC(kenhCC);

    function getServiceCharge()
    {
        if(loaiKHValue == 1)
        {
            return 20.5;
        }
        else
        {
            if(soKN <= 10)
            {
                return 75;
            }
            else
            {
                return 75 + (soKN - 10) *5;
            }
        }
    }
    const serviceCharge = getServiceCharge();

    function getFeeBill()
    {
        if(loaiKHValue == 1)
        {
            return 4.5;
        }
        else
        {
            return 15;
        }
    }
    const feeBill = getFeeBill();

    function getMoney(loaiKHValue,kenhCCValue,serviceCharge,feeBill)
    {
        return feeBill + serviceCharge + kenhCCValue;
    }
    const money = getMoney(loaiKHValue,kenhCCValue,serviceCharge,feeBill).toLocaleString('en-US', { style: 'currency', currency: 'USD' });;

    // b3 : các dữ liệu đầu ra

    document.getElementById('result4').innerText=`👉 Mã khách hàng ${maKH}; Tiền cáp: ${money}`;

};