import { LogoWall, LogoWallItem } from "../components/logo-wall";
export default function Mount() {
  return (
    <div className="cybr-stage cybr-stage-fill">
      <LogoWall className="w-full" label="TRUSTED BY">
        <LogoWallItem href="#">[LOGO 01]</LogoWallItem>
        <LogoWallItem href="#">[LOGO 02]</LogoWallItem>
        <LogoWallItem href="#">[LOGO 03]</LogoWallItem>
        <LogoWallItem href="#">[LOGO 04]</LogoWallItem>
        <LogoWallItem href="#">[LOGO 05]</LogoWallItem>
        <LogoWallItem href="#">[LOGO 06]</LogoWallItem>
      </LogoWall>
    </div>
  );
}
