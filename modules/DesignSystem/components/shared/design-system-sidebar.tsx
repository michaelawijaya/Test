"use client";

import * as React from "react";
import { Search, Menu, X } from "lucide-react";
import { designSystemNavigation } from "../../data/design-system-navigation";

export function DesignSystemSidebar() {
  const [search, setSearch] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  const filteredNavigation = React.useMemo(() => {
    if (!search.trim()) {
      return designSystemNavigation;
    }

    return designSystemNavigation
      .map((group) => {
        return {
          ...group,
          items: group.items.filter((item) =>
            item.label.toLowerCase().includes(search.toLowerCase()),
          ),
        };
      })
      .filter((group) => group.items.length > 0);
  }, [search]);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sidebarContent = (
    <div className="flex h-full flex-col">
      <div className="border-primary-30/30 bg-primary-90/95 rounded border p-5">
        <div className="relative">
          <Search className="text-tertiary-40 absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
          <input
            className="border-primary-30/50 bg-primary-80/80 text-primary-10 shadow-primary-90 placeholder:text-primary-20/65 focus-visible:ring-tertiary-40 w-full rounded-xl border py-2.5 pr-4 pl-10 text-sm font-semibold shadow-inner focus-visible:ring-2 focus-visible:outline-none"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search components..."
            type="search"
            value={search}
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <nav className="space-y-6">
          {filteredNavigation.map((group) => (
            <div key={group.group}>
              <h3 className="text-secondary-30 mb-2 px-3 text-xs font-bold tracking-wide uppercase">
                {group.group}
              </h3>
              <ul className="space-y-1">
                {group.items.map((item) => (
                  <li key={item.id}>
                    <button
                      className="text-primary-20 hover:bg-primary-50 hover:shadow-tertiary-50/15 block w-full cursor-pointer rounded-sm px-3 py-2 text-left text-sm font-semibold transition-all hover:text-neutral-100 hover:shadow-sm"
                      onClick={() => handleLinkClick(item.id)}
                      type="button"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {filteredNavigation.length === 0 && (
            <div className="border-primary-30/40 bg-primary-80/70 text-primary-20 rounded-xl border px-3 py-4 text-center text-sm">
              No results found.
            </div>
          )}
        </nav>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Trigger */}
      <button
        className="border-primary-30/50 bg-primary-90 text-primary-10 shadow-primary-90/30 fixed bottom-4 left-4 z-50 rounded-xl border p-2 shadow-lg sm:hidden"
        onClick={toggleSidebar}
        type="button"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <button
          aria-label="Close design system navigation"
          className="bg-primary-90/80 xs:hidden fixed inset-0 z-40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
          type="button"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`border-primary-30/40 bg-primary-90/95 shadow-primary-90/40 fixed inset-y-0 left-0 z-50 w-72 transform border-r shadow-2xl backdrop-blur-xl transition-transform duration-200 ease-in-out sm:top-20 sm:bottom-0 sm:z-20 sm:h-[calc(100vh-5rem)] sm:translate-x-0 lg:top-24 lg:h-[calc(100vh-6rem)] ${isOpen ? "translate-x-0" : "-translate-x-full"} `}
      >
        {sidebarContent}
      </aside>
    </>
  );
}
