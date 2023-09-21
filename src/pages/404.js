import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);
  return (
    <div>
      <Link href="/">Back to home page</Link>
      <h1>redirecting in 5 seconds</h1>
    </div>
  );
};

export default Error;
