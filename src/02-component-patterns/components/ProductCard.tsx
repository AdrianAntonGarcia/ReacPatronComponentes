import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { ProductCardProps } from '../interfaces';
import { ProductContext } from '../context';

/**
 * Componente que devuelve la tarjeta de un producto
 * @param param0
 * @returns
 */
export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { Provider } = ProductContext;
  const { counter, increaseBy } = useProduct();
  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
