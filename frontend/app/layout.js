import "./globals.css";
import MainHeader from "./components/main-header";

export const metadata = {
  title: "Foodies App - Khám Phá Ẩm Thực",
  description: "Khám phá thế giới ẩm thực đầy màu sắc với những công thức dễ thương và nhà hàng tuyệt vời!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
