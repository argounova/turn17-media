import { motion } from "framer-motion"
import { SiteExample } from "./style";
import Image from "next/image";
import finishedSiteEx from "../../public/images/flsite.png"
import Button from "../Button";

export default function FinishedSiteEx() {
    return(
        <SiteExample>
            <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2.5 }}
                    style={{
                        marginBottom: '2%'
                    }}
            >
                <div>
                    <h2
                        className='common'
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
                    className='common'
                    src={finishedSiteEx}
                    alt='finished site example'
                    style={{
                        borderBottomLeftRadius: '10px',
                        borderBottomRightRadius: '10px',
                    }}
                />
            </motion.div>
            <Button
                href='/basics'
                text='Get Started'
                arrow={true}
            />
        </SiteExample>
    )
}