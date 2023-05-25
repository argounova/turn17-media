import { BasicsStyles } from "./style" 
import { useState } from "react";
import { tabs } from "./content";
import { motion, AnimatePresence } from "framer-motion";

export default function Selector() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

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
                <motion.div className="underline" layoutId="underline" />
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
            {selectedTab.color}
          </motion.div>
        </AnimatePresence>
      </main>
    </BasicsStyles>
  );
}
