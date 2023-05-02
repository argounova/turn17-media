import Image from "next/image";
import finishedSiteEx from "../public/images/finished-site-example.png"
import styles from "@/styles/FinishedSiteEx.module.css"

export default function FinishedSiteEx() {
    return(
        <>
            <div>
                <h2
                    className={styles.common}
                    style={{
                        borderTopLeftRadius: '10px',
                        borderTopRightRadius: '10px',
                        padding: '2% 0px',
                    }}
                >
                    Your site.  Easy peasy, lemon squeezy.
                </h2>
            </div>
            <Image 
                className={styles.common}
                src={finishedSiteEx}
                alt='finished site example'
                style={{
                    borderBottomLeftRadius: '10px',
                    borderBottomRightRadius: '10px',
                }}
            />
        </>
    )
}