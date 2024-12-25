import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { Lilita_One } from "next/font/google";
import { TagsIcon } from "@sanity/icons";

const font = Lilita_One({ weight: "400", subsets: ["latin"] });

function Navbar({ tags = false }: { tags?: boolean }) {
  return (
    <div className="mx-auto max-w-6xl p-6 sticky top-0 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className={`${font.className} text-3xl hover:scale-105 transition duration-300 ease-in-out transform hover:animate-spin`}
        >
          Dev
          <span className="bg-gradient-to-tr from-[#770BFF] via-45% via-[#D8C2FF] to-[#B982EE] bg-clip-text text-transparent">
            Blog
          </span>
        </Link>

        <div className="flex items-center space-x-4">
          {tags && (
            <div>
              <Link href="/tag">
                <TagsIcon
                  fontSize={33}
                  className="border border-zinc-300 rounded-full p-1 hover:bg-purple-500 hover:opacity-70  transition ease-in-out"
                />
              </Link>
            </div>
          )}
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
}

export default Navbar;