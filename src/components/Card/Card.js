import manLaptop from "../../assests/images/Coaching-for-the-Civil-Services-Exam.jpg";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Card.module.css";

const Cards = () => {
  return (
    // <div className={styles.cards}>
      <div className={styles.container}>
        <Image src={manLaptop} />
        <p>this course is best for govt examinations</p>
        <span>
          <Link href="">Learn more</Link>
        
          <Link href="">Get Prime</Link>
        </span>
      </div>
      
    // </div>
  );
};

export default Cards;
