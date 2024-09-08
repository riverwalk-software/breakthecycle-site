/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Field, Label, Switch } from "@headlessui/react";

export default function Example(props) {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="isolate mx-auto bg-secondary px-6 py-8 mb-8 max-w-3xl rounded-3xl sm:py-12 shadow-2xl">
      <div className="mx-auto max-w-xl text-center">
        {props && props.topText && (
          <p className="mt-2 text-lg leading-8 text-content">{props.topText}</p>
        )}
        {/* <p className="mt-2 text-lg leading-8 text-content">
          For inquiries, prayer requests, or to speak with our ministry team,
          please fill out our contact form or use the details below to reach us
          directly.
        </p> */}
      </div>
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="mx-auto max-w-xl"
      >
        <input
          type="hidden"
          name="access_key"
          value="e8989fbd-33e2-429e-acde-67d1ebb5ec86"
        />
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold leading-6 text-content"
            >
              Name
            </label>
            <div className="mt-2.5">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-content shadow-sm ring-1 ring-inset ring-content-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-content"
            >
              Email or Phone
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-content shadow-sm ring-1 ring-inset ring-content-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {props.contactOptions && props.contactOptions.length !== 0 && (
            <div className="sm:col-span-2">
              <label
                htmlFor="contactReason"
                className="block text-sm font-semibold leading-6 text-content"
              >
                Reason for contact (optional):
              </label>
              {props.contactOptions && props.contactOptions.length === 1 && (
                <select
                  name="contactReason"
                  id="contactReason"
                  defaultValue={props.contactOptions[0]}
                  disabled
                >
                  <option value={props.contactOptions[0]}>
                    {props.contactOptions[0]}
                  </option>
                </select>
              )}
              {props.contactOptions && props.contactOptions.length > 1 && (
                <select
                  name="contactReason"
                  id="contactReason"
                  defaultValue={""}
                >
                  {props.contactOptions.map((e) => (
                    <option value={e}>{e}</option>
                  ))}
                </select>
              )}
            </div>
          )}

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-content"
            >
              Message (optional)
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-content shadow-sm ring-1 ring-inset ring-content-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
          <Field className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-content-2 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-accent-1"
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className="h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-content-2 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                />
              </Switch>
            </div>
            <Label className="text-sm leading-6 text-content">
              By selecting this, you agree to our{" "}
              <a href="/legal/privacy" className="font-semibold text-accent-1">
                privacy&nbsp;policy
              </a>
              .
            </Label>
          </Field>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full text-white rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm hover:bg-accent-1 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  );
}
