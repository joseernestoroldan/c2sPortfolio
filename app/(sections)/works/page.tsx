import { getData } from "@/client";
import Container from "@/components/container/Container";
import { workDataType } from "@/types";
import WorkCard from "@/components/works/workCard";
import WorkCardBeta from "@/components/works/WorkCardBeta";

const WorksPage = async () => {
  const works = await getData("works");
  return (
    <div className="w-full pt-32 h-auto">
      <Container>
        <div className="w-full flex flex-row flex-wrap space-y-12">
          {works.map(
            ({
              _id,
              title,
              description,
              language,
              externalLink,
              netlify,
              vercel,
              image,
              git,
            }: workDataType) => {
              return (
                <WorkCardBeta
                  key={_id}
                  title={title}
                  description={description}
                  language={language}
                  externalLink={externalLink}
                  netlify={netlify}
                  vercel={vercel}
                  image={image}
                  git={git}
                />
              );
            }
          )}
        </div>
      </Container>
    </div>
  );
};

export default WorksPage;
