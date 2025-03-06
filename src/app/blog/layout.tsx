'use client';

import BlogLayout from '@/components/layout/BlogLayout';

export default function BlogPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <BlogLayout>{children}</BlogLayout>;
} 