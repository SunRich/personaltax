Page({
    data: {
        wage: 0,
        beginMoney: 0,
        tax:0
    },
    onLoad: function (e) {
        var tax=this.getTax(e.wage,e.beginMoney);
        console.log(tax);
        this.setData({
            beginMoney: e.beginMoney,
            wage: e.wage,
            tax:tax
        });
        console.log(e);
    },
    getTax: function (salary, beginMoney) {
        var criticalAarray = [0, 1500, 4500, 9000, 35000, 55000, 80000];
        var taxRatesArray = [0, 0.03, 0.10, 0.20, 0.25, 0.30, 0.35, 0.45];
        var tax = 0;
        var needTax = salary - beginMoney;
        if (needTax > 0) {
            for (var i = 1; i < criticalAarray.length; i++) {
                if (needTax >= criticalAarray[i]) {
                    tax = tax + (criticalAarray[i] - criticalAarray[i - 1]) * taxRatesArray[i];
                } else {
                    tax = tax + (needTax - criticalAarray[i - 1]) * taxRatesArray[i];
                    break;
                }
            }
        }
        return tax;
    }
})