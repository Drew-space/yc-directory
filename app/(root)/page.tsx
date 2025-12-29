import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { Star } from "lucide-react";
import { title } from "process";
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 550,
      author: { _id: 1 },
      _id: 1,
      describion: "This is a sample description for the startup post.",
      image:
        "https://images.unsplash.com/photo-1717347424091-08275b73c918?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Robots",
      title: "We Robotics",
    },
  ];

  return (
    <>
      <section className=" pink_container">
        <h1 className="heading">
          Pitch Your Starup, <br /> Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Share your startup idea and connect with like-minded entrepreneurs.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className=" text-30-semibold">
          {query ? `Search Results for "${query}"` : "Discover Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No Starups found </p>
          )}
        </ul>
      </section>
    </>
  );
}
