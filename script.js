(function () {
  document.querySelector(".top-nav").addEventListener("click", function (e) {
    e.preventDefault();
    const el = e.target.closest(".top-nav a");
    console.log(el);
    if (el)
      document
        .querySelector(`.${el.dataset.name}-section`)
        .scrollIntoView({ behavior: "smooth" });
  });
})();

const nav = document.querySelector(".top-nav");

const navHeight = nav.getBoundingClientRect().height;

const stickyNavOptions = {
  root: null,
  threshold: [0],
  rootMargin: "-1px",
};

const stickyCallback = function (entries) {
  const [entry] = entries; // get the first observer entry
  console.log(entry.intersectionRatio, entry.isIntersecting);

  if (!entry.isIntersecting) nav.classList.add("sticky");
  // stick nav
  else nav.classList.remove("sticky"); // stick nav
};

const headerObserver = new IntersectionObserver(
  stickyCallback,
  stickyNavOptions
);
const header = document.querySelector(".header");
headerObserver.observe(header);
