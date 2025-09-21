interface Gif {
  id: string;
  title: string;
  url: string;
  width: number;
  height: number;
}

interface GifGridProps {
  gifs: Gif[];
}

export const GifGrid = ({ gifs }: GifGridProps) => {
  return (
    <div className="gifs-container">
      {gifs.map((gif) => (
        <div key={gif.id} className="gif-card">
          <h3>{gif.title}</h3>
          <img src={gif.url} alt={gif.title} />
        </div>
      ))}
    </div>
  );
};