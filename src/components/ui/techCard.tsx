interface TechnologyCardProps {
  icon: string;
  title: string;
  description: string;
}

export function TechnologyCard({
  icon,
  title,
  description,
}: TechnologyCardProps) {
  return (
    <div className="p-8 shadow-lg rounded-lg hover:-translate-y-2 transition-transform">
      <img src={icon} alt={title} className="h-16 w-16 mb-4" />
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
