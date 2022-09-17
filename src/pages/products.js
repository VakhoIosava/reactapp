import '../App.css';
import axios from "axios";
import React from "react";
import apiClient from '../api';

// const client = axios.create({
//   baseURL: "http://localhost:8080/laravelapi/laravelapi/public/index.php" 
// });
// axios.defaults.headers.common = {
//   'X-Requested-With': 'XMLHttpRequest',
//   'X-CSRF-TOKEN': window.csrf_token
// };

// function Product() {
//   const [products, setProduct] = React.useState(null);

//   React.useEffect(() => {
//     async function getProduct() {
//       const response = await client.get("/api/products");
//       setProduct(response.data);
//     }
//     getProduct();
//   }, []);


//   async function deleteProduct() {
//     await client.delete("/3");
//     alert("Product deleted!");
//     setProduct(null);
//   }

//   if (!products) return "No product!"

//   const ProductList = products.map((product) =>
//     <div className="product-card" style={{background: "wheat"}} key={product.id}>
//         <h2 className="product-title">{product.name}</h2>
//         <p className="product-body">{product.description}</p>
//         <div className="button">
//             <button onClick={deleteProduct}>Delete</button>
//         </div>
//     </div>
//     )

//   return (
//     <div className="app">
//         <h2>All Product 📫</h2>
//         {ProductList}

//     </div>
//   );
// }

const Product = () => {
  const [products, setProduct] = React.useState([]);
  React.useEffect(() => {
      // if (props.loggedIn) {
      //     apiClient.get('/api/products')
      //     .then(response => {
      //         setProduct(response.data)
      //     })
      //     .catch(error => console.error(error));
      // }
        apiClient.get('/api/products')
        .then(response => {
            setProduct(response.data)
        })
        .catch(error => console.error(error));
  }, []);
  const ProductList = products.map((product) => 
      <div key={product.id}
          className="list-group-item">
          <h5>{product.name}</h5>
          <small>{product.description}</small>
      </div>
  );  
  return (
    <div className="app">
        <h2>All Product 📫</h2>
        <div style={{background: "wheat"}}>
          {ProductList}
        </div>

    </div>
  );
  // if (props.loggedIn) {
  //     return (
  //         <div className="list-group">{ProductList}</div>
  //     );
  // }
  // return (
  //     <div className="alert alert-warning">You are not logged in.</div>
  // );
};

export default Product;