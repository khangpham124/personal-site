import collectionCategories from './collectionCategories';
import productCategories from './productCategories';

const navigations = [
  {
    url: '/collections',
    title: 'Bộ sưu tập',
    trans: 'menu.collection',
    class_name: 'menu-item',
    children: collectionCategories,
  },
  {
    url: '/products',
    title: 'Sản phẩm',
    trans: 'menu.product',
    class_name: 'menu-item',
    children: productCategories,
  },
  {
    url: '/sales',
    title: 'Sale',
    trans: 'menu.sale',
    class_name: 'menu-item',
  },
  {
    url: '/blogs',
    title: 'Blog',
    trans: 'menu.blog',
    class_name: 'menu-item',
  },
  {
    url: '/about-us',
    title: 'Về Ju',
    trans: 'menu.about_us',
    class_name: 'menu-item',
  },
];

export default navigations;
