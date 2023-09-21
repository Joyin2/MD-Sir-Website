import styles from "../../styles/Home.module.css";
import Image from "next/image";
import heroImg from "../../assests/images/man with laptop.jpeg";
import autoprefixer from "autoprefixer";
import Cards from "@/components/Card/Card";
import AboutUs from "../../assests/images/about-us.png";
import ChooseImg from "../../assests/images/why-choose-us.png";
import Testimonial from "../../assests/images/studentVoice.png";

const Home = () => {
  return (
    <>
      <section title="hero">
        <div className={styles.container}>
          <div className={styles.schedule}>
            <h1>Anytime Anywhere Learn on your Suitable Schedule</h1>
            <p>
              hello this is an awesome coaching centre which is absolutely fine
              for govt examinations and these text are only for demo purpose , I
              hope u understand hello this is an awesome coaching centre which
              is absolutely fine for govt examinations and these text are only
              for demo purpose , I hope u understand
            </p>
          </div>
          <div className={styles.heroImg}>
            <Image
              src={heroImg}
              width={500}
              height={autoprefixer}
              alt="Picture of the author"
            />
          </div>
        </div>
      </section>
      <section title="brand">
        <div className={styles.brands}>
          <div className={styles.brandItems}>
            <i class="ri-article-fill"></i>
            <span>APSC</span>
          </div>
          <div className={styles.brandItems}>
            <i class="ri-presentation-fill"></i>
            <span>TET</span>
          </div>
          <div className={styles.brandItems}>
            <i class="ri-building-fill"></i>
            <span>SSC</span>
          </div>
          <div className={styles.brandItems}>
            <i class="ri-train-fill"></i>
            <span>RRB</span>
          </div>
          <div className={styles.brandItems}>
            <i class="ri-bank-fill"></i>
            <span>Banking Exams</span>
          </div>
          <div className={styles.brandItems}>
            <i class="ri-police-car-fill"></i>
            <span>UPSC</span>
          </div>
          <div className={styles.brandItems}>
            <i class="ri-contacts-fill"></i>
            <span>Assam Police</span>
          </div>
          <div className={styles.brandItems}>
            <i class="ri-alarm-warning-line"></i>
            <span>CAPF</span>
          </div>
        </div>
      </section>

      <section title="about">
        <div className={styles.about}>
          <div className={styles.aboutImage}>
            <Image src={AboutUs} />
          </div>
          <div className={styles.aboutDetail}>
            <h1>About Us</h1>
            <p>
              Our coaching institute is aawesome , We provide quality education,
              hello this is an awesome coaching centre which is absolutely fine
              for govt examinations and these text are only for demo purpose
            </p>
            <div className={styles.aboutNumbers}>
              <p>
                <h1>10 +</h1>
                <span>Courses</span>
              </p>
              <p>
                <h1>5 years </h1>
                <span>Completed </span>
              </p>
              <p>
                <h1>5K +</h1>
                <span>Students </span>
              </p>
              <p>
                <h1>3 +</h1>
                <span>District</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section title="courses">
        <div className={styles.courses}>
          <div className={styles.coursesHeader}>
            <h1>Our Popular Courses</h1>
            <p>
              hello this is an awesome coaching centre which is absolutely fine
              for govt examinations and these text are only for demo purpose , I
              hope u understand hello this is an awesome coaching centre which
              is absolutely fine for govt examinations and these text are only
              for demo purpose , I hope u understand
            </p>
            <button>See All Course</button>
          </div>
          <div className={styles.courseCards}>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
      </section>
      <section title="choose">
        <div className={styles.choose}>
          <div className={styles.chooseDetail}>
            <h1>Why Choose Us</h1>
            <p>
              Our coaching institute is aawesome , We provide quality education,
              hello this is an awesome coaching centre which is absolutely fine
              for govt examinations and these text are only for demo purpose Our
              coaching institute is aawesome , We provide quality education,
              hello this is an awesome coaching centre which is absolutely fine
              for govt examinations and these text are only for demo purpose Our
              coaching institute is aawesome , We provide quality education,
              hello this is an awesome coaching centre which is absolutely fine
              for govt examinations and these text are only for demo purpose
            </p>
          </div>
          <div className={styles.chooseImg}>
            <Image src={ChooseImg} />
          </div>
        </div>
      </section>
      <section title="features">
        <div className={styles.features}>
          <div className={styles.featureItem}>
            <span>
              <i class="ri-pages-line"></i>
            </span>
            <h1>Quick Learning</h1>
            <p>
              {" "}
              coaching institute is aawesome , We provide quality education,
              hello this is an awesome coaching centre which is absolutely fine
              for govt examinations and these text are only for demo purpose Our
              coaching institute is aawesome , We provide quality education,
            </p>
          </div>
          <div className={styles.featureItem}>
            <span>
              <i class="ri-discuss-line"></i>
            </span>
            <h1>All Time Support</h1>
            <p>
              {" "}
              coaching institute is aawesome , We provide quality education,
              hello this is an awesome coaching centre which is absolutely fine
              for govt examinations and these text are only for demo purpose Our
              coaching institute is aawesome , We provide quality education,
            </p>
          </div>
          <div className={styles.featureItem}>
            <span>
              <i className="ri-file-list-3-line"></i>
            </span>
            <h1>Certification</h1>
            <p>
              {" "}
              coaching institute is aawesome , We provide quality education,
              hello this is an awesome coaching centre which is absolutely fine
              for govt examinations and these text are only for demo purpose Our
              coaching institute is aawesome , We provide quality education,
            </p>
          </div>
        </div>
      </section>
      <section title="freeCourses">
        <div className={styles.freeCourses}>
          <h1>Our Free Courses</h1>
          <div className={styles.courseCards}>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
      </section>
      <section title="testimonials">
        <div className={styles.testimonial}>
          <div className={styles.testimonialImg}>
            <Image src={Testimonial} />
          </div>
          <div className={styles.testimonialDetail}>
            <h1>Our Students Voice</h1>
            <p>
              coaching institute is aawesome , We provide quality education,
              hello this is an awesome coaching centre which is absolutely fine
              for govt examinations and these text are only for demo purpose Our
              coaching institute is aawesome , We provide quality education
              coaching institute is aawesome , We provide quality education,
              hello this is an awesome coaching centre which is absolutely fine
              for govt examinations and these text are only for demo purpose Our
              coaching institute is aawesome , We provide quality education
            </p>
          </div>
        </div>
      </section>
      <section title="newsLetter">
        <div className={styles.newsLetter}>
          <h1>Subscribe Our Newsletter</h1>
          <div className={styles.newsIn}>
            <input placeholder="Email" />
            <div className={styles.In}>
            <button className={styles.buttonIn}>Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
