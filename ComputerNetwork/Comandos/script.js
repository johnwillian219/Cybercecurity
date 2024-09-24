//----------------------------Função para o funcionamento do progresso---------------------------------//
function updateCheckbox(checkbox) {
    const index = checkbox.getAttribute('data-index');
    localStorage.setItem(`checkbox_${index}`, checkbox.checked);
}

// Carrega o estado dos checkboxes ao carregar a página secundária
document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach((checkbox) => {
        const index = checkbox.getAttribute('data-index');
        const isChecked = localStorage.getItem(`checkbox_${index}`) === 'true';
        checkbox.checked = isChecked;
    });
});


//individual
function updateComputerCheckbox(checkbox) {
    const count = parseInt(localStorage.getItem('computerCheckedCount')) || 0;
    if (checkbox.checked) {
        localStorage.setItem('computerCheckedCount', count + 1);
    } else {
        localStorage.setItem('computerCheckedCount', count - 1);
    }
    updateComputerProgress();
}

// Atualiza o progresso ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const computerCount = parseInt(localStorage.getItem('computerCheckedCount')) || 0;
    const computerCheckboxes = document.querySelectorAll('#computer-networks-menu input[type="checkbox"]');

    computerCheckboxes.forEach((checkbox, index) => {
        checkbox.checked = index < computerCount; // Marca os checkboxes com base na contagem
    });

    updateComputerProgress();
});