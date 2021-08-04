const navbarContent = [
  {
    path: "/home",
    title: "Home",
    dropdown: [],
  },
  {
    path: "/about",
    title: "About",
    dropdown: [],
  },
  {
    path: "/login",
    title: "Login",
    dropdown: [
      {
        path: "/login/setting",
        title: "Setting",
      },
      {
        path: "/home",
        title: "Home",
      },
      {
        path: "/logout",
        title: "Logout",
      },
    ],
  },
];

export { navbarContent };
