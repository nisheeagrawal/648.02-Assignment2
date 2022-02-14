"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var InventoryTable =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InventoryTable, _React$Component);

  function InventoryTable() {
    _classCallCheck(this, InventoryTable);

    return _possibleConstructorReturn(this, _getPrototypeOf(InventoryTable).apply(this, arguments));
  }

  _createClass(InventoryTable, [{
    key: "render",
    value: function render() {
      var productRows = this.props.products.map(function (product) {
        return React.createElement(ProductRow, {
          key: product.id,
          product: product
        });
      });
      return React.createElement("table", {
        className: "bordered-table"
      }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {
        className: "bordered-table"
      }, "Product Name"), React.createElement("th", {
        className: "bordered-table"
      }, "Price"), React.createElement("th", {
        className: "bordered-table"
      }, "Category"), React.createElement("th", {
        className: "bordered-table"
      }, "Image"))), React.createElement("tbody", null, productRows));
    }
  }]);

  return InventoryTable;
}(React.Component);

var ProductRow =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(ProductRow, _React$Component2);

  function ProductRow() {
    _classCallCheck(this, ProductRow);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductRow).apply(this, arguments));
  }

  _createClass(ProductRow, [{
    key: "render",
    value: function render() {
      var product = this.props.product;
      return React.createElement("tr", null, React.createElement("td", {
        className: "bordered-table"
      }, product.productName), React.createElement("td", {
        className: "bordered-table"
      }, '$' + product.pricePerUnit), React.createElement("td", {
        className: "bordered-table"
      }, product.category), React.createElement("td", {
        className: "bordered-table"
      }, " ", React.createElement("a", {
        href: product.imageUrl,
        rel: "noopener noreferrer",
        target: "_blank"
      }, "View")));
    }
  }]);

  return ProductRow;
}(React.Component);

var ProductAdd =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(ProductAdd, _React$Component3);

  function ProductAdd() {
    var _this;

    _classCallCheck(this, ProductAdd);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProductAdd).call(this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ProductAdd, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.productAdd;
      var product = {
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
  }, {
    key: "render",
    value: function render() {
      return React.createElement("form", {
        id: "inventoryForm",
        name: "productAdd",
        onSubmit: this.handleSubmit
      }, React.createElement("table", {
        className: "formTable"
      }, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", {
        className: "formTableData"
      }, "Category"), React.createElement("td", {
        className: "formTableData"
      }, "Price Per Unit")), React.createElement("tr", null, React.createElement("td", {
        className: "formTableData"
      }, React.createElement("select", {
        id: "categoryList",
        name: "category"
      }, React.createElement("option", {
        value: " "
      }), React.createElement("option", {
        value: "Shirts"
      }, "Shirts"), React.createElement("option", {
        value: "Jeans"
      }, "Jeans"), React.createElement("option", {
        value: "Jackets"
      }, "Jackets"), React.createElement("option", {
        value: "Sweaters"
      }, "Sweaters"), React.createElement("option", {
        value: "Accessories"
      }, "Accessories"))), React.createElement("td", {
        className: "formTableData"
      }, React.createElement("input", {
        type: "text",
        name: "pricePerUnit",
        defaultValue: "$"
      }))), React.createElement("tr", null, React.createElement("td", {
        className: "formTableData"
      }, "Product Name"), React.createElement("td", {
        className: "formTableData"
      }, "Image URL")), React.createElement("tr", null, React.createElement("td", {
        className: "formTableData"
      }, React.createElement("input", {
        type: "text",
        name: "productName"
      })), React.createElement("td", {
        className: "formTableData"
      }, React.createElement("input", {
        type: "text",
        name: "imageUrl"
      }))))), React.createElement("button", {
        id: "Button_1"
      }, "Add Product"));
    }
  }]);

  return ProductAdd;
}(React.Component);

var Inventory =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(Inventory, _React$Component4);

  function Inventory() {
    var _this2;

    _classCallCheck(this, Inventory);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Inventory).call(this));
    _this2.state = {
      products: []
    };
    _this2.createProduct = _this2.createProduct.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(Inventory, [{
    key: "createProduct",
    value: function createProduct(product) {
      product.id = this.state.products.length + 1;
      var newInventory = this.state.products.slice();
      newInventory.push(product);
      this.setState({
        products: newInventory
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this3 = this;

      setTimeout(function () {
        _this3.setState({
          products: []
        });
      }, 500);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(React.Fragment, null, React.createElement("h1", null, "My Company Inventory"), React.createElement("div", {
        id: "tableHeader"
      }, "Showing all available products"), React.createElement("hr", null), React.createElement(InventoryTable, {
        products: this.state.products
      }), React.createElement("div", {
        id: "fieldsHeader"
      }, "Add a new product to inventory"), React.createElement("hr", null), React.createElement(ProductAdd, {
        createProduct: this.createProduct
      }));
    }
  }]);

  return Inventory;
}(React.Component);

var element = React.createElement(Inventory, null);
ReactDOM.render(element, document.getElementById('content'));
