import watch from '../../../Assets/images/watch.png';
import tablet from '../../../Assets/images/tablet.png';
import phone from '../../../Assets/images/phone.png';
import game from '../../../Assets/images/game.png';
import laptop from '../../../Assets/images/laptop.png';
import headphone from '../../../Assets/images/marshal4.png';
import tv from '../../../Assets/images/lg1.png';

export const productsCategory = [
    {
        title: 'Watches',
        img: watch,
        items: [
            {name: 'Apple Watch', link: 'http://localhost:3000/products/watch/apple'},
            {name: 'Garmin Watch', link: 'http://localhost:3000/products/watch/garmin'},
            {name: 'Samsung', link: 'http://localhost:3000/products/watch/samsung'},
            {name: 'Huawei', link: 'http://localhost:3000/products/watch/huawei'},
            {name: 'TAG Heuer', link: 'http://localhost:3000/products/watch/tag-heuer'},
        ]
    },
    {
        title: 'Television',
        img: tv,
        items: [
            {name: 'LG', link: 'http://localhost:3000/products/tv/lg'},
            {name: 'Samsung', link: 'http://localhost:3000/products/tv/samsung'},
            {name: 'Sony', link: 'http://localhost:3000/products/tv/sony'},
            {name: 'Panasonic', link: 'http://localhost:3000/products/tv/panasonic'},
            {name: 'Toshiba', link: 'http://localhost:3000/products/tv/toshiba'},
        ]
    },
    {
        title: 'Tablet',
        img: tablet,
        items: [
            {name: 'iPad', link: 'http://localhost:3000/products/tablet/apple'},
            {name: 'Samsung', link: 'http://localhost:3000/products/tablet/samsung'},
            {name: 'Microsft', link: 'http://localhost:3000/products/tablet/microsoft'},
            {name: 'Lenovo', link: 'http://localhost:3000/products/tablet/lenovo'},
            {name: 'Amazon', link: 'http://localhost:3000/products/tablet/amazon'},
        ]
    },
    {
        title: 'Phones',
        img: phone,
        items: [
            {name: 'Apple', link: 'http://localhost:3000/products/phone/apple'},
            {name: 'Samsung', link: 'http://localhost:3000/products/phone/samsung'},
            {name: 'Asus', link: 'http://localhost:3000/products/phone/asus'},
            {name: 'Sony', link: 'http://localhost:3000/products/phone/sony'},
            {name: 'Pixel', link: 'http://localhost:3000/products/phone/pixel'},
        ]
    },
    {
        title: 'Games',
        img: game,
        items: [
            {name: 'Play Station', link: 'http://localhost:3000/products/game/ps'},
            {name: 'Nintendo', link: 'http://localhost:3000/products/game/nintendo'},
            {name: 'Xbox', link: 'http://localhost:3000/products/game/xbox'},
            {name: 'Microsoft', link: 'http://localhost:3000/products/game/microsoft'},
            {name: 'Sony', link: 'http://localhost:3000/products/game/sony'}
        ]
    },
    {
        title: 'Laptop/Pc',
        img: laptop,
        items: [
            {name: 'Acer', link: 'http://localhost:3000/products/laptop/acer'},
            {name: 'Hp', link: 'http://localhost:3000/products/laptop/hp'},
            {name: 'Lenovo', link: 'http://localhost:3000/products/laptop/lenovo'},
            {name: 'Macbook Pro', link: 'http://localhost:3000/products/laptop/macbook-pro'},
            {name: 'Macbook Air', link: 'http://localhost:3000/products/laptop/macbook-air'},
            {name: 'Sony', link: 'http://localhost:3000/products/laptop/sony'}
        ]
    },
    {
        title: 'Headphones',
        img: headphone,
        items: [
            {name: 'Airpods', link: 'http://localhost:3000/products/headphones/airpods'},
            {name: 'Airpod Gen 2', link: 'http://localhost:3000/products/headphones/airpods-gen-2'},
            {name: 'Airpod Max', link: 'http://localhost:3000/products/headphones/airpod-max'},
            {name: 'Marshal', link: 'http://localhost:3000/products/headphones/marshal'},
            {name: 'JBL', link: 'http://localhost:3000/products/headphones/jbl'}
        ]
    }
]
