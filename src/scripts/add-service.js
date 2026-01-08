// Declare values
if (document.querySelector('.assembler--container')) {
    const addBtn = document.getElementById('add-btn');
    const inputVal = document.getElementById('added-text');
    const displayOutput = document.querySelector('.output');

    const serviceArr = [];
    
    
    // Render function: always rebuild UI from the array
    function renderServices() {
        displayOutput.innerHTML = serviceArr
            .map(
                (service, index) => `
        <div class="added-row" data-index="${index}">
          <div class="text">
            <span class="number">${index + 1}.</span>
            ${service}
          </div>
          <div class="bg-delete"></div>
        </div>
      `
            )
            .join('');
    }

    // Add service
    function createElem(e) {
        e.preventDefault();

        const value = inputVal.value.trim();

        console.log(value);
        
        if (!value) {
            alert('Please add some service!');
            return;
        }

        serviceArr.push(value);
        inputVal.value = '';

        renderServices();
    }

    // Add ev listenere on add button
    if (addBtn) {
        addBtn.addEventListener('click', createElem);
    }

    displayOutput.addEventListener('click', (event) => {
        const deleteBtn = event.target.closest('.bg-delete');
        if (!deleteBtn) return;

        const row = deleteBtn.closest('.added-row');
        if (!row) return;

        const index = Number(row.dataset.index);
        if (!Number.isNaN(index)) {
            serviceArr.splice(index, 1); // remove from array
            renderServices();            // re-render => numbers reorder
        }
    });

}
