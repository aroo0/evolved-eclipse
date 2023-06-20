import { formattedDate } from "../js/DateFunction";


export default function PostTable({ posts }) {

    
    return (
      <>

<div class='post-table'>

<div class="row row-headline">
    <span class='headline row-title '>Title</span>
    <span class='headline row-tags '>Tags</span>
    <span class='headline row-date '>Date</span>
    <hr />
</div>
        <ul class='table'>
          {posts.map((post) => (
            <li key={post.slug} class='row'>
                <span class='row-title cell-title'>
                  <a href={`/blog/${post.slug}/`}>{post.data.title}</a>
                </span>
                <ul class='row-tags cell-tags'>{post.data.tags.map(tag => (
                    <li class='tag-pseudo-link'>{tag}</li>
                ))}</ul>

                <span class='row-date cell-date'>
                  <time dateTime={post.data.pubDate.toISOString()}>
                  {formattedDate(post.data.pubDate)}
                  </time>
                </span>
            </li>
          ))}
        </ul>
        
</div>
      </>
    );
  }