import {Card, CardHeader} from "@nextui-org/card";
import styles from "./home.module.css";

const Details = () => {
  return (
    <section className="details flex w-full gap-3 overflow-x-hidden">
        <Card radius="none" className={`${styles.details__card} -translate-x-5`}>
            <CardHeader className={styles.details__cardheader}>
                <h1 className={styles.details__cardheader__title}>When?</h1>
                <h2 className={styles.details__cardheader__sub}>Saturday (18<sup>th</sup>) 14:00</h2>
            </CardHeader>
        </Card>
        <Card radius="none" className={`${styles.details__card} translate-x-5`}>
            <CardHeader className={styles.details__cardheader}>
                <h1 className={styles.details__cardheader__title}>Where?</h1>
                <h2 className={styles.details__cardheader__sub}>Workshop Space A</h2>
            </CardHeader>
        </Card>
    </section>
  )
}

export default Details
