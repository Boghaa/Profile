export type NavKey = "home" | "work" | "architecture" | "about";

export const nav: { to: "/" | "/work" | "/architecture" | "/about"; key: NavKey }[] = [
  { to: "/", key: "home" },
  { to: "/work", key: "work" },
  { to: "/architecture", key: "architecture" },
  { to: "/about", key: "about" },
];

export const contact = {
  email: "deshaagazala@gmail.com",
  emailHref: "mailto:deshaagazala@gmail.com",
  phone: "+20 100 511 5908",
  phoneHref: "https://wa.me/201005115908",
  linkedin: "https://www.linkedin.com/in/mostafa-ghazalah-5772b51b1",
  github: "https://github.com/Boghaa",
  location: "Tanta, Egypt",
  locationAr: "طنطا، مصر",
};