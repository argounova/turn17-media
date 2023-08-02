import { BasicsStyles } from "./style" 
import { useState } from "react"
import { tabs } from "./content"
import { motion, AnimatePresence } from "framer-motion"
import ContentGrid from "./ContentGrid"
import CustomBtn from "../Button"

export default function Selector() {
  const [selectedTab, setSelectedTab] = useState(tabs[0])

  return (
    <BasicsStyles className="window">
      <nav>
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.name}
              className={tab === selectedTab ? "selected" : ""}
              onClick={() => setSelectedTab(tab)}
            >
              {tab.name}
              {tab === selectedTab ? (
                <motion.div 
                    className="underline" 
                    layoutId="underline"
                />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab.name}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <br />
            <h1>{selectedTab.title}</h1>
            <h5>{selectedTab.subtitle}</h5>
            <br />
            <hr />
            <br />
            <ContentGrid
                primaryText1={selectedTab.primaryText1}
                secondaryText1={selectedTab.secondaryText1}
                primaryText2={selectedTab.primaryText2}
                secondaryText2={selectedTab.secondaryText2}
                primaryText3={selectedTab.primaryText3}
                secondaryText3={selectedTab.secondaryText3}
                primaryText4={selectedTab.primaryText4}
                secondaryText4={selectedTab.secondaryText4}
                primaryText5={selectedTab.primaryText5}
                secondaryText5={selectedTab.secondaryText5}
            />
            <div className="button-div">
                <CustomBtn
                    href={selectedTab.href}
                    text='Free Quote'
                    arrow={true}
                />
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </BasicsStyles>
  );
}
