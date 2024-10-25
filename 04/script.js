const form = document.querySelector('form');
const list = document.querySelector('tbody');

function addProduct(product) {
    const tr = document.createElement('tr');

    const name = document.createElement('td');
    name.innerText = product.name;

    const price = document.createElement('td');
    price.innerText = product.price;

    const qty = document.createElement('td');
    qty.innerText = product.qty;

    const del = document.createElement('td');
    del.addEventListener('click', (e) => {
        e.stopPropagation();
        list.removeChild(tr);
    });
    const delBtn = document.createElement('button');
    delBtn.innerText = 'DELETE';
    del.appendChild(delBtn);

    const edit = document.createElement('td');
    const editBtn = document.createElement('button');
    editBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const newName = prompt(
            'Edit your product name:',
            tr.firstChild.textContent
        );
        if (newName !== null && newName.trim() !== '') {
            tr.firstChild.textContent = newName.trim();
        }
    });
    editBtn.innerText = 'EDIT';
    edit.appendChild(editBtn);

    tr.appendChild(name);
    tr.appendChild(price);
    tr.appendChild(qty);
    tr.appendChild(edit);
    tr.appendChild(del);

    list.appendChild(tr);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('input[name="name"]');
    const price = document.querySelector('input[name="price"]');
    const qty = document.querySelector('input[name="qty"]');

    const product = {
        name: name.value,
        price: Number(price.value),
        qty: Number(qty.value)
    };

    addProduct(product);
});
