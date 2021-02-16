function getMonthlyTaxIncome() {
    var efficiency = document.getElementById("provincial_tax_efficiency").value;
    var autonomy = 1 - document.getElementById("provincial_autonomy").value;

    document.getElementById("total_monthly_tax").innerHTML = (1 / 12) * efficiency * autonomy;
}

function getMonthlyProductionIncome() {
    var autonomy = 1 - document.getElementById("provincial_autonomy_production").value;

    var overall_production_efficiency = 1 + document.getElementById("production_efficiency").value;

    var trade_control = document.getElementById("trade_control").value;
    var trade_efficiency = 1 + document.getElementById("trade_efficiency").value;


    var goods_value = document.getElementById("goods_value").value;
    var goods_modifier = 1 + document.getElementById("goods_produced").value;

    var goods_produced = goods_modifier * 0.2 * goods_value;


    var monthly_production_income = (goods_produced * overall_production_efficiency * autonomy) / 12;
    var monthly_trade_income = (goods_produced * trade_efficiency * trade_control) / 12;

    document.getElementById("total_monthly_production").innerHTML = monthly_trade_income + monthly_production_income;
}