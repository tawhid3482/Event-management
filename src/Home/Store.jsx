import { useLoaderData } from "react-router-dom";
import Products from "./Products";
import { Helmet } from "react-helmet";

const Store = () => {
    const data = useLoaderData()
    return (
        <div className="m-5 ">
              <Helmet>
                <title>Health-Store</title>
            </Helmet>
            <p className="text-3xl font-bold text-center mb-5">Shop Now</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    data?.map((products)=><Products key={products.id} products={products}></Products>)
                }
          </div>
          
        </div>
    );
};

export default Store;