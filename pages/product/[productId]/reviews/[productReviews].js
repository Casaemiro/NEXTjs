import { useRouter } from "next/router";
const ProductReviews = () => {
    const router = useRouter()
    const { productReviews, productId } = router.query
    return ( 
        <h1>
        Review {productReviews} for Product {productId}
      </h1>
     );
}
 
export default ProductReviews;