// 7 scrolls

/*
M: 1000
D: 500
C: 100
L: 50
X: 10
V: 5
I: 1
*/

// Translate a numeral from Arabic to Roman notation
function arabicToRoman(num) {
  let ans = "";

  // The Romans used a space to denote 0 and had no concept of negatives, so
  // just end if the number is less than one
  if (num < 1) return ans;

  if (num >= 1000) ans = "M" + arabicToRoman(num - 1000);
  else if (num >= 900) ans = "CM" + arabicToRoman(num - 900);
  else if (num >= 500) ans = "D" + arabicToRoman(num - 500);
  else if (num >= 400) ans = "CD" + arabicToRoman(num - 400);
  else if (num >= 100) ans = "C" + arabicToRoman(num - 100);
  else if (num >= 90) ans = "XC" + arabicToRoman(num - 90);
  else if (num >= 50) ans = "L" + arabicToRoman(num - 50);
  else if (num >= 40) ans = "X" + arabicToRoman(num - 40);
  else if (num >= 10) ans = "X" + arabicToRoman(num - 10);
  else if (num >= 9) ans = "IX" + arabicToRoman(num - 9);
  else if (num >= 5) ans = "V" + arabicToRoman(num - 5);
  else if (num >= 4) ans = "IV" + arabicToRoman(num - 4);
  else ans = "I" + arabicToRoman(num - 1);

  return ans;
}

let [a, i] = [arabicToRoman(1003245), 0];
a.split("").forEach(x => (x == "M" ? i++ : (i = i)));

console.log(a);
console.log(`M count: ${i}`);
