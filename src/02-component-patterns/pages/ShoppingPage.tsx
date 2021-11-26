import ProductCard from '../components';
import { ProductImage, ProductTitle, ProductButtons } from '../components';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png',
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {/* <ProductCard product={product}>
          <ProductCard />
          <ProductCard title={product.title} />
          <ProductCard counter={0} increaseBy={() => {}} />
        </ProductCard> */}
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title={'Prueba'} />
          <ProductButtons />
        </ProductCard>
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  );
};
