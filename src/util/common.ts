export const combineClassNames = (
  ...classes: (string | undefined | null | false)[]
): string => {
  return classes.filter(Boolean).join(" ");
};

export const formatShortDate = (dateString?: string) => {
  if (!dateString) {
    return "";
  }
  const date = new Date(dateString);
  const yy = String(date.getFullYear());
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");

  return `${yy}.${mm}.${dd}`;
};

export const scrollHandler = () => {
  const html = document.documentElement;
  const body = document.body;

  const disableScroll = () => {
    html.classList.add("no-scroll");
    body.classList.add("no-scroll");
  };
  const enableScroll = () => {
    html.classList.remove("no-scroll");
    body.classList.remove("no-scroll");
  };
  return { disableScroll, enableScroll };
};
