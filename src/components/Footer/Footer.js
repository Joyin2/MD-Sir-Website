import styles from "../../styles/Footer.module.css"

const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.footerItem}>
                    <h1>MD Sir Silchar</h1>
                    <p className={styles.para} >Follow us on social media</p>
                    <p className={styles.icons}>
                    <i class="ri-facebook-box-fill"></i>
                    <i class="ri-instagram-line"></i>
                    <i class="ri-youtube-fill"></i>
                    </p>
                </div>
                <div className={styles.footerItem}>
                    <h2>Explore</h2>
                    <h4>Home</h4>
                    <h4>About US</h4>
                    <h4>Courses</h4>
                    <h4>Blog</h4>
                </div>
                <div className={styles.footerItem}>
                <h2>Information</h2>
                    <h4>Privacy Policy</h4>
                    <h4>Membership</h4>
                    <h4>Purchases Guide</h4>
                    <h4>Terms of Service</h4>
                </div>
                <div className={styles.footerItem}>
                <h2>Get in Touch</h2>
                    <p>Address: Silchar, India</p>
                    <p>Phone: +91 60033XXXXX</p>
                    <p>Email : example@gmail.com</p>
                </div>

            </div>
        </>
    );
}

export default Footer;