const ProductDetailsShow = ({ product }) => {
  const { img, name, long_description } = product;
  return (
    <div>
      <div className=" flex justify-between gap-5 items-center  h-[80vh] bg-base-200 shadow-xl">
        <figure  className="w-full h-full">
          <img src={img}  className="w-full h-full" alt={name} />
        </figure>
        <div className="space-y-3">
          <h2 className="text-4xl font-bold">{name}</h2>
          <p className="text-lg">{long_description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsShow;
