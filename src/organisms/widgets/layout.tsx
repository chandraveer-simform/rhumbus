"use client";
import "./layout.scss";
import Card from "@/component/card/page";

export default function WidgetLayout({
  children, // will be a page or nested layout
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <Card className={`widget-layout ${className}`}>{children}</Card>;
}
