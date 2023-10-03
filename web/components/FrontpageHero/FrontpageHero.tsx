import { Button } from "components/Button"
import { Block, Section } from "components/Layout"
import { AnimationHeader } from "components/AnimationHeader"
import styles from "./FrontpageHero.module.scss"
import { AnimationHeaderMobile } from "components/AnimationHeaderMobile"

export const FrontpageHero = () => {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <div className={styles.heroImage}>
        <AnimationHeader />
      </div>
      <div className={styles.heroImageMobile}>
        <AnimationHeaderMobile />
      </div>

      <Section width="large" verticalPadding="large" noPadding="top">
        <div className={styles.logo}>
          <span>Jule</span>
          <span>fest i</span>
          <span>🐳en</span>
          <Block top="5">
            <span className={styles.date}>DOGA</span>
            <span className={styles.date}>9.-10. desember 2023</span>
          </Block>
        </div>

        <Block top="7">
          <Button
            size="large"
            color="orange"
            link="https://tikkio.com/tickets/30345-oslo-vegetarfestival-2023"
            isOpenInNewWindow
          >
            Kjøp billett
          </Button>
        </Block>
      </Section>
    </div>
  )
}
