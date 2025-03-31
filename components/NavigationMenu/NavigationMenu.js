import { gql } from '@apollo/client';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavigationMenu({ menuItems, className, children }) {
  const router = useRouter();
  const currentPath = router.asPath.split('?')[0]; // strip query params

  if (!menuItems) return null;

  return (
    <nav
      className={className}
      role="navigation"
      aria-label={`${menuItems[0]?.menu.node.name ?? 'Main'} menu`}
    >
      <ul className="menu">
        {menuItems.map((item) => {
          const { id, path, label } = item;

          // Ensure paths are compared without trailing slash
          const normalize = (p) =>
            p === '/' ? '/' : p?.replace(/\/+$/, '') ?? '';

          const isActive =
            normalize(currentPath) === normalize(path);

          return (
            <li
              key={id ?? ''}
              className={isActive ? 'current-menu-item' : undefined}
            >
              <Link href={path ?? ''}>{label ?? ''}</Link>
            </li>
          );
        })}
        {children}
      </ul>
    </nav>
  );
}

NavigationMenu.fragments = {
  entry: gql`
    fragment NavigationMenuItemFragment on MenuItem {
      id
      path
      label
      parentId
      cssClasses
      menu {
        node {
          name
        }
      }
    }
  `,
};
