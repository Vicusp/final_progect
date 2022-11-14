import css from './Footer.module.css'
import { useSelector } from 'react-redux'

const Footer = () => {
    const user = useSelector(state => state.appReducer.activeUser)

    return (
        <footer className={css.footer}>
            <div className={css.content}>
                <div></div>
                <div className={css.icon}> <a href="https://www.flaticon.com/ru/free-icon/bycicle_5023591?related_id=5023591&origin=tag" title="велосипед иконки">Велосипед от imaginationlol - Flaticon</a></div>
                <div>
                    {user === '' && <a href="https://ru.freepik.com/free-photo/the-young-girl-with-bicycle-in-park_6773950.htm#page=3&query=%D0%B2%D0%B5%D0%BB%D0%BE%D1%81%D0%B8%D0%BF%D0%B5%D0%B4&position=37&from_view=search"> </a>}
                    {user !== '' && <a href="https://ru.freepik.com/free-photo/still-life-of-bicycle-basket_31588065.htm#page=11&query=%D0%B2%D0%B5%D0%BB%D0%BE%D1%81%D0%B8%D0%BF%D0%B5%D0%B4&position=27&from_view=search"></a>}
                </div>
            </div>
        </footer>
    )
}

export default Footer