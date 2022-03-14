import styles from '../styles/Banner.module.css'
import SVG, { Props as SVGProps } from 'react-inlinesvg'

function Banner() {
    return (
        <SVG src="mpls.svg" className={styles.banner}></SVG>
        //   <img src="/mpls.svg" className={styles.banner}></img>
    )
}

export default Banner