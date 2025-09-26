interface HeaderProps {
  title: string;
  description?: string;
}

export const Header = ({ title, description }: HeaderProps) => {
  return (
    <div className="content-center">
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  );
};
