import smmCover from "@/assets/blog/social-media-marketing-cover.webp.asset.json";

export type Block =
  | { type: "h2"; id: string; text: string }
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "steps"; items: { t: string; d: string }[] }
  | { type: "quote"; text: string }
  | { type: "stats"; items: { v: string; l: string }[] }
  | { type: "tip"; text: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  cover: string;
  coverAlt: string;
  tags: string[];
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "social-media-marketing-guide",
    title: "Social Media Marketing in 2026: The Complete Guide to Growing Your Brand",
    excerpt:
      "Social media is no longer optional — it is where customers discover, compare and buy. Here is the exact framework we use to turn followers into paying customers.",
    category: "Social Media Marketing",
    date: "Nov 23, 2026",
    readTime: "8 min read",
    author: "Tech Marketics Team",
    cover: smmCover.url,
    coverAlt: "Glowing smartphone surrounded by lime likes, comments, shares and a rising growth chart",
    tags: ["SMM", "Instagram", "Content Strategy", "Paid Social", "Growth"],
    body: [
      { type: "p", text: "Every day, more than five billion people open a social app. They scroll, watch, comment, save — and increasingly, they buy. For a modern brand, social media is not just a place to post updates. It is your storefront, your customer service desk, your word-of-mouth engine and your most powerful advertising channel, all in one." },
      { type: "p", text: "Yet most businesses still treat it as an afterthought: a random post here, a boosted reel there, no plan and no numbers. In this guide we break down what social media marketing (SMM) really is, why it matters more than ever, and the step-by-step framework we use at Tech Marketics to grow brands across Instagram, Facebook, LinkedIn, YouTube and TikTok." },
      { type: "stats", items: [{ v: "5B+", l: "people use social media" }, { v: "2h 20m", l: "average daily time spent" }, { v: "76%", l: "bought after seeing a post" }] },

      { type: "h2", id: "what-is-smm", text: "What is social media marketing?" },
      { type: "p", text: "Social media marketing is the practice of using social platforms to build awareness, grow an audience, create relationships and drive sales. It combines two sides: organic marketing — the content you publish and the community you build for free — and paid social, where you pay platforms to put your message in front of precisely targeted people." },
      { type: "p", text: "The best results always come from combining both. Organic content builds trust and gives your brand a personality. Paid campaigns take what works and scale it to thousands, or millions, of the right people." },

      { type: "h2", id: "why-it-matters", text: "Why your brand cannot ignore it" },
      { type: "list", items: [
        "Discovery happens on social first — younger buyers now search TikTok and Instagram before Google.",
        "It builds trust at scale — reviews, comments and creator content act as public proof.",
        "Targeting is incredibly precise — reach people by location, interests, job title or behaviour.",
        "It is measurable — every view, click, lead and sale can be tracked back to a post or ad.",
        "It works for any budget — a local café and a global SaaS brand can both win.",
      ] },

      { type: "h2", id: "choose-platforms", text: "Choose the right platforms" },
      { type: "p", text: "You do not need to be everywhere. You need to be where your customers already spend their time — and do it well. Here is a quick way to think about each platform:" },
      { type: "steps", items: [
        { t: "Instagram", d: "Visual brands, lifestyle, fashion, food, beauty and local businesses. Reels drive reach; Stories drive loyalty." },
        { t: "Facebook", d: "Broad audiences, communities and the most powerful ad platform for lead generation and e-commerce." },
        { t: "LinkedIn", d: "B2B, services, recruitment and thought leadership. Founders and teams posting personally outperform company pages." },
        { t: "YouTube", d: "Long-form education, tutorials and product reviews — the second largest search engine in the world." },
        { t: "TikTok", d: "Fast, authentic, trend-led short video. Huge organic reach for brands willing to show personality." },
      ] },

      { type: "h2", id: "content-strategy", text: "Build a content strategy that converts" },
      { type: "p", text: "Great social content is not about posting more — it is about posting with purpose. We plan every month around content pillars: three to five recurring themes that reflect what your audience cares about and what your brand stands for." },
      { type: "list", items: [
        "Educate — tips, how-tos and myth-busting that make your audience smarter.",
        "Entertain — trends, behind-the-scenes and relatable moments that earn shares.",
        "Inspire — customer stories, transformations and big-picture vision.",
        "Prove — testimonials, case studies, results and reviews.",
        "Sell — offers, launches and clear calls to action (no more than 20% of posts).",
      ] },
      { type: "tip", text: "Hook viewers in the first 1.5 seconds. Lead with the result, a bold claim or a question — not your logo." },
      { type: "p", text: "Short-form video is the single biggest growth lever right now. Reels, Shorts and TikToks consistently reach two to three times more people than static images. Pair them with carousels for saves, and Stories for daily connection with your loyal followers." },

      { type: "h2", id: "community", text: "Grow a real community" },
      { type: "p", text: "Algorithms reward conversation. Reply to every comment in the first hour, answer DMs quickly, ask questions in your captions and feature your customers' content. A smaller, engaged community will always outsell a large, silent one." },
      { type: "quote", text: "People do not buy from brands. They buy from brands they feel they know." },

      { type: "h2", id: "paid-social", text: "Scale with paid social ads" },
      { type: "p", text: "Once you know which posts your audience loves, paid ads let you multiply the results. Our approach is simple: test many creatives on small budgets, find the winners using real data, then scale the budget behind them." },
      { type: "steps", items: [
        { t: "Awareness", d: "Video views and reach campaigns to introduce your brand to new, relevant people." },
        { t: "Consideration", d: "Retarget people who watched, engaged or visited your site with proof and value." },
        { t: "Conversion", d: "Lead forms, offers and dynamic product ads aimed at people ready to buy." },
      ] },
      { type: "tip", text: "Install the Meta Pixel and Conversions API before you spend a single rupee or dollar. Without tracking, you are guessing." },

      { type: "h2", id: "measure", text: "Measure what actually matters" },
      { type: "p", text: "Likes feel good, but they do not pay the bills. Track the numbers that connect social activity to business growth:" },
      { type: "list", items: [
        "Reach and impressions — how many new people see you.",
        "Engagement rate — likes, comments, shares and saves divided by reach.",
        "Click-through rate — how many people take the next step.",
        "Cost per lead and cost per acquisition — what each customer costs you.",
        "Return on ad spend (ROAS) — revenue generated for every unit spent.",
      ] },

      { type: "h2", id: "mistakes", text: "Common mistakes to avoid" },
      { type: "list", items: [
        "Posting without a plan, then disappearing for weeks.",
        "Copy-pasting the same content to every platform without adapting it.",
        "Selling in every single post.",
        "Ignoring comments and messages.",
        "Boosting posts instead of running structured ad campaigns.",
        "Never looking at analytics.",
      ] },

      { type: "h2", id: "conclusion", text: "Ready to grow on social?" },
      { type: "p", text: "Social media marketing rewards brands that show up consistently, create genuinely useful content, listen to their community and let data guide every decision. Do that, and social becomes your most reliable source of new customers." },
      { type: "p", text: "At Tech Marketics, we plan, create, publish and advertise for you — with clear monthly reports so you always know what is working. Book a free strategy call and we will audit your social presence and show you exactly where your next customers are hiding." },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
