type Screen = "480px" | "768px" | "1024px" | "1200px" | "1201px";

interface IScreen {
  mobile: Screen;
  tablet: Screen;
  sm: Screen;
  lg: Screen;
  tv: Screen;
}
const size: IScreen = {
  mobile: "480px",
  tablet: "768px",
  sm: "1024px",
  lg: "1200px",
  tv: "1201px",
};

const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `max-width: ${size.tablet}`,
  sm: `(max-width: ${size.sm})`,
  lg: `(max-width: ${size.lg})`,
  tv: `(min-width: ${size.tv})`,
};
export default {size, device};

/*
   
   320px — 480px: Mobile devices
481px — 768px: iPads, Tablets
769px — 1024px: Small screens, laptops
1025px — 1200px: Desktops, large screens
1201px and more —  Extra large screens, TV
   
   */
