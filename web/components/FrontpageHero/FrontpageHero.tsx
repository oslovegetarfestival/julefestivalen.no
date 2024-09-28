import { Button } from "components/Button"
import { Block, Section } from "components/Layout"
import { AnimationHeader } from "components/AnimationHeader"
import styles from "./FrontpageHero.module.scss"
import { AnimationHeaderMobile } from "components/AnimationHeaderMobile"

export const FrontpageHero = () => {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {/* <div className={styles.heroImage}>
        <AnimationHeader />
      </div> */}
      {/* <div className={styles.heroImageMobile}>
        <AnimationHeaderMobile />
      </div> */}

      <Section
        width="full"
        verticalPadding="large"
        noPadding="top"
        centerContent
      >
        <AnimationHeader />

        <div className={styles.logo}>
          <span>Plantebasert</span>
          <span>julemarked i Oslo</span>
        </div>

        <Block top="7">
          <Button
            size="large"
            color="pink"
            link="https://tikkio.com/tickets/41042-oslo-vegetarfestivals-julemarked-2023"
            isOpenInNewWindow
          >
            Kjøp billett
          </Button>
        </Block>
      </Section>
    </div>
  )
}
