import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductTitle, ProductImage, ProductButtons } from '.';
import { ProductCardHOCProps } from '../interfaces';

// export * from './ProductCard';
export * from './ProductImage';
export * from './ProductTitle';
export * from './ProductButtons';

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;
