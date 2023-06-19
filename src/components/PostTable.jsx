import { formattedDate } from "../js/DateFunction";


export default function PostTable({ posts }) {

    
    return (
      <>
        {/* <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <time dateTime={post.data.pubDate.toISOString()}>
                {formattedDate(post.data.pubDate)}
                </time>
              <a href={`/blog/${post.slug}/`}>{post.data.title}</a>
            </li>
          ))}
        </ul> */}

<div class='post-table table__main'>

<div class="row row-">
    <span class='table__headline row__title cell'>Title</span>
    <span class='table__headline row__publisher cell'>Tags</span>
    <span class='table__headline row__date cell'>Date</span>
</div>


</div>
      </>
    );
  }