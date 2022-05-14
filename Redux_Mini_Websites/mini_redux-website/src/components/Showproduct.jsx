// const ShowProducts = (products) => {
//   return (
//     <>
//       <div className="buttons d-flex justify-content-center mb-5 pb-5">
//         <button
//           onClick={() => setfilter(data)}
//           className="btn btn-outline-dark me-2"
//         >
//           All
//         </button>
//         <button
//           onClick={() => filterProduct("men's clothing")}
//           className="btn btn-outline-dark me-2"
//         >
//           Men Clothes
//         </button>
//         <button
//           onClick={() => filterProduct("women's clothing")}
//           className="btn btn-outline-dark me-2"
//         >
//           Women Clothes
//         </button>
//         <button
//           onClick={() => filterProduct("jewelery")}
//           className="btn btn-outline-dark me-2"
//         >
//           Jewwellery
//         </button>
//         <button
//           onClick={() => filterProduct("electronics")}
//           className="btn btn-outline-dark me-2"
//         >
//           Electronoics
//         </button>
//       </div>
//       {filter.map((product) => {
//         return (
//           <>
//             <div className="col-md-3 mb-4">
//               <div class="card h-100 text-center p-4 " key={product.id}>
//                 <img
//                   src={product.image}
//                   class="card-img-top"
//                   height="200px"
//                   alt={product.title}
//                 />
//                 <div class="card-body">
//                   <h5 class="card-title mb-0 ">
//                     {product.title.substring(0, 12)}"
//                   </h5>
//                   <p class="card-text fw-bold">"PRICE" ${product.price}</p>
//                   <NavLink
//                     to={`product/${product.id}`}
//                     className="btn btn-outline-dark"
//                   >
//                     BuyNow
//                   </NavLink>
//                 </div>
//               </div>
//             </div>
//           </>
//         );
//       })}
//     </>
//   );
// };
