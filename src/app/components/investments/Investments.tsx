'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { RiArrowRightSFill, RiArrowDropDownFill } from "react-icons/ri";

interface CategoryItem {
  icon: string;
  text: string;
  description?: {
    title: string;
    subtitle: string;
  };
}

const Investments = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    "Carteiras"
  );
  const [selectedItem, setSelectedItem] = useState<CategoryItem | null>({
    icon: "/Selecao-icon.png",
    text: "Carteira Seleção",
  });
  const [imageLoaded, setImageLoaded] = useState(false);
  const [initialClick, setInitialClick] = useState(false);

  
  const categories = useMemo(() => [
    {
      name: "Carteiras",
      items: [
        {
          icon: "/Selecao-icon.png",
          text: "Carteira Seleção",
          description: {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
            subtitle:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 1",
          },
        },
        {
          icon: "/investiments/FATORinvesti.png",
          text: "Carteira FATOR",
          description: {
            title:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit 2, ",
            subtitle:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 2",
          },
        },
        {
          icon: "/investiments/Dividendos.png",
          text: "Carteira Dividendos",
          description: {
            title:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit 3, ",
            subtitle:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 3",
          },
        },
        {
          icon: "/investiments/Essencial.png",
          text: "Carteira Essencial",
          description: {
            title:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit 4, ",
            subtitle:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 4",
          },
        },
        {
          icon: "/investiments/FII.png",
          text: "Carteira de FIIs",
          description: {
            title:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit 5, ",
            subtitle:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 5",
          },
        },
        {
          icon: "/investiments/smallcaps.png",
          text: "Carteira Small Caps",
          description: {
            title:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit 6, ",
            subtitle:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 6",
          },
        },
      ],
    },
    {
      name: "Cursos",
      items: [
        {
          icon: "/investiments/VZA.png",
          text: "Valuation 2.0",
          description: {
            title:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit 7, ",
            subtitle:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 7",
          },
        },
        {
          icon: "/investiments/Frame.png",
          text: "Código.py",
          description: {
            title:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit 8, ",
            subtitle:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 8",
          },
        },
        {
          icon: "/investiments/Dash.png",
          text: "Dash.py",
          description: {
            title:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit 9, ",
            subtitle:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 9",
          },
        },
        {
          icon: "/investiments/Essencial.png",
          text: "Carteira Essencial",
          description: {
            title:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit 10, ",
            subtitle:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 10",
          },
        },
        {
          icon: "/investiments/Minicurso.png",
          text: "Curso Reels",
          description: {
            title:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit 11, ",
            subtitle:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 11",
          },
        },
        {
          icon: "/investiments/Enciclopedia.png",
          text: "Enciclopédia de FII",
          description: {
            title:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit 12, ",
            subtitle:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 12",
          },
        },
      ],
    },
    {
      name: "Consultoria",
      items: [
        {
          icon: "/investiments/VZA.png",
          text: "Consultoria VAROS",
          description: {
            title:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit 13, ",
            subtitle:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 13",
          },
        },
      ],
    },
  ], []);

  useEffect(() => {
    const loadImage = (src: string) => {
      const image = new Image();
      image.src = src;
      image.onload = () => setImageLoaded(true);
    };
  
    categories.forEach((category) => {
      category.items.forEach((item) => loadImage(item.icon));
    });
  
    // Marcar o clique inicial como true após um pequeno atraso
    const initialClickTimeout = setTimeout(() => {
      setInitialClick(true);
    }, 1000);
  
    return () => {
      clearTimeout(initialClickTimeout);
    };
  }, [categories, setInitialClick]);

  useEffect(() => {
    // Definir o selectedItem quando a categoria inicial é selecionada
    if (initialClick && selectedCategory) {
      const selectedCategoryObj = categories.find(
        (category) => category.name === selectedCategory
      );
      if (selectedCategoryObj) {
        setSelectedItem(selectedCategoryObj.items[0]);
      }
    }
  }, [initialClick, selectedCategory]);

  const handleCategoryChange = (category: string) => {
    if (!initialClick) {
      // Ignorar a mudança de categoria se o clique inicial ainda não ocorreu
      return;
    }

    setSelectedCategory(selectedCategory === category ? null : category);
  };

  const handleItemClick = (item: CategoryItem) => {
    setSelectedItem(item);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center md:justify-between">
      <div className="w-full md:w-1/2 md:max-w-[270px]">
        <div className="space-y-2 mt-2">
          {categories.map((category) => (
            <div
              key={category.name}
              className="gap-4 p-2 text-white flex flex-col items-center justify-between gap-2"
            >
              <button
                className="w-full bg-gray-700  text-left flex items-center gap-2 justify-center py-4 px-8 rounded-full text-lg font-bold text-[#F2F4F8]"
                onClick={() => handleCategoryChange(category.name)}
              >
                {imageLoaded && (
                  <img
                    src={category.items[0].icon}
                    alt={category.name}
                    className="w-auto"
                  />
                )}
                {category.name}
                <span
                  className="cursor-pointer text-white"
                  onClick={() => handleCategoryChange(category.name)}
                >
                  {selectedCategory === category.name ? (
                    <RiArrowDropDownFill />
                  ) : (
                    <RiArrowRightSFill />
                  )}
                </span>
              </button>
              {selectedCategory === category.name && (
                <ul
                  className={`w-full flex flex-col p-8 items-start gap-6 rounded-3xl bg-gray-900 gap-6 transition-all max-h-${
                    selectedCategory === category.name ? "500" : "0"
                  } overflow-hidden`}
                >
                  {category.items.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => handleItemClick(item)}
                      className="cursor-pointer text-white flex items-center gap-4 p-4"
                    >
                      {imageLoaded && selectedCategory === category.name && (
                        <img
                          src={item.icon}
                          alt={item.text}
                          className="w-auto"
                        />
                      )}
                      {item.text}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
         <div className="w-full md:w-1/2 self-center md:h-[530px]">
          <div className="bg-[#131516] p-4 rounded-md border border-gray-800">
            <div className="inline-flex h-16 p-4 justify-center items-center gap-4 flex-shrink-0">
              {imageLoaded && selectedCategory && (
                <img
                  src={selectedItem.icon}
                  alt={selectedItem.text}
                  className="w-auto"
                />
              )}
              <h2 className="text-white text-xl font-bold">
                {selectedItem.text}
              </h2>
            </div>
            {selectedItem.description && (
              <>
                <h2 className="text-2xl text-white font-semibold mb-4">
                  {selectedItem.description.title}
                </h2>
                <p className="text-[#D3D6DF] text-base font-normal mb-4">
                  {selectedItem.description.subtitle}
                </p>
              </>
            )}
            <div className="w-621 h-329 flex-shrink-0 rounded-md border border-gray-800">
              <img
                src="https://i.imgur.com/IFBADis.png"
                alt={selectedItem.text}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Investments;
