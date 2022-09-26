import { useRouter } from "next/router";


const ProductDetail = () => {
    const router = useRouter();
    const productID = router.query.productId
    return ( 
        <h1>
        Product {productID}
      </h1>
     );
}
 
export default ProductDetail;