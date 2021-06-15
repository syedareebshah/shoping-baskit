import style from './style.module.css'
import { useAppDispatch } from '../../app/hooks';
import { useState } from 'react';
import { addToBaskit, incrementByAmount } from '../../features/counter/counterSlice';



const Home = () => {

    let products = [
        {
            "pic": "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/851-4554-c_1024x.jpg?v=1566796093",
            "desc": " Casual Shoe",
            "price": "200"

        },
        {
            "pic": "https://cdn.vox-cdn.com/thumbor/S4ka2uwWyJ9rHJFDwVa8BQCqMHA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22406771/Exbfpl2WgAAQkl8_resized.jpeg",
            "desc": " Men Sneakers",
            "price": "150"

        },
        {
            "pic": "https://xiaomiplanet.sk/wp-content/uploads/2020/10/xiaomi-mi-athliesure-shoes-cover.jpg",
            "desc": " Runing Sneakers",
            "price": "200"

        },
        {
            "pic": "https://cdn.shopify.com/s/files/1/0104/5757/9583/products/OSCO-Men-Dress-Shoes-Men-Formal-Shoes-Leather-Luxury-Fashion-Wedding-Shoes-Men-Business-Casual-Oxford.jpg?v=1575045878",
            "desc": " Men Formal Shoes",
            "price": "150"

        },
        {
            "pic": "https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/30101/282094/luxury-Brand-Men-Classic-Pointed-Toe-Dress-Shoes-Mens-Slip-on-Patent-Leather-Black-Wedding-Shoes__05810.1571137841.jpg?c=2?imbypass=on",
            "desc": " Classic Pointed Toe Dress Shoes",
            "price": "200"

        },
        {
            "pic": "https://5.imimg.com/data5/TD/AG/RT/SELLER-102816206/formal-shoes-500x500.jpg",
            "desc": " Men Formal Shoes",
            "price": "220"

        },
        {
            "pic": "https://wallpapercave.com/wp/wp4021018.jpg",
            "desc": " Black Sneakers",
            "price": "200"

        },
        {
            "pic": "https://i.pinimg.com/originals/6f/41/e9/6f41e9315cbdde9f64590b2a9cc15982.jpg",
            "desc": " Leather Tussles",
            "price": "140"

        }
    ]


    const dispatch = useAppDispatch();
    let [pro,setPro] = useState({
        name:"ahmad",
        age : 21
    })

    return (
        <div className={style.main}>
            <img width='100%' src={'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/171286803/original/1610f645ce0e6fec420d566d83a0404a08500757/design-a-shopify-store-banner-or-header.png'} />
            {
                products.map((obj:any, ind:any) => {
                    return (
                        <div key={ind} className={style.box}>
                            <img className={style.pic} src={obj.pic} />
                            <h3>{obj.desc}</h3>
                            <h3>{obj.price} $</h3>
                            <button onClick={()=>{dispatch(incrementByAmount(obj))}} className={style.btn}>Add to Cart</button>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Home;

