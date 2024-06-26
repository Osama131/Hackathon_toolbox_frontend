import {Card, CardHeader} from "@nextui-org/card";
import styles from "./LandingPage.module.css";

const Details = () => {
  return (
    <section className="details flex w-full gap-3 overflow-x-clip border border-[#C04C12] bg-white/60">
        <Card radius="none" className={`${styles.details__card} -translate-x-4 bg-transparent`}>
            <CardHeader className={styles.details__cardheader}>
                <h1 className={styles.details__cardheader__title}>When?</h1>
                <h2 className={styles.details__cardheader__sub}>9am : 6pm - Friday July 12<sup>th</sup> </h2>
            </CardHeader>
        </Card>
        <Card radius="none" className={`${styles.details__card} translate-x-4 bg-transparent`}>
            <CardHeader className={styles.details__cardheader}>
                <h1 className={styles.details__cardheader__title}>Where?</h1>
                <h2 className={styles.details__cardheader__sub}>CESAR School (Room 14)</h2>
            </CardHeader>
        </Card>
    </section>
  )
}

export default Details
