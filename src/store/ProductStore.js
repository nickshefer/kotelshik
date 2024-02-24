import { makeAutoObservable } from 'mobx';

const products = [
  {
    id: 1,
    name: 'Kentatsu Nobby Balance Plus 24 2-CSF',
    img: 'https://kotel-kentatsu.ru/image/cache/catalog/Kentatsu_Nobby_Balance_Plus_18_2CS-500x500.jpg',
    price: 50000,
    fullname: 'Настенный газовый котёл Kentatsu Nobby Balance Plus 24 2-CSF',
    manufacture: 'Китай',
    brandId: 1,
    typeId: 1,
    description:
      'Двухконтурные котлы Nobby Smart предназначены для работы в системах отопления и горячего водоснабжения. Панель управления Nobby Smart оснащена утапливаемыми ручками регулировки, что исключает случайное непреднамеренное изменение настроек. Жидкокристаллический дисплей с подсветкой отображает актуальную и предустановленную температуру в контурах отопления и ГВС. При помощи встроенного вентилятора организовано эффективное удаление дыма через коаксиальный дымоход. Предусмотрена настройка ограничения максимальной мощности в режиме отопления, что позволяет экономично расходовать потребление газа при обогреве помещений меньшей площади.',
    info: [
      {
        title: 'Количество контуров',
        description: '2',
      },
      {
        title: 'Количество контуров',
        description: '2',
      },
      {
        title: 'Количество контуров',
        description: '2',
      },
      {
        title: 'Количество контуров',
        description: '2',
      },
    ],
  },
  {
    id: 2,
    name: 'Kentatsu Nobby Balance Plus 24 2-CSF',
    img: 'https://kotel-kentatsu.ru/image/cache/catalog/Kentatsu_Nobby_Balance_Plus_18_2CS-500x500.jpg',
    price: 50000,
    fullname: 'Настенный газовый котёл Kentatsu Nobby Balance Plus 24 2-CSF',
    manufacture: 'Китай',
    brandId: 1,
    typeId: 1,
    description:
      'Двухконтурные котлы Nobby Smart предназначены для работы в системах отопления и горячего водоснабжения. Панель управления Nobby Smart оснащена утапливаемыми ручками регулировки, что исключает случайное непреднамеренное изменение настроек. Жидкокристаллический дисплей с подсветкой отображает актуальную и предустановленную температуру в контурах отопления и ГВС. При помощи встроенного вентилятора организовано эффективное удаление дыма через коаксиальный дымоход. Предусмотрена настройка ограничения максимальной мощности в режиме отопления, что позволяет экономично расходовать потребление газа при обогреве помещений меньшей площади.',
    info: [
      {
        title: 'Количество контуров',
        description: '2',
      },
      {
        title: 'Количество контуров',
        description: '2',
      },
      {
        title: 'Количество контуров',
        description: '2',
      },
      {
        title: 'Количество контуров',
        description: '2',
      },
    ],
  },
  {
    id: 3,
    name: 'Kentatsu Nobby Balance Plus 24 2-CSF',
    img: 'https://kotel-kentatsu.ru/image/cache/catalog/Kentatsu_Nobby_Balance_Plus_18_2CS-500x500.jpg',
    price: 50000,
    fullname: 'Настенный газовый котёл Kentatsu Nobby Balance Plus 24 2-CSF',
    manufacture: 'Китай',
    brandId: 1,
    typeId: 1,
    description:
      'Двухконтурные котлы Nobby Smart предназначены для работы в системах отопления и горячего водоснабжения. Панель управления Nobby Smart оснащена утапливаемыми ручками регулировки, что исключает случайное непреднамеренное изменение настроек. Жидкокристаллический дисплей с подсветкой отображает актуальную и предустановленную температуру в контурах отопления и ГВС. При помощи встроенного вентилятора организовано эффективное удаление дыма через коаксиальный дымоход. Предусмотрена настройка ограничения максимальной мощности в режиме отопления, что позволяет экономично расходовать потребление газа при обогреве помещений меньшей площади.',
    info: [
      {
        title: 'Количество контуров',
        description: '2',
      },
      {
        title: 'Количество контуров',
        description: '2',
      },
      {
        title: 'Количество контуров',
        description: '2',
      },
      {
        title: 'Количество контуров',
        description: '2',
      },
    ],
  },
  {
    id: 4,
    name: 'Kentatsu Nobby Balance Plus 24 2-CSF',
    img: 'https://kotel-kentatsu.ru/image/cache/catalog/Kentatsu_Nobby_Balance_Plus_18_2CS-500x500.jpg',
    price: 50000,
    fullname: 'Настенный газовый котёл Kentatsu Nobby Balance Plus 24 2-CSF',
    manufacture: 'Китай',
    brandId: 1,
    typeId: 1,
    description:
      'Двухконтурные котлы Nobby Smart предназначены для работы в системах отопления и горячего водоснабжения. Панель управления Nobby Smart оснащена утапливаемыми ручками регулировки, что исключает случайное непреднамеренное изменение настроек. Жидкокристаллический дисплей с подсветкой отображает актуальную и предустановленную температуру в контурах отопления и ГВС. При помощи встроенного вентилятора организовано эффективное удаление дыма через коаксиальный дымоход. Предусмотрена настройка ограничения максимальной мощности в режиме отопления, что позволяет экономично расходовать потребление газа при обогреве помещений меньшей площади.',
    info: [
      {
        title: 'Количество контуров',
        description: '2',
      },
      {
        title: 'Количество контуров',
        description: '2',
      },
      {
        title: 'Количество контуров',
        description: '2',
      },
      {
        title: 'Количество контуров',
        description: '2',
      },
    ],
  },
];

const types = [
  {
    id: 1,
    name: 'Газовый',
  },
];

export default class ProductStore {
  constructor() {
    this._cartProducts = [];
    this._products = products;
    this._types = types;
    this._brands = [];
    makeAutoObservable(this);
  }

  get cartProducts() {
    return this._cartProducts;
  }
  setCartProducts(products) {
    this._cartProducts = products;
  }

  get products() {
    return this._products;
  }
  setProducts(products) {
    this._products = products;
  }

  get types() {
    return this._types;
  }
  setTypes(types) {
    this._types = types;
  }

  get brands() {
    return this._brands;
  }
  setBrands(brands) {
    this._brands = brands;
  }
}
