import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductDetailsShow from "./ProductDetailsShow";

const ProductsDetails = () => {
  const [product, setProduct] = useState(null);
  const data = useLoaderData();
  const { id } = useParams();
  useEffect(() => {
    const findProducts = data?.find((products) => products.id == id);
    setProduct(findProducts);
  }, [id, data]);

  return <div>{
    product? 
    <div className="">
            <ProductDetailsShow product={product}></ProductDetailsShow>
    </div> :
    <div className="text-center text-4xl">
          <span className="loading loading-spinner bg-blue-700 loading-lg"></span>

        </div>
    
    }
    </div>;
};

export default ProductsDetails;
