import watch from '../../../Assets/images/watch.png';
import tablet from '../../../Assets/images/tablet.png';
import phone from '../../../Assets/images/phone.png';
import game from '../../../Assets/images/game.png';
import laptop from '../../../Assets/images/laptop.png';
import headphone from '../../../Assets/images/marshal4.png';
import tv from '../../../Assets/images/lg1.png';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';


export const productsCategory = [
    {
        title: 'Watches',
        img: watch,
        linkName: 'watches',
        items: [
            {name: 'Apple Watch', link: 'http://localhost:3000/shop/watch/apple'},
            {name: 'Garmin Watch', link: 'http://localhost:3000/shop/watch/garmin'},
            {name: 'Samsung', link: 'http://localhost:3000/shop/watch/samsung'},
            {name: 'Huawei', link: 'http://localhost:3000/shop/watch/huawei'},
            {name: 'TAG Heuer', link: 'http://localhost:3000/shop/watch/tag-heuer'},
        ]
    },
    {
        title: 'Television',
        img: tv,
        linkName: 'tv',
        items: [
            {name: 'LG', link: 'http://localhost:3000/shop/tv/lg'},
            {name: 'Samsung', link: 'http://localhost:3000/shop/tv/samsung'},
            {name: 'Sony', link: 'http://localhost:3000/shop/tv/sony'},
            {name: 'Panasonic', link: 'http://localhost:3000/shop/tv/panasonic'},
            {name: 'Toshiba', link: 'http://localhost:3000/shop/tv/toshiba'},
        ]
    },
    {
        title: 'Tablet',
        img: tablet,
        linkName: 'tablet',
        items: [
            {name: 'iPad', link: 'http://localhost:3000/shop/tablet/apple'},
            {name: 'Samsung', link: 'http://localhost:3000/shop/tablet/samsung'},
            {name: 'Microsft', link: 'http://localhost:3000/shop/tablet/microsoft'},
            {name: 'Lenovo', link: 'http://localhost:3000/shop/tablet/lenovo'},
            {name: 'Amazon', link: 'http://localhost:3000/shop/tablet/amazon'},
        ]
    },
    {
        title: 'Phones',
        img: phone,
        linkName: 'smartphone',
        items: [
            {name: 'Apple', link: 'http://localhost:3000/shop/phone/apple'},
            {name: 'Samsung', link: 'http://localhost:3000/shop/phone/samsung'},
            {name: 'Asus', link: 'http://localhost:3000/shop/phone/asus'},
            {name: 'Sony', link: 'http://localhost:3000/shop/phone/sony'},
            {name: 'Pixel', link: 'http://localhost:3000/shop/phone/pixel'},
        ]
    },
    {
        title: 'Games',
        img: game,
        linkName: 'game',
        items: [
            {name: 'Play Station', link: 'http://localhost:3000/shop/game/ps'},
            {name: 'Nintendo', link: 'http://localhost:3000/shop/game/nintendo'},
            {name: 'Xbox', link: 'http://localhost:3000/shop/game/xbox'},
            {name: 'Microsoft', link: 'http://localhost:3000/shop/game/microsoft'},
            {name: 'Sony', link: 'http://localhost:3000/shop/game/sony'}
        ]
    },
    {
        title: 'Laptop/Pc',
        img: laptop,
        linkName: 'laptop',
        items: [
            {name: 'Acer', link: 'http://localhost:3000/shop/laptop/acer'},
            {name: 'Hp', link: 'http://localhost:3000/shop/laptop/hp'},
            {name: 'Lenovo', link: 'http://localhost:3000/shop/laptop/lenovo'},
            {name: 'Macbook Pro', link: 'http://localhost:3000/shop/laptop/macbook-pro'},
            {name: 'Macbook Air', link: 'http://localhost:3000/shop/laptop/macbook-air'},
            {name: 'Sony', link: 'http://localhost:3000/shop/laptop/sony'}
        ]
    },
    {
        title: 'Headphones',
        img: headphone,
        linkName: 'headphone',
        items: [
            {name: 'Airpods', link: 'http://localhost:3000/shop/headphones/airpods'},
            {name: 'Airpod Gen 2', link: 'http://localhost:3000/shop/headphones/airpods-gen-2'},
            {name: 'Airpod Max', link: 'http://localhost:3000/shop/headphones/airpod-max'},
            {name: 'Marshal', link: 'http://localhost:3000/shop/headphones/marshal'},
            {name: 'JBL', link: 'http://localhost:3000/shop/headphones/jbl'}
        ]
    }
]


export const optionContainerData = [
    {
        name: 'Add to cart',
        icon: faCartShopping
    },
    {
        name: 'Wishlist',
        icon: faHeart
    },
    {
        name: 'Quickview',
        icon: faMagnifyingGlass
    }
]