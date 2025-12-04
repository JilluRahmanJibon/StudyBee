const HBrands = () => {
  const BrandsData = [
    { id: 1, img: "brand_1.png" },
    { id: 2, img: "brand_2.png" },
    { id: 3, img: "brand_3.png" },
    { id: 4, img: "brand_4.png" },
    { id: 5, img: "brand_5.png" },
  ];
  return (
    <div className="bg-[#f9f9f9]">
      <div className="xl:w-[1199px]! lg:w-[960px]! md:w-[720px] sm:w-[510px] w-full mx-auto sm:px-0 px-[15px] pt-[50px] sm2:pb-[50px] pb-[30px]">

        {BrandsData.map((item) => {
            return(
                <div key={item.id} className="">

                </div>
            )
        })}

      </div>
    </div>
  );
};

export default HBrands;
