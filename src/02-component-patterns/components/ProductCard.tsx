import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';
import { useProduct } from '../hooks/useProduct';
import { ReactElement } from 'react';

/**
 * Componente de la imagen del producto
 * @param param0
 * @returns
 */
export const ProductImage = ({ img = '' }) => {
  return (
    <img
      className={styles.productImg}
      src={img ? img : noImage}
      alt="Product"
    />
  );
};

/**
 * Componente del título de la imagen
 * @param param0
 * @returns
 */
export const ProductTitle = ({ title }: { title: string }) => {
  return <span className={styles.productDescription}>{title}</span>;
};

/**
 * Componente de los botones del producto
 */
interface ProductButtonsProps {
  increaseBy: (value: number) => void;
  counter: number;
}
export const ProductButtons = ({
  increaseBy,
  counter,
}: ProductButtonsProps) => {
  return (
    <div className={styles.buttonsContainer}>
      <button
        className={styles.buttonMinus}
        onClick={() => {
          increaseBy(-1);
        }}
      >
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        className={styles.buttonAdd}
        onClick={() => {
          increaseBy(1);
        }}
      >
        +
      </button>
    </div>
  );
};

interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
}

interface Product {
  id: string;
  title: string;
  img?: string;
}

/**
 * Componente que devuelve la tarjeta de un producto
 * @param param0
 * @returns
 */
export const ProductCard = ({ children, product }: Props) => {
  const { counter, increaseBy } = useProduct();
  return (
    <div className={styles.productCard}>
      {children}
      {/* <ProductImage img={product.img} />
      <ProductoTitle title={product.title} />
      <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
    </div>
  );
};

// COMPOUND COMPONENT PATTERN
ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
