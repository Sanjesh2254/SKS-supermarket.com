let items = [];

function addItem() {
    const item = prompt("Enter item name:");
    const quantity = parseInt(prompt("Enter quantity:"));
    const price = parseFloat(prompt("Enter price:"));
   
    if (item && !isNaN(quantity) && !isNaN(price)) {
        items.push({ item, quantity, price });
        displayItems();
    } else {
        alert("Please enter valid input.");
    }
}

function displayItems() {
    const tableBody = document.getElementById("invoice-items");
    tableBody.innerHTML = "";
    let subtotal = 0;
   
    items.forEach(item => {
        const total = item.quantity * item.price;
        subtotal += total;
        const row = `
            <tr>
                <td>${item.item}</td>
                <td>${item.quantity}</td>
                <td>${item.price}</td>
                <td>${total}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });

    const tax = subtotal * 0.1;
    const totalAmount = subtotal + tax;
    document.getElementById("subtotal").textContent = subtotal.toFixed(2);
    document.getElementById("tax").textContent = tax.toFixed(2);
    document.getElementById("total").textContent = totalAmount.toFixed(2);
}

function generateInvoice() {
    if (items.length === 0) {
        alert("No items added to the invoice.");
    } else {
        alert("Invoice generated successfully!");
    }
}

function printInvoice() {
    var remove_buttons = document.getElementById("print-invoice");
    remove_buttons.parentNode.removeChild(remove_buttons);

    var add_items = document.getElementById("add-item");
    add_items.parentNode.removeChild(add_items);

    var print_invoices = document.querySelectorAll(".remove-button");
    print_invoices.forEach(function(each) {
        each.parentNode.removeChild(each);
    });
    window.print();
    window.location.href = 'file:///C:/Users/sselv/OneDrive/Desktop/sanjesh/home.html';
}


function displayItems() {
    const tableBody = document.getElementById("invoice-items");
    tableBody.innerHTML = "";
    let subtotal = 0;
   
    items.forEach((item, index) => { 
        const total = item.quantity * item.price;
        subtotal += total;
        const row = `
            <tr>
                <td>${item.item}</td>
                <td>${item.quantity}</td>
                <td>${item.price}</td>
                <td>${total}</td>
                <td class="remove-button"><button onclick="removeItem(${index})" class="remove-item">Remove</button></td> <!-- Remove button with onclick event -->
            </tr>
        `;
        tableBody.innerHTML += row;
    });

    const tax = subtotal * 0.05;
    const totalAmount = subtotal + tax;
    document.getElementById("subtotal").textContent = subtotal.toFixed(2);
    document.getElementById("tax").textContent = tax.toFixed(2);
    document.getElementById("total").textContent = totalAmount.toFixed(2);
}

function removeItem(index) {
    items.splice(index, 1); 
    displayItems(); 
}

