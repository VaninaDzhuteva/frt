// Declare values
const addBtn = document.getElementById('add-btn');
const inputVal = document.getElementById('added-text');
const displayOutput = document.querySelector('.output');
let item = '';
const serviceArr = [];

// Add ev listenere on add button
if(addBtn) {
    addBtn.addEventListener('click', createElem);
}

// Create element function
function createElem (e) {
    // Check if input is empty
    if(inputVal.value === '') {
        alert('Please add some service!');
    } else {
        // add item to array
        serviceArr.push(inputVal.value);
        // clear input field
        inputVal.value = '';
        
        // Append newly created element
        serviceArr.forEach(function(el,index) {
            item = `
                <div class="added-row">
                        <div class="text">
                            <span class="number">${index + 1}.</span>
                            ${el}
                        </div>
                        <div class="bg-delete"></div>
                    </div>
                `;
        });
        // Append element
        displayOutput.insertAdjacentHTML('beforeend', item);

        // Select all ellements with class bg-delete
        const deleteBtn = document.querySelectorAll('.bg-delete');
        // Add ev listener on each delete button
        deleteBtn.forEach(function (e) {
            //remove parent element on click
            e.addEventListener('click', function(event){  
                if (event.target.className === 'bg-delete') { 
                    event.target.parentElement.remove();
                }
            });
        });
    }
    e.preventDefault();
}
