'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";



const NotFound = () => {
  const router = useRouter()
  useEffect(() => {
    const timer = setTimeout(() => router.push('/'), 3000)
    return () => clearTimeout(timer)
  }, [router])
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you&#39;re looking for doesn&#39;t exist. Wait 3 sec please</p>
    </div>
  );
};

export default NotFound;

