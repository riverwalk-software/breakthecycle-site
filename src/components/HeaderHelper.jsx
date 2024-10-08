"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import site from "../data/site.json";
import { getCollection } from "astro:content";

let navigation = [];

const services = await getCollection("services");
const events = await getCollection("events");

if (services && services.length > 0) {
  navigation.push({ name: "Services", href: "/services" });
}

if (events && events.length > 0) {
  navigation.push({ name: "Events", href: "/events" });
}

navigation.push({ name: "About", href: "/about" });
navigation.push({ name: "Contact Us", href: "/contact" });

export default function Example(props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="shadow-slate-300 bg-white lg:bg-opacity-5 lg:bg-black overflow-hidden">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl text-lg items-center justify-between p-6 lg:px-8 overflow-hidden"
      >
        <a href="/" className="-m-1.5 p-1.5 overflow-hidden">
          <span className="sr-only">{site.name}</span>
          {props.logo}
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xl font-semibold leading-6 text-content"
            >
              {item.name}
            </a>
          ))}
          {props.themeToggle}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">{site.name}</span>
              {props.logo}
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-content hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
