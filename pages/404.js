import Link from "next/link";

const NotfoundPage = () => {
  return (
    <div>
      404 NotfoundPage
      <Link href="/">
        <a className="btn btn-danger">Back to HomePage </a>
      </Link>
    </div>
  );
};

export default NotfoundPage;
