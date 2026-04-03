import { ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Home", path: "/" },
  ];

  // Build breadcrumb trail
  let currentPath = "";
  pathnames.forEach((path, index) => {
    currentPath += `/${path}`;
    
    // Format label
    let label = path.charAt(0).toUpperCase() + path.slice(1);
    
    // Special cases
    if (path === "event") {
      label = "Event";
    } else if (path === "themes") {
      label = "Themes";
    } else if (path === "timeline") {
      label = "Timeline";
    } else if (path === "rounds") {
      label = "Rounds";
    } else if (path === "rules") {
      label = "Rules";
    }

    // Add to breadcrumbs if not the last item or if it's a main page
    if (index < pathnames.length - 1 || pathnames.length === 1) {
      breadcrumbs.push({ label, path: currentPath });
    } else {
      breadcrumbs.push({ label });
    }
  });

  return (
    <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
      {breadcrumbs.map((item, index) => (
        <div key={item.path || index} className="flex items-center gap-2">
          {index > 0 && <ChevronRight size={16} />}
          {item.path ? (
            <Link
              to={item.path}
              className="hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
