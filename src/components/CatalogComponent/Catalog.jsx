import style from './Catalog.module.css'
import { Card } from '../CardComponent/Card'

export function Catalog() {
    return (
        <>
            <div className={style.catalog_grid}>
                <Card img="https://cdn.vseinstrumenti.ru/images/goods/santehnicheskoe-oborudovanie/tovary-dlya-vannoj-komnaty-i-tualeta/7952606/560x504/92357870.jpg" name='Поручень для ванной' price="12 312" />
                <Card img="https://cdn.vseinstrumenti.ru/images/goods/santehnicheskoe-oborudovanie/tovary-dlya-vannoj-komnaty-i-tualeta/1023931/560x504/51468325.jpg" name='Смеситель Lemark Evitta' price="2 342" />
                <Card img="https://cdn.vseinstrumenti.ru/images/goods/santehnicheskoe-oborudovanie/tovary-dlya-vannoj-komnaty-i-tualeta/835326/560x504/51206002.jpg" name='Смеситель для ванны' price="234" />
                <Card img="https://cdn.vseinstrumenti.ru/images/goods/santehnicheskoe-oborudovanie/tovary-dlya-vannoj-komnaty-i-tualeta/2947220/560x504/57172898.jpg" name='Термостатический смеситель для душа' price="23 423" />
                <Card img="https://cdn.vseinstrumenti.ru/images/goods/santehnicheskoe-oborudovanie/tovary-dlya-vannoj-komnaty-i-tualeta/1128608/560x504/51885879.jpg" name='Смеситель для душа CLEVER NINE' price="844" />
                <Card img="https://cdn.vseinstrumenti.ru/images/goods/santehnicheskoe-oborudovanie/tovary-dlya-vannoj-komnaty-i-tualeta/11160260/560x504/150572090.jpg" name='Смеситель для ванны Aquatek' price="123 133" />

            </div>
        </>
    )
}