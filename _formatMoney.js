// Format money
// source: https://javascript.plainenglish.io/7-killer-javascript-snippets-dbe49a9ccf11

// Option 1
function formatMoney(num) {
    return num.toLocaleString();
}

// Option 2
function formatMoney(num) {
    const nf = new Intl.NumberFormat();
    return nf.format(num);
}

// Option 3
function formatMoney(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Option 4
function formatMoney(num) {
    const arr = num.toString().split('');
    let index = -3;

    while (arr.length + index > 0) {
        arr.splice(index, 0, ',');
        index -= 4; 
    }

    return arr.join('');
}
  
  // 🎉 '20,220,316'
  console.log(formatMoney(20220316));
  