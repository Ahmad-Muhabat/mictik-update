import { GoPlus } from "react-icons/go";
import { HiOutlineMinus } from "react-icons/hi";
import { useState } from "react";

const items = [
  {
    id: "0",
    label: "What types of fiber optic solutions does Lightwave offer?",
    content:
      "Lightwave offers a variety of fiber optic cables, connectors, and network switches designed for high-speed data transfer, ensuring reliable and scalable networking solutions for businesses.",
  },
  {
    id: "1",
    label: "Are Lightwave networking solutions compatible with other brands?",
    content:
      "Yes, Lightwave’s cables and network equipment are designed to be compatible with many other major networking brands, ensuring easy integration into existing systems.",
  },
  {
    id: "2",
    label: "What industries benefit most from Lightwave fiber optics?",
    content:
      "Industries such as telecommunications, data centers, and healthcare benefit from Lightwave fiber optics due to their need for high-speed, reliable, and secure data transmission.",
  },
  {
    id: "3",
    label: "How do Lightwave products enhance network reliability?",
    content:
      "Lightwave products use advanced fiber optic technology to reduce signal loss and interference, resulting in more stable and faster network connections, especially in high-demand environments.",
  },
  {
    id: "4",
    label: "Where can I buy authentic Lightwave products?",
    content:
      "You can purchase genuine Lightwave networking equipment from authorized distributors and trusted online retailers to ensure product authenticity and warranty support.",
  },
  {
    id: "5",
    label: "What is the typical lifespan of Lightwave fiber optic cables?",
    content:
      "Lightwave fiber optic cables are built for long-lasting performance, typically lasting over 25 years with proper installation and maintenance, ensuring reliable network infrastructure for years to come.",
  },
];

export default function Accordion() {
  const [expandedIndices, setExpandedIndices] = useState([null, null]);

  const handleClick = (columnIndex, itemIndex) => {
    setExpandedIndices((prevState) => {
      const newState = [...prevState];
      newState[columnIndex] = newState[columnIndex] === itemIndex ? null : itemIndex;
      return newState;
    });
  };

  const renderColumn = (columnItems, columnIndex) => {
    return columnItems.map((item, index) => {
      const isExpanded = index === expandedIndices[columnIndex];

      return (
        <div
          className="px-4 py-3 w-[500px] lg:px-24 lg:py-0 lg:text-lg lg:w-[750px]"
          key={item.id}
        >
          <div
            className="flex items-center justify-between p-3 border-t border-gray-300 cursor-pointer"
            onClick={() => handleClick(columnIndex, index)}
          >
            <span className={isExpanded ? "text-blue-500" : "text-gray-800"}>
              {item.label}
            </span>
            {isExpanded ? (
              <HiOutlineMinus className="text-xl" />
            ) : (
              <GoPlus className="text-2xl" />
            )}
          </div>
          {isExpanded && (
            <div className="mb-5 ml-2 font-thin text-gray-600">
              {item.content}
            </div>
          )}
        </div>
      );
    });
  };

  const midIndex = Math.ceil(items.length / 2);
  const column1Items = items.slice(0, midIndex);
  const column2Items = items.slice(midIndex);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>{renderColumn(column1Items, 0)}</div>
      <div>{renderColumn(column2Items, 1)}</div>
    </div>
  );
}
