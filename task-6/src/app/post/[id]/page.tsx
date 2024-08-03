import React from "react";
import Jobs from "../../jobs";
import Description from "@/app/components/description";

const jobsData = Jobs();

const page = ({ params: { id } }: { params: { id: string } }) => {
  const title = id.replace(/%20/g, " ");

  const data = jobsData.job_postings.find((job) => job.title === title);

  return <div>{data && <Description data={data} />}</div>;
};

export default page;
