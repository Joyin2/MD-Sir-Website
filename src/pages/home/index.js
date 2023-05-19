import styles from "../../styles/Home.module.css";
import Image from "next/image";
import heroImg from "../../assests/images/man with laptop.jpeg";
import autoprefixer from "autoprefixer";
import Cards from "@/components/Card/Card";

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
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
