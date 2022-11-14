import css from './Main.module.css'
import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Main = () => {
    const user = useSelector(state => state.appReducer.activeUser)

    if (user === '') {
        return (
            <main className={(css.main + ' ' + css.noUser)}>
                <div className={css.dark}></div>
                <div className={(css.content + ' ' + css.contentNoUser)}>
                    <h1 className={css.title}>Поиск велосипедов!</h1>
                    <p>Если ваш велосипед украли, сообщите нам об этом!</p>
                    <Link to='/newcase'>
                        <button className={(css.btn + ' ' + css.btnNewCase)}>Сообщить о краже</button>
                    </Link>
                </div>
                <div className={css.window}>
                    <Outlet />
                </div>
            </main>
        )
    } else {
        return (
            <main className={(css.main + ' ' + css.user)}>
                <div className={css.dark}></div>
                <div className={css.content + ' ' + css.contentUser}>
                    <Link to='/newcase'>
                        <button className={(css.btn + ' ' + css.btnNewCase)}>Сообщить о краже</button>
                    </Link>
                    <div className={css.work}>
                        <Link to='/cases'>
                            <button className={(css.btn + ' ' + css.btnWork)}>Сообщения о кражах</button>
                        </Link>
                        <Link to='/officers'>
                            <button className={(css.btn + ' ' + css.btnWork)}>Ответственные сотрудники</button>
                        </Link>
                    </div>
                </div>
            </main>
        )
    }
}

export default Main