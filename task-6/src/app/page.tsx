import Image from "next/image";
import Card from "./components/card";
import Jobs from "./jobs";
import Link from "next/link";
import Description from "./components/description";

const jobsData = Jobs();

export default function Home() {
  const { job_postings } = jobsData;
  console.log(job_postings);

  return (
    <div>
      <div className="flex justify-between ml-72 mb-10 mt-10 mr-72">
        <div>
          <h1 className="font-poppins text-3xl font-bold text-slate-800">
            Oppurtunities
          </h1>
          <p className="text-slate-400">Showing 73 results</p>
        </div>
        <div className="flex">
          <span className="text-slate-400">Sort by: </span>{" "}
          <p className="text-slate-800">Most relevant</p>
        </div>
      </div>

      <div className="flex justify-center">
        <div>
          {job_postings.map((job, id) => (
            <Link href={`/post/${job.title}`} key={id}>
              <Card
                key={id}
                title={job.title}
                description={job.description}
                company={job.company}
                location={job.about.location}
                image={job.image}
              />
            </Link>
          ))}
          {/* <Description id={id}/> */}
        </div>
      </div>
    </div>
  );
}
