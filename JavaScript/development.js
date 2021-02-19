function updateTax() {
    var provincial_autonomy = 1 - parseInt(document.getElementById('tax_provincial_autonomy').value * 100) / 100;
    var provincial_tax_efficiency = document.getElementById('provincial_tax_efficiency').value;
    document.getElementById('taxSummary').innerHTML = ((1 / 12) * provincial_tax_efficiency * provincial_autonomy).toFixed(3) + ' Ducats';
}

function updateGoods() {
    var provincial_autonomy = 1 - parseInt(document.getElementById('goods_provincial_autonomy').value * 100) / 100;

    var overall_production_efficiency = 1 + parseInt(document.getElementById("provincial_production_efficiency").value * 100) / 100;

    var trade_control = document.getElementById("overall_trade_control").value;
    var trade_efficiency = 1 + parseInt(document.getElementById("trade_efficiency").value * 100) / 100;

    var goods_value = document.getElementById("goods_value").value;
    var goods_modifier = 1 + parseInt(document.getElementById("goods_produced").value * 100) / 100;

    var goods_produced = goods_modifier * 0.2 * goods_value;

    var monthly_production_income = (goods_produced * overall_production_efficiency * provincial_autonomy) / 12;
    var monthly_trade_income = (goods_produced * trade_efficiency * trade_control) / 12;

    document.getElementById("goodsSummary").innerHTML = (monthly_trade_income + monthly_production_income).toFixed(3) + ' Ducats';
}