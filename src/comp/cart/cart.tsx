import style from './items.module.css'
import { selectCount } from '../../features/counter/counterSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { DelItem } from '../../features/counter/counterSlice';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';


const Cart = () => {
    const count = useAppSelector(selectCount);
    const dispatch = useAppDispatch();
    console.log("..,.,", count)
    if (count.length === 0) {
        return (
            <div className={style.main}>
                <img className={style.errPage} src={'https://www.nicepng.com/png/detail/322-3224210_your-cart-is-currently-empty-empty-shopping-cart.png'} alt="Empity Cart" />
                <h2>Cart is Empity</h2>
                <Link to='/'>
                    <button className={style.buttonCheckout}>Back to Store</button>
                </Link>

            </div>
        )
    }
    let bill = 0;
    return (
        <div className={style.main}>
            <div className={style.mainTwo}>
                <div className={style.list}>
                    <h2>Your Cart</h2>

                    {
                        count.map((o: any, i: any) => {
                            bill = bill + parseInt(o.price)
                            return (
                                <div className={style.items} key={i}>
                                    <img width='100px' height='100px' src={o.pic} />
                                    <h3>{o.desc}</h3>
                                    <h3>{o.price} $</h3>
                                    
                                    <DeleteIcon onClick={() => { dispatch(DelItem(i)) }}  />
                                </div>
                            )
                        })
                    }

                </div>
                <div className={style.pricing}>
                    <h2>Bill</h2>
                    <hr />
                    <h2>{bill} $</h2>
                    <hr />
                    <button className={style.buttonCheckout}>CheckOut</button>
                </div>
            </div>

            <Link to='/'>
                <button className={style.buttonCheckout}>Back to Store</button>
            </Link>
        </div>
    )
}

export default Cart;