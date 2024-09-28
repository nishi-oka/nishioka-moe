document.addEventListener("DOMContentLoaded", function(){
	fetch('./data/product.json')
		.then(response => response.json())
		.then(products => {
			const productTable = document.getElementById('productTable');
			for (let i = 0; i < products.length; i++){
				const product = products[i];
				const createRow = document.createElement("tr");

				const idCell = document.createElement("td");
				idCell.textContent = product.id;
        createRow.appendChild(idCell);
				const nameCell = document.createElement("td");
        nameCell.textContent = product.name;
        createRow.appendChild(nameCell);
        const priceCell = document.createElement("td");
        priceCell.textContent = `${product.price}円`;
        createRow.appendChild(priceCell);
        const descriptionCell = document.createElement("td");
        descriptionCell.textContent = product.description;
        createRow.appendChild(descriptionCell);
				productTable.appendChild(createRow);
			}
		})
		.catch(error => console.error("エラー：", error));
});