/*Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
    1. Write a function 'calcTip' that takes any bill value as an input and returns
    the corresponding tip, calculated based on the rules above (you can check out
    the code from first tip calculator challenge if you need to). Use the function
    type you like the most. Test the function using a bill value of 100

    2. And now let's use arrays! So create an array 'bills' containing the test data
    below.

    3. Create an array 'tips' containing the tip value for each bill, calculated from
    the function you created before

    4. Bonus: Create an array 'total' containing the total values, so the bill + tip
    Test data: 125, 555 and 44

Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) 😉

GOOD LUCK 😀*/

const calcTip = billValue => (billValue >= 50 && billValue <= 300) ? (15 * billValue) / 100 : (20 * billValue) / 100;
console.log(`Tip for bill value of 100 is  ${calcTip(100)}`);

const bills = [125, 555, 44];

const tips = bills.map(bill => calcTip(bill));
console.log('Tips array', tips);

const total = bills.map(bill => calcTip(bill) + bill);
console.log('Total', total)



