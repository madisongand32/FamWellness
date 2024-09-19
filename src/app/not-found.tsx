"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
      setTimeout(() => {
        router.push('/');
      }, 3000)
  }, [])

  return (
    <div className="not-found">
      <div>page not found, sorry.</div>
    </div>
  );
}