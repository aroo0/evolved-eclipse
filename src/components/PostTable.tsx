import React, { useState, useEffect } from "react";
import { formattedDate } from "../js/DateFunction";

interface Post {
  slug: string;
  data: {
    title: string;
    tags: string[];
    pubDate: Date;
  };
}

interface PostTableProps {
  posts: Post[];
}

export default function PostTable({ posts }: PostTableProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    // Extract the tag from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const tagParam = urlParams.get("tag");
    // Set the selected tag state
    tagParam ? setSelectedTags([decodeURIComponent(tagParam)]) : setSelectedTags([]);
  }, []);

  const handleTagAdd = (tag: string) => {
    // Check if the tag is already selected
    const isTagSelected = selectedTags.includes(tag);

    // Update the selected tags based on the click
    if (isTagSelected) {
      return;
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleTagRemove = (tag: string) => {
    // Check if the tag is already selected
    const isTagSelected = selectedTags.includes(tag);

    // Update the selected tags based on the click
    if (isTagSelected) {
      setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
      return;
    } else {
      return;
    }
  };

  // Filter the posts based on selected tags
  const filteredPosts = selectedTags.length > 0
    ? posts.filter((post) => selectedTags.every((tag) => post.data.tags.includes(tag)))
    : posts;

  return (
    <>
      <div className="selected-tags-container tags">
        {selectedTags.map((tag) => (
          <span key={tag} className="selected-tag tag black-filled" onClick={() => handleTagRemove(tag)}>
            {tag} &#128937;
          </span>
        ))}
      </div>
      <div className="post-table">
        <div className="row row-headline">
          <span className="headline row-title">Title</span>
          <span className="headline row-tags">Tags</span>
          <span className="headline row-date">Date</span>
          <hr />
        </div>
        <ul className="table">
          {filteredPosts.map((post) => (
            <li key={post.slug} className="row">
              <span className="row-title cell-title">
                <a href={`/blog/${post.slug}/`}>{post.data.title}</a>
              </span>
              <ul className="row-tags cell-tags">
                {post.data.tags.map((tag) => (
                  <li key={tag} className="tag-in-post-table">
                    <span
                      className="tag-pseudo-link"
                      onClick={() => handleTagAdd(tag)}
                      data-pagefind-filter="tag"
                    >
                      {tag}
                    </span>
                  </li>
                ))}
              </ul>
              <span className="row-date cell-date">
                <time dateTime={post.data.pubDate.toISOString()}>
                  {formattedDate(post.data.pubDate)}
                </time>
              </span>
              <hr className='in-post-line'/>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
