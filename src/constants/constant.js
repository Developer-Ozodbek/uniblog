export const navItems = [
	{
		route: '/',
		label: 'Home',
	},
	{
		route: '/category',
		label: 'Category',
	},
	{
		route: '/blog',
		label: 'Blogs',
	},
	{
		route: '/author',
		label: 'Authors',
	},
];
export const formatter = new Intl.DateTimeFormat("en-US", {dateStyle: "long",});

const formatterAgo = new Intl.RelativeTimeFormat(undefined, {numeric: "auto",});

const DIVISIONS = [
  { amount: 60, name: "seconds" },
  { amount: 60, name: "minutes" },
  { amount: 24, name: "hours" },
  { amount: 7, name: "days" },
  { amount: 4.34524, name: "weeks" },
  { amount: 12, name: "months" },
  { amount: Number.POSITIVE_INFINITY, name: "years" },
];

export function formatTimeAgo(date) {
  let duration = (date - new Date()) / 1000;

  for (let i = 0; i < DIVISIONS.length; i++) {
    const division = DIVISIONS[i];
    if (Math.abs(duration) < division.amount) {
      return formatterAgo.format(Math.round(duration), division.name);
    }
    duration /= division.amount;
  }
}

export function readingTime(text) {
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time
}


export const defaultSEO = {
  title: 'UniBlog',
  author: 'Tohirov Ozodbek',
  keywords: 'IT, Uniblog, Blogs, auhtors, seo, Tohirov Ozodbek',
  description: "Blogging has long been a popular way for people to express their passions, experiences and ideas with readers worldwide. A blog can be its own website, or an add-on to an existing site. Whichever option you choose, it serves as a space to share your story or market your expertise in your own words, with your own visual language to match. To help create a blog of your own, we’ve compiled this selection of ten blog examples. They’re packed with all the design wisdom you need to transform your blog into one of the best in the business."
}