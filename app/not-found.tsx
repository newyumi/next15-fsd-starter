import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="items-center justify-items-center p-20">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
