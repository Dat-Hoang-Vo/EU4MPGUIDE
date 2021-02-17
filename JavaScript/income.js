function getMonthlyTaxIncome() {
    var efficiency = document.getElementById("provincial_tax_efficiency").value;
    var autonomy = 1 - parseInt(document.getElementById("provincial_autonomy").value * 100) / 100;

    document.getElementById("total_monthly_tax").innerHTML = (1 / 12) * efficiency * autonomy;
}

function getMonthlyProductionIncome() {
    var autonomy = 1 - document.getElementById("provincial_autonomy_production").value;

    var overall_production_efficiency = 1.0 + parseInt(document.getElementById("production_efficiency").value * 100) / 100;
    console.log(overall_production_efficiency);

    var trade_control = document.getElementById("trade_control").value;
    var trade_efficiency = 1 + parseInt(document.getElementById("trade_efficiency").value * 100) / 100;


    var goods_value = document.getElementById("goods_value").value;
    var goods_modifier = 1 + parseInt(document.getElementById("goods_produced").value * 100) / 100;

    var goods_produced = goods_modifier * 0.2 * goods_value;


    var monthly_production_income = (goods_produced * overall_production_efficiency * autonomy) / 12;
    var monthly_trade_income = (goods_produced * trade_efficiency * trade_control) / 12;

    document.getElementById("total_monthly_production").innerHTML = monthly_trade_income + monthly_production_income;
}