import { useContext } from 'react';
import { ProductContext } from '../context';
import styles from '../styles/styles.module.css';

/**
 * Componente del título de la imagen
 * @param param0
 * @returns
 */
export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(ProductContext);
  return (
    <span className={styles.productDescription}>
      {title ? title : product.title}
    </span>
  );
};
