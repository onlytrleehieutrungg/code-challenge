var sum_to_n_a = function (n) {
    var sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};

var sum_to_n_b = function (n) {
    if (n <= 1) {
        return n;
    }
    return n + sum_to_n_b(n - 1);
};

var sum_to_n_c = function (n) {
    return n * (n + 1) / 2;
};

console.log("function a:",sum_to_n_a(5));
console.log("function b:",sum_to_n_b(5));
console.log("function c:",sum_to_n_c(5));
