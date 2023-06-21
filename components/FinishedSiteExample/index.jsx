import { motion } from "framer-motion"
import { SiteExample } from "./style";
import Image from "next/image";
import finishedSiteEx from "../../public/images/flsite.png"
import { Button } from "@mui/material";

export default function FinishedSiteEx() {
    return(
        <SiteExample>
            <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2.5 }}
                    style={{
                        marginTop: '2%',
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
                    href='/signup'
                    variant='contained'
                    className='btn'
            >Sign up or Login to get started</Button>
            <motion.svg className='btn-anim'
                width="600"
                height="600"
                viewBox="0 0 600 600"
            >
                <motion.rect
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    width="450"
                    height="100"
                    x="75"
                    y="250"
                    rx="10"
                    stroke="var(--mb1-3)"
                    strokeWidth='10px'
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        repeatDelay: 1
                    }}
                    fill="none"      
                              
                >
               
                </motion.rect>
            </motion.svg>
        </SiteExample>
    )
}