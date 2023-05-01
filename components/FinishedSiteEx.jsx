import Image from "next/image";
import finishedSiteEx from "../public/images/finished-site-example.png"

export default function FinishedSiteEx() {
    return(
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderRadius: '10px',
                    backgroundColor: 'var(--char0)',
                    height: '950px',
                    boxShadow: '4px 5px 4px var(--char2)',
                }}
            >
                <h1
                    style={{
                        color: 'var(--mb1-1)',
                        textAlign: 'center',
                        lineHeight: '120px',
                        fontSize: '50px'
                    }}
                >
                    Your site.  Easy peasy, lemon squeezy.
                </h1>
                <Image 
                    src={finishedSiteEx}
                    alt='finished site example'
                    style={{
                        borderBottomLeftRadius: '10px',
                        borderBottomRightRadius: '10px',
                    }}
                />
            </div>
        </>
    )
}