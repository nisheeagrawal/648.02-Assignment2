class InventoryTable extends React.Component {
	render() {
		const productRows = this.props.products.map(product => React.createElement(ProductRow, { key: product.id, product: product }));

		return React.createElement(
			"table",
			{ className: "bordered-table" },
			React.createElement(
				"thead",
				null,
				React.createElement(
					"tr",
					null,
					React.createElement(
						"th",
						{ className: "bordered-table" },
						"Product Name"
					),
					React.createElement(
						"th",
						{ className: "bordered-table" },
						"Price"
					),
					React.createElement(
						"th",
						{ className: "bordered-table" },
						"Category"
					),
					React.createElement(
						"th",
						{ className: "bordered-table" },
						"Image"
					)
				)
			),
			React.createElement(
				"tbody",
				null,
				productRows
			)
		);
	}
}

class ProductRow extends React.Component {
	render() {
		const product = this.props.product;
		return React.createElement(
			"tr",
			null,
			React.createElement(
				"td",
				{ className: "bordered-table" },
				product.productName
			),
			React.createElement(
				"td",
				{ className: "bordered-table" },
				'$' + product.pricePerUnit
			),
			React.createElement(
				"td",
				{ className: "bordered-table" },
				product.category
			),
			React.createElement(
				"td",
				{ className: "bordered-table" },
				" ",
				React.createElement(
					"a",
					{ href: product.imageUrl, rel: "noopener noreferrer", target: "_blank" },
					"View"
				)
			)
		);
	}
}

class ProductAdd extends React.Component {

	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const form = document.forms.productAdd;
		const product = {
			category: form.category.value,
			pricePerUnit: form.pricePerUnit.value.replace('$', ''),
			productName: form.productName.value,
			imageUrl: form.imageUrl.value
		};

		this.props.createProduct(product);
		form.category.value = " ";
		form.pricePerUnit.value = "$";
		form.productName.value = "";
		form.imageUrl.value = "";
	}

	render() {
		return React.createElement(
			"form",
			{ id: "inventoryForm", name: "productAdd", onSubmit: this.handleSubmit },
			React.createElement(
				"table",
				{ className: "formTable" },
				React.createElement(
					"tbody",
					null,
					React.createElement(
						"tr",
						null,
						React.createElement(
							"td",
							{ className: "formTableData" },
							"Category"
						),
						React.createElement(
							"td",
							{ className: "formTableData" },
							"Price Per Unit"
						)
					),
					React.createElement(
						"tr",
						null,
						React.createElement(
							"td",
							{ className: "formTableData" },
							React.createElement(
								"select",
								{ id: "categoryList", name: "category" },
								React.createElement("option", { value: " " }),
								React.createElement(
									"option",
									{ value: "Shirts" },
									"Shirts"
								),
								React.createElement(
									"option",
									{ value: "Jeans" },
									"Jeans"
								),
								React.createElement(
									"option",
									{ value: "Jackets" },
									"Jackets"
								),
								React.createElement(
									"option",
									{ value: "Sweaters" },
									"Sweaters"
								),
								React.createElement(
									"option",
									{ value: "Accessories" },
									"Accessories"
								)
							)
						),
						React.createElement(
							"td",
							{ className: "formTableData" },
							React.createElement("input", { type: "text", name: "pricePerUnit", defaultValue: "$" })
						)
					),
					React.createElement(
						"tr",
						null,
						React.createElement(
							"td",
							{ className: "formTableData" },
							"Product Name"
						),
						React.createElement(
							"td",
							{ className: "formTableData" },
							"Image URL"
						)
					),
					React.createElement(
						"tr",
						null,
						React.createElement(
							"td",
							{ className: "formTableData" },
							React.createElement("input", { type: "text", name: "productName" })
						),
						React.createElement(
							"td",
							{ className: "formTableData" },
							React.createElement("input", { type: "text", name: "imageUrl" })
						)
					)
				)
			),
			React.createElement(
				"button",
				{ id: "Button_1" },
				"Add Product"
			)
		);
	}
}

class Inventory extends React.Component {

	constructor() {
		super();
		this.state = { products: [] };
		this.createProduct = this.createProduct.bind(this);
	}

	createProduct(product) {
		product.id = this.state.products.length + 1;
		const newInventory = this.state.products.slice();
		newInventory.push(product);
		this.setState({ products: newInventory });
	}

	componentDidMount() {
		this.loadData();
	}

	loadData() {
		setTimeout(() => {
			this.setState({ products: [] });
		}, 500);
	}

	render() {
		return React.createElement(
			React.Fragment,
			null,
			React.createElement(
				"h1",
				null,
				"My Company Inventory"
			),
			React.createElement(
				"div",
				{ id: "tableHeader" },
				"Showing all available products"
			),
			React.createElement("hr", null),
			React.createElement(InventoryTable, { products: this.state.products }),
			React.createElement(
				"div",
				{ id: "fieldsHeader" },
				"Add a new product to inventory"
			),
			React.createElement("hr", null),
			React.createElement(ProductAdd, { createProduct: this.createProduct })
		);
	}
}

const element = React.createElement(Inventory, null);

ReactDOM.render(element, document.getElementById('content'));
