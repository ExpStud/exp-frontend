import { MenuItem } from "@constants";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

interface NavigationItemProps {
  item: MenuItem;
}
const NavigationItem: FC<NavigationItemProps> = (
  props: NavigationItemProps
) => {
  const { item } = props;

  const router = useRouter();
  const active = router.asPath === item.href;

  if (item.hide) {
    return null; // If hide is true, do not render the item
  }

  return (
    <Link
      href={item.href}
      className={`text-base font-barlow font-medium ${
        active ? "text-sand-300" : "text-gray-300 transition-200 opacity-70"
      }`}
    >
      {item.label}
    </Link>
  );
};

export default NavigationItem;
