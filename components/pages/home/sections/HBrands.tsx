import Image from "next/image";

const HBrands = () => {
  const BrandsData = [
    { id: 1, img: "brand_1.png", width: 650, height: 762, customSize: 'xl:w-[115px] lg:w-[95px] w-[75px]' },
    { id: 2, img: "brand_2.png", width: 525, height: 263, customSize: 'xl:w-[190px] lg:w-[150px] w-[120px]' },
    { id: 3, img: "brand_3.png", width: 525, height: 263, customSize: 'xl:w-[180px]! lg:w-[140px] sm:w-[110px] w-[140px]' },
    { id: 4, img: "brand_4.png", width: 525, height: 263, customSize: 'xl:w-[200px]! lg:w-[150px] md:w-[120px] w-[160px]' },
    { id: 5, img: "brand_5.png", width: 650, height: 650, customSize: 'xl:w-[120px]! lg:w-[100px] md:w-[70px] w-[80px]'},
  ];
  return (
    <div className="">
      <div className="xl:w-[1199px]! lg:w-[960px]! md:w-[720px] sm:w-[510px] w-full mx-auto px-[15px] pt-[21px] md:pb-[30px] pb-[50px]">
        <div className="w-full h-auto flex md:flex-row flex-wrap justify-center items-center xl:gap-[50px] lg:gap-[30px] gap-[21px] lg:py-[41px] py-[30px] bg-[#f9f9f9] rounded-[15px] overflow-hidden shadow-[0px_0px_8px_0px_#00000014]">
        {BrandsData.map((item) => {
          return (
            <div key={item.id} className="flex items-center justify-center">
              <Image
                src={`/assets/images/Home_Page/Brands/${item.img}`}
                width={item.width}
                height={item.height}
                className={`${item.customSize} h-auto object-contain select-none`}
                alt="brand Image"
              />
            </div>
          );
        })}</div>
      </div>
    </div>
  );
};

export default HBrands;
