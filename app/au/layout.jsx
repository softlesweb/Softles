import AuTrackers from "./components/AuTrackers";
import "./au.css";

// Same type as the main site: Space Grotesk and Inter, loaded once in the root layout.
export default function AuLayout({ children }) {
  return (
    <div className="au-root">
      {children}
      <AuTrackers />
    </div>
  );
}
