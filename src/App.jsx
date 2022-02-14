class InventoryTable extends React.Component{
	render(){ 
		const productRows = this.props.products.map(product => <ProductRow key={product.id} product={product}/>);

		return(
			<table className="bordered-table">
				<thead>
					<tr>
						<th className="bordered-table">Product Name</th>
						<th className="bordered-table">Price</th>
						<th className="bordered-table">Category</th>
						<th className="bordered-table">Image</th>
					</tr>
				</thead>
				<tbody>
					{productRows}
				</tbody>
			</table>
		);
	}
}

class ProductRow extends React.Component{
	render(){
		const product = this.props.product;
		return(		
			<tr>
				<td className="bordered-table">{product.productName}</td>  
				<td className="bordered-table">{'$' + product.pricePerUnit}</td>
				<td className="bordered-table">{product.category}</td>
				<td className="bordered-table"> <a href= {product.imageUrl} rel="noopener noreferrer" target="_blank">View</a></td>
			</tr>
		);
	}
}

class ProductAdd extends React.Component{

	constructor(){
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const form = document.forms.productAdd;
		const product = {
			category: form.category.value,
			pricePerUnit: form.pricePerUnit.value.replace('$',''),
			productName: form.productName.value,
			imageUrl: form.imageUrl.value,
		}

		this.props.createProduct(product);
		form.category.value = " ";
		form.pricePerUnit.value = "$";
		form.productName.value = "";
		form.imageUrl.value = "";
	}

	render(){
		return(
			<form id="inventoryForm" name="productAdd" onSubmit={this.handleSubmit}>
				<table className="formTable">
					<tbody>
						<tr>
							<td className="formTableData">
								Category
							</td>
							<td className="formTableData">
								Price Per Unit
							</td>
						</tr>

						<tr>
							<td className="formTableData">
								<select id="categoryList" name="category">
									<option value = " "></option>
									<option value = "Shirts">Shirts</option>
									<option value = "Jeans">Jeans</option>
									<option value = "Jackets">Jackets</option>
									<option value = "Sweaters">Sweaters</option>
									<option value = "Accessories">Accessories</option>
							    </select>
							</td>
							<td className="formTableData">
								<input type="text" name="pricePerUnit" defaultValue="$"/>
							</td>
						</tr>

						<tr>
							<td className="formTableData">
								Product Name
							</td>
							<td className="formTableData">
								Image URL
							</td>

						</tr>

						<tr>
							<td className="formTableData">
								<input type="text" name="productName"/>
							</td>
							<td className="formTableData">
								<input type="text" name="imageUrl"/>
							</td>
						</tr>
					</tbody>
				</table>

				<button id="Button_1">Add Product</button>
			</form>
		);
	}
}

class Inventory extends React.Component{

	constructor(){
		super();
		this.state = {products: []};
		this.createProduct = this.createProduct.bind(this);
	}

	createProduct(product){
		product.id = this.state.products.length + 1;
		const newInventory = this.state.products.slice();
		newInventory.push(product);
		this.setState({products: newInventory});
	}

	componentDidMount(){
		this.loadData();
	}

	loadData(){
		setTimeout(() =>{
			this.setState({products: []});
		}, 500);
	}

	render(){
		return(
			<React.Fragment>
				<h1>My Company Inventory</h1>
				<div id="tableHeader">Showing all available products</div>
				<hr/>
				<InventoryTable  products={this.state.products} />
				<div id="fieldsHeader">Add a new product to inventory</div>
				<hr />
				<ProductAdd createProduct={this.createProduct} />
			</React.Fragment>
		);
	}
}

const element = <Inventory/>;

ReactDOM.render(element, document.getElementById('content'));
