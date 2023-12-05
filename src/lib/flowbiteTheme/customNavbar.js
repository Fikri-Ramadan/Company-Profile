export const customNavbar = {
  root: {
    base: 'w-full bg-white dark:border-gray-700 dark:bg-gray-800',
    rounded: {
      on: 'rounded',
      off: '',
    },
    bordered: {
      on: 'border',
      off: '',
    },
    inner: {
      base: 'mx-auto flex flex-wrap items-center justify-between',
      fluid: {
        on: '',
        off: 'container',
      },
    },
  },
  brand: {
    base: 'flex items-center',
  },
  collapse: {
    base: 'w-full lg:block lg:w-auto',
    list: 'mt-4 flex flex-col lg:mt-0 lg:flex-row lg:space-x-12 lg:text-normal lg:font-medium',
    hidden: {
      on: 'hidden',
      off: '',
    },
  },
  link: {
    base: 'block py-2 pr-4 pl-3 lg:p-0',
    active: {
      on: 'bg-cyan-700 text-white dark:text-white lg:bg-transparent lg:text-cyan-700',
      off: 'border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:hover:bg-transparent lg:hover:text-cyan-700 lg:dark:hover:bg-transparent lg:dark:hover:text-white',
    },
    disabled: {
      on: 'text-gray-400 hover:cursor-not-allowed dark:text-gray-600',
      off: '',
    },
  },
  toggle: {
    base: 'inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden',
    icon: 'h-6 w-6 shrink-0',
  },
};
