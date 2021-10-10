const numbers = document.querySelectorAll(".number") //mengambil elemen-elemen button gunakan class number dan querySelectorAll. querySelectorAll digunakan saat ingin mendapatkan beberapa elemen//

numbers.forEach((number) => { //event listener ditambah  ke setiap elemen  dengen menggunakan method foEach//
    number.addEventListener("click" , (event) =>{ //menambahkan event ke setiap elemen dengan menggunakan addEventListener//
        inputNumber(event.target.value) //manambahkan event.target.value untuk mengakses angka//
        updateScreen(currentNumber) //Mendefinisikan function "updateScreen" untuk memperbarui nilai
    })
})

const calculatorScreen = document.querySelector(".calculator-screen") //

const updateScreen = (number) => { //Mendefinisikan function "updateScreen" untuk memperbarui nilai//
    calculatorScreen.value = number  
}

const inputNumber = ((number) => {
    if (currentNumber === 0) {
        currentNumber = number 
    } else {
        currentNumber += number
    }
})
//Menyimpan angka-angka dan operator untuk melakukan kalkulasi//
//Mendefinisikan 3 variable yaitu prevNumber, calculatorOperator dan currentNumber. Nilai awal currentNumber adalah 0//
let prevNumber =''
let calculatorOperator = ''
let currentNumber =''
  
const operators = document.querySelectorAll(".operator") //Mengkonfigurasi angka dengan mengambil elemen-elemen <button> menggunakan class "operator" dan tambahkan click event ke setiap tombol operator//

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    if (calculatorOperator ==='') {
        prevNumber = currentNumber //Mmemberikan nilai yang tersimpan di currentNumber ke prevNumber//
    }
    calculatorOperator = operator //Memberikan operator ke calculationOperator sebagai suatu argumen
    currentNumber = '' //Kosongkan currentNumber
}

const equalSign = document.querySelector('.equal-sign') //Mengaktifkan fungsi kalkulasi ke aplikasi calculator//

equalSign.addEventListener('click', () => { //definiskan function "calculate" dan jalankan saat tombol (=) di klik//
    calculate()
    updateScreen(currentNumber) //Menjalankan function calculate saat tombol "=" di klik dan perbarui layarnya//
})

const calculate = () => { //Definisikan function calculator. terdapat 4 pola yaitu +,-,*,/. tambahkan 4 kasus ini tergantung terhadap nilai yang tersimpan di calculationOperator//
    let result = ''
    switch(calculatorOperator) {
        case '+':
            result = parseFloat (prevNumber) + parseFloat(currentNumber)//perbarui variable prevNumber dan currentNumber//
            break
        case '-':
            result = parseFloat (prevNumber) - parseFloat(currentNumber) //perbarui variable prevNumber dan currentNumber//
            break
        case '*':
            result = parseFloat (prevNumber) * parseFloat(currentNumber) //perbarui variable prevNumber dan currentNumber//
            break 
        case '/':
            result = parseFloat (prevNumber) / parseFloat(currentNumber) //perbarui variable prevNumber dan currentNumber//
            break
        default :
            return
    }
    currentNumber = result 
    calculatorOperator = ''
}

const percentange = () =>{
    prevNumber = '/100'
    calculatorOperator = ''
    currentNumber =''
}

const clearAll = () => { //Membuat tombol AC berjalan dengan lancar dengan mendefinidkan function "clearAll"//
    prevNumber = ''
    calculatorOperator = ''
    currentNumber =''
}

const clearBtn = document.querySelector('.all-clear') //ambil elemen <button> menggunakan class "all-clear" dan tambahkan click event//

clearBtn.addEventListener('click', () => {
    clearAll() //definisikan function "clearAll"//
    updateScreen(currentNumber) //Berfungsi untuk menjalankan function saat tombol AC di klik dan perbarui layar tampilan setelah itu//
})

const decimal = document.querySelector('.decimal') // Membuat aplikasi dapat mengkalkulasi angka desimal//

decimal.addEventListener('click', (event) => { 
    inputDecimal(event.target.value) //Definisikan function "inputDecimal" dan tambahkan desimal ke currentNumber//
    updateScreen(currentNumber)
})

inputDecimal = (dot ) => {
   if (currentNumber.includes('.')) { //Menambahkan function inputDecimal sebelum titik desimal ditambahkan ke currentNumber//
       return
   }
        currentNumber += dot
}

//Langkah yang dilakukan untuk menguji program kalkulator ini yaitu dengan ://
//1. Pertama-tama menginstall extensions Live Server//
//2. Setelah live Server berhasil terinstall kembali ke jendela editor codingan yang sudah selesai pada Visual Studio Code.//
//3. Lalu arahkan pada jendela editor index.html kemudian klik kanan dan pilih "Open with Live Server".//
//4. Setelah itu, maka codingan kita akan muncul secara otomatis muncul di browser. Dalam web browswe inilah kita dapat mengetahui apakah program kalkulator yang kita bisa berjalan atau tidak.//
//5. Untuk mengetahui kesalahan syntax dalam codingan, didalam Visual Studio Code sudah secara otomatis terdeteksi dengan tanda merah pada baris yang codingannya salah.// 
//6. Apabila terdapat tanda merah pada baris codingan maka sudah pasti terdapat coding yang salah, baik dari segi huruf,tulisan, maupun simbol. Jadi kita harus merubah syntax codingan yang salah tersebut agar program kita bisa berjalan.//

