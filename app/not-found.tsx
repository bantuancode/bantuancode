import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center h-fit-screen py-10">
      <Image
        src="/images/errors/404.png"
        alt="Not Found"
        width={500}
        height={500}
      />
      <p className="text-muted">Could not find requested resource</p>
      <Link
        href="/"
        className="bg-accent hover:bg-accent-hover text-sm font-medium px-4 py-2 rounded-md mt-4"
      >
        Return Home
      </Link>
    </div>
  );
}
