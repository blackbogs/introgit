console.log("===[Module Exercise No.1]===");
// Case : Write a code to display the multiplication table of a given integer!

let perkalian = 8; //<--- masukkan input disini
console.log(`tabel perkalian dari ${perkalian}`);

for (let i = 1; i <= 10; i++) //<--- untuk menambah panjang tabel perkalian, angka 10 dapat diganti sesuai keinginan
{console.log(`${perkalian} * ${i} = ${perkalian * i}`)};

// ========================================================================================================================

console.log("");
console.log("===[Module Exercise No.2]===");
// case : Write a code to check whether a string is a palindrome or not!

let palindromeChecker = ("saippuakivikauppias"); // <--- masukan input disini

let left = 0;
let right = palindromeChecker.length - 1;
let isPalindrome = true;

while (left < right)
{
    if (palindromeChecker[left] !== palindromeChecker[right])
    {
        isPalindrome = false;
        break;
    }

    left++;
    right--;
}

if (isPalindrome)
{console.log(`${palindromeChecker} is a Palindrome word.`);}
else
{console.log(`${palindromeChecker} is not a Palindrome word.`);}


// ========================================================================================================================

console.log("");
console.log("===[Module Exercise No.3]===");
// case : Write acode to convert centimeter to kilometer!

let cm = 500000; //<--- masukkan input disini
let km = cm / 100000;
console.log(`${cm}cm sama dengan ${km}km`);

// ========================================================================================================================

console.log("");
console.log("===[Module Exercise No.4]===");
//Write a code to format number as currency (IDR)!

var nominal = 1000000; //<--- masukkan input disini
var nominal = nominal.toString()
let formatNominal = nominal.toString().length;
let newFormat = '';
for (let i = formatNominal; i > 0; i--)
{
    newFormat += nominal[formatNominal - i]
    if ((i - 1) % 3 == 0 && (i - 1) != 0)
    {newFormat += '.'}
}
console.log(`Rp. ${newFormat},00`);