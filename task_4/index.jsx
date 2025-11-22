import { useState, ReactNode } from "react";

interface BlockProps {
  mouseEnterCallbak?: () => void
  children: ReactNode
}

export const Block = ({mousEnterCallback, children}: BlockProps) => {
  const [isActive, setActive] = useState(false);

  const mouseEnterHandler = () => {
    setActive(true);
    mouseEnterCallbak.?();
  };

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
      {children}
    </div>
  );
}

// Данные для каждого блока
interface BlockData {
  id: number
  mouseEnterCallbak?: () => void
  content: ReactNode
}

const blocksData: BlockData[] = [
  {
    id: 1,
    mouseEnterCallbak: () => console.log("Block-1"),
    content: <img src="image.png" alt="Block1 Image" />,
  },
  {
    id: 2,
    mouseEnterCallbak: () => console.log("Block-2"),
    content: <p>Some text content for Block2</p>,
  },
  {
    id: 3,
    mouseEnterCallbak: () => console.log("Block-3"),
    content: (
      <address>
        country: Russia, street: Main Street
      </address>
    ),
  },
];

// Компонент, который рендерит все блоки
export const BlocksContainer = () => {
  return (
    <>
      {blocksData.map(({ id, mouseEnterCallbak, content }) => (
        <Block key={id} mouseEnterCallbak={mouseEnterCallbak}>
          {content}
        </Block>
      ))}
    </>
  );
};

