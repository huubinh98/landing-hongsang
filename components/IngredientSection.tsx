import { Ingredient } from '@/constants';
import Tag from './Tag';

const IngredientSection = () => {

  return (
    <section className="bg-[#F8F7F0] p-4 lg:py-12">
      <div className="container mx-auto">
        <Tag text={"Vùng nguyên liệu"} className='mx-auto'/>
        <h3 className="text-[40px] font-bold text-center mb-3 md:mb-8">
          Đa dạng với các vùng nguyên liệu
        </h3>
        <p className="text-center mb-3 md:mb-8">
          Hồng Sang định hướng trở thành đơn vị tiên phong trong sản xuất, sở hữu nhiều
          vùng nguyên liệu rộng lớn.
        </p>

        {/* Swiper cho mobile, grid cho màn hình lớn hơn */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Ingredient.map((item, idx) => (
              <div
                key={idx}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="w-20 h-20 rounded-full border-2 border-green-800 flex justify-center items-center absolute -bottom-10 left-6 bg-white">
                    <img srcSet="/img/logo-small.png 2x" alt="logo" />
                  </div>
                </div>
                <div className="p-6 pt-14">
                  <h4 className="text-xl font-bold mt-4">{item.title}</h4>
                  <ul className="list-disc ml-6 mt-2">
                    {item.content.map((ct, idx) => (
                      <li key={idx}>{ct}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default IngredientSection;
