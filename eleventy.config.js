export default function (eleventyConfig) {
  // Copy these folders straight into the finished site
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/admin/config.yml");

  // All journal entries, newest first
  eleventyConfig.addCollection("entries", (api) =>
    api.getFilteredByGlob("src/entries/*.md").sort((a, b) => b.date - a.date)
  );

  // Date helpers (UTC so the day never shifts by timezone)
  const fmt = (d, opts) =>
    new Intl.DateTimeFormat("en-US", { timeZone: "UTC", ...opts }).format(d);
  eleventyConfig.addFilter("dayNum", (d) => fmt(d, { day: "numeric" }));
  eleventyConfig.addFilter("monthYear", (d) => fmt(d, { month: "long", year: "numeric" }));
  eleventyConfig.addFilter("weekday", (d) => fmt(d, { weekday: "long" }));
  eleventyConfig.addFilter("fullDate", (d) =>
    fmt(d, { weekday: "long", month: "long", day: "numeric", year: "numeric" })
  );
  eleventyConfig.addFilter("isoDate", (d) => d.toISOString().slice(0, 10));

  // Resized photo URL via Netlify's built-in Image CDN
  eleventyConfig.addFilter("img", (src, w) => `/.netlify/images?url=${src}&w=${w}`);

  return {
    dir: { input: "src", output: "_site", includes: "_includes" },
    markdownTemplateEngine: "njk",
  };
}
