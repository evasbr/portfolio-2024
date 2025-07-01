import { notFound } from "next/navigation";
import { projectsData } from "@/app/assets/projects"; // Sesuaikan path kamu
import { techData } from "@/app/assets/projects";
import { FaRegFileCode } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import Footer from "@/app/components/FooterSection";

type ProjectParams = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectParams) {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.synopsis,
  };
}

export default function ProjectDetailPage({ params }: ProjectParams) {
  const { slug } = params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <>
      <div className="flex flex-col lg:mt-24 lg:gap-5 p-5 max-w-4xl mx-auto min-h-screen">
        <div>
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <p className="text-lg font-semibold mb-5">{project.year}</p>

          <div className="flex-1 flex flex-col lg:flex-row gap-16 items-start">
            <div className="flex-1">
              <p>{project.description}</p>

              {/* TECHNOLOGIES */}
              <div>
                <h2 className="text-xl font-semibold mt-4 mb-2">
                  Technologies
                </h2>
                <div className="flex gap-2 flex-wrap">
                  {project.technologies.map((id, index) => {
                    const tech = techData.find((t) => t.id === id);
                    if (!tech) return null;
                    const Icon = tech.icon;
                    return (
                      <span
                        key={index}
                        className="flex items-center gap-1 px-2 py-1 bg-gray-100 text-blue-500 rounded-md text-sm"
                      >
                        <Icon size={14} /> {tech.name}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* BUTTON */}
              <div className="flex gap-3 mt-6">
                {project.urlToCode && (
                  <a
                    href={project.urlToCode}
                    target="_blank"
                    className="px-4 py-2 bg-white border border-blue-500 text-blue-500 rounded hover:bg-blue-50 transition"
                  >
                    Code <FaRegFileCode className="inline ml-1" />
                  </a>
                )}
                {project.urlToProject && (
                  <a
                    href={project.urlToProject}
                    target="_blank"
                    className="px-4 py-2 border border-white bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                  >
                    Project <FiExternalLink className="inline ml-1" />
                  </a>
                )}
              </div>
            </div>

            {/* FEATURES */}
            <div className="flex-1">
              {project.features.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold mt-4 lg:mt-0 mb-2">
                    Features
                  </h2>
                  <ul className="list-disc list-inside">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div>
            <h2 className="text-xl font-semibold mt-4 mb-2">Images</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5">
              {project.images.map((img, index) => {
                return <img key={index} src={img} alt={`image-${index}`} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
