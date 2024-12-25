import CmsNavbar from "../components/CmsNavbar";
import { Provider } from "../utils/Provider";
import "./globals.css";

export const metadata = {
  title: "DevBlog",
  description: "A blog for developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <CmsNavbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
