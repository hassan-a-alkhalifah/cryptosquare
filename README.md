* The program rejects non-number entries
    * Input Example: "Cao8jew-=”
    * Output Example: Error (e.g. a message like “Please enter a number”) -->
          SOLUTION: number-type input rejects non-numbers
* The program rejects letters.
    * Input Example: abc
    * Output Example: Error (e.g. a message like “Please enter a single number”)
* The program rejects special characters.
    * Input Example: !@#
    * Output Example: Error
* The program only converts 1 number at a time.
    * Input Example: 3928 222 33
    * Output Example: Error (e.g. a message like “Please enter a single number”)
* The program can convert 1 into I.
    * Input Example: 1
    * Output Example: I
* The program converts single digit numbers into numerals.
    * Input Example: 9
    * Output Example     sfwe: IX
* The program converts 2, 3, & 4 digit numbers into numerals
    * Input Example: 2000
    * Output Example: MM
* The program doesn’t translate numbers greater than 3,999.
    * Input Example: 5000
    * Output Example:  Error (e.g. message like “This number is too high to be reflected in traditional Roman numerals.”
* The program knows how to read commas in legitimate numbers.
    * Input Example: 2,000
    * Output Example:  MM
* The program rejects negative numbers.
    * Input Example: - 12
    * Output Example:  MM
