import { describe, expect, it } from "vitest";
import { getPost, posts } from "@/components/blog-posts";

describe("blog", () => {
  it("publishes the social media marketing article", () => {
    const post = getPost("social-media-marketing-guide");
    expect(post?.category).toBe("Social Media Marketing");
    expect(posts.length).toBeGreaterThan(0);
  });
  it("returns nothing for an unknown article", () => {
    expect(getPost("does-not-exist")).toBeUndefined();
  });
});
