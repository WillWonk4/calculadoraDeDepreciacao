function calculateDepreciation() {
    const initialValue = parseFloat(document.getElementById("initialValue").value);
    const residualValue = parseFloat(document.getElementById("residualValue").value);
    const lifeSpan = parseFloat(document.getElementById("lifeSpan").value);
    const usedHours = parseFloat(document.getElementById("usedHours").value);

    if (isNaN(initialValue) || isNaN(residualValue) || isNaN(lifeSpan) || isNaN(usedHours)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    const depreciableValue = initialValue - residualValue;
    const hourlyDepreciationRate = depreciableValue / lifeSpan;
    const depreciationAmount = hourlyDepreciationRate * usedHours;

    document.getElementById("result").innerHTML = `
        <p>Valor Depreciável: R$ ${depreciableValue.toFixed(2)}</p>
        <p>Depreciação por Hora/Dia: R$ ${hourlyDepreciationRate.toFixed(2)}</p>
        <p>Valor Depreciado pelas Horas/Dias Trabalhadas: R$ ${depreciationAmount.toFixed(2)}</p>
    `;
}
