import ColorFullICon from '@/public/assets/icons/ColorFullICon';
import PatternIcon from '@/public/assets/icons/PatternIcon';

export const filters = [
  {
    title: 'Giá',
    title_trans: 'price.title',
    range: {
      name: 'prices',
      min: 0,
      max: 4000000,
      defaulValue: [0, 4000000],
    },
  },
  {
    title: 'Màu sắc',
    title_trans: 'colors.title',
    checkboxes: [
      {
        name: 'colors',
        icon: 'F5C3CB',
        value: 'H',
        label: 'Hồng',
        label_trans: 'colors.pink',
      },
      {
        name: 'colors',
        icon: 'EFA543',
        value: 'C',
        label: 'Cam',
        label_trans: 'colors.orange',
      },
      {
        name: 'colors',
        icon: 'E85F59',
        value: 'R',
        label: 'Đỏ',
        label_trans: 'colors.red',
      },
      {
        name: 'colors',
        icon: 'F7DC8B',
        value: 'Y',
        label: 'Vàng',
        label_trans: 'colors.yellow',
      },
      {
        name: 'colors',
        icon: '73CF9A',
        value: 'XL',
        label: 'Xanh lá',
        label_trans: 'colors.green',
      },
      {
        name: 'colors',
        icon: '9FCBF6',
        value: 'XD',
        label: 'Xanh da trời',
        label_trans: 'colors.blue',
      },
      {
        name: 'colors',
        icon: '1F262C',
        value: 'T',
        label: 'Tím',
        label_trans: 'colors.purple',
      },
      {
        name: 'colors',
        icon: '1F262C',
        value: '1F262C',
        label: 'D',
        label_trans: 'colors.purple',
      },
      {
        name: 'colors',
        icon: 'BDC8D2',
        value: 'XA',
        label: 'Xám',
        label_trans: 'colors.gray',
      },
      {
        name: 'colors',
        icon: 'ffffff',
        value: 'TR',
        label: 'Trắng',
        label_trans: 'colors.white',
      },
      {
        name: 'colors',
        icon: '743B3A',
        value: 'N',
        label: 'Nâu',
        label_trans: 'colors.brown',
      },
      {
        name: 'colors',
        image: ColorFullICon,
        label: 'Nhiều màu',
        label_trans: 'colors.colorful',
        value: 'multi',
      },
      {
        name: 'colors',
        image: PatternIcon,
        label: 'Pattern',
        label_trans: 'colors.pattern',
        value: 'pattern',
      },
    ],
  },
];
